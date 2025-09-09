import styled, { keyframes } from "styled-components";

// Glow pulse animation
export const glowPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

// Bounce animation for mouse arrow
export const bounceArrow = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
  40% { transform: translateY(10px); opacity: 1; }
  60% { transform: translateY(5px); opacity: 0.8; }
`;

// Hero section
export const HeroWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #0d0d0d, #000000);
  color: white;
  position: relative;
  overflow: hidden;

  .glow {
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(66, 165, 245, 0.35), transparent 70%);
    filter: blur(120px);
    z-index: 0;
    animation: ${glowPulse} 10s ease-in-out infinite;
  }

  .glow.secondary {
    background: radial-gradient(circle, rgba(66, 165, 245, 0.25), transparent 70%);
  }

  .content {
    position: relative;
    z-index: 1;
  }
`;

export const ScrollArrow = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 24px;
  height: 30px;
  border: 2px solid #42a5f5;
  border-radius: 50%;
  opacity: 0.5;
  animation: ${bounceArrow} 1.5s infinite;
  cursor: pointer;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: #42a5f5;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

// About section
export const AboutWrapper = styled.div`
  padding: 5rem 0;
  background: #0d0d0d;
  color: white;
  position: relative;
  overflow: hidden;

  .content {
    position: relative;
    z-index: 1;
  }

  img {
    width: 100%;
    border-radius: 12px;
  }
`;

// Contact section
export const ContactWrapper = styled.div`
  padding: 5rem 0;
  background: #111;
  color: white;
  position: relative;
  overflow: hidden;

  .glow {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(66, 165, 245, 0.3), transparent 70%);
    filter: blur(140px);
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 1;
  }
`;
