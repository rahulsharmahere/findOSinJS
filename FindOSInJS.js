function getOS() {

    let userAgent = navigator.userAgent || navigator.vndor || navigator.opera;


    if (/Windows Phone/i.test(userAgent)){
        return "Windows Phone";
    
    }

    else if (/Win/i.test(userAgent)) {
        return "Windows";
    }

    else if (/Linux/i.test(userAgent)) {
        return "Linux";
    }
    else if (/Mac/i.test(userAgent)) {
        return "Mac";
    }
    else if (/Android/i.test(userAgent)) {
        return "Android";
    }
    else if (/ipod|iphone|ipad/i.test(userAgent) && window.MSStream) {
        return "iOS";
    }

    else {
        return "Unknown";
    }
}

getOS()
