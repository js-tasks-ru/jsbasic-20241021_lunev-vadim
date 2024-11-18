function highlight(table) {
  let tbody = table.querySelector("tbody");
  let tr = tbody.querySelectorAll("tr");
  for (let i = 0; i < tr.length; i++) {
    if (tr[i].children[3].getAttribute("data-available") === "true") {
      tr[i].classList.add("available");
    } else if (tr[i].children[3].getAttribute("data-available") === "false") {
      tr[i].classList.add("unavailable");
    } else if (tr[i].children[3].hasAttribute("data-available") === false) {
      tr[i].setAttribute("hidden", true);
    }

    if (tr[i].children[2].textContent === "m") {
      tr[i].classList.add("male");
    } else if (tr[i].children[2].textContent === "f") {
      tr[i].classList.add("female");
    }

    if (tr[i].children[1].textContent < 18) {
      tr[i].style = "text-decoration: line-through";
    }
  }
}


