
const button=document.querySelector("button");
const body=document.querySelector("body");
const colour=["indogo","blue","red","green","yellow","pink","orange"];
body.style.backgroundColor="black";
document.querySelector("button").addEventListener("click",function(){
   const colourIndex=parseInt(Math.random()*colour.length);
    body.style.backgroundColor=colour[colourIndex];
});

