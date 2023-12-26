const fs = require('fs');

async function getData() {
    const SHEET_ID = '1ICHPadzQzzfnhUu7SuyUoQ8-D03WQh5SbAs0DAWxniE';
    const url = `https://script.google.com/macros/s/AKfycbxQa_uBlo2JQ6xfl1VU1a64KYfYfwi0zRjlTJ9FCZDHq87SCECUKR5C9h3PwqFq8Uapkg/exec?id=${SHEET_ID}`;
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