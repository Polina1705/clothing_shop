document.querySelector('#btn_hero').onclick = function(){
    alert('Вы получили скидку 10%');  
}

function alerted(){
    alert('Вы получили скидку 10%'); 
}

/*const bar =document.getElementsById('#bar');
const nav = document.getElementsByClassName('.navbar');


if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}


const getDiscountBtn = document.querySelector(".get-discount-btn");
const couponContainer = document.querySelector(".coupon-container");
const closeBtn = document.querySelector(".coupon-container .close");

getDiscountBtn.addEventListener("click", () => {
  couponContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  couponContainer.classList.remove("active");
});*/



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


const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);
    if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
        Swal.fire(
            'input field has no value!',  
        );
    }
    else
    {
        if(pass.length >= 6 && pass.length <= 20)
    {
        if( pass !== cpass){
            Swal.fire(
                'Password not matching!', 
            );
        }
        else
        {
            Swal.fire(
                'Register successful!',
            );
            setTimeout(()=>{
                    location.href='LoginBox.html';
                    },5000)
        }
    }
    else
    {
        Swal.fire(
            'error'
        );
    }
    }


}
