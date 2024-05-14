import kaboom from "kaboom";

// Initialize the game with the specified options
export const k = kaboom({
    global: false,
    touchToMouse: true,
    canvas: document.getElementById("game"),
})

// Now you can use `k` to add game objects, load assets, etc.
// k.add([
//     k.sprite("exampleSprite"),
//     k.pos(100, 200),
// ]);