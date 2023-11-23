let time=()=>{
    let element =document.querySelector("h1")
    let date=new Date()
    hours=date.getHours()
    min=date.getMinutes()
    sec=date.getSeconds()
    week=date.getDay()
    let wee=["MON","TUE","WED","THURSDAY","FRI","SAT","SUN"]
    weeks=wee[week-1];
    let day 
    day=hours<12?"AM":"PM"
    hours=hours<10?`0${hours}` :hours;
    min=min<10? `0${min}`:min;
    sec=sec<10?`0${sec}`:sec;
    element.innerHTML=`${hours}:${min}:${sec}:  ${day} ${weeks}`
}

time()
setInterval(time,1000)