function setBackgroundColor() {
    if(localStorage.getItem('darkMode') == null || localStorage.getItem('darkMode') === "disabled") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
    }
}

function toggleDarkMode() {
    if(localStorage.getItem('darkMode') == null || localStorage.getItem('darkMode') === "disabled") {
        localStorage.clear('darkMode')
        localStorage.setItem('darkMode', "enabled")
    } else {
        localStorage.clear('darkMode')
        localStorage.setItem('darkMode', "disabled")
    }

    setBackgroundColor()
}

window.onload = setBackgroundColor;