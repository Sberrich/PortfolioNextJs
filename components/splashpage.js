import React, { useState, useEffect } from "react";
import imageUrl from "../public/assets/qr.png"
import Image from "next/image";
const SplashScreen = () => {
  // State to track whether the splash screen should be shown
  const [showSplash, setShowSplash] = useState(true);

  // Simulate a delay for the splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // Change the duration as needed (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  // Quote text
  const quote =
    "`Make It Work Make It Right Make It Fast`";

  // Author
  const author = "- Kent Beck";

  // Return the splash screen component
  return (
    showSplash && (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 transition-opacity"
        style={{ zIndex: 9999 }} 
      >  
      <Image
      src={imageUrl}
      alt="Splash Image"
      width={200} // Set the width of the image as needed
      height={200} // Set the height of the image as needed
      className=" border-4  mb-32 border-gray-400 dark:border-gray-700"
    />
         
        <blockquote className="text-4xl font-Moranga  mt-20 text-center text-gray-600 dark:text-gray-400">
          {quote}
        </blockquote>
        <p className="mt-4 font-tahu text-2xl text-gray-500 dark:text-gray-600">
          {author}
        </p>
      </div>
    )
  );
};

export default SplashScreen;
