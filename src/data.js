import { csv } from 'csvtojson';

const cronoFile = `crono.tsv`

const res = await fetch(cronoFile);
const text = await res.text();
const tsvParser = csv({delimiter: "\t"})
const cronoArray = await tsvParser.fromString(text);

console.log(cronoArray);

const items = Array();

cronoArray.forEach(cronoItem => {
  items.push({
    title: cronoItem.Año || " ",
    cardTitle: cronoItem.Evento || " ",
    cardSubtitle: cronoItem.Fuente + " (pág. " + cronoItem.Página + ")",
    cardDetailedText: cronoItem.Texto
  })
});

export default items;
