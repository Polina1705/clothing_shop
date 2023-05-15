/*const bar =document.getElementsById('bar');
const nav = document.getElementsByClassName('.navbar');


if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}*/


const getDiscountBtn = document.querySelector(".get-discount-btn");
const couponContainer = document.querySelector(".coupon-container");
const closeBtn = document.querySelector(".coupon-container .close");

getDiscountBtn.addEventListener("click", () => {
  couponContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  couponContainer.classList.remove("active");
});



const productContainers = [...document.querySelectorAll('.carousel')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const img = document.getElementById('picture'); 
const src = img.src; 
img.addEventListener('click', () => {
  const win = window.open('about:blank', 'new image'); 
  win.document.write("<img src=' " + src + "' alt='new image' />"); 
});