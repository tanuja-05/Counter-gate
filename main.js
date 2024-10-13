let daysItem=document.querySelector("#days");
let hoursItem=document.querySelector("#hours");
let minItem=document.querySelector("#min");
let secItem=document.querySelector("#sec");

let backgrounds = [
    "./images/IISC-1.jpg",  
    "./images/pic-5.jpg",
    "./images/pic-7.jpg",
];
let currentBackgroundIndex = 0;

let countDown = () =>{
    let futureDate = new Date("1 feb 2025");
    let currentDate = new Date();
    let myDate=futureDate-currentDate;
    
    let days=Math.floor(myDate/1000/60/60/24);
    let hours=Math.floor(myDate/1000/60/60)%24;
    let min =Math.floor(myDate/1000/60)%60;
    let sec =Math.floor(myDate/1000)%60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML=hours;
    minItem.innerHTML=min;
    secItem.innerHTML=sec;
}
let changeTheme = () => {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
}

document.getElementById("theme-btn").addEventListener("click", changeTheme);

let menuBtn = document.getElementById("menu-btn");
let dropdownContent = document.getElementById("dropdown-content");

menuBtn.addEventListener("click", () => {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        console.log("Dropdown closed");
    } else {
        dropdownContent.style.display = "block";
        console.log("Dropdown opened");
    }
});

document.addEventListener("click", (event) => {
    if (!menuBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = "none";
        console.log("Clicked outside, dropdown hidden");
    }
});

countDown();
setInterval(countDown,1000);
