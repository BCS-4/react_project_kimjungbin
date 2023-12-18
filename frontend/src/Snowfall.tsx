import React, { useEffect } from "react";
import "./Snowfall.css";

const Snowfall: React.FC = () => {
  useEffect(() => {
    const snowflakesContainer = document.createElement("div");
    snowflakesContainer.className = "snowflakes-container";
    document.body.appendChild(snowflakesContainer);

    // 눈송이 생성 및 애니메이션
    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * window.innerWidth}px`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.opacity = `${Math.random()}`;
      snowflakesContainer.appendChild(snowflake);

      setTimeout(() => {
        snowflakesContainer.removeChild(snowflake);
      }, 5000); // 5초 후에 눈송이 제거
    };

    const snowfallInterval = setInterval(createSnowflake, 100); // 0.1초 간격으로 눈송이 생성

    return () => {
      clearInterval(snowfallInterval);
      document.body.removeChild(snowflakesContainer);
    };
  }, []);

  return null;
};

export default Snowfall;
