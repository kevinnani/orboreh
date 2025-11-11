import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export const ScrollAnimations = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Create initial particles
    const initialParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(initialParticles);

    // Handle scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Animate particles
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: (particle.x + particle.speedX + 100) % 100,
          y: (particle.y + particle.speedY + 100) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Animated Background Gradient */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at ${50 + scrollY * 0.02}% ${30 + scrollY * 0.03}%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
            radial-gradient(circle at ${30 - scrollY * 0.01}% ${70 + scrollY * 0.02}%, hsl(var(--secondary) / 0.15) 0%, transparent 50%),
            radial-gradient(circle at ${70 + scrollY * 0.015}% ${50 - scrollY * 0.01}%, hsl(var(--accent) / 0.1) 0%, transparent 50%)
          `,
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: `translateY(${scrollY * particle.speedY * 0.1}px)`,
              transition: 'transform 0.3s ease-out',
              boxShadow: `0 0 ${particle.size * 3}px hsl(var(--primary) / ${particle.opacity})`,
            }}
          />
        ))}
      </div>

      {/* Mesh Gradient Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            repeating-linear-gradient(
              ${scrollY * 0.1}deg,
              hsl(var(--primary) / 0.03) 0px,
              transparent 2px,
              transparent 40px,
              hsl(var(--secondary) / 0.03) 40px,
              transparent 42px,
              transparent 80px
            )
          `,
          transform: `rotate(${scrollY * 0.02}deg)`,
          transition: 'all 0.2s ease-out',
        }}
      />
    </>
  );
};
