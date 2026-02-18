// 1. Dynamic Clock
function updateTime() {
    const timeNow = new Date().toLocaleTimeString();
    document.getElementById('clock-display').innerText = "SYSTEM TIME: " + timeNow;
}
setInterval(updateTime, 1000);
updateTime(); 

// 2. Click to Spin Interaction
let currentRotation = 0; 

function spinDonut() {
    const donut = document.getElementById('main-donut');
    
    // Add 360 degrees every time you click it
    currentRotation += 360; 
    
    // Apply the new rotation to the image
    donut.style.transform = `rotate(${currentRotation}deg)`;
}