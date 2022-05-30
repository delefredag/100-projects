//let's creat variable 
const number = document.querySelector('.number');
const btn = document.querySelector('.generate');

const generateNumber = () => {
    // Generate number btn 1 and 10  아래에서 만든거 복사 
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    number.innerHTML = randomNumber;
}

btn.addEventListener('click', generateNumber);
generateNumber();//새로고침했을 때도 계속 랜덤 숫자 나오려면 


//const rand = Math.floor(Math.random()*10 +1); //return random number 소숫점으로 나오니 *10해주기 
//정수가 나오게 하려면 소괄호로 묶고 .floor 인티저 메소드 쓰기 
//(순서가 궁금하면 영상 복습)
// 10을 받고 싶으면 +1을 해줘야함. 

//password generator 프로젝트에도 쓸 수 있음 