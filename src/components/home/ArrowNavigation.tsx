import { useState } from "react";
import Image from "next/image";

interface ArrowNavigationProps {
  scrollDivRef: React.RefObject<HTMLDivElement | null>;
}
const ArrowNavigation: React.FC<ArrowNavigationProps> = ({ scrollDivRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleLeftClick = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollLeft -= 100;
    }
  };

  const handleRightClick = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollLeft += 100;
    }
  };

  // const handleLeftClick = () => {
  //   console.log("left clicked");
  //   setCurrentIndex(prev => Math.max(prev - 1, 0));
  // };

  // const handleRightClick = () => {
  //   console.log("right clicked");
  //   setCurrentIndex(prev => prev + 1);
  // };

  return (
    <div className="flex gap-2 sm:gap-4 w-full sm:w-auto h-auto justify-center">
      <div className="cursor-pointer" onClick={handleLeftClick}>
        <Image
          src="/arrows/left.png"
          alt="Left Arrow"
          width={34}
          height={34}
          className="bg-gray-300 rounded-full m-4"
        />
      </div>
      <div className="cursor-pointer" onClick={handleRightClick}>
        <Image
          src="/arrows/right.png"
          alt="Right Arrow"
          width={34}
          height={34}
          className="bg-gray-300 rounded-full m-4"
        />
      </div>
      {/* <div>
        Current index: {currentIndex}
      </div> */}
    </div>
  );
};

export default ArrowNavigation;
