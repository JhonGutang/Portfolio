const Socials = () => {
  return (
    <div className="w-full text-left mt-7 flex gap-5 items-center justify-center lg:justify-start">
      <img
        src="/about_me/facebook.png"
        alt=""
        width={30}
        className="cursor-pointer"
      />
      <img
        src="/about_me/github.png"
        alt=""
        width={30}
        className="cursor-pointer"
      />
      <img
        src="/about_me/gmail.png"
        alt=""
        width={30}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Socials;
