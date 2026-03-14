import React, { useEffect, useRef } from "react";

const eventsList = [
  {
    id: 1,
    name: "Cosmic Kickoff",
    imageSrc:
      "https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Arduino & IoT Sensor Lab",
    imageSrc:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Jal Shakti Innovation Hackathon",
    imageSrc:
      "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop"
  },
   {
    id: 4,
    name: "Cosmic Kickoff",
    imageSrc:
      "https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Arduino & IoT Sensor Lab",
    imageSrc:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Jal Shakti Innovation Hackathon",
    imageSrc:
      "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Cosmic Kickoff",
    imageSrc:
      "https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Arduino & IoT Sensor Lab",
    imageSrc:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Jal Shakti Innovation Hackathon",
    imageSrc:
      "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop"
  }
];

const Events = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const numParticles = 100;

    // Handle Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle Class
    class Particle {
      constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.angle = Math.PI - this.angle;
        if (this.y < 0 || this.y > canvas.height) this.angle = -this.angle;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 4 + 1,
            Math.random() * 0.5 + 0.2
          )
        );
      }
    };

    // Connect particles
    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dist = Math.hypot(
            particles[a].x - particles[b].x,
            particles[a].y - particles[b].y
          );

          if (dist < 120) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 120})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start everything
    initParticles();
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'radial-gradient(circle, #1b2735, #090a0f)' }}
    >
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full block z-0"
      />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-screen-xl px-8 mx-auto py-12 w-full">
        <h2 className="text-4xl font-bold text-center text-white mb-16 drop-shadow-lg">
          Our Events
        </h2>

        <div className="flex flex-wrap justify-center gap-x-32 gap-y-12 overflow-visible">
          {eventsList.map((event, index) => {
            const rotateClass = index % 2 === 0 ? "rotate-6" : "-rotate-12";
            const customMargin = index === 1 ? "-mr-8" : ""; 

            return (
              <div
                key={event.id}
                className={`group flex-shrink-0 relative ${customMargin}`}
              >
                <div className={`overflow-visible relative ${rotateClass} transform transition duration-500 group-hover:rotate-0 group-hover:-translate-y-12 group-hover:scale-110 origin-bottom`}>
                  <img
                    src={event.imageSrc}
                    alt={event.name}
                    className="rounded-xl w-80 h-80 object-cover shadow-2xl border-2 border-white/10"
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg text-center drop-shadow-md bg-black/40 p-2 rounded-lg backdrop-blur-sm">
                    {event.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;