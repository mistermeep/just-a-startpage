const determineGreet = hours => document.getElementById("greeting").innerText = `good ${hours < 12 ? "morning!" : hours < 18 ? "afternoon!" : "evening!"}`
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
})
