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

  // Set a fixed width and height for the icon container to ensure consistency
  const ICON_SIZE = 30;

  return (
    <motion.div 
      className={`flex gap-2 items-center cursor-pointer ${withBorder ? 'border-2 p-5 w-fit' : ''}`}
      whileHover={hoverAnimation}
      style={{
        minHeight: ICON_SIZE,
        minWidth: ICON_SIZE,
      }}
    >
      <div
        style={{
          width: ICON_SIZE,
          height: ICON_SIZE,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <img
          src={iconLink}
          alt=""
          style={{
            width: ICON_SIZE,
            height: ICON_SIZE,
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
      {name && (
        <div
          className="text-sm lg:text-lg animate-slideIn"
          style={{
            animation: "slideIn 0.3s ease-out",
          }}
        >
          {socialLink ? (
            <a href={socialLink} target="_blank" rel="noopener noreferrer">{name}</a>
          ) : (
            <div>{name}</div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ImageIcon;
