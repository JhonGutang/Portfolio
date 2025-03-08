import { Home, UserRound, Files, Mails } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NavbarProps {
  scrollTo: (section: 'hero' | 'about' | 'projects') => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollTo }) => {
  type SectionType = 'hero' | 'about' | 'projects';

  const [activeSection, setActiveSection] = useState<SectionType>('hero');

  const navItems = [
    { icon: Home, text: "Home", section: "hero" },
    { icon: UserRound, text: "About", section: "about" },
    { icon: Files, text: "Projects", section: "projects" },
    { icon: Mails, text: "Contact", section: "contact" }
  ] as const;

  const sections: Array<{id: SectionType, section: SectionType}> = [
    { id: "hero", section: "hero" },
    { id: "about", section: "about" },
    { id: "projects", section: "projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return false;
        
        const { top, bottom } = element.getBoundingClientRect();
        const midpoint = window.innerHeight / 2;
        return top <= midpoint && bottom >= midpoint;
      });

      if (currentSection) {
        setActiveSection(currentSection.section);
      }
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <div className="w-full h-[10vh] flex justify-center p-4 fixed left-0 z-10">
      <div className="px-6 h-full border-2 rounded-full flex justify-center items-center gap-6" style={{backgroundColor: '#29232E'}}>
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center cursor-pointer"
            whileTap={{ scale: 0.9 }}
            whileHover="hover"
            onClick={() => {
              scrollTo(item.section as 'hero' | 'about' | 'projects');
              setActiveSection(item.section as 'hero' | 'about' | 'projects');
            }}
          >
            <item.icon />
            <motion.span
              className="overflow-hidden ml-1"
              initial={{ width: 0, opacity: 0 }}
              animate={activeSection === item.section ? { width: "auto", opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {item.text}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
