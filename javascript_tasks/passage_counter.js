
let seconds = 0;
let minutes = 0;
function getTimer(){
    if(seconds === 59){
        seconds = 0;
        minutes += 1;
    }
    seconds += 1;
    console.log(`${minutes} : ${seconds}`)
    
}
setInterval(getTimer,1000)




