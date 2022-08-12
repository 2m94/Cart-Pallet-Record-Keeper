let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let countEl2 = document.getElementById("count-el2");
let countEl3 = document.getElementById("count-el3");
let countEl4 = document.getElementById("count-el4");
let countEl5 = document.getElementById("count-el5");
let countEl6 = document.getElementById("count-el6");
let countEl7 = document.getElementById("count-el7");
let countEl8 = document.getElementById("count-el8");
let countEl9 = document.getElementById("count-el9");
let countEl10 = document.getElementById("count-el10");




console.log("count-el");
console.log("save-el");



let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let count10 = 0;




function increment(){
count = count + 1
countEl.innerText = count
}

//HS Yellow Cart Button
function increment2(){
count2 = count2 + 1
countEl2.innerText = count2
}

function increment3(){
count3 = count3 + 1
countEl3.innerText = count3
}

function increment4(){
count4 = count4 + 1
countEl4.innerText = count4
}

function increment5(){
count5 = count5 + 1
countEl5.innerText = count5
}

function increment6(){
count6 = count6 + 1
countEl6.innerText = count6
}

function increment7(){
count7 = count7 + 1
countEl7.innerText = count7
}

function increment8(){
count8 = count8 + 1;
countEl8.innerText = count8;
}

function increment9(){
    count9 = count9 + 1;
    countEl9.innerText = count9;
}
function increment10(){
    count10 = count10 + 1;
    countEl10.innerText = count10;
}


function save(){
    let countStr = count + " - ";
    
    saveEl.innerText += countStr;
    
}
