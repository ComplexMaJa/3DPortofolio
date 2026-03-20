import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './gooey-nav.css';

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 10,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = -1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndexFromPath = items.findIndex(item => item.href === location.pathname);
  const initialIndexValue = currentIndexFromPath >= 0 ? currentIndexFromPath : initialActiveIndex;
  const [activeIndex, setActiveIndex] = useState<number>(initialIndexValue);
  const activeIndexRef = useRef<number>(initialIndexValue);

  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };
  const createParticle = (i: number, t: number, d: [number, number], r: number) => {
    const rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };
  const makeParticles = (element: HTMLElement) => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');
      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
        particle.style.setProperty('--rotate', `${p.rotate}deg`);
        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            if (element && element.contains(particle)) {
              element.removeChild(particle);
            }
          } catch {
            // Particle already removed
          }
        }, t);
      }, 30);
    }
  };
  const hideEffect = () => {
    if (filterRef.current) {
      filterRef.current.style.display = 'none';
    }
    if (textRef.current) {
      textRef.current.style.display = 'none';
    }
  };

  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    filterRef.current.style.display = 'grid';
    textRef.current.style.display = 'grid';
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };
  const resolveAnchor = (index: number) =>
    navRef.current?.querySelectorAll('a')[index] as HTMLElement | undefined;

  const clearParticles = () => {
    if (!filterRef.current) return;
    const particles = filterRef.current.querySelectorAll('.particle');
    particles.forEach(particle => {
      try {
        if (filterRef.current && filterRef.current.contains(particle)) {
          filterRef.current.removeChild(particle);
        }
      } catch {
        // Particle already removed
      }
    });
  };

  const updateActivationState = useCallback((anchor: HTMLElement, index: number, animateParticles: boolean) => {
    if (activeIndexRef.current !== index) {
      activeIndexRef.current = index;
      setActiveIndex(index);
    }
    updateEffectPosition(anchor);
    clearParticles();
    if (animateParticles && filterRef.current) {
      makeParticles(filterRef.current);
    }
    if (textRef.current) {
      textRef.current.classList.remove('active');
      void textRef.current.offsetWidth;
      textRef.current.classList.add('active');
    }
    // All functions (updateEffectPosition, clearParticles, makeParticles) and refs are stable
    // They're defined in the same component scope and don't change across renders
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    event.preventDefault();
    const anchor = event.currentTarget;
    updateActivationState(anchor, index, true);
    navigate(items[index].href);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const anchor = event.currentTarget;
      updateActivationState(anchor, index, true);
      navigate(items[index].href);
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const initialAnchor = resolveAnchor(activeIndexRef.current);
    if (initialAnchor) {
      updateEffectPosition(initialAnchor);
      textRef.current?.classList.add('active');
    } else {
      hideEffect();
    }
    const resizeObserver = new ResizeObserver(() => {
      const currentAnchor = resolveAnchor(activeIndexRef.current);
      if (currentAnchor) {
        updateEffectPosition(currentAnchor);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const matchedIndex = items.findIndex(item => item.href === location.pathname);
    if (matchedIndex < 0) {
      setActiveIndex(-1);
      activeIndexRef.current = -1;
      hideEffect();
      return;
    }
    const anchor = resolveAnchor(matchedIndex);
    if (!anchor) {
      return;
    }
    updateActivationState(anchor, matchedIndex, false);
  }, [location.pathname, items, updateActivationState]);

  return (
      <div className="relative gooey-nav" ref={containerRef}>
        <nav className="flex relative" style={{ transform: 'translate3d(0,0,0.01px)' }}>
          <ul
            ref={navRef}
            className="flex gap-3 md:gap-8 list-none p-0 px-2 md:px-4 m-0 relative z-[3]"
            style={{
              color: 'rgb(var(--color-primary))',
              textShadow: '0 1px 1px hsl(205deg 30% 10% / 0.2)'
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={`rounded-full relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease shadow-[0_0_0.5px_1.5px_transparent] text-primary ${activeIndex === index ? 'active' : ''
                  }`}
              >
                <a
                  href={item.href}
                  onClick={e => handleClick(e, index)}
                  onKeyDown={e => handleKeyDown(e, index)}
                  className="outline-none py-[0.5em] px-[0.6em] md:py-[0.6em] md:px-[1em] inline-block text-sm md:text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="effect filter" ref={filterRef} style={{ display: 'none' }} />
        <span className="effect text" ref={textRef} style={{ display: 'none' }} />
      </div>
  );
};

export default GooeyNav;
