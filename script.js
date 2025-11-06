// setInterval- белгилуу бир убакыт ичинде кандайдыр бир функция аткарат
// setInterval(() => {
//     alert("hello")
// }, 5000);
// let count=0
// setInterval(() => {
//     count++
//   let p=document.getElementById('timer')
//   p.innerHTML=count
//  if(count>=3){
//     p.style.backgroundColor="blue"
//  }
//  if(count<=8){
//     p.style.backgroundColor='red'
// }
// if(count>=12){
//     p.style.backgroundColor="green"
// }
// },1000);
let count=0;
let IntervalId=null;

const startCount=()=>{
  IntervalId=setInterval(() => {
        count++
        document.getElementById("sum").innerHTML=count
    }, 300);
}
 const stopCount=()=>{
    clearInterval(IntervalId);
    IntervalId=null
}
const clearCount=()=>{
    clearInterval(IntervalId);
    IntervalId=null;
    count=0;
    document.getElementById("sum").innerHTML=count
}