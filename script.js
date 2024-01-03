const nepaliInput = document.getElementById('input-text');

nepaliInput.addEventListener("input", (event) => {
const value = event.target.value;
const validNepaliCharacters = value.match(/[\u0900-\u097F]+/);
if (!validNepaliCharacters) {
  event.target.value = value.substring(0, value.length - 1); // Remove invalid character
//  alert("Please enter only Nepali characters.");
}
});


window.onload = () => {
    console.log("Window loaded.");

//alert("To type nepali you need to download the nepali keyboard ")
    const inputText = document.getElementById('input-text');

    // Add keydown event listener to capture key presses
    document.addEventListener('keydown', (event) => {
        const key = event.key || String.fromCharCode(event.keyCode); // Handle key retrieval for older browsers
     //   onKeyClick(key);
    });

    // Clear previous text and place cursor in the input
    inputText.value = "";
    inputText.focus();

    // Add an event listener to ensure focus is set when the user interacts with the page
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            inputText.focus();
        }
    });
};