    let endDate = new Date("Nov 20 2022 19").getTime();

function countdown(){
    let wC = new Date(endDate);
    let startDate = new Date().getTime();

     
    const totalSecs = (endDate - startDate) / 1000;
    
    const days = Math.floor(totalSecs/ 3600/ 24);
    const hours = Math.floor(totalSecs / 3600) % 24;
    const minutes = Math.floor(totalSecs / 60) % 60;
    const seconds = Math.floor(totalSecs) % 60;
     

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


   console.log(days, hours, minutes, seconds);
}

countdown();

setInterval(countdown, 1000);

