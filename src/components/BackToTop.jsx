import React, { useState, useEffect } from 'react';
import './BackToTop.css'; // Create this file for custom styles

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {visible && (
        <div onClick={scrollToTop} className="arrow">
          &#8679;
        </div>
      )}
    </div>
  );
};

export default BackToTop;
