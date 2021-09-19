var Gpio = require('./node_modules/onoff').Gpio; //include onoff to interact with the GPIO
var LED;
var blinkInterval;

function blinkLED() { //function to start blinking
  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }
  //console.log('end - blinkLED');
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
  //console.log('end - enbBlink');
}

//--------------------------------------------
module.exports.ledBlink = (ledNum) => {
//console.log('start - ledBlink');
LED = new Gpio(ledNum, 'out'); 
blinkInterval = setInterval(blinkLED, 200); 
setTimeout(endBlink, 5000); 
//console.log('end - ledBlink');

}