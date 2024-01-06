var idx_cm = 0;

document.addEventListener(onload, slideShowComunion());

function slideShowComunion(){ 
    let comunionItems = document.getElementsByClassName("comunion");
    
    for(let i = 0; i < comunionItems.length; i++)
    {
        if(i != idx_cm)
        comunionItems[i].style.display = "none";
    }
    if(idx_cm >= comunionItems.length){
        idx_cm = 0;
        comunionItems[idx_cm].style.display = "block";
        setTimeout(slideShowComunion, 5000);
        idx_cm++;
    }
    else{
        comunionItems[idx_cm].style.display = "block";
        setTimeout(slideShowComunion, 5000);
        idx_cm++;
    }
} 