// typescript code for the game.
/** what i am going to do today
 * add bird properties such as 'birdSize', 'gravity', and 'jumpForce'.
 * use p.fill and p.ellipse to draw a yellow circle representing Flappy Bird.
 * add variables to keep track of the bird's position and velocity during the game.
 */
import * as p5 from 'p5';

const birdSize = 32;        // size of bird character
const gravity = 0.6;        // strength of gravity . It will control how fast the bird falls when not jumping
const jumpForce = -10;      // sets the force applied to the bird when it jumps . a negative value is used to make the bird move upward.


/*
 * birdy- stores the vertical position of the bird
 * birdVelocity: rep the vertical velocity of bird, can control bird's movement.
 * pipes: store the info about pipes in the game. each pipe object will have a position 'x'and topheight 'topHeight' 
 */

let birdY: number;                  
let birdVelocity: number;
//let pipes: {x: number; topHeight: number}[] = [];


// main game logic 
const sketch = (p:p5) => {

    // called once when the game starts , using it to initialize the canvas and set up initial values.
    p.setup = () => {
        p.createCanvas(800, 600); // create a canvas element in HTML doc.
        birdY = p.height / 2;  // birdy to be in middle of the canvas
        birdVelocity = 0;      // indicating bird is not moving vertically at the satrt.
    };

    p.draw = () =>{
        p.background(0); // setting background of canvas to black

        //Bird
        p.fill(255,255,0); //set color to yellow
        p.ellipse(100,birdY,birdSize,birdSize);

        //Gravity
        birdVelocity += gravity;
        birdY += birdVelocity;
        
    };

    p.keyPressed = () =>{
        if(p.key === ' '){
            birdVelocity = jumpForce;
        }
    };
};


new p5(sketch);