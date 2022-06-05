const btn = document.querySelector('.btn');
const coupon = document.querySelector('.coupon');

const copyText = (e) => { //e: button is inside the form
    e.preventDefault(); // Copy button : no page reload
    
    navigator.clipboard.writeText(coupon.value) //writeText() 비동기 asynchronous
    .then(()=>{
        btn.textContent = 'Copied!' // Copy button : changed1 'Copied!' 
        setTimeout(()=>{
            btn.textContent = 'Copy' //Copy button : changed2 다시 'Copy'
        }, 3000); // 3초 후에 
    }) 
};

btn.addEventListener('click', copyText); // copyText function 다음에 배치




// const copyText = (e) => { 
//     e.preventDefault(); 

//     ✅삭제 coupon.select();
//     ✅삭제 coupon.setSelectionRange(0,99999);
//     ✅삭제 document.execCommand('copy');  execCommand method is deprecated💩
//     ✅ navigator.clipboard.writeText 로 대체✨

//     btn.textContent = 'Copied!' 
//     setTimeout(()=>{
//         btn.textContent = 'Copy'
//     }, 3000); 
// };