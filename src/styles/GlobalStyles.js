// style.js
import styled, { keyframes } from "styled-components";

// ================== Animations ==================
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(8px); }
  60% { transform: translateY(4px); }
`;

export const glowPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 0.9; }
`;

export const fadeInDesc = keyframes`
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ================== Projects ==================
export const ProjectsWrapper = styled.div`
  padding: 5rem 1rem;
  background: #0d0d0d;
  color: white;
  position: relative;
  overflow: hidden;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: #42a5f5;
  }

  .timeline {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(to bottom, #7e22ce, #3b82f6, #4f46e5);
      border-radius: 2px;
      transform: translateX(-50%);
      z-index: 1;
    }

    .project-item {
      position: relative;
      display: flex;
      align-items: center;
      gap: 2rem;

      /* Alternate cards left / right */
      &:nth-child(even) {
        flex-direction: row-reverse;
      }

      .dot {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: white;
        border: 2px solid #42a5f5;
        z-index: 2;
      }

      .card-wrapper {
        flex: 1;
        position: relative;

        .card {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.5);
          cursor: pointer;
          position: relative;

          img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            transition: all 0.3s ease;
            border-radius: 16px;
            animation: ${fadeIn} 0.5s ease forwards;
          }

          .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.55);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            opacity: 0;
            padding: 1rem;
            text-align: center;
            transition: opacity 0.3s ease;

            .title {
              font-weight: 700;
              font-size: 1.25rem;
              margin-bottom: 0.5rem;
            }
          }

          &:hover .overlay {
            opacity: 1;
          }

          &:hover img {
            transform: scale(1.05) translateY(-4px);
            filter: blur(1px);
          }
        }
      }

      .spacer {
        flex: 1;
      }
    }

    /* Mobile responsiveness: stack items */
    @media (max-width: 768px) {
      &::before { left: 8px; } 

      .project-item {
        flex-direction: column !important;
        align-items: flex-start;
        padding-left: 2rem;

        .dot {
          left: 0;
          transform: translate(0, -50%);
        }

        .spacer { display: none; }
      }
    }
  }
`;

// ================== Hero ==================
export const HeroWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #0d0d0d, #000);
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
  transform: translateX(-50%);
  width: 20px;
  height: 34px;
  border: 2px solid #42a5f5;
  border-radius: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 6px;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 0 8px rgba(66, 165, 245, 0.4);

  &::after {
    content: "";
    width: 5px;
    height: 5px;
    background: #42a5f5;
    border-radius: 50%;
    animation: ${bounce} 2s infinite ease-in-out;
    box-shadow: 0 0 6px #42a5f5;
  }
`;

// ================== About ==================
export const AboutWrapper = styled.div`
  padding: 5rem 0;
  background: #0d0d0d;
  color: white;
  position: relative;
  overflow: hidden;

  .content { position: relative; z-index: 1; }

  img { width: 100%; border-radius: 12px; box-shadow: 0 8px 18px rgba(0,0,0,0.6); }
`;

// ================== Services ==================
export const ServicesWrapper = styled.div`
  padding: 5rem 0;
  background: #0d0d0d;
  color: white;
  position: relative;
  overflow: hidden;

  .service-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    @media (min-width: 992px) {
      flex-direction: row;
      align-items: stretch;
      justify-content: space-between;
    }
  }

  .service-texts {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 992px) { justify-content: space-between; }
  }

  .service-item {
    cursor: pointer;
    padding: 1rem;
    border-left: 3px solid transparent;
    transition: all 0.3s ease;

    &:hover {
      border-left: 3px solid #42a5f5;
      background: rgba(66, 165, 245, 0.05);
    }

    .description { animation: ${fadeInDesc} 0.4s ease forwards; }
  }

  .service-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    @media (min-width: 992px) { margin-top: 0; }

    img {
      max-width: 400px;
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.5);
      opacity: 0;
      animation: ${fadeIn} 0.6s ease forwards;
      transition: transform 0.4s ease;
    }

    img:hover { transform: scale(1.05) translateY(-4px); }
  }
`;

// ================== Contact ==================
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
    background: radial-gradient(circle, rgba(66,165,245,0.3), transparent 70%);
    filter: blur(140px);
    z-index: 0;
  }

  .content { position: relative; z-index: 1; }
`;
