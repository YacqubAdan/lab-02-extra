    let spID = document.getElementById("special");
    let h2ALL = document.querySelectorAll("h2");
    let pspanALL = document.querySelectorAll("p span");
    let pALL = document.getElementsByTagName("p");
    let classALL = document.getElementsByClassName("foo");
    let pBTN = document.getElementById("p-button");
    let h2BTN = document.getElementById("h2-button");
    let formBTN = document.getElementById("form-button");
    let classBTN = document.getElementById("class-button");
    let idBTN = document.getElementById("id-button");
    let pspBTN = document.getElementById("psp-button");
    
    let toggle = false; // unclicked

    function makeChange(src, tar){
      if (toggle) {
        for(i=0;i<tar.length;i++){
          tar[i].classList.remove("highlight");
        }
        toggle = false; // unclicked
        src.classList.remove("toggle");
      } 
      else {
        for(i=0;i<tar.length;i++){
          tar[i].classList.add("highlight");
        }
        toggle = true; // clicked
        src.classList.add("toggle");
      }
    };
    
    h2BTN.addEventListener("click", function(){
      makeChange(h2BTN, h2ALL);}, false);
    
    pBTN.addEventListener("click", function(){
      makeChange(pBTN, pALL);}, false);
    
    pspBTN.addEventListener("click", function(){
      makeChange(pspBTN, pspanALL);}, false);
    
    classBTN.addEventListener("mouseover", function(e){
      for(i=0;i<classALL.length;i++){
        classALL[i].classList.add("highlight");
      } e.preventDefault();}, false);
      
    classBTN.addEventListener("mouseout", function(e){
      for(i=0;i<classALL.length;i++){
        classALL[i].classList.remove("highlight");
      } e.preventDefault();}, false);
    
  
    
  
