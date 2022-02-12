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

$(document).ready(function() {
      $(document).bind('keydown', function(e) {
        if (e.shiftKey && e.which == 65) {
          window.location.href = "https://archiveofourown.org/";
        }
        if (e.shiftKey && e.which == 68) {
          window.location.href = "https://docstransfer.com/";
		  }
        if (e.shiftKey && e.which == 66) {
          window.location.href = "https://brainpop.com/";
		  }
        if (e.shiftKey && e.which == 71) {
          window.location.href = "https://github.com/";
		  }
        if (e.shiftKey && e.which == 67) {
          window.location.href = "https://crunchyroll.com/";
		  }
        if (e.shiftKey && e.which == 83) {
          window.location.href = "https://benhill.schoology.com/";
		  }
        if (e.shiftKey && e.which == 70) {
          window.location.href = "https://office.com/";
		  }
        if (e.shiftKey && e.which == 82) {
          window.location.href = "https://reddit.com/";
		  }
        if (e.shiftKey && e.which == 87) {
          window.location.href = "https://twitter.com/";
		  }
        if (e.shiftKey && e.which == 86) {
          window.location.href = "https://tumblr.com/";
        }
      });
});



window.addEventListener('load', () => {
	setFocus();
    let today = new Date();
    determineGreet(new Date().getHours());
    setTimeout(() => { document.getElementById("greeting").style.opacity = "1"; }, 100);

})
