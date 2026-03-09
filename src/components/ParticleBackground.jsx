import { color } from "framer-motion";
import { useEffect,useRef } from "react";

export default function ParticleBackground(){
const canvasRef = useRef(null);
useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles=[];
    const particleCount = 100;
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

class Particle{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
    }
}


})

return (
    <canvas
    ref={canvasRef}
    className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">

    </canvas>


)

}
