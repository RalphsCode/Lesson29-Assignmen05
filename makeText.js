/** Command-line tool to generate Markov text. 

Run in Node with these sample commands:
$node makeText.js file eggs.txt

$node makeText.js url http://www.gutenberg.org/files/11/11-0.txt
**/

const fs = require('fs');
const axios = require('axios');
const { MarkovMachine } = require('./markov');

// Get the argunemts from node
const path = process.argv;

async function cat(file) {
    /* return the contents of a passed in file. */
    try {
        const response = await fs.promises.readFile(file, 'utf8');
        return response; 
    } catch {
        console.log("ERROR trying to access the file.")
        // process.exit(1);
        return null;
    }
}  // END cat()


async function webcat(url) {
    /* return the contents of a passed in http webpage */
    try {
        const response = await axios.get(url);
        return(response.data);
    } catch(err) {
        console.log("There was an error retreiving the data.", err);
        process.exit(1);
        return null;
    }
    
}  // END webcat()

async function main() {
    // Call the relevant function
    let text = "";
    try {
        if (path[2] == 'url' ) { 
        text = await webcat(path[3]);
        } else {   
        text = await cat(path[3]);
        }
    } catch(err) {
        console.log("There was an error retreiving the data.", err);
    }

    if (text) {
        const words = new MarkovMachine(text);
        words.makeText();

        process.exit(0);
    }
}  // END main()

main();