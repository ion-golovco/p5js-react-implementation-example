import p5 from "p5";
import { isMobile } from "react-device-detect";

let color = 220; // Global variable

const main = (p) => {
    p.setup = function () {
        //Load files or other things
        //Executes only once
        color = 255; //Changes globaly
    };
    p.draw = function () {
        //Executes every 1/60 seconds (60fps)
        p.background(color); 
        if (!isMobile) {
            //your code
            //Calling global function inside p5 environment
            foo();
        } 
    };
    p.mousePressed = () => {
        if (color === 0) {
            color = 255;
        } else {
            color = 0;
        }
    };
};
function foo() {
    //your code here in JS only
}

let myp5 = new p5(main);
export default myp5;
