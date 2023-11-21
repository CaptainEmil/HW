const n = 5;
const m = 3;

const table = document.createElement("table");
const tbody = document.createElement("tbody");
let tr;
let td;

for (let i = 0; i < n; i++) {
    tr = document.createElement("tr");
    for (let i = 0; i < m; i++) {
        td = document.createElement("td");
        tr.appendChild(td)
    }
    tbody.appendChild(tr);
}

table.appendChild(tbody);
document.body.appendChild(table);