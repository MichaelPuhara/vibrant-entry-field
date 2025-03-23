
import { Heart } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  withHeartAnimation?: boolean;
}

const Logo = ({ size = "md", withHeartAnimation = true }: LogoProps) => {
  const sizing = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-36 h-36",
  };
  
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className={`${withHeartAnimation ? "animate-heart-float" : ""} absolute -top-5 ${size === "sm" ? "-top-3" : size === "lg" ? "-top-7" : "-top-5"}`}>
        <Heart 
          fill="#59A5D8" 
          color="#59A5D8" 
          size={size === "sm" ? 24 : size === "lg" ? 40 : 32} 
        />
      </div>
      
      <div className={`${sizing[size]} relative`}>
        {/* Hedgehog body */}
        <div className="absolute inset-0 bg-kahu-brown rounded-full transform translate-y-1/4"></div>
        
        {/* Spikes */}
        <div className="absolute inset-0 bg-kahu-brown rounded-full">
          <div className="absolute -top-1 left-1/4 w-2 h-3 bg-kahu-brown rounded-t-full transform -rotate-30"></div>
          <div className="absolute -top-2 left-1/3 w-2 h-4 bg-kahu-brown rounded-t-full"></div>
          <div className="absolute -top-2 left-1/2 w-2 h-4 bg-kahu-brown rounded-t-full transform rotate-15"></div>
          <div className="absolute -top-1 right-1/4 w-2 h-3 bg-kahu-brown rounded-t-full transform rotate-30"></div>
          <div className="absolute -top-1 right-1/3 w-2 h-3 bg-kahu-brown rounded-t-full"></div>
        </div>
        
        {/* Face */}
        <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 bg-[#E5A078] rounded-full">
          {/* Eyes */}
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-black rounded-full"></div>
          
          {/* Nose */}
          <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>
        </div>
        
        {/* Paws */}
        <div className="absolute bottom-0 left-1/4 w-3 h-2 bg-[#E5A078] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-3 h-2 bg-[#E5A078] rounded-full"></div>
      </div>
    </div>
  );
};

export default Logo;
