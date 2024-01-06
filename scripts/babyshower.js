var idx_bs = 0;

document.addEventListener(onload, slideShowBabyShower());

function slideShowBabyShower(){ 
    let babyShowerItems = document.getElementsByClassName("babyShower");
    
    for(let i = 0; i < babyShowerItems.length; i++)
    {
        if(i != idx_bs)
        babyShowerItems[i].style.display = "none";
    }
    if(idx_bs >= babyShowerItems.length){
        idx_bs = 0;
        babyShowerItems[idx_bs].style.display = "block";
        setTimeout(slideShowBabyShower, 5000);
        idx_bs++;
    }
    else{
        babyShowerItems[idx_bs].style.display = "block";
        setTimeout(slideShowBabyShower, 5000);
        idx_bs++;
    }
} 