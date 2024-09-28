// 'use client';

// import React, { useRef, useState, useEffect } from 'react';
// import CardComponent from './cardcomponent/CardComponent';
// import Link from 'next/link';
// import Image from 'next/image';
// import leftArrow from '../../../../public/assets/icons/left.png';
// import rightArrow from '../../../../public/assets/icons/right.png';

// const Experience = () => {
//   const scrollContainerRef = useRef(null);
//   const [experiences, setExperiences] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const sliderWidth = 273 + 16;

//   useEffect(() => {
//     const fetchExperiences = async () => {
//       const data = [
//         { title: '15 Minutes', description: 'Get to know our racing simulator with a 15-minute introductory session.', imageUrl: '/assets/images/mintue1.jpg' },
//         { title: '30 Minutes', description: 'Choose your track, and your car and enjoy 30 minutes of adrenaline.', imageUrl: '/assets/images/experience/30mn.png' },
//         { title: '60 Minutes', description: 'Are you a hardcore racer? This package will challenge your stamina and abilities!', imageUrl: '/assets/images/experience/60mn.png' },
//         { title: '90 Minutes', description: 'and all inclusive access to the Dome’s cafe for 90 minutes ', imageUrl: '/assets/images/experience/vip1.png' },
//         { title: 'Private Venue', description: 'Your comfort and your privacy with up to 19 guests in our Dome.', imageUrl: '/assets/images/experience/mintue5.png' },
//         { title: 'VIP experience', description: 'Get together with up to four other guests in our private area.', imageUrl: '/assets/images/experience/vip1.png' },
//       ];
//       setExperiences(data);
//       setLoading(false);
//     };

//     fetchExperiences();
//   }, []);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;

//     if (scrollContainer) {
//       const handleScroll = () => {
//         if (!isScrolling) {
//           const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

//           if (scrollContainer.scrollLeft >= maxScrollLeft) {
//             scrollContainer.scrollLeft = 0;
//           } else if (scrollContainer.scrollLeft <= 0) {
//             scrollContainer.scrollLeft = maxScrollLeft - sliderWidth;
//           }
//         }
//       };

//       scrollContainer.addEventListener('scroll', handleScroll);
//       return () => {
//         scrollContainer.removeEventListener('scroll', handleScroll);
//       };
//     }
//   }, [isScrolling, sliderWidth]);

//   const scrollNext = () => {
//     const scrollContainer = scrollContainerRef.current;

//     if (scrollContainer) {
//       setIsScrolling(true);
//       scrollContainer.scrollBy({
//         left: sliderWidth,
//         behavior: 'smooth',
//       });
//       setTimeout(() => setIsScrolling(false), 500);
//     }
//   };

//   const scrollPrev = () => {
//     const scrollContainer = scrollContainerRef.current;

//     if (scrollContainer) {
//       setIsScrolling(true);
//       scrollContainer.scrollBy({
//         left: -sliderWidth,
//         behavior: 'smooth',
//       });
//       setTimeout(() => setIsScrolling(false), 500);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
   
//       <div className="w-full md:pr-6 relative py-[40px] md:py-[50px] lg:py-[100px]">
//         <div className='border-solid border-b-[1px] border-white border-opacity-50 text-end'>
//           <h1 className='text-[14px] text-white font-normal font-orbitron pb-4'>EXPERIENCE</h1>
//         </div>
//         <div className='md:flex justify-between mt-[36px] md:mb-[41px]'>
//           <div>
//             <h1 className='text-[32px] md:text-[54px] text-white font-black font-orbitron'>
//               EXPERIENCES & <br />
//               COMPLETE CONTROLLED
//             </h1>
//           </div>
//           <div className="flex top-buttons items-center">
//             <div className='mt-8 md:mt-0 hidden xl:flex w-65 h-45'>
//               <button
//                 onClick={scrollPrev}
//                 className="button-slanted cursor-pointer flex items-center justify-center px-[24px] py-[16px] border-[0.5px] border-opacity-30 border-white font-jura font-bold text-white hover:bg-gradient-to-r ml-2 hover:from-[#D007A6] hover:to-[#7E51F8] transition duration-300 rounded-tl-lg rounded-br-lg hover:border-0"
//               >
//                 <Image src={leftArrow} alt="arrow" width={17.15} height={13.29} className='w-[17.15px] h-[13.29px]' />
//               </button>
//             </div>
//             <div className='mt-8 md:mt-0 hidden xl:flex w-65 h-45 button-slanted'>
//               <button
//                 onClick={scrollNext}
//                 className="cursor-pointer flex items-center justify-center px-6 py-4 border-[0.5px] border-opacity-30 border-white ml-2 font-jura font-bold text-white hover:bg-gradient-to-r hover:from-[#D007A6] hover:to-[#7E51F8] transition duration-300 rounded-tl-lg rounded-br-lg hover:border-0"
//               >
//                 <Image src={rightArrow} alt="arrow" width={17.15} height={13.29} className='w-[17.15px] h-[13.29px]' />
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="scroll-container flex justify-between overflow-hidden my-6" ref={scrollContainerRef}>
//           {[...experiences, ...experiences, ...experiences].map((experience, index) => (
//             <div key={index} className="card-wrapper w-[330px] md:w-[286px] lg:w-[286px]" style={{ minWidth: '286px', marginRight: '16px' }}>
//               <CardComponent
//                 title={experience.title}
//                 description={experience.description}
//                 imageUrl={experience.imageUrl}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="xl:hidden flex justify-center mt-4">
//           {Array.from({ length: 2 }).map((_, idx) => (
//             <button
//               key={idx}
//               onClick={idx === 0 ? scrollPrev : scrollNext}
//               className={`w-4 h-4 rounded-full mx-1 ${idx === 0 ? 'bg-white' : 'bg-gray-400'}`}
//             />
//           ))}
//         </div>
//         <div className="flex justify-center">
//           <div className='py-8 button-slanted'>
//             <Link href="/experience" className="w-[200px] h-[34px] lg:w-[233px] lg:h-[44px] px-8 py-3 bg-opacity-50 button border-[1px] border-white font-jura font-bold text-white hover:bg-gradient-to-r ml-2 hover:from-[#D007A6] hover:to-[#7E51F8] transition duration-300 rounded-tl-lg rounded-br-lg hover:border-0">
//               <span className='button-slanted-content'>SEE MORE</span>
//             </Link>
//           </div>
//         </div>
//         <style jsx>{`
//           .scroll-container {
//             scroll-snap-type: x mandatory;
//           }
//           .card-wrapper {
//             scroll-snap-align: start;
//           }
//           @media (max-width: 1024px) {
//             .top-buttons {
//               display: none;
//             }
//           }
//         `}</style>
//       </div>

//   );
// };

// export default Experience;

// 'use client';

// import React, { useRef, useState, useEffect } from 'react';
// import CardComponent from './cardcomponent/CardComponent';
// import Link from 'next/link';
// import Image from 'next/image';
// import leftArrow from '../../../../public/assets/icons/left.png';
// import rightArrow from '../../../../public/assets/icons/right.png';

// const Experience = () => {
//   const scrollContainerRef = useRef(null);
//   const [experiences, setExperiences] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const sliderWidth = 273 + 16;

//   useEffect(() => {
//     const fetchExperiences = async () => {
//       const data = [
//         { title: '20-Minute Sprint', description: 'Jump into a quick 20-minute sprint where your goal is to set the fastest lap. Perfect for those looking for a short, intense racing experience.', imageUrl: '/assets/images/mintue1.jpg', button:'BOOK NOW', link: 'https://feverup.com/m/187813'},
//         { title: '40-Minute Session', description: 'Choose between a sprint for the fastest lap or a qualifying and race session with your friends. A great option for fun and friendly competition.', imageUrl: '/assets/images/experience/30mn.png', button:'BOOK NOW', link: 'https://feverup.com/m/187813'},
//         { title: '60-Minute Session', description: 'Enjoy the full experience with a 60-minute session. Choose between a sprint for the fastest lap or a full qualifying and race session with your friends for the ultimate racing showdown.', imageUrl: '/assets/images/experience/60mn.png', button:'BOOK NOW', link: 'https://feverup.com/m/187813' },
//         { title: 'Private Events', description: 'Whether it\'s a corporate event, birthday party, or team-building exercise, we offer fully customizable packages tailored to your needs.', imageUrl: '/assets/images/experience/privateevent.jpg', button:'ENQUIRE NOW', link: 'https://wa.me/971566628585' },
//       ];
//       setExperiences(data);
//       setLoading(false);
//     };

//     fetchExperiences();
//   }, []);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;

//     const handleScroll = () => {
//       if (!isScrolling) {
//         const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

//         if (scrollContainer.scrollLeft >= maxScrollLeft) {
//           scrollContainer.scrollLeft = 0;
//         } else if (scrollContainer.scrollLeft <= 0) {
//           scrollContainer.scrollLeft = maxScrollLeft - sliderWidth;
//         }
//       }
//     };

//     const handleMouseDown = (e) => {
//       setIsDragging(true);
//       setStartX(e.pageX - scrollContainer.offsetLeft);
//       setScrollLeft(scrollContainer.scrollLeft);
//     };

//     const handleMouseMove = (e) => {
//       if (!isDragging) return;
//       e.preventDefault();
//       const x = e.pageX - scrollContainer.offsetLeft;
//       const walk = x - startX;
//       scrollContainer.scrollLeft = scrollLeft - walk;
//     };

//     const handleMouseUp = () => {
//       setIsDragging(false);
//     };

//     const handleTouchStart = (e) => {
//       setIsDragging(true);
//       setStartX(e.touches[0].pageX - scrollContainer.offsetLeft);
//       setScrollLeft(scrollContainer.scrollLeft);
//     };

//     const handleTouchMove = (e) => {
//       if (!isDragging) return;
//       const x = e.touches[0].pageX - scrollContainer.offsetLeft;
//       const walk = x - startX;
//       scrollContainer.scrollLeft = scrollLeft - walk;
//     };

//     const handleTouchEnd = () => {
//       setIsDragging(false);
//     };

//     if (scrollContainer) {
//       scrollContainer.addEventListener('scroll', handleScroll);
//       scrollContainer.addEventListener('mousedown', handleMouseDown);
//       scrollContainer.addEventListener('mousemove', handleMouseMove);
//       scrollContainer.addEventListener('mouseup', handleMouseUp);
//       scrollContainer.addEventListener('mouseleave', handleMouseUp);
//       scrollContainer.addEventListener('touchstart', handleTouchStart);
//       scrollContainer.addEventListener('touchmove', handleTouchMove);
//       scrollContainer.addEventListener('touchend', handleTouchEnd);
//     }

//     return () => {
//       if (scrollContainer) {
//         scrollContainer.removeEventListener('scroll', handleScroll);
//         scrollContainer.removeEventListener('mousedown', handleMouseDown);
//         scrollContainer.removeEventListener('mousemove', handleMouseMove);
//         scrollContainer.removeEventListener('mouseup', handleMouseUp);
//         scrollContainer.removeEventListener('mouseleave', handleMouseUp);
//         scrollContainer.removeEventListener('touchstart', handleTouchStart);
//         scrollContainer.removeEventListener('touchmove', handleTouchMove);
//         scrollContainer.removeEventListener('touchend', handleTouchEnd);
//       }
//     };
//   }, [isScrolling, sliderWidth, isDragging, scrollLeft, startX]);

//   const scrollNext = () => {
//     const scrollContainer = scrollContainerRef.current;

//     if (scrollContainer) {
//       setIsScrolling(true);
//       scrollContainer.scrollBy({
//         left: sliderWidth,
//         behavior: 'smooth',
//       });
//       setTimeout(() => setIsScrolling(false), 500);
//     }
//   };

//   const scrollPrev = () => {
//     const scrollContainer = scrollContainerRef.current;

//     if (scrollContainer) {
//       setIsScrolling(true);
//       scrollContainer.scrollBy({
//         left: -sliderWidth,
//         behavior: 'smooth',
//       });
//       setTimeout(() => setIsScrolling(false), 500);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="w-full md:pr-6 relative py-[40px] md:py-[50px] lg:py-[100px]">
//       <div className='border-solid border-b-[1px] border-white border-opacity-50 text-end'>
//         <h1 className='text-[14px] text-white font-normal font-orbitron pb-4'>EXPERIENCE</h1>
//       </div>
//       <div className='md:flex justify-between mt-[36px] md:mb-[41px]'>
//         <div>
//           <h1 className='text-[32px] md:text-[54px] text-white font-black font-orbitron'>
//             EXPERIENCES
//           </h1>
//         </div>
//         {/* <div className="flex top-buttons items-center">
//           <div className='mt-8 md:mt-0 hidden xl:flex w-65 h-45'>
//             <button
//               onClick={scrollPrev}
//               className="button-slanted cursor-pointer flex items-center justify-center px-[24px] py-[16px] border-[0.5px] border-opacity-30 border-white font-jura font-bold text-white hover:bg-gradient-to-r ml-2 hover:from-[#D007A6] hover:to-[#7E51F8] transition duration-300 rounded-tl-lg rounded-br-lg hover:border-0"
//             >
//               <Image src={leftArrow} alt="arrow" width={17.15} height={13.29} className='w-[17.15px] h-[13.29px]' />
//             </button>
//           </div>
//           <div className='mt-8 md:mt-0 hidden xl:flex w-65 h-45 button-slanted'>
//             <button
//               onClick={scrollNext}
//               className="cursor-pointer flex items-center justify-center px-6 py-4 border-[0.5px] border-opacity-30 border-white ml-2 font-jura font-bold text-white hover:bg-gradient-to-r hover:from-[#D007A6] hover:to-[#7E51F8] transition duration-300 rounded-tl-lg rounded-br-lg hover:border-0"
//             >
//               <Image src={rightArrow} alt="arrow" width={17.15} height={13.29} className='w-[17.15px] h-[13.29px]' />
//             </button>
//           </div>
//         </div> */}
//       </div>
//       <div className="scroll-container flex justify-between overflow-hidden my-6" ref={scrollContainerRef}>
//         {[...experiences, ...experiences, ...experiences].map((experience, index) => (
//           <div key={index} className="card-wrapper w-[342px] md:w-[286px] lg:w-[286px]" style={{ minWidth: '286px', marginRight: '16px' }}>
//             <CardComponent
//               title={experience.title}
//               description={experience.description}
//               imageUrl={experience.imageUrl}
//               button={experience.button}
//               link={experience.link}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="xl:hidden flex justify-center mt-4">
//         {Array.from({ length: 2 }).map((_, idx) => (
//           <button
//             key={idx}
//             onClick={idx === 0 ? scrollPrev : scrollNext}
//             className={`w-4 h-4 rounded-full mx-1 ${idx === 0 ? 'bg-white' : 'bg-gray-400'}`}
//           />
//         ))}
//       </div>
//       <div className="flex justify-center">
//         <div className='py-8 button-slanted'>
//           <Link href="/experience" className="w-[200px] h-[34px] lg:w-[233px] lg:h-[44px] px-8 py-3 bg-opacity-50 button border-[1px] border-white font-jura font-bold text-white hover:bg-gradient-to-r ml-2 hover:from-[#D007A6] hover:to-[#7E51F8] transition duration-300 rounded-tl-lg rounded-br-lg hover:border-0">
//             <span className='button-slanted-content'>MORE INFO</span>
//           </Link>
//         </div>
//       </div>
//       <style jsx>{`
//         .scroll-container {
//           scroll-snap-type: x mandatory;
//         }
//         .card-wrapper {
//           scroll-snap-align: start;
//         }
//         @media (max-width: 1024px) {
//           .top-buttons {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Experience;


// import React, { useRef, useState, useEffect } from 'react';
// import CardComponent from './cardcomponent/CardComponent';
// import Link from 'next/link';
// import Image from 'next/image';
// import leftArrow from '../../../../public/assets/icons/left.png';
// import rightArrow from '../../../../public/assets/icons/right.png';

// const Experience = () => {
//   const scrollContainerRef = useRef(null);
//   const [experiences, setExperiences] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const sliderWidth = 273 + 16;

//   useEffect(() => {
//     const fetchExperiences = async () => {
//       const data = [
//         { title: '20-Minute Sprint', description: 'Jump into a quick 20-minute sprint where your goal is to set the fastest lap. Perfect for those looking for a short, intense racing experience.', imageUrl: '/assets/images/mintue1.jpg', button:'BOOK NOW', link: 'https://feverup.com/m/187813'},
//         { title: '40-Minute Session', description: 'Choose between a sprint for the fastest lap or a qualifying and race session with your friends. A great option for fun and friendly competition.', imageUrl: '/assets/images/experience/30mn.png', button:'BOOK NOW', link: 'https://feverup.com/m/187813'},
//         { title: '60-Minute Session', description: 'Enjoy the full experience with a 60-minute session. Choose between a sprint for the fastest lap or a full qualifying and race session with your friends for the ultimate racing showdown.', imageUrl: '/assets/images/experience/60mn.png', button:'BOOK NOW', link: 'https://feverup.com/m/187813' },
//         { title: 'Private Events', description: 'Whether it\'s a corporate event, birthday party, or team-building exercise, we offer fully customizable packages tailored to your needs.', imageUrl: '/assets/images/experience/privateevent.jpg', button:'ENQUIRE NOW', link: 'https://wa.me/971566628585' },
//       ];
//       setExperiences(data);
//       setLoading(false);
//     };

//     fetchExperiences();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="w-full md:pr-6 relative py-[40px] md:py-[50px] lg:py-[100px]">
//       <div className='border-solid border-b-[1px] border-white border-opacity-50 text-end'>
//         <h1 className='text-[14px] text-white font-normal font-orbitron pb-4'>EXPERIENCE</h1>
//       </div>
//       <div className='md:flex justify-between mt-[36px] md:mb-[41px]'>
//         <div>
//           <h1 className='text-[32px] md:text-[54px] text-white font-black font-orbitron'>
//             EXPERIENCES
//           </h1>
//         </div>
//       </div>
//       <div
//   className="scroll-container flex justify-between overflow-hidden my-6"
//   ref={scrollContainerRef}
// >
//   {experiences.map((experience, index) => (
//     <div
//       key={index}
//       className="card-wrapper w-full md:w-[286px] py-4"
//       style={{ minWidth: '286px', marginRight: '16px' }}
//     >
//       <CardComponent
//         title={experience.title === '40-Minute Session' ? `⭐ ${experience.title}` : experience.title}
//         description={experience.description}
//         imageUrl={experience.imageUrl}
//         button={experience.button}
//         link={experience.link}
//       />
//     </div>
//   ))}
// </div>

//       <style jsx>{`
//         .scroll-container {
//           scroll-snap-type: x mandatory;
//         }
//         .card-wrapper {
//           scroll-snap-align: start;
//         }
//         @media (max-width: 1024px) {
//           .top-buttons {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Experience;


import React, { useRef, useState, useEffect } from 'react';
import CardComponent from './cardcomponent/CardComponent';
import Image from 'next/image';
import leftArrow from '../../../../public/assets/icons/left.png';
import rightArrow from '../../../../public/assets/icons/right.png';

const Experience = () => {
  const scrollContainerRef = useRef(null);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const fetchExperiences = async () => {
      const data = [
        { title: '20-Minute Sprint', description: 'Jump into a quick 20-minute sprint where your goal is to set the fastest lap. Perfect for those looking for a short, intense racing experience.', imageUrl: '/assets/images/mintue1.jpg', button:'BOOK NOW', link: 'https://feverup.com/m/187813' },
        { title: '40-Minute Session', description: 'Choose between a sprint for the fastest lap or a qualifying and race session with your friends. A great option for fun and friendly competition.', imageUrl: '/assets/images/experience/30mn.png', button:'BOOK NOW', link: 'https://feverup.com/m/187813' },
        { title: '60-Minute Session', description: 'Enjoy the full experience with a 60-minute session. Choose between a sprint for the fastest lap or a full qualifying and race session with your friends for the ultimate racing showdown.', imageUrl: '/assets/images/experience/60mn.png', button:'BOOK NOW', link: 'https://feverup.com/m/187813' },
        { title: 'Private Events', description: 'Whether it\'s a corporate event, birthday party, or team-building exercise, we offer fully customizable packages tailored to your needs.', imageUrl: '/assets/images/experience/privateevent.jpg', button:'ENQUIRE NOW', link: 'https://wa.me/971566628585' },
      ];
      setExperiences(data);
      setLoading(false);
    };

    fetchExperiences();

    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setIsScrolling(true);
        if (scrollContainerRef.current.scrollLeft > 100) {
          setShowScrollButton(true);
        } else {
          setShowScrollButton(false);
        }
      }
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const scrollToTop = () => {
    scrollContainerRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full relative py-[40px] md:py-[50px] lg:py-[100px]">
      <div className="border-solid border-b-[1px] border-white border-opacity-50 text-end">
        <h1 className="text-[14px] text-white font-normal font-orbitron pb-4">EXPERIENCE</h1>
      </div>
      <div className="md:flex justify-between mt-[36px] md:mb-[41px]">
        <div>
          <h1 className="text-[32px] md:text-[54px] text-white font-black font-orbitron">
            EXPERIENCES
          </h1>
        </div>
      </div>

      <div
        className="scroll-container flex flex-wrap justify-center overflow-hidden my-66"
        ref={scrollContainerRef}
      >
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="card-wrapper w-full md:w-[286px] py-4 "
            style={{ minWidth: '286px', marginRight: '16px' }}
          >
            <CardComponent
              title={experience.title === '40-Minute Session' ? `⭐ ${experience.title}` : experience.title}
              description={experience.description}
              imageUrl={experience.imageUrl}
              button={experience.button}
              link={experience.link}
            />
          </div>
        ))}
      </div>

      {/* Mobile Scroll Button */}
      {showScrollButton && (
        <div className="fixed bottom-6 right-6 md:hidden">
          <button
            onClick={scrollToTop}
            className="bg-purple-500 text-white  p-4 rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
          >
            <Image src={rightArrow} alt="scroll to top" width={24} height={24} />
          </button>
        </div>
      )}

      <style jsx>{`
        .scroll-container {
          scroll-snap-type: x mandatory;
        }
        .card-wrapper {
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
};

export default Experience;
