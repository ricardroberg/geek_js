let a  = document.querySelector('.link');

// console.log(a); // <a class="link" href="#">

// console.log(a.innerText);  // Link text

// console.log(a.parentNode);  // <body class="corpo">  PARENTE DE <a>

// console.log(a.parentNode.parentNode);  // <html>  PARENTE DE <body>

// console.log(a.parentNode.parentNode.parentNode); // HTMLDocument  PARENTE DE <html>

// console.log(a.parentNode.parentNode.parentNode.parentNode); // null

// console.log(a.parentNode.parentNode.childNodes);  // NodeList(3) [ head, #text, body.corpo

// console.log(a.parentNode.parentNode.firstChild);  // <head>
// console.log(a.parentNode.parentNode.lastChild); // <body class="corpo">

// console.log(a.firstChild);  // #text "Link text"
// console.log(a.lastChild); // #text "Link text"

// console.log(a.parentNode.parentNode.firstChild.nextSibling); // #text " " // Tá pegando o ENTER (\n) entre head e body

//console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild.nextSibling);  // is null
console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling);  // <head>