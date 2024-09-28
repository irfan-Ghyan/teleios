// import React from 'react';


// const CorporateEvent= () => {
//   return (
//     <div className=" text-white">
//       <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
//         <div className="flex flex-col justify-center text-left lg:mb-0 px-8 py-[40px]">
//           <h1 className="font-orbitron text-[36px] lg:text-[54px] font-black text">CORPORATE EVENTS</h1>
//           <p className="text-white font-jura font-bold text-[14px] lg:text-[18px] py-4">
//             The Teleios Dome is a unique corporate event venue combining luxurious surroundings with state-of-the-art technology.
//           </p>
//           <p className="text-white font-jura font-bold text-[14px] lg:text-[18px] py-4">
//           Our stunning open-plan Reception and Lounge area is complemented by a Cafeteria and Private Conference Room.
//           </p>
//           <p className="text-white font-jura font-bold text-[14px] lg:text-[18px] py-4">
//             You and your guests can then step into our spacious Gaming Room and experience exhilarating simulator racing. For the select few, enjoy the exclusivity of our VIP room.
//           </p>
//           <p className="text-white font-jura font-bold text-[14px] lg:text-[18px] py-4">
//             A blend of advanced technology with refined surroundings, book The Teleios Dome for your next Corporate Event.
//           </p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default CorporateEvent;

'use client';

import React from 'react';
import Link from 'next/link';

const DomeData = () => {

    const domes = [
      { title: 'CORPORATE EVENTS', description: 'The Teleios Dome is a unique corporate event venue combining luxurious surroundings with state-of-the-art technology. Our stunning open-plan Reception and Lounge area is complemented by a Cafeteria and Private Conference Room. You and your guests can then step into our spacious Gaming Room and experience exhilarating simulator racing. For the select few, enjoy the exclusivity of our VIP room.   A blend of advanced technology with refined surroundings, book The Teleios Dome for your next Corporate Event.' },
    ];
  return (
    <div className="relative w-full max-w-full overflow-hidden h-[700px] xl:h-[785px] bg-cover bg-center px-4 md:px-0" style={{ backgroundImage: "url('/assets/images/experience/corbg.jpg')" }}>
 <div className="absolute  inset-0 px-4 md:flex md:flex-col md:pr-6 py-[40px] lg:py-[80px] xl:py-[80px] max-w-7xl mx-auto">
   <div className='px-4 flex flex-col justify-between md:mt-[36px] md:mb-[41px]'>
     {domes.map((dome, index) => (
       <div key={index} className='py-[15px] lg:py-[50px] md:w-[400px] lg:w-[700px] xl:w-[700px] '>
           {/* <h4 className='text-[34px] xl:text-[35px] text-[#D008A6] font-bold font-jura drop-shadow-4xl'>{dome.subtitle}</h4> */}
         <h1 className='text-[34px] md:text-[54px] text-white font-black font-orbitron drop-shadow-4xl'>{dome.title}</h1>
         <p className='md:text-[14px] lg:text-[18px] text-white font-black font-jura mt-6 text-balance drop-shadow-4xl leading-7 lg:leading-10 xl:leading-10 text-justify'>{dome.description}</p>
       </div>
     ))}
     {/* <div className="flex items-start m-bottom">
     <div className='py-10'>
       <Link href="/experience"  className="button-slanted w-[200px] lg:w-[233px] h-[44px] px-8 py-6 button font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center">
       <span className='button-slanted-content'>VIEW OPTIONS</span>
       </Link>
     </div>
   </div> */}
   </div>
   
 </div>
</div>
  )
}

export default DomeData;

