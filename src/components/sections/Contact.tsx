import ImageIcon from "../ImageIcons";
const Contact = () => {

    const socials = [
        { name: 'Jhon Barry Gutang', iconLink: '/about_me/linkedin.png', link: 'https://linkedin.com/in/jhongutang' },
        { name: 'Jhon Gutang', iconLink: '/about_me/github.png', link: 'https://github.com/JhonGutang' },
        { name: 'Jhon Barry Gutang', iconLink: '/about_me/facebook.png', link: 'https://www.facebook.com/Voider.Kayle' },
        { name: 'jhonbarrygutang@gmail.com', iconLink: '/about_me/gmail.png' },
    ]
  return (
    <div className="w-full h-screen distance-from-nav flex lg:flex-row flex-col gap-15">
      <div className=" w-full flex justify-center lg:justify-end items-center">
        <img src="/contact.svg" alt="" className="w-[60vw] lg:w-[30vw]" />
      </div>
      <div className="w-full flex flex-col items-center lg:items-start lg:justify-center">
        <div className="lg:text-3xl mb-5 text-3xl">Let&apos;s Collaborate!!</div>
        <div className="flex flex-col gap-4">
        { socials.map((social, index) => (
            <div key={index} >
                <ImageIcon iconLink={social.iconLink} name={social.name} socialLink={social.link}/>
            </div>
        ))}

        </div>
      </div>
    </div>
  );
};

export default Contact;
