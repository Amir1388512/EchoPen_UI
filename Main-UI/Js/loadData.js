import { _class } from './base.js';

let DataText = _class('data-num');

for (let index = 0; index < DataText.length; index++) {
    const element = DataText[index];
    let targetValue = parseInt(element.getAttribute('data-num'), 10); // Parse as integer
    let currentValue = 0;

    // Define a function to update the value
    function updateValue(timestamp) {
        // Calculate the progress based on time elapsed
        let progress = timestamp / 10; // You can adjust this value for speed
        currentValue = Math.min(Math.floor(progress), targetValue);

        // Update the element content
        element.innerHTML = currentValue;

        // Continue animating if currentValue is less than targetValue
        if (currentValue < targetValue) {
            requestAnimationFrame(updateValue);
        }
    }

    // Start the update process
    requestAnimationFrame(updateValue);
}
