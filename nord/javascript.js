const username = "meep";
const determineGreet = hours => document.getElementById("greeting").innerText = `good ${hours < 12 ? "morning, " : hours < 18 ? "afternoon, " : "evening, "}` + username + '.';

var m_names = ["january", "february", "march", 
"april", "may", "june", "july", "august", "september", 
"october", "november", "december"];

var d_names = ["sunday","monday", "tuesday", "wednesday", 
"thursday", "friday", "saturday"];

var myDate = new Date();
myDate.setDate(myDate.getDate());
var curr_date = myDate.getDate();
var curr_month = myDate.getMonth();
var curr_day  = myDate.getDay();

    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var mid = 'pm';
    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 12) {
      hour = hour - 12;
    }    
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'am';
    }     
function setFocus(){
	document.getElementById("q").focus();
}
});



window.addEventListener('load', () => {
	setFocus();
    let today = new Date();
    determineGreet(new Date().getHours());
    setTimeout(() => { document.getElementById("greeting").style.opacity = "1"; }, 100);
	document.getElementById('day').innerHTML = "it is " + "<span style=color:#5e81ac>" + hour+":"+min+" " + mid + "</span>" + " on " + "<span style=color:#5e81ac>" + d_names[curr_day] + ", " + m_names[curr_month] + " " +curr_date + "</span>" + ".";
})
