import { motion } from "framer-motion";


interface ImageIconProps {
  name?: string;
  iconLink: string;
  socialLink?: string;
  withBorder?: boolean;
  expandWhenHovered?: boolean;
}

const ImageIcon: React.FC<ImageIconProps> = ({
  name,
  iconLink,
  socialLink,
  withBorder = false,
  expandWhenHovered = false
}) => {
  const hoverAnimation = {
    scale: expandWhenHovered ? 1.1 : 1,
    transition: { duration: 0.2 }
  };

  return (
    <motion.div 
      className={`flex gap-2 items-center cursor-pointer ${withBorder ? 'border-2 p-5 w-fit' : ''}`}
      whileHover={hoverAnimation}
    >
      <img src={iconLink} alt="" width={30} />
      {name && (
        <div
          className="text-sm lg:text-lg animate-slideIn"
          style={{
            animation: "slideIn 0.3s ease-out",
          }}
        >
          {socialLink ? (
            <a href={socialLink} target="_blank">{name}</a>
          ) : (
            <div>{name}</div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ImageIcon;
