const main = document.createElement("main");
main.lang = "en";

const body = document.createElement("body");
const header = document.createElement("h1");
header.appendChild(document.createTextNode("Header"));
const paragraph = document.createElement("p");
paragraph.appendChild(document.createTextNode("Paragraph"));
main.appendChild(header);
main.appendChild(paragraph);

document.body.appendChild(main);


