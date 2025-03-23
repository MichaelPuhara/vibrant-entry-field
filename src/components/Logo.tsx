
interface LogoProps {
  size?: "sm" | "md" | "lg";
  withHeartAnimation?: boolean;
}

const Logo = ({ size = "md", withHeartAnimation = false }: LogoProps) => {
  const sizing = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-36 h-36",
  };
  
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className={`${sizing[size]} relative bg-white rounded-full flex items-center justify-center shadow-md p-2 overflow-hidden`}>
        <img 
          src="/lovable-uploads/3bd5ff3e-5649-465a-b987-6d9900e65979.png"
          alt="Kahu logo"
          className="w-full h-full object-contain rounded-full"
        />
      </div>
    </div>
  );
};

export default Logo;
