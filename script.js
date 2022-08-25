    let endDate = new Date("Nov 20 2022 19").getTime();

function countdown(){
    let wC = new Date(endDate);
    let startDate = new Date().getTime();

     
    const totalSecs = (wC - startDate) / 1000;
    
    const days = Math.floor(totalSecs/ 3600/ 24);
    const hours = Math.floor(totalSecs / 3600) % 24;
    const minutes = Math.floor(totalSecs / 60) % 60;
    const seconds = Math.floor(totalSecs) % 60;
     

    document.getElementById("days").innerHTML = format(days);
    document.getElementById("hours").innerHTML = format(hours);
    document.getElementById("minutes").innerHTML = format(minutes);
    document.getElementById("seconds").innerHTML = format(seconds);


   console.log(days, hours, minutes, seconds);
}

function format(time){
    return time < 10 ? `0${time}`: time;
}

countdown();

setInterval(countdown, 1000);

