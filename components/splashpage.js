import React, { useState, useEffect } from "react";
import Subject from "../public/Subject2.png";
import Image from "next/image";
const SplashScreen = () => {
  // Quote text
  const quote = "`Make It Work Make It Right Make It Fast`";

  // Author
  const author = "- Kent Beck";

  // State to control the visibility of the splash screen
  const [showSplash, setShowSplash] = useState(true);

  // Function to hide the splash screen after a delay (e.g., 3 seconds)
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Adjust the delay as needed
    return () => clearTimeout(splashTimeout);
  }, []);

  // CSS classes for fade-in and fade-out transitions
  const splashClass = showSplash ? "fade-in" : "fade-out";

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 ${splashClass}`}
      style={{ zIndex: 9999 }}
    >
      <Image
        src={Subject}
        width={100}
        height={100}
        objectFit="contain"
        alt="subject"
        className=" animate-pulse"
      />
      <blockquote className="text-4xl font-Moranga mt-20 text-center text-gray-600 dark:text-gray-400">
        {quote}
      </blockquote>
      <p className="mt-4 font-tahu text-2xl text-gray-500 dark:text-gray-600">
        {author}
      </p>
    </div>
  );
};

export default SplashScreen;
