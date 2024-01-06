var idx_mat = 0;

document.addEventListener(onload, slideShow());

function slideShow(){ 
    let carouselItems = document.getElementsByClassName("matrimonio");
    
    for(let i = 0; i < carouselItems.length; i++)
    {
        if(i != idx_mat)
        carouselItems[i].style.display = "none";
    }
    if(idx_mat >= carouselItems.length){
        idx_mat = 0;
        carouselItems[idx_mat].style.display = "block";
        setTimeout(slideShow, 5000);
        idx_mat++;
    }
    else{
        carouselItems[idx_mat].style.display = "block";
        setTimeout(slideShow, 5000);
        idx_mat++;
    } 
}