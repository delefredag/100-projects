
const hex = document.querySelector('.hex');
const btn = document.querySelector('.generate');

const generateColor = ()=> {  //generate randomN we made  
    const randomColor= Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = '#' + randomColor;
    hex.innerHTML = '#' + randomColor;
};

btn.addEventListener('click', generateColor);

generateColor(); //페이지 새로고침 했을 때도 하고싶으면 펑션을 새로 써줌 


//let color = Math.random(); //0.423452 랜덤넘버 
//color = Math.random().toString(16); //need to convert it to string cuz it contains put in number and letters.
//.toString()을 붙인 순간 타입이 바뀌어서 콘솔창 숫자 색깔이 바뀌었다. 
// toString() 괄호 안에 아무 것도 안 넣으면 기본적으로 0부터 10이 된다. 하지만 우리는 16진수를 원함 hexadecimal 그러므로 16을 넣어야한다. 알파벳이 들어감 number & letter
// hex number contains a hex color code, contains a hash and then six values. 


//color = Math.random().toString(16).substring(2,8);

//substring 메서드는 처음을 포함하고 끝을 포함하지 않는다. 
//0.d4862f127d3ae  dot=[1] 소수점 첫번째자리[2]부터 6개 스트링 추출.
// 끝에는 포함하지 않으니 8까지 하면 된다. //c47487 6values 

//console.log(color); 


//+ 에러해결 
//ReferenceError: document is not defined
//Js는 처음 언어가 만들어질때 브라우저 안에 존재했다
//Users/Desktop/ 로컬에서 실행했다 = 로컬 환경에서는 document도 없고 객체도 없다.
//Js를 브라우저 바깥으로 끄집어내서 c나 c++, java같은 범용 언어처럼 사용하는게 nodejs 이다.
//내 코드가 javascript이지만 실행되는 곳이 브라우저가 아니어서 그런 것. 