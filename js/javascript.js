function detectmob() {
    console.log("detectmob function");
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        myScrollspy.display = false;
        document.getElementById("mobileAwareness").innerHTML = "mobile";
    } else {
        document.getElementById("mobileAwareness").innerHTML =  "desktop";
    }
}