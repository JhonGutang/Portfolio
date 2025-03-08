interface SocialIconProps {
  name?: string;
  iconLink: string;
}

const ImageIcon: React.FC<SocialIconProps> = ({ name, iconLink }) => {
  return (
    <div className="flex gap-3 items-center cursor-pointer">
      <img src={iconLink} alt="" width={30} />
      {name && (
        <div 
          className="text-xl lg:text-lg animate-slideIn"
          style={{
            animation: 'slideIn 0.3s ease-out',
          }}
        >
          {name}
        </div>
      )}
    </div>
  );
};

export default ImageIcon;
