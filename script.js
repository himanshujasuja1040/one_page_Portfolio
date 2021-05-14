let star_logo=document.querySelector(".logo-s p");
let main=document.querySelector(".main");
let name_hj=document.querySelector(".Name");
let name1=document.querySelector(".Name1");
let portfolio=document.querySelector(".main h2")
let container_down=document.querySelector(".container-down");
let small_container=document.querySelector(".small-container");
let footer_up=document.querySelector(".footer-up");
const color1=window.getComputedStyle(star_logo,null).getPropertyValue("color");
let container=document.querySelector(".container");
let color2=window.getComputedStyle(container,null).getPropertyValue("background-color")
star_logo.addEventListener("click",function(){
    if(window.getComputedStyle(star_logo,null).getPropertyValue("color")==color1)
    {
        star_logo.style.color=color2;
        container.style.backgroundColor=color1;
        main.style.backgroundColor=color2;
        name_hj.style.color=color1;
        name1.style.color=color2;
        portfolio.style.color=color1;
    }
    else if(window.getComputedStyle(star_logo,null).getPropertyValue("color")==color2)
    {
        star_logo.style.color=color1;
        container.style.backgroundColor=color2;
        main.style.backgroundColor=color1;
        name_hj.style.color=color2;
        name1.style.color=color1;
        portfolio.style.color=color2;
    }
    if(window.getComputedStyle(star_logo,null).getPropertyValue("color")==color1)
{
    container_down.style.backgroundColor=color1;
    small_container.style.color=color2;
}
else if(window.getComputedStyle(star_logo,null).getPropertyValue("color")==color2)
{
    container_down.style.backgroundColor=color2;
    small_container.style.color=color1;

}
if(window.getComputedStyle(star_logo,null).getPropertyValue("color")==color1)
{
    footer_up.style.backgroundColor=color1;
    footer_up.style.color=color2;

}
else if(window.getComputedStyle(star_logo,null).getPropertyValue("color")==color2)
{
    footer_up.style.backgroundColor=color2;
    footer_up.style.color=color1;
}
})
let input_form=document.querySelectorAll(".down-footer input");
for(let i=0;i<input_form.length;i++){
    input_form[i].addEventListener("click",removeplaceholder);
}
function removeplaceholder(e){
   e.currentTarget.setAttribute("placeholder","");
   
}
// function pagescroll(){
//     window.scrollBy(0,1);
// }
// setInterval(pagescroll,10);