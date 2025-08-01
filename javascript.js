
const gridcontainer=document.getElementById("container");
for(i=0;i<256;i++){
    const Square=document.createElement("div");
    Square.classList.add("grid-square");
    Square.classList.add("bg-color");
      
    gridcontainer.appendChild(Square);
    
    Square.addEventListener("mouseenter",()=>{
        Square.style.background="black";
        
 
    });  

}

const btn=document.getElementById("grid-button");
btn.style.background="green";
btn.style.color="white";
btn.addEventListener("click",()=>{
    const size=prompt("enter a grid size(max:100)");
    if(size>100){
       
    alert("please enter the number between 1 to 100");
    return;
    }
    gridcontainer.innerHTML="";
    const inputsize=320/size;
    for(let i=0;i< size*size;i++){
            const Square=document.createElement("div");
    Square.classList.add("grid-square");
    Square.classList.add("bg-color");
    Square.style.width=`${inputsize}px`
     Square.style.height=`${inputsize}px`
      
    gridcontainer.appendChild(Square);
    
    Square.addEventListener("mouseenter",()=>{
        Square.style.background="black";
 
    });  
}  
 
});

    const resetbtn=document.getElementById("reset-button");
    resetbtn.style.background="blue";
    resetbtn.style.color="white";
resetbtn.addEventListener("click",()=>{
gridcontainer.innerText="";
for(i=0;i<256;i++){
    const Square=document.createElement("div");
    Square.classList.add("grid-square");
    Square.classList.add("bg-color");
      
    gridcontainer.appendChild(Square);
    Square.addEventListener("mouseenter",()=>{
        Square.style.background="black ";
   
 
    });
   }

});
const redbtn=document.getElementById("color-button");
redbtn.style.background="red";
redbtn.style.color="white";
redbtn.addEventListener("click",()=>{
    const square=document.querySelectorAll(".grid-square");
    square.forEach(sri =>{
        sri.addEventListener("mouseenter",()=>{
            sri.style.background="red";
        
        });
    });
});
const multibtn=document.getElementById("multicolor-button");

multibtn.style.fontWeight="bold";
multibtn.style.background="skyblue";
multibtn.style.border="2px solid white";
multibtn.addEventListener("click",()=>{
    const squares=document.querySelectorAll(".grid-square");
    squares.forEach(sri =>{
        sri.addEventListener("mouseenter",()=>{
     
               const r = Math.floor(Math.random() * 256);      
            const g = Math.floor(Math.random() * 256);      
          const b= Math.floor(Math.random() * 256);
          
            sri.style.background=`rgb(${r}, ${g}, ${b})`;
        });
    });
});
const clerbtn=document.getElementById("clear-button");
clerbtn.style.background="grey";
clerbtn.style.color="white";
clerbtn.addEventListener("click",()=>{
    const clerbtn=document.querySelectorAll(".grid-square");
    clerbtn.forEach(srid =>{
        srid.addEventListener("mouseenter",()=>{
            srid.style.background="";
          
        });
    });
});









    

 
    




