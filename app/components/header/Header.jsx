// 'use client';

// import { usePathname } from 'next/navigation';
// import TopBanner from '../header/top/TopBanner';
// import Navbar from './navbar/Navbar';
// import BottomBanner from '../header/bottom/Bottombanner';
// import { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet-async'; 

// const Header = () => {
//   const pathname = usePathname();
//   const [isTopBannerVisible, setIsTopBannerVisible] = useState(true);

//   const hiddenRoutes = [
//     '/experiencedetails',
//     '/experience',
//     '/upcomingevents',
//     '/dome',
//     '/education',
//     '/corporateevents',
//     '/enqiuryform',
//     '/terms&conditions',
//     '/privacy',
//   ];

//   const shouldHideBannersAndBackground = hiddenRoutes.includes(pathname);

//   useEffect(() => {
//     if (shouldHideBannersAndBackground) {
//       setIsTopBannerVisible(false);
//     }
//   }, [pathname, shouldHideBannersAndBackground]);

//   const handleCloseTopBanner = () => {
//     setIsTopBannerVisible(false);
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Header | Teleios Dome</title>
//         <meta
//           name="description"
//           content="Explore thrilling experiences at Teleios Dome with exciting speed challenges, group races, and VIP experiences."
//         />
//         <meta property="og:title" content="Teleios Dome Experiences" />
//         <meta
//           property="og:description"
//           content="Get on the most thrilling seat at Teleios Dome. Experience the excitement of speed, challenge your friends in group races, or enjoy a tailored VIP experience."
//         />
//         <meta property="og:image" content="/assets/images/header-bg.jpg" />
//       </Helmet>
//       <div
//         className={`relative max-w-full overflow-hidden ${
//           shouldHideBannersAndBackground ? 'h-[100px]' : 'bg-header-bg bg-cover bg-center min-h-screen'
//         } text-white flex flex-col justify-between`}
//       >
//         {/* Overlay Background */}
//         {!shouldHideBannersAndBackground && (
//           <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
//         )}
        
//         {/* Content */}
//         <div className={`relative z-10 xl:py-[32px] ${isTopBannerVisible ? '' : 'pt-0'}`}>
//           {!shouldHideBannersAndBackground && isTopBannerVisible && <TopBanner onClose={handleCloseTopBanner} />}
//           <Navbar isTopBannerVisible={isTopBannerVisible} />
//         </div>
//         {/* <div className="relative z-10">
//           {!shouldHideBannersAndBackground && <BottomBanner />}
//           {!shouldHideBannersAndBackground && (
//             <div className="md:flex md:justify-between items-center px-8 md:px-12 lg:px-12 xl:pl-[6rem] xl:pr-[8rem] 2xl:pl-[22rem] 2xl:pr-[23rem] pb-20">
//               <div>
//                 <p className="text-[14px] md:text-[18px] lg:text-[18px] mb-4 font-jura font-medium lg:font-medium">
//                   Get on the most thrilling seat at Teleios Dome. Experience the
//                   <br />
//                   excitement of speed, challenge your friends in group races,
//                   <br />
//                   or live a tailored VIP experience.
//                 </p>
//               </div>
//             </div>
//           )}
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default Header;

// 'use client';

// import { usePathname } from 'next/navigation';
// import TopBanner from '../header/top/TopBanner';
// import Navbar from './navbar/Navbar';
// // import BottomBanner from '../header/bottom/Bottombanner';
// import { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet-async';
// import Image from 'next/image';
// import Corprate from '../../components/corporate/Corprate';

// const Header = () => {
//   const pathname = usePathname();
//   const [isTopBannerVisible, setIsTopBannerVisible] = useState(true);
//   const [showCorpratePopup, setShowCorpratePopup] = useState(false); // State to control Corprate popup visibility

//   const hiddenRoutes = [
//     '/experiencedetails',
//     '/experience',
//     '/upcomingevents',
//     '/dome',
//     '/education',
//     '/corporateevents',
//     '/enqiuryform',
//     '/terms&conditions',
//     '/privacy',
//   ];

//   const shouldHideBannersAndBackground = hiddenRoutes.includes(pathname);

//   useEffect(() => {
//     if (shouldHideBannersAndBackground) {
//       setIsTopBannerVisible(false);
//     }
//   }, [pathname, shouldHideBannersAndBackground]);

//   const handleCloseTopBanner = () => {
//     setIsTopBannerVisible(false);
//   };

//   const handlePlayButtonClick = () => {
//     setShowCorpratePopup(true); // Show the Corprate component as a popup
//   };

//   const handleClosePopup = () => {
//     setShowCorpratePopup(false); // Close the Corprate popup
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Header | Teleios Dome</title>
//         <meta
//           name="description"
//           content="Explore thrilling experiences at Teleios Dome with exciting speed challenges, group races, and VIP experiences."
//         />
//         <meta property="og:title" content="Teleios Dome Experiences" />
//         <meta
//           property="og:description"
//           content="Get on the most thrilling seat at Teleios Dome. Experience the excitement of speed, challenge your friends in group races, or enjoy a tailored VIP experience."
//         />
//         <meta property="og:image" content="/assets/images/header-bg.jpg" />
//       </Helmet>
//       <div
//         className={`relative max-w-full overflow-hidden ${
//           shouldHideBannersAndBackground ? 'h-[100px]' : 'bg-header-bg bg-cover bg-center min-h-screen'
//         } text-white flex flex-col justify-between`}
//       >
//         {/* Overlay Background */}
//         {!shouldHideBannersAndBackground && (
//           <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
//         )}

//         {/* Video Play Button */}
//         {!shouldHideBannersAndBackground && (
          
//           <button
//             className="absolute top-40 right-10 z-20 p-2 rounded-full hover:opacity-80 transition"
//             onClick={handlePlayButtonClick}
//           >
//             <div className='flex'>
//             <h1 className='mt-5 text-[14px] md:text-[24px] text-white font-black font-orbitron'>Watch</h1>
//             <Image src="/assets/video/play.png" width={80} height={80} alt="Play Video" />
//             </div>
            
//           </button>
//         )}

//         {/* Corprate Component Popup */}
//         {showCorpratePopup && (
//           <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
//             <div className="relative w-full max-w-6xl bg-white p-4 rounded-lg">
//               <button
//                 className="absolute top-2 right-2 text-black text-2xl"
//                 onClick={handleClosePopup}
//               >
//                 &times;
//               </button>
//               <Corprate /> 
//             </div>
//           </div>
//         )}

//         {/* Content */}
//         <div className={`relative z-10 xl:py-[32px] ${isTopBannerVisible ? '' : 'pt-0'}`}>
//           {!shouldHideBannersAndBackground && isTopBannerVisible && (
//             <TopBanner onClose={handleCloseTopBanner} />
//           )}
//           <Navbar isTopBannerVisible={isTopBannerVisible} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;



'use client';

import { usePathname } from 'next/navigation';
import TopBanner from '../header/top/TopBanner';
import Navbar from './navbar/Navbar';
// import BottomBanner from '../header/bottom/Bottombanner';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Image from 'next/image';
import Corprate from '../../components/corporate/Corprate';

const Header = () => {
  const pathname = usePathname();
  const [isTopBannerVisible, setIsTopBannerVisible] = useState(true);
  const [showCorpratePopup, setShowCorpratePopup] = useState(false); // State to control Corprate popup visibility

  const hiddenRoutes = [
    '/experiencedetails',
    '/experience',
    '/upcomingevents',
    '/dome',
    '/education',
    '/corporateevents',
    '/enquiry-form',
    '/terms&conditions',
    '/privacy',
    '/menu',
  ];

  const shouldHideBannersAndBackground = hiddenRoutes.includes(pathname);

  useEffect(() => {
    if (shouldHideBannersAndBackground) {
      setIsTopBannerVisible(false);
    }
  }, [pathname, shouldHideBannersAndBackground]);

  const handleCloseTopBanner = () => {
    setIsTopBannerVisible(false);
  };

  const handlePlayButtonClick = () => {
    setShowCorpratePopup(true); // Show the Corprate component as a popup
  };

  const handleClosePopup = () => {
    setShowCorpratePopup(false); // Close the Corprate popup
  };

  // Scroll to target section when down arrow is clicked
  const scrollToSection = () => {
    const targetSection = document.getElementById('target-section'); 
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Header | Teleios Dome</title>
        <meta
          name="description"
          content="Explore thrilling experiences at Teleios Dome with exciting speed challenges, group races, and VIP experiences."
        />
        <meta property="og:title" content="Teleios Dome Experiences" />
        <meta
          property="og:description"
          content="Get on the most thrilling seat at Teleios Dome. Experience the excitement of speed, challenge your friends in group races, or enjoy a tailored VIP experience."
        />
        <meta property="og:image" content="/assets/images/header-bg.jpg" />
      </Helmet>
      <div
        className={`relative max-w-full overflow-hidden ${
          shouldHideBannersAndBackground ? 'h-[100px]' : 'bg-header-bg bg-cover bg-center min-h-screen'
        } text-white flex flex-col justify-between`}
      >

         {/* Add a video background if not hiding banners and backgrounds */}
  {!shouldHideBannersAndBackground && (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute w-full h-full object-cover z-0"
    >
      <source src="/assets/video/dome.mp4" type="video/mp4" />
 
    </video>
  )}

        {/* Overlay Background */}
        {!shouldHideBannersAndBackground && (
          <div className="absolute inset-0 bg-[#11072C] bg-opacity-30 z-0"></div>
        )}

        {/* Video Play Button
        {!shouldHideBannersAndBackground && (
          <button
            className="absolute bottom-40 sm:top-20 md:top-20 lg:top-20 xl:top-20 right-0 md:right-10 lg:right-10 xl:right-10 z-20 p-2 rounded-full hover:opacity-80 transition"
            onClick={handlePlayButtonClick}
          >
            <div className="flex">
              <h1 className="mt-5 text-[24px] text-white font-black font-orbitron">
                Watch
              </h1>
              <Image src="/assets/video/play.png" width={80} height={80} alt="Play Video" />
            </div>
          </button>
        )} */}

{!shouldHideBannersAndBackground && (
  <div className="absolute inset-0 z-10"></div>
)}

{/* Play Button for video popup or other interactions */}
<button
  className="absolute bottom-40 md:top-20 lg:top-20 xl:top-20 right-2 md:right-10 lg:right-10 xl:right-10 z-30 p-2 rounded-full hover:opacity-80 transition"
  onClick={handlePlayButtonClick}
>
  <div className="flex">
    {/* <h1 className="mt-5 text-[24px] text-white font-black font-orbitron">
      Watch and Listen
    </h1> */}
    <Image src="/assets/video/play.png" width={80} height={80} alt="Play Video" />
  </div>
</button>

        {/* Down Arrow Button - Only show on the home page */}
        {pathname === '/' && (
          <button
            className="absolute bottom-10 md:bottom-20 lg:bottom-20 xl:bottom-20 left-1/2 transform -translate-x-1/2 z-20 p-2 rounded-full hover:opacity-80 transition"
            onClick={scrollToSection}
          >
            <Image
              src="/assets/images/arrowdpown.png" 
              width={40}
              height={40}
              alt="Scroll Down"
            />
          </button>
        )}

        {/* Corprate Component Popup */}
        {showCorpratePopup && (
          <div className="fixed inset-0 bg-[#11072C] bg-opacity-100 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-7xl bg-white px-4 py-4 rounded-lg max-w-custom">
              <button
                className="absolute top-2 right-2 text-black text-2xl"
                onClick={handleClosePopup}
              >
                &times;
              </button>
              <Corprate />
            </div>
          </div>
        )}

        {/* Content */}
        <div className={`relative z-10 xl:py-[32px] ${isTopBannerVisible ? '' : 'pt-0'}`}>
          {!shouldHideBannersAndBackground && isTopBannerVisible && (
            <TopBanner onClose={handleCloseTopBanner} />
          )}
          <Navbar isTopBannerVisible={isTopBannerVisible} />
        </div>
      </div>
    </>
  );
};

export default Header;
