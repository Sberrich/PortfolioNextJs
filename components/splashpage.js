import React, { useState, useEffect } from "react";
import imageUrl from "../public/assets/qr.png";
import Image from "next/image";
import { useRouter } from "next/router"; // Import the router from Next.js
import ScrollImg from "../public/assets/scroll.png";
const SplashScreen = () => {
  // State to track whether the splash screen should be shown
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter(); // Initialize the router
  const [showButton, setShowButton] = useState(false);
  // Function to dismiss the splash screen and navigate to the main content


 
  const handleScroll = () => {
    if (window.scrollY > 200) {
      // Adjust the scroll threshold as needed
      setShowSplash(false);
      router.push("/"); // Replace "/main-content" with your actual route
      window.removeEventListener("scroll", handleScroll);
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Quote text
  const quote = "`Make It Work Make It Right Make It Fast`";

  // Author
  const author = "- Kent Beck";

  // Return the splash screen component
  return (
    showSplash && (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 "
        style={{ zIndex: 9999 }}
      >
        {/* Use the <Image> component to display the image */}

        <Image
          src={imageUrl}
          alt="Splash Image"
          width={200} // Set the width of the image as needed
          height={200} // Set the height of the image as needed
          className="mb-32 border-gray-400 dark:border-gray-700"
        />



        <blockquote className="text-4xl font-Moranga mt-20 text-center text-gray-600 dark:text-gray-400">
          {quote}
        </blockquote>
        <p className="mt-4 font-tahu text-2xl text-gray-500 dark:text-gray-600">
          {author}
        </p>

<div className="animate-bounce mt-56">

        <button
            onClick={handleScroll} // You can use handleScroll to trigger the scroll behavior
            className="mt-4 text-white font-bold py-2 px-4 rounded-full w-40  light-border"
          >
            <Image
              src={ScrollImg}
              alt="Scroll Icon"
              className="h-6 w-6 mr-2" // Set the size of the icon as needed
            />
        
          </button>
</div>
        {/* Swipe button to dismiss splash and navigate to main content */}
     
      </div>
    )
  );
};

export default SplashScreen;
