import kaboom from "kaboom";

// Initialize the game with the specified options
export const k = kaboom({
    global: false,
    touchToMouse: true,
    canvas: document.getElementById("game"),
    // debug: false, // set to false once ready for production
})