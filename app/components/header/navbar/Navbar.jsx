// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { Helmet } from 'react-helmet-async';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import logo from '../../../../public/assets/images/logo.png';
// import closenavbar from '../../../../public/assets/icons/navbarclose.png';

// const Navbar = ({ isTopBannerVisible }) => {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [navbarBg, setNavbarBg] = useState('bg-opacity-0');
//   const [showBackground, setShowBackground] = useState(true);
//   const [isScrollingDown, setIsScrollingDown] = useState(false);
//   const menuRef = useRef(null);
//   const lastScrollY = useRef(0);

//   const hiddenRoutes = ['/experience', '/dome', '/corporateevents', '/education', '/enqiuryform'];
//   const isHiddenRoute = hiddenRoutes.includes(pathname);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > 100 && isHiddenRoute) {
//       setNavbarBg('bg-[#11072C] lg:bg-[#11072C]');
//     } else if (currentScrollY > window.innerHeight) {
//       setNavbarBg('bg-[#11072C] lg:bg-[#11072C]');
//     } else {
//       setNavbarBg('bg-opacity-0');
//     }

//     // Control visibility based on scroll direction and position
//     if (pathname === '/experience') {
//       if (currentScrollY > 80) {
//         setIsScrollingDown(true);
//         setShowBackground(false);
//       } else {
//         setIsScrollingDown(false);
//         setShowBackground(true);
//       }
//     }

//     lastScrollY.current = currentScrollY;
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [pathname, isHiddenRoute]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         closeMenu();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const getDynamicMeta = () => {
//     switch (pathname) {
//       case '/experience':
//         return {
//           title: 'Experiences | Teleios Dome',
//           description: 'Discover exciting racing experiences at Teleios Dome. Book your seat now!',
//         };
//       case '/dome':
//         return {
//           title: 'Dome | Teleios Dome',
//           description: 'Explore the ultimate immersive experience at Teleios Dome.',
//         };
//       case '/corporateevents':
//         return {
//           title: 'Corporate & Celebration Events | Teleios Dome',
//           description: 'Host your next corporate event or celebration at Teleios Dome.',
//         };
//       case '/education':
//         return {
//           title: 'Education | Teleios Dome',
//           description: 'Learn and grow with our education programs at Teleios Dome.',
//         };
//       default:
//         return {
//           title: 'Teleios Dome',
//           description: 'Welcome to Teleios Dome, your premier destination for racing and events.',
//         };
//     }
//   };

//   const { title, description } = getDynamicMeta();

//   return (
//     <>
//       <Helmet>
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         <meta property="og:title" content={title} />
//         <meta property="og:description" content={description} />
//         <meta property="og:type" content="website" />
//       </Helmet>

//       {/* Background and heading visibility controlled by scroll behavior */}
//       {pathname === '/experience' && showBackground && (
//         <div
//           className="fixed top-0 left-0 w-full h-[350px] flex items-center justify-center"
//           style={{
//             backgroundImage: 'url(/assets/images/experience/exbg.png)',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             zIndex: -1,
//           }}
//         >
//           <h1 className="font-orbitron text-[34px] lg:text-[54px] text-white font-black mb-4">
//             EXPERIENCES
//           </h1>
//         </div>
//       )}

//       <nav
//         className={`fixed ${
//           isTopBannerVisible ? 'top-9' : 'top-0'
//         } w-full z-40 transition-all duration-300 px-[10px] md:px-[20px] lg:px-[20px] xl:px-[40px] py-[5px] ${navbarBg} navbar`}
//         style={{
//           zIndex: 1,
//         }}
//       >
//         <div className="flex justify-between items-center w-full h-auto py-4">
//           <div className="flex items-center">
//             <Link href="/" onClick={closeMenu}>
//               <Image
//                 src={logo}
//                 alt="Logo"
//                 width={185}
//                 height={52}
//                 className="sm:w-[185px] sm:h-[52px] md:w-[185px] md:h-[52px] lg:w-[165px] lg:h-[42px] xl:w-[165px] xl:h-[42px]"
//               />
//             </Link>
//           </div>
//           <div className="flex-grow hidden xl:flex justify-center space-x-6 md:space-x-5 lg:space-x-5">
//             <Link
//               href="/experience"
//               className="text-white font-jura text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold hover:text-[#A72CCF]"
//               onClick={closeMenu}
//             >
//               EXPERIENCES
//             </Link>
//             <Link
//               href="/dome"
//               className="text-white font-jura text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold hover:text-[#A72CCF]"
//               onClick={closeMenu}
//             >
//               DOME
//             </Link>
//             <Link
//               href="/corporateevents"
//               className="text-white text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold font-jura hover:text-[#A72CCF]"
//               onClick={closeMenu}
//             >
//               CORPORATE & CELEBRATION EVENTS
//             </Link>
//             <Link
//               href="/education"
//               className="text-white font-jura text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold hover:text-[#A72CCF]"
//               onClick={closeMenu}
//             >
//               EDUCATION
//             </Link>
//           </div>
//           <div className="hidden xl:flex items-center">
//             <Link
//               href="https://feverup.com/m/187813"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="button-slanted w-[80px] md:w-[142px] h-[39px] font-jura font-normal md:font-bold bg-gradient-to-r cursor-pointer from-[#7E51F8] to-[#D007A6] text-white transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center"
//             >
//               <span className="button-slanted-content">BOOK NOW</span>
//             </Link>
//           </div>
//           <div className="xl:hidden">
//             <button onClick={toggleMenu} className="text-white text-4xl">
//               {menuOpen ? (
//                 <Image src={closenavbar} className="h-[30px] w-[30px]" alt="close" />
//               ) : (
//                 '☰'
//               )}
//             </button>
//           </div>
//         </div>
//         {menuOpen && (
//           <div
//             ref={menuRef}
//             className="xl:hidden bg-[#ce21b7] w-[50%] absolute right-0 top-full mx-4"
//           >
//             <div className="flex flex-col items-start px-4 py-4">
//               <Link
//                 href="/experience"
//                 className="block w-full text-left px-4 py-4 text-white font-jura text-[14px] font-bold hover:text-[#A72CCF]"
//                 onClick={closeMenu}
//               >
//                 EXPERIENCES
//               </Link>
//               <Link
//                 href="/dome"
//                 className="block w-full text-left px-4 py-4 text-white font-jura text-[14px] hover:text-[#A72CCF]"
//                 onClick={closeMenu}
//               >
//                 DOME
//               </Link>
//               <Link
//                 href="/corporateevents"
//                 className="block w-full text-left px-4 py-4 text-white text-[14px] font-bold font-jura hover:text-[#A72CCF]"
//                 onClick={closeMenu}
//               >
//                 CORPORATE & CELEBRATION EVENTS
//               </Link>
//               <Link
//                 href="/education"
//                 className="block w-full text-left px-4 py-4 text-white font-jura text-[14px] font-bold hover:text-[#A72CCF]"
//                 onClick={closeMenu}
//               >
//                 EDUCATION
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;


'use client';

import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../../../../public/assets/images/logo.png';
import closenavbar from '../../../../public/assets/icons/navbarclose.png';
import Dropdown from '../dropdwon/Dropdown';

const Navbar = ({ isTopBannerVisible }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-opacity-0');
  const menuRef = useRef(null);

  const hiddenRoutes = ['/experience', '/dome', '/upcomingevents',  '/corporateevents', '/education', '/enquiry-form', '/terms&conditions', '/privacy', '/menu',];
  const isHiddenRoute = hiddenRoutes.includes(pathname);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100 && isHiddenRoute) {
      setNavbarBg('bg-[#11072C] lg:bg-[#11072C]');
    } else if (window.scrollY > window.innerHeight) {
      setNavbarBg('bg-[#11072C] lg:bg-[#11072C]');
    } else {
      setNavbarBg('bg-opacity-0');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, isHiddenRoute]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getDynamicMeta = () => {
    switch (pathname) {
      case '/experience':
        return {
          title: 'Experiences | Teleios Dome',
          description: 'Discover exciting racing experiences at Teleios Dome. Book your seat now!',
        };
      case '/dome':
        return {
          title: 'Dome | Teleios Dome',
          description: 'Explore the ultimate immersive experience at Teleios Dome.',
        };
      case '/corporateevents':
        return {
          title: 'Corporate & Celebration Events | Teleios Dome',
          description: 'Host your next corporate event or celebration at Teleios Dome.',
        };
      case '/education':
        return {
          title: 'Education | Teleios Dome',
          description: 'Learn and grow with our education programs at Teleios Dome.',
        };
      default:
        return {
          title: 'Teleios Dome',
          description: 'Welcome to Teleios Dome, your premier destination for racing and events.',
        };
    }
  };

  const { title, description } = getDynamicMeta();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Helmet>
      <nav
        className={`fixed ${isTopBannerVisible ? 'top-9' : 'top-0'
          } w-full z-40 transition-all duration-300 px-[10px] md:px-[20px] lg:px-[20px] xl:px-[40px] py-[5px] ${navbarBg} navbar`}
      // style={{
      //   backgroundImage:
      //     pathname === '/experience'
      //       ? 'url(/assets/images/experience/exbg.png)'
      //       : 'none',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
      >
        <div className="flex justify-between items-center w-full h-auto py-4">
   
          <div className="flex items-center">
            <Link href="/" onClick={closeMenu}>
              <Image
                src={logo}
                alt="Logo"
                width={185}
                height={52}
                className="sm:w-[185px] sm:h-[52px] md:w-[185px] md:h-[52px] lg:w-[165px] lg:h-[42px] xl:w-[165px] xl:h-[42px]"
              />
            </Link>
          </div>
          <div className="flex-grow hidden xl:flex justify-center space-x-6 md:space-x-5 lg:space-x-5 ">
            <Link
              href="/experience"
              className="text-white font-jura text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold hover:text-[#A72CCF] mt-1"
              onClick={closeMenu}
            >
              EXPERIENCES
            </Link>
            <Link
              href="/dome"
              className="text-white font-jura text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold hover:text-[#A72CCF] mt-1"
              onClick={closeMenu}
            >
              DOME
            </Link>
            {/* <Link href="/upcomingevents" className="text-white font-jura text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold hover:text-[#A72CCF] mt-1" onClick={closeMenu}>
                UPCOMING EVENTS
              </Link> */}
            <Link
              href="/corporateevents"
              className="text-white text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold font-jura hover:text-[#A72CCF] mt-1"
              onClick={closeMenu}
            >
              CORPORATE EVENTS
            </Link>
            <Link
              href="/education"
              className="text-white font-jura text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold hover:text-[#A72CCF] mt-1"
              onClick={closeMenu}
            >
              EDUCATION
            </Link>
            {/* <Link href="/other" className="text-white font-jura text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold hover:text-[#A72CCF] mt-1" onClick={closeMenu}>
                OTHER
              </Link>
              <Dropdown/> */}
          </div>
          <div className="hidden xl:flex items-center">
            <Link
              href="https://feverup.com/m/187813"
              target="_blank"
              rel="noopener noreferrer"
              className="button-slanted w-[80px] md:w-[142px] h-[39px] font-jura font-normal md:font-bold bg-gradient-to-r cursor-pointer from-[#7E51F8] to-[#D007A6] text-white transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center"
            >
              <span className="button-slanted-content">BOOK NOW</span>
            </Link>
          </div>
          <div className="xl:hidden">
            <button onClick={toggleMenu} className="text-white text-4xl">
              {menuOpen ? (
                <Image src={closenavbar} className="h-[30px] w-[30px]" alt="close" />
              ) : (
                '☰'
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div
            ref={menuRef}
            className=" mx-8 xl:hidden bg-[#11072C] absolute right-0 top-full "
          >
            <div className=" flex flex-col items-start px-4 py-4">
              <Link
                href="/experience"
                className="block w-full text-left px-4 py-4 text-white text-[14px] font-bold font-jura hover:text-[#A72CCF]"
                onClick={closeMenu}
              >
                EXPERIENCES
              </Link>
              <Link
                href="/dome"
                className="block w-full text-left px-4 py-4 text-white text-[14px] font-bold font-jura hover:text-[#A72CCF]"
                onClick={closeMenu}
              >
                DOME
              </Link>
              {/* <Link href="/upcomingevents" className="w-full text-left px-4 py-4 text-white text-[14px] font-bold font-jura hover:text-[#A72CCF]" onClick={closeMenu}>
                UPCOMING EVENTS
              </Link> */}
              <Link
                href="/corporateevents"
                className="block w-full text-left px-4 py-4 text-white text-[14px] font-bold font-jura hover:text-[#A72CCF]"
                onClick={closeMenu}
              >
                CORPORATE EVENTS
              </Link>
              <Link
                href="/education"
                className="block w-full text-left px-4 py-4 text-white font-jura text-[14px] font-bold hover:text-[#A72CCF]"
                onClick={closeMenu}
              >
                EDUCATION
              </Link>
              {/* <Link href="/other" className="text-left px-4 py-4 text-white font-jura text-[14px] font-bold hover:text-[#A72CCF" onClick={closeMenu}>
                OTHER
              </Link>
              <Dropdown /> */}
            </div>
          </div>
        )}
        {/* Conditionally render the heading only for the /experience route */}
        {/* {pathname === '/experience' && (
          <div className="text-center text-white py-20">
            <h1 className="font-orbitron text-[34px] lg:text-[54px] font-black mb-4">
              EXPERIENCES
            </h1>
          </div>
        )} */}
      </nav>
    </>
  );
};

export default Navbar;