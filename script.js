let homePageIPHeading = document.querySelector(".right-heading span");
let getStartedBtn = document.querySelector(".get-started")

// finding the IP Address
$.getJSON("https://api.ipify.org?format=json", function (data) {
    printIPHomePage(data.ip);
})

// Manupalating the IP Adress Heading of Home Page
function printIPHomePage(ip) {
    homePageIPHeading.innerHTML = `${ip}`;
    localStorage.setItem("ipAddress", ip)
}

// Adding functionality to Get Started
getStartedBtn.addEventListener("click", () => {
    let url = "details.html"
    window.location.href = url;
})
