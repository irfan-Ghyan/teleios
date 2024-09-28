// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const RaceExperience = ({ imageUrl, description, title }) => {
//   return (
//     <div className="overflow-hidden bg-[#371F76] mt-5 xl:mt-20 flex flex-col items-center h-[600px] w-[360px] mx-auto">
//       <div className="flex justify-center items-center w-[360px] h-[282px]">
//         <Image src={imageUrl} alt="Product" width={360} height={282} className="w-[360px] h-[282px] object-cover" />
//       </div>
//       <div className='flex flex-col justify-between items-center mx-[20px] pt-4 flex-1 w-full'>
//         <div>
//           <h1 className="text-white text-[18px] font-orbitron font-bold px-8">{title}</h1>
//           <p className="text-white text-[18px] font-jura font-bold py-4 px-8">{description}</p>
//         </div>
//         <div className="pt-[19px] pb-[22px]">
//           <Link
//             className="button-slanted cursor-pointer w-[280px] lg:w-[310px] h-[44px] font-jura font-normal md:font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center relative overflow-hidden"
//             href="https://feverup.com/m/187813"
//           >
//             <span className='button-slanted-content'>BOOK NOW</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RaceExperience;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RaceExperience = ({ imageUrl, description, title }) => {
  return (
    <div className="overflow-hidden bg-[#371F76] mt-5 xl:mt-20 flex flex-col items-center h-[600px] w-[363px] mx-auto">
      <div className="flex justify-center items-center w-[363px] h-[282px]">
        <Image src={imageUrl} alt="Product" width={363} height={282} className="w-[363px] h-[282px] object-cover" />
      </div>
      <div className='flex flex-col justify-between items-center mx-[20px] pt-4 flex-1 w-full'>
        <div>
          <h1 className="text-white text-[18px] font-orbitron font-bold px-8">{title}</h1>
          <p className="text-white text-[18px] font-jura font-bold py-4 px-8 text-justify">{description}</p>
        </div>
        <div className="pt-[19px] pb-[22px]">
          <Link
            className="button-slanted cursor-pointer w-[280px] lg:w-[310px] h-[44px] font-jura font-normal md:font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center relative overflow-hidden"
            href="https://feverup.com/m/187813"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className='button-slanted-content'>BOOK NOW</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RaceExperience;
