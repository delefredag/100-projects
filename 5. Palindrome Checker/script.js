const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', palindrome)

// madam  <- odd, middle stand alone
// noon <- even, 
function palindrome() {
    const word = document.querySelector('.input-text').value;
    let len = word.length;

    let start = word.substring(0, Math.floor(len / 2)).toLowerCase(); // 5/2 = 2.5 not valuable, toLowerCase()✅
    //ma
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    //am 


    //let's flip  ("pe" "ep")

    //let flip = end.split('').reverse().join(''); ES6
    let flip = [...end].reverse().join(''); //둘중에 아무거나 써도 된다

    //and check matching
    if (start === flip) {
        result.innerHTML = `${word.toUpperCase()} is a palindrome`;
    } else {
        result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
    }
    //alert(end); //pe/ ep 창은 이제 필요없으니 주석 처리 
}