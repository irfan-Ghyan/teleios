// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import logo from '../../../public/assets/images/logo.png'
// import RotatingHeadings from '../header/rotatingheading/RotatingHeading';

// const Footer = () => {
//   return (
//     <footer className="bg-[#4B1870] text-white pt-10 lg:pt-20 px-8 lg:px-20 padding-px xl:px-40 max-w-full overflow-hidden">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         <div className="flex flex-col items-start ">
//         <Image 
//             src={logo}
//             alt="Flag Icon"
//             width={200.68}
//             height={100.62}
//             className="lg:w-[170.68px] h-[70.62px]"
//           />
//           <p className='text-white font-jura text-[13px] font-bold py-4'>Experience the thrill of speed at Teleios Dome, offering dynamic group races and exclusive VIP experiences.</p>
//           <div className="flex space-x-4 mt-[15px] ">
//             <Link href="https://www.facebook.com/teleiostechofficial" target="_blank" rel="noopener noreferrer" className="border border-white border-opacity-10 px-[4px] py-[4px] w-[40px] h-[40px] hover:bg-[#D007A6]">
//               <Image src="/assets/images/Facebook.png" width={30} height={30} alt="Facebook" className="h-[30px] w-[30px]" />
//             </Link>
//             <Link href="https://www.youtube.com/@teleios_official" target="_blank" rel="noopener noreferrer" className="border border-white border-opacity-10 px-[4px] py-[4px] w-[40px] h-[40px] hover:bg-[#D007A6]">
//               <Image src="/assets/images/YouTube.png" width={30} height={30} alt="Facebook" className="h-[30px] w-[30px]" />
//             </Link>
//             <Link href="https://www.instagram.com/teleios_official/" target="_blank" rel="noopener noreferrer" className="border border-white border-opacity-10 px-[4px] py-[4px] w-[40px] h-[40px] hover:bg-[#D007A6]">
//               <Image src="/assets/images/IG.png" width={30} height={30} alt="Facebook" className="h-[30px] w-[30px]" />
//             </Link>
//             <Link href="https://www.linkedin.com/company/teleios-fz/" target="_blank" rel="noopener noreferrer" className="border border-white border-opacity-10 px-[4px] py-[4px] w-[40px] h-[40px] hover:bg-[#D007A6]">
//               <Image src="/assets/images/LinkedIn.png" width={30} height={30} alt="Facebook" className="h-[30px] w-[30px]" />
//             </Link>
//           </div>
//         </div>

//         <div className="flex flex-col ">
//           <h3 className="text-white font-orbitron text-[20px] font-normal mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li>
//               <Link href="/" className="hover:underline text-white font-jura text-[13px] font-bold">
//               HOME
//               </Link>
//             </li>
//             <li>
//               <Link href="/experinece" className="hover:underline text-white font-jura text-[13px] font-bold">
//               EXPERIENCE
//               </Link>
//             </li>
//             <li>
//               <Link href="/dome" className="hover:underline text-white font-jura text-[13px] font-bold">
//               DOME
//               </Link>
//             </li>
//             {/* <li>
//               <Link href="/events" className="hover:underline text-white font-jura text-[13px] font-bold">
//               Upcoming Events
//               </Link>
//             </li> */}
//             <li>
//               <Link href="/corporateevents" className="hover:underline text-white font-jura text-[13px] font-bold">
//               CORPORATE & CELEBRATION EVENTS
//               </Link>
//             </li>
//             <li>
//               <Link href="/education" className="hover:underline text-white font-jura text-[13px] font-bold">
//               EDUCATION
//               </Link>
//             </li>
//           </ul>
//         </div>


//         <div className="flex flex-col">
//           <h3 className="text-white font-orbitron text-[20px] font-normal mb-4">LOCATION & TIME</h3>
//           <div className=''>
//             <div className='mb-[10px]'>
//             <h3 className='text-white font-jura text-[13px] font-bold '>Address:</h3>
//             <p className='text-white font-jura text-[13px] font-bold '>D-65 - Dubai Production City - Dubai, UAE</p>
//             </div>
//             <div className='mt-[10px]'>
//             <h3 className='text-white font-jura text-[13px] font-bold '>Timing:</h3>
//             <p className='text-white font-jura text-[13px] font-bold '>Tuesday - Sunday 12PM to 11PM</p>
//             </div>
//           </div>

//         </div>

 
//         <div className="flex flex-col">
//   <h3 className="text-white font-orbitron text-[20px] font-normal mb-4">GET IN TOUCH</h3>
//   <div className="mb-[10px]">
//     <div className="flex">
//       <Image src="/assets/images/phone.png" alt="Phone Icon" height={12} width={12} className="w-[9px] h-[9px] mt-[5px]" />
//       <p className="text-white font-jura text-[13px] font-bold ml-1">Phone</p>
//     </div>
//     <div>
//       <a href="tel:+9715554894679" className="text-white font-jura text-[13px] font-bold">
//         +971 55 489 4679
//       </a>
//     </div>
//   </div>
//   <div className="mt-[10px]">
//     <div className="flex">
//       <Image src="/assets/images/email.png" alt="Email Icon" height={12} width={12} className="w-[9px] h-[9px] mt-[5px]" />
//       <p className="text-white font-jura text-[13px] font-bold ml-1">Email</p>
//     </div>
//     <p className="text-white font-jura text-[13px] font-bold">info@teleiosdome.ae</p>
//   </div>
// </div>

          
//       </div>
//       <div className=' mt-[60px] container mx-auto'>
//         <div className=' md:flex justify-between'>
//         <div>
//             <p className='text-white font-jura text-[11px] md:text-[13px] font-bold opacity-60'>All rights reserved 2024 © Teleios Dome</p>
//             </div>
//           <div className='md:text-end'><p className='text-white font-jura text-[11px] md:text-[13px] font-bold opacity-60'>Privacy Policy | Terms Conditions</p></div>
//         </div>
        
//       </div>
//       <div className="bg-banner-bg bg-cover bg-center flex items-center justify-center text-white relative pl-20">
//             <div className="">
//                 <div className='md:mb-10'>
//                 <RotatingHeadings />
//                 </div>
//             </div>
//       </div>

//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/assets/images/teleiosimages/logo.png';
import RotatingHeadings from '../header/rotatingheading/RotatingHeading';

const Footer = () => {
  return (
    <footer className="bg-[#4B1870] text-white pt-10 lg:pt-20 px-8 lg:px-20 padding-px xl:px-40 max-w-full overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <Image
            src={logo}
            alt="Flag Icon"
            width={185}
            height={152}
            className=" w-[185px] h-[52px]"
          />
          <p className="text-white font-jura text-[13px] font-bold py-4">
            Experience the thrill of speed at Teleios Dome, offering dynamic group races and exclusive VIP experiences.
          </p>
          <div className="flex space-x-4 mt-[15px]">
            <Link
              href="https://www.facebook.com/teleiostechofficial"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Image src="/assets/images/Facebook.png" width={30} height={30} alt="Facebook" className="h-[30px] w-[30px]" />
            </Link>
            <Link
              href="https://www.youtube.com/@teleios_official"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Image src="/assets/images/YouTube.png" width={30} height={30} alt="YouTube" className="h-[30px] w-[30px]" />
            </Link>
            <Link
              href="https://www.instagram.com/teleios_official/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Image src="/assets/images/IG.png" width={30} height={30} alt="Instagram" className="h-[30px] w-[30px]" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/teleios-fz/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Image src="/assets/images/LinkedIn.png" width={30} height={30} alt="LinkedIn" className="h-[30px] w-[30px]" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-white font-orbitron text-[20px] font-normal mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            {/* <li>
              <Link href="/" className="hover:underline text-white font-jura text-[13px] font-bold">
                HOME
              </Link>
            </li> */}
            <li>
              <Link href="/experience" className="hover:underline text-white font-jura text-[13px] font-bold">
                EXPERIENCES
              </Link>
            </li>
            <li>
              <Link href="/dome" className="hover:underline text-white font-jura text-[13px] font-bold">
                DOME
              </Link>
            </li>
            <li>
              <Link href="/corporateevents" className="hover:underline text-white font-jura text-[13px] font-bold">
                CORPORATE EVENTS
              </Link>
            </li>
            <li>
              <Link href="/education" className="hover:underline text-white font-jura text-[13px] font-bold">
                EDUCATION
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-white font-orbitron text-[20px] font-normal mb-4">LOCATION & TIME</h3>
          <div className="">
            <div className="mb-[10px]">
              <h3 className="text-white font-jura text-[13px] font-bold">Address:</h3>
              <Link href="https://g.co/kgs/pvUAcQh"   target="_blank"
              rel="noopener noreferrer" className="text-white font-jura text-[13px] font-bold hover:underline">D-65 - Dubai Production City - Dubai, UAE</Link>
            </div>
            <div className="mt-[10px]">
              <h3 className="text-white font-jura text-[13px] font-bold">Hours:</h3>
              <p className="text-white font-jura text-[13px] font-bold">Tuesday - Sunday 12PM to 11PM</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-white font-orbitron text-[20px] font-normal mb-4">GET IN TOUCH</h3>
          <div className="mb-[10px]">
            <div className="flex">
              <Image src="/assets/images/phone.png" alt="Phone Icon" height={12} width={12} className="w-[9px] h-[9px] mt-[5px]" />
              <p className="text-white font-jura text-[13px] font-bold ml-1">Phone</p>
            </div>
            <div>
              <Link href="tel:+9715554894679" target="_blank"
              rel="noopener noreferrer" className="text-white font-jura text-[13px] font-bold hover:underline">
                +971 55 489 4679
              </Link>
            </div>
          </div>
          <div className="mt-[10px]">
            <div className="flex">
              <Image src="/assets/images/email.png" alt="Email Icon" height={12} width={12} className="w-[9px] h-[9px] mt-[5px]" />
              <p className="text-white font-jura text-[13px] font-bold ml-1">Email</p>
            </div>
            <Link   target="_blank" rel="noopener noreferrer" href="mailto:info@teleiosdome.ae" className="text-white font-jura text-[13px] font-bold hover:underline">
              info@teleiosdome.ae
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[60px] container mx-auto">
        <div className="md:flex justify-between">
          <div>
            <p className="text-white font-jura text-[11px] md:text-[13px] font-bold opacity-60">All rights reserved 2024 © Teleios Dome</p>
          </div>
          <div className="md:text-end">
            <Link href="/privacy" className="text-white font-jura text-[11px] md:text-[13px] font-bold opacity-60 hover:underline">Privacy Policy</Link>
            <span className='mx-1 font-jura text-[11px] md:text-[13px] font-bold  text-white opacity-60'> | </span>
            <Link href="/terms&conditions" className="text-white font-jura text-[11px] md:text-[13px] font-bold opacity-60 hover:underline">Terms Conditions</Link>
          </div>
        </div>
      </div>
      <div className="bg-banner-bg bg-cover bg-center flex items-center justify-center text-white relative pl-20">
        <div className="">
          <div className="md:mb-10">
            <RotatingHeadings />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
