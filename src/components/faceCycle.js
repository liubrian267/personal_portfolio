"use client";
import React, { useState, useEffect } from "react";

const faces = ["(｡◕‿◕｡)/", " (ಠ_ಠ)", " (⌐■_■)"];

export default function FaceCycle() {
  const [currentFaceIndex, setCurrentFaceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle the typing and deleting animations
  useEffect(() => {
    let animationInterval;
    
    if (isDeleting) {
      // Deletion animation
      if (displayText.length === 0) {
        // Once fully deleted, move to the next face and start typing
        setIsDeleting(false);
        setCurrentFaceIndex(prevIndex => (prevIndex + 1) % faces.length);
      } else {
        // Continue deleting characters one by one
        animationInterval = setInterval(() => {
          setDisplayText(prev => prev.substring(0, prev.length - 1));
        }, 100);
      }
    } else {
      // Typing animation
      const currentFace = faces[currentFaceIndex];
      
      if (displayText.length < currentFace.length) {
        // Continue typing characters one by one
        animationInterval = setInterval(() => {
          setDisplayText(prev => prev + currentFace.charAt(prev.length));
        }, 100);
      } else {
        // Once fully typed, wait before starting deletion
        animationInterval = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }
    
    return () => clearInterval(animationInterval);
  }, [displayText, isDeleting, currentFaceIndex]);

  return (
    <div className="font-mono h-10 flex items-center justify-center">
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
}