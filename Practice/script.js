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
    if (x1 == "" || x2 == "") {
        alert("Must fill the box");
        return false;
    }
    else {
        return true;
    }
}

document.getElementById('submit').addEventListener('click', function () {
    let ob_collections = document.forms["frm"];
    console.log(ob_collections);
    let text = ob_collections["first"].value + " " + ob_collections["second"].value;

    document.getElementById('full_name').innerHTML = text;
});

document.getElementById('move').addEventListener('click', function () {
    console.log("clicked");
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



