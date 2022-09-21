const myFunc = () => {
    
    let radius = parseFloat( document.getElementById("radius").value);
    let height = parseFloat( document.getElementById("height").value);
    

    if(radius  && height ){

  
    let volume = Math.PI * radius * radius  * height;
    document.getElementById("output").innerHTML = volume;
    }else{
        document.getElementById("output").innerHTML = "PLz enter values";
    }


}

const colorChange =()=>{
    
    document.getElementById("height").style.backgroundColor = "purple";
    document.getElementById("height").style.color = "white";

}
const colorRemove =()=>{
    document.getElementById("height").style.backgroundColor = "white ";
    document.getElementById("height").style.color = "black";

}
const colorChange2 =()=>{
    
    document.getElementById("radius").style.backgroundColor = "purple";
    document.getElementById("radius").style.color = "white";

}
const colorRemove2 =()=>{
    document.getElementById("radius").style.backgroundColor = "white ";
    document.getElementById("radius").style.color = "black";

}

const colorChange3 =()=>{
    
    document.getElementById("button").style.backgroundColor = "purple";
    document.getElementById("button").style.color = "white";
    document.getElementById("button").style.cursor = "pointer";

}
const colorRemove3 =()=>{
    document.getElementById("button").style.backgroundColor = "white ";
    document.getElementById("button").style.color = "black ";
    document.getElementById("button").style.cursor = "none";

}

