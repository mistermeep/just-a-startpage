var quotes = [
	"in this present crisis, government is not the solution to our problem",
	"everything's connected.",
	"do you like how my face disintegrates into chalk?",
	"bruh, you gotta figure this out on your own",
	"all that he does is chip away, each day he sticks to his routine",
	"there is simply nothing worse than knowing how it ends",
	"AW IWA, I GOT THE CHILLS.",
	"Tooru Oikawa's favorite food is milkbread!",
	"brainpop brainrot",
	"the child is grown, the dream is gone",
	"la de da de where did all the good times go?",
	"it's the end of the world and i just can't wait",
	"oh, memories, where'd you go?",
	"gravity's calling; i've got some falling to do",
	"sharks exist in real life, woah!",
	"are you dead? sometimes i think i'm dead.",
	"there's too many colors enough to drive all of us insane",
	"the whole world is in your hand; i'd go wash it off",
	"it's such a lovely day, we should pocket the sunshine",
	"i know that every bomb has a silver lining",
	"a legacy is planting seeds in a garden you never get to see",
	"in the eye of a hurricane, there is quiet",
	"hey moon, please forget to fall down",
	"but wait, are we not civilized gentlemen here?",
	"i challenge you to a battle of knifes...!",
	"wasting time around my head, so i talk to myself instead",
	"welcome to reality",
	"when you're running by yourself, it's hard to find someone to hold your hand",
	"you've got no choice but to dance in a spiral of ants",
	"i don't care if you're a boy. put on the maid dress.",
	"your hair's on fire, you must've lost your wits",
	"things have changed for me, and that's okay",
	"it’s better to burn than to fade away",
	"alone at a table for two, and i just want to be served",
	"life doesn’t discriminate between the sinners and the saints",
	"i regret my 2017 hamilton phase immensely :]",
	"i am the one thing in life i can control",
	"tsukishima's yell whenever he blocks ushijima in s3 idk",
	"toby when he flies high",
	"난, 영원히 아이로 남고 싶어요",
	"속마음과 다른 표정을 짓는 일 아주 간단하거든",
	"'CAUSE WHEN WE JUMPING AND POPPING, WE JOPPING!",
	"Why BrainPOP is My Favorite Anime: a Video Essay",
	"alRIGHT CAMPERS",
	"i am constantly larping as tim from brainpop",
	"a mask of my own face; i'd wear that",
	"forget about your house of cards, and i'll do mine",
	"catboy maid tim brainpop",
	"welcome to ancapistan!",
	"tim and moby are in LOVE",
	"do your homework",
]

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

 function clock() {
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
  document.getElementById('time').innerHTML =     hour+':'+min+' '+mid ;
    setTimeout(clock, 1000);
    }


window.onload = function() {
  document.getElementById("q").focus();
  var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
	document.getElementById('day').innerHTML = (d_names[curr_day] + ", " + m_names[curr_month] + " " +curr_date);
	clock();
};

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
function setFocus(){
	document.getElementById("q").focus();
}
document.addEventListener("keypress", setFocus);
