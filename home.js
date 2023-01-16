


document.getElementById("button").addEventListener("click", colorPicker);

function colorPicker(){
    if(document.getElementById("grey").checked){
        console.log(`grey`);
        pickedColor = `grey`;
    }else if(document.getElementById("blue").checked){
        console.log(`blue`);
        pickedColor = `blue`;
    }else if(document.getElementById("red").checked){
        console.log(`red`);
        pickedColor = `red`;
    }else if(document.getElementById("green").checked){
        console.log(`green`);
        pickedColor = `green`;
    }else if(document.getElementById("yellow").checked){
        console.log(`yellow`);
        pickedColor = `yellow`;
    }else if(document.getElementById("purple").checked){
        console.log(`purple`);
        pickedColor = `purple`;
    }else{
        console.log(`no Color picked, default grey`);
        pickedColor = `grey`;
    };


    //localStorage.setItem("name", value)
    localStorage.setItem("pickedColor", pickedColor)
};
