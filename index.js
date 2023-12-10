"use strict";

console.clear();

const tbody=document.querySelector('tbody');
const addRow=document.querySelector('#add-row');
const addCol=document.querySelector('#add-col');
const delRow=document.querySelector('#del-row');
const delCol=document.querySelector('#del-col');
let rowCnt=0;
let colCnt=0;

addRow.addEventListener('click',()=>{
    const newRow= document.createElement('tr');
    for(let i=0;i<colCnt;++i){
        const cell=document.createElement('td');
        cell.textContent='new cell';
        newRow.append(cell);
    }
    ++rowCnt;
    tbody.append(newRow);
});

addCol.addEventListener('click',()=>{
    for(let i=1;i<=rowCnt;++i){
        const row= document.querySelector(`tr:nth-of-type(${i})`);
        const cell=document.createElement('td');
        cell.textContent='new cell';
        row.append(cell);
    }
    ++colCnt;
});

delRow.addEventListener('click',()=>{
    const row= document.querySelector(`tr:last-of-type`);
    --rowCnt;
    row.remove();
});

delCol.addEventListener('click',()=>{
    for(let i=1;i<=rowCnt;++i){
        const cell=document.querySelector(`tr:nth-of-type(${i}) td:last-of-type`);
        cell.remove();
    }
    --colCnt;
});