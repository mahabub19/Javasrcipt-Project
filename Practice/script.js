function on() {
    let t = document.getElementById('1');
    t.innerHTML = "You are clciking the buton";
}
function hov() {
    let t = document.getElementById('1');
    t.innerHTML = "You are hovering the buton";
}
function out() {
    let t = document.getElementById('1');
    t.innerHTML = "You released the buton";
}
function off() {
    let t = document.getElementById('1');
    t.innerHTML = "";
}

let btn = document.getElementById('bt');

// btn.onclick = function () {
//     document.getElementById('1').innerHTML = "Button is clicked";
// }

btn.addEventListener('click', on);
btn.addEventListener('mouseover', hov);
btn.addEventListener('mouseout', out);

// let element = document.getElementsByTagName('button');
// console.log(element);

function validate() {
    let x1 = document.forms["frm"]["first"].value;
    let x2 = document.forms["frm"]["second"].value;
    // let x = document.forms["frm"].childNode[1].childNode;
    if (x1 == "" || x2 == "") {
        alert("Must fill the box");
        return false;
    }
    else {
        return true;
    }
}

// function changeFont() {
//     let x1 = document.forms["frm"]["first"].value;
//     // let x2 = document.forms["frm"]["second"].value;
//     x1 = x1.toUpperCase();
//     // x2 = x2.toUpperCase();
// }

document.getElementById('submit').addEventListener('click', function () {
    let ob_collections = document.forms["frm"];
    let text = ob_collections["first"].value + " " + ob_collections["second"].value;

    document.getElementById('full_name').innerHTML = text;
});

document.getElementById('move').addEventListener('click', function () {
    let box = document.getElementById("inner");
    let pos = 0;
    let id = setInterval(animate, 1);
    
    function animate() {
        pos++;
        if (pos == 1670) {
            clearInterval(id);
        }
        else box.style.left = pos + "px";
    }
})

// let element = document.getElementById("id1");

// element.addEventListener('click', function () {
//     element.style.color = "red";
//     element.style.fontSize = "50px"
// })

function changeText(element) {
    element.style.color = "red";
    element.style.fontSize = "50px"
}


let p_tag = document.createElement("p");
let node = document.createTextNode("This is added by javasrcipt");

p_tag.appendChild(node);

document.getElementById("new").appendChild(p_tag);





let grid = document.getElementById("grid");

let htmlCollections = grid.querySelectorAll("button");
console.log(htmlCollections[0].innerHTML);

let m = [];

function print() {
    let text = "";
    for (let i = 0; i < m.length; i++){
        text += i + 1 + ". " + m[i] + '\n'; 
    }
    // console.log(text);
    document.getElementById("print").innerHTML = text;
}

for (let i = 0; i < htmlCollections.length; i++){
    htmlCollections[i].addEventListener('click', function () {
        m.push(htmlCollections[i].innerHTML);
        htmlCollections[i].style.background = "yellow";
        console.log(m.length);
        print();
    })
}


