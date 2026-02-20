// --- home page js ---

// the clock at the top of the home page
function updateHomeTime() {
    const homeClock = document.getElementById('clock-display');
    
    // making sure the clock actually exists on this page before trying to update it
    if (homeClock) { 
        const timeNow = new Date().toLocaleTimeString();
        homeClock.innerText = "SYSTEM TIME: " + timeNow;
    }
}
// tick every second
setInterval(updateHomeTime, 1000);
updateHomeTime(); 


// making the giant donut spin when you click it
let currentRotation = 0; 
function spinDonut() {
    const donut = document.getElementById('main-donut');
    
    if (donut) {
        currentRotation += 360; // add a full circle
        donut.style.transform = `rotate(${currentRotation}deg)`;
    }
}


// --- contact page js ---

// the other clock on the contact page
function updateContactClock() {
    const contactClock = document.getElementById('clock');
    
    // checking if we are on the contact page so it doesn't crash
    if (contactClock) { 
        var now = new Date();
        var timeString = now.toLocaleTimeString(); 
        contactClock.innerHTML = timeString;
    }
}
// update every second
setInterval(updateContactClock, 1000); 
updateContactClock(); 


// --- delivery page js ---

// random eta calculator
function getETA() {
    const outputBox = document.getElementById("eta-output");
    
    // making sure the text box is there
    if (outputBox) {
        // grab a random number between 1 and 100
        var randomTime = Math.floor(Math.random() * 100) + 1;
        outputBox.innerHTML = "ESTIMATED ETA: " + randomTime + " LIGHTYEARS";
    }
}


// --- menu page js ---

// picking a random pizza when the button is clicked
function recommendPizza() {
    const recBox = document.getElementById("recommendation");
    
    // making sure the recommendation text box is actually on the page
    if (recBox) {
        var pizzas = ["THE MEATZZA!", "VEGAN KALE BLAZER!", "IT'S ALWAYS SUNNY IN CULLY!", "THE LOVELY LINDA!", "THE CLAM JAM!"];
        
        // grab a random pizza from the list above
        var randomPick = pizzas[Math.floor(Math.random() * pizzas.length)];
        recBox.innerHTML = "RECOMMENDED: " + randomPick;
    }
}