
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
  
  const heartSize = {
    sm: 32,
    md: 48,
    lg: 72,
  };
  
  return (
    <div className="relative flex flex-col items-center justify-center">
      {withHeartAnimation && (
        <div className={`animate-heart-float absolute ${size === "sm" ? "-top-3" : size === "lg" ? "-top-7" : "-top-5"}`}>
          <Heart 
            fill="#59A5D8" 
            color="#59A5D8" 
            size={size === "sm" ? 24 : size === "lg" ? 40 : 32} 
          />
        </div>
      )}
      
      <div className={`${sizing[size]} relative bg-white rounded-full flex items-center justify-center shadow-md`}>
        <Heart 
          className="transform scale-110"
          fill="#59A5D8" 
          color="#0096CE" 
          strokeWidth={1.5}
          size={heartSize[size]} 
        />
      </div>
    </div>
  );
};

export default Logo;
