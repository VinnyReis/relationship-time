import { confetti } from '@tsparticles/confetti';

export default function triggerConfetti() {
  confetti({
    zIndex: 1,
    particleCount: 200,
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    scalar: 3,
    startVelocity: 30,
    shapes: ['heart'],
    colors: ["#FFC0CB", "#FF69B4", "#FF1493", "#C71585"],
  });
};