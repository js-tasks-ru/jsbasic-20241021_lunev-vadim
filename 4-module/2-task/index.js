function makeDiagonalRed(table) {
  let tableElement = table.firstElementChild;
  for (let i = 0; i < tableElement.children.length; i++) {
    let row = tableElement.children[i];
    row.children[i].style.backgroundColor = "red";
  }
}

