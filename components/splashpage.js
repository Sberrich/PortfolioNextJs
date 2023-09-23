import React, { useState, useEffect } from 'react';

const SplashScreen = () => {
  // State to track whether the splash screen should be shown
  const [showSplash, setShowSplash] = useState(true);

  // Simulate a delay for the splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Change the duration as needed (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  // Quote text
  const quote =
    '`Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.`';
  
  // Author
  const author = '- Steve Jobs';

  // Return the splash screen component
  return (
    showSplash && (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 transition-opacity duration-300"
        style={{ zIndex: 9999 }}
      >
        <blockquote className="text-2xl font-Moranga text-center text-gray-600 dark:text-gray-400">
          {quote}
        </blockquote>
        <p className="mt-4 font-tahu text-2xl text-gray-500 dark:text-gray-600">{author}</p>
      </div>
    )
  );
};

export default SplashScreen;
