import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './CursorFollower.module.scss';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef();
  const offset = { x: -6, y: -92 };

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
  };

  const animate = useCallback(() => {
    setFollowerPosition((prevPos) => ({
      x: lerp(prevPos.x, mousePosition.x + offset.x, 0.1),
      y: lerp(prevPos.y, mousePosition.y + offset.y, 0.1),
    }));

    requestRef.current = requestAnimationFrame(animate);
  }, [mousePosition.x, mousePosition.y, offset.x, offset.y]);

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  return (
    <div
      className={styles['cursor-follower']}
      style={{
        transform: `translate3d(${followerPosition.x}px, ${followerPosition.y}px, 0)`,
      }}
    />
  );
};

export default CursorFollower;
