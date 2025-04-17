"use client";
import React, { useState, useEffect } from "react";

const faces = [" (｡◕‿◕｡)", " ಠ_ಠ", " (⌐■_■)"];

export default function FaceCycle() {
  const [currentFaceIndex, setCurrentFaceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");


  //remoutes whenever index is updated since it is a dependency, prints the new face
  useEffect(() => {
    setDisplayText("");
    
    const currentFace = faces[currentFaceIndex];
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < currentFace.length) {
        setDisplayText(prev => prev + currentFace.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [currentFaceIndex]);
  
  // change face every 3 seconds
  useEffect(() => {
    const faceChangeInterval = setInterval(() => {
      setCurrentFaceIndex(prevIndex => (prevIndex + 1) % faces.length);
    }, 3000);
    
    return () => clearInterval(faceChangeInterval);
  }, []);

  return <div>{displayText}</div>;
}