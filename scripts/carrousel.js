var index = 0;
document.addEventListener(onload, carrousel());

function carrousel(){
    let matrimonioImages = document.getElementsByClassName("matrimonio");
    for(let i=0;i<matrimonioImages.length;i++)
    {
        if(i!=index)
        {
            matrimonioImages[i].setAttribute("display","none");
        }
        if(index > matrimonioImages.length)
        {
            index = 0;
        }
        matrimonioImages[index].setAttribute("display","block");
        index++;
        setTimeout(5000,carrousel());
    }
}