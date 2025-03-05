import React, { useEffect, useRef } from 'react';

const RunEmbeddedScript = ({ htmlCode }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = htmlCode;
      const scripts = containerRef.current.querySelectorAll("script");
      scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        newScript.type = oldScript.type || "text/javascript";
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });
    }
  }, []);

  return (
    <>
      <div ref={containerRef} />
    </>
    )

};

export default RunEmbeddedScript;
