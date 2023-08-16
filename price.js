const input = document.getElementById("input")
const btn = document.getElementById("btn")
const parag = document.getElementById("para")
const paragg = document.getElementById("paraa")
const btnn = document.getElementById("btnn")


function elementId(element){
    const inputs=document.getElementById(element)
    const inputStrig = inputs.value 
    const inputValue=parseFloat(inputStrig)
    inputs.value ='';
    return inputValue;
}

btn.addEventListener("click", function(){
   const inputValue= elementId("input")
   if(isNaN(inputValue)){
    return alert("give only num")
}
    let newValue =(inputValue-((inputValue*30)/100));
    parag.innerText= newValue;
    return parag.innerText
})
btnn.addEventListener("click", function(){
    const inputValue= elementId("input-s")
    const discValue=document.getElementById("disk").value;
    document.getElementById("disk").value='';
    if(isNaN(inputValue)){
        return alert("give only num")
    }
    if(discValue==="Disc 30%"){
     let newValue =(inputValue-((inputValue*30)/100));
     paragg.innerText= newValue;
     
     return paragg.innerText;
    }
    else{
        paragg.innerText= inputValue;
        return paragg.innerText
 }})
 