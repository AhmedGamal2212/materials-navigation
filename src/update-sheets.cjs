const fs = require('fs');
require('dotenv').config();

async function getData() {
    const SHEET_ID = process.env.REACT_APP_SHEET_ID;
    const SCRIPT_URL = process.env.REACT_APP_SCRIPT_URL;
    const url = `${SCRIPT_URL}${SHEET_ID}`;
    const response = await fetch(url);
    return await response.json();
}

const main = async () => {
    const data = await getData();
    const cleanData = data['SHEET_DATA'].map(sheet => {
        return {
            "title": sheet['title'].trim(),
            "category": sheet['category'].trim(),
            "gid": sheet['gid']
        };
    });

    fs.writeFile('src/data.json', JSON.stringify(cleanData), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

main();