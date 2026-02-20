// ==========================================
//          HOME PAGE JAVASCRIPT
// ==========================================

// 1. Dynamic Clock (Home Page)
function updateHomeTime() {
    const homeClock = document.getElementById('clock-display');
    if (homeClock) { 
        const timeNow = new Date().toLocaleTimeString();
        homeClock.innerText = "SYSTEM TIME: " + timeNow;
    }
}
setInterval(updateHomeTime, 1000);
updateHomeTime(); 


// 2. Click to Spin Interaction (Home Page)
let currentRotation = 0; 
function spinDonut() {
    const donut = document.getElementById('main-donut');
    if (donut) {
        currentRotation += 360; 
        donut.style.transform = `rotate(${currentRotation}deg)`;
    }
}


// ==========================================
//         CONTACT PAGE JAVASCRIPT
// ==========================================

// 3. Local System Time Clock (Contact Page)
function updateContactClock() {
    const contactClock = document.getElementById('clock');
    if (contactClock) { 
        var now = new Date();
        var timeString = now.toLocaleTimeString(); 
        contactClock.innerHTML = timeString;
    }
}
setInterval(updateContactClock, 1000); 
updateContactClock(); 


// ==========================================
//         DELIVERY PAGE JAVASCRIPT
// ==========================================

// 4. Random ETA Calculator (Delivery Page)
function getETA() {
    const outputBox = document.getElementById("eta-output");
    if (outputBox) {
        var randomTime = Math.floor(Math.random() * 100) + 1;
        outputBox.innerHTML = "ESTIMATED ETA: " + randomTime + " LIGHTYEARS";
    }
}


// ==========================================
//           MENU PAGE JAVASCRIPT
// ==========================================

// 5. Random Pizza Recommender (Menu Page)
function recommendPizza() {
    const recBox = document.getElementById("recommendation");
    
    // Safety check: Only run if the recommendation text box exists on this page!
    if (recBox) {
        var pizzas = ["THE MEATZZA!", "VEGAN KALE BLAZER!", "IT'S ALWAYS SUNNY IN CULLY!", "THE LOVELY LINDA!", "THE CLAM JAM!"];
        var randomPick = pizzas[Math.floor(Math.random() * pizzas.length)];
        recBox.innerHTML = "RECOMMENDED: " + randomPick;
    }
}