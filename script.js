const h1 = document.querySelector(".myValue");
const btn = document.querySelector(".button");
const sci = document.querySelector(".scissors");
const rk = document.querySelector(".rock");
const pp = document.querySelector(".paper");

const sciValue = 0;
const rkValue = 1;
const ppValue = 2;

const t1 = document.querySelector(".comValue");
const score = document.querySelector(".score");
const score2 = document.querySelector(".score2"); //컴퓨터 점수계산 위해 score2 선언
const wl = document.querySelector(".wl"); //승패 판단 문구 위한 h1태그 클래스wl 선언

let num = 0;
let comNum = 0; ///컴퓨터 점수의 초기 설정

const handleBtn = (e) => {
    
     if( e.target.innerText === "가위") {
        randomPlay(sciValue);
        h1.innerText = "가위";
     }else if(e.target.innerText === "바위") {
        randomPlay(rkValue);
        h1.innerText = "바위";
     }else if(e.target.innerText === "보") {
        randomPlay(ppValue);
        h1.innerText = "보";
     }
}

const randomPlay = (a) => {
    const comValue = Math.floor(Math.random() * 3);
    console.log(comValue); 
    console.log(a);

    if(comValue == 0) {
        t1.innerText = "가위";
    }else if(comValue == 1) {
        t1.innerText = "바위";
    }else{
        t1.innerText = "보";
    }
       
    if( a == 0 && comValue == 1 ) {
        console.log("lose"); 
        wl.innerHTML = "lose";///패배 표시
    }else if( a == 1 && comValue == 2){
        console.log("lose");
        wl.innerHTML = "lose";///
    }else if(a ==2 && comValue == 0){
        console.log("lose");
        wl.innerHTML = "lose";///
    }else if(a == 0 && comValue == 2){
        console.log("win");
        num += 1;
        wl.innerHTML = "win";///승리 표시
        score.innerText = num
    }else if(a == 1 && comValue == 0) {
        console.log("win");
        num += 1;
        wl.innerHTML = "win";///
        score.innerText = num
    }else if(a == 2 && comValue == 1){
        console.log("win");
        num += 1;
        wl.innerHTML = "win";///
        score.innerText = num
    }else{
        console.log("draw");
        wl.innerHTML = "draw";/// 동률 표시
    }

    if( comValue == 0 && a == 1 ) {
        console.log("com lose"); 
    }else if( comValue == 1 && a == 2){
        console.log("com lose");
    }else if(comValue ==2 && a == 0){
        console.log("com lose");
    }else if(comValue == 0 && a == 2){
        console.log("com win");
        comNum += 1;////컴퓨터 점수 +1
        score2.innerText = comNum/////컴퓨터 점수 카운팅 위한 식
    }else if(comValue == 1 && a == 0) {
        console.log("com win");
        comNum += 1;////
        score2.innerText = comNum/////
    }else if(comValue == 2 && a == 1){
        console.log("com win");
        comNum += 1;////
        score2.innerText = comNum/////
    }else{
        console.log("draw");
    }

}
sci.addEventListener("click", handleBtn);
rk.addEventListener("click", handleBtn);
pp.addEventListener("click", handleBtn);   