// function colorChange(){
//     let button = document.getElementById("button");
//     let color = ['red', 'green', 'pink', 'blue', 'grey'];
//     document.body.style.background = color(Math.floor(Math.random() * color.length));
// }

function textChange(){
    document.getElementById('demo').innerHTML = "Hii";
}

function colorChange(){
    document.getElementById('button').style.color = "purple";
}

function backgroundChange(){
    colors = ['red','green','purple','pink','pink'];
    document.getElementById('body').style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
    setTimeout("backgroundChange()",1000);
}