var idx_qc = 0;

document.addEventListener(onload, slideShowQuince());

function slideShowQuince(){ 
    let quinceItems = document.getElementsByClassName("quince");
    
    for(let i = 0; i < quinceItems.length; i++)
    {
        if(i != idx_qc)
        quinceItems[i].style.display = "none";
    }
    if(idx_qc >= quinceItems.length){
        idx_qc = 0;
        quinceItems[idx_qc].style.display = "block";
        setTimeout(slideShowQuince, 5000);
        idx_qc++;
    }
    else{
        quinceItems[idx_qc].style.display = "block";
        setTimeout(slideShowQuince, 5000);
        idx_qc++;
    }
} 