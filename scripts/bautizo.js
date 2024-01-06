var idx_bt = 0;

document.addEventListener(onload, slideShowBabyShower());

function slideShowBabyShower(){ 
    let bautizoItems = document.getElementsByClassName("bautizo");
    
    for(let i = 0; i < bautizoItems.length; i++)
    {
        if(i != idx_bt)
        bautizoItems[i].style.display = "none";
    }
    if(idx_bt >= bautizoItems.length){
        idx_bt = 0;
        bautizoItems[idx_bt].style.display = "block";
        setTimeout(slideShowBabyShower, 5000);
        idx_bt++;
    }
    else{
        bautizoItems[idx_bt].style.display = "block";
        setTimeout(slideShowBabyShower, 5000);
        idx_bt++;
    }
} 