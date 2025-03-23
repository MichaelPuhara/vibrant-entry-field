
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
      {withHeartAnimation && (
        <div className={`animate-heart-float absolute ${size === "sm" ? "-top-3" : size === "lg" ? "-top-7" : "-top-5"}`}>
          <img 
            src="/lovable-uploads/3bd5ff3e-5649-465a-b987-6d9900e65979.png" 
            alt="Kahu logo small"
            className="w-8 h-8"
          />
        </div>
      )}
      
      <div className={`${sizing[size]} relative bg-white rounded-full flex items-center justify-center shadow-md p-2`}>
        <img 
          src="/lovable-uploads/3bd5ff3e-5649-465a-b987-6d9900e65979.png"
          alt="Kahu logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Logo;
