import { csv } from 'csvtojson';

const cronoFile = `https://docs.google.com/spreadsheets/d/1w5Q2N01Szz0vNKXoG2V4ORiXfsAvre6Vk_pckevYZLk/export?format=csv`

const res = await fetch(cronoFile);
const text = await res.text();
const tsvParser = csv({delimiter: ",", flatKeys: true})
const cronoArray = await tsvParser.fromString(text);

const items = Array();

cronoArray.forEach(cronoItem => {
  items.push({
    title: cronoItem['Año (C. V.)'] || " ",
    cardTitle: cronoItem.Evento || " ",
    cardSubtitle: cronoItem.Fuente + " (pág. " + cronoItem.Página + ")",
    cardDetailedText: cronoItem.Texto
  })
});


export default items;
