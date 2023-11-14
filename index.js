'use strict';

console.clear();

function getAllPrototypes(obj){
    const proto=Object.getPrototypeOf(obj);
    console.log(proto);
    if(proto!==null)getAllPrototypes(proto);
}

const obj1={
    a: 1
}

const obj2={
    b: 1,
    __proto__:obj1
}

const obj3={
    c: 1,
    __proto__:obj2
}



getAllPrototypes(obj3);