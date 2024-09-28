// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import bahrain from '../../../public/assets/images/bahrain.png';

// const BahrainParty = () => {

//   return (
//     <div className="w-full max-w-full lg:overflow-hidden xl:h-[700px] px-4 bg-cover bg-center flex items-center justify-center mx-auto">
//       <div className="inset-0 bg-transparent flex flex-col items-center justify-center md:flex-col md:pr-6">
//         <div className="flex flex-col justify-between pt-[20px] py-[30px] items-center">
//           {domes.map((dome, index) => (
//             <div
//               key={index}
//               className="flex flex-col lg:flex-row lg:space-x-8 mb-10 lg:mb-0 w-full max-w-7xl items-center"
//             >
//               <div className="lg:w-1/2 flex justify-center lg:hidden mb-6">
//                 <Image src={bahrain} width={520} height={566} alt="lounge" className="h-[460px] w-[430px] xl:h-[566px] xl:w-[520px]" />
//               </div>
//               <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center md:text-left mb-6 lg:mb-0">
//                 <h1 className="text-[24px] lg:text-[34px] text-white font-black font-orbitron">{dome.title}</h1>
//                 <p className="w-[340px] md:w-[550px] xl:w-[600px] md:text-[14px] lg:text-[18px] text-white font-bold font-jura mt-6">
//                   {dome.description}
//                 </p>
//                 <div className="py-10">
//                   <div>
//                     <Link
//                       href="/explore"
//                       className="button-slanted w-[300px] md:w-[475px] h-[44px] px-4 py-6 button font-jura font-boldbuton border-[1px] border-white hover:bg-gradient-to-r hover:from-[#7E51F8] hover:to-[#D007A6] text-white transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center hover:border-0"
//                     >
//                       <span className="button-slanted-content md:text-[14px] lg:text-[18px] text-white font-bold font-jura">
//                         LEARN MORE ABOUT VIRTUAL GP
//                       </span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="lg:w-1/2 flex justify-center lg:justify-end hidden lg:flex">
//                 <Image src={bahrain} width={520} height={566} alt="lounge" className="h-[460px] w-[430px] xl:h-[566px] xl:w-[520px]" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BahrainParty;


'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bahrain from '../../../public/assets/images/events/img3.png';

const BahrainParty = () => {
  const [dynamicContent, setDynamicContent] = useState({
    title: 'BAHRAIN GP WATCH PARTY', 
    description: 'Experience the Teleios Dome Virtual Grand Prix, mirroring the 2024 Formula 1 calendar with 24 races. Compete weekly before the real F1 Grand Prix. Earn points for the overall championship. Thursdays at 8pm precede each F1 weekend. Prizes include weekly rewards and a championship pool of 100k AED.', 
  });

  const updateDynamicContent = (newTitle, newDescription) => {
    setDynamicContent({
      title: newTitle,
      description: newDescription,
    });
  };


  return (
    <div className="w-full max-w-full lg:overflow-hidden xl:h-[700px] px-4 bg-cover bg-center flex items-center justify-center mx-auto">
      <div className="inset-0 bg-transparent flex flex-col items-center justify-center md:flex-col md:pr-6">
        <div className="flex flex-col justify-between pt-[20px] py-[30px] items-center">
          <div className="flex flex-col lg:flex-row lg:space-x-8 mb-10 lg:mb-0 w-full max-w-7xl items-center">
            <div className="lg:w-1/2 flex justify-center lg:hidden mb-6">
              <Image
                src={bahrain}
                width={520}
                height={566}
                alt="lounge"
                className="h-[460px] w-[430px] xl:h-[566px] xl:w-[520px]"
              />
            </div>
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center md:text-left mb-6 lg:mb-0">
              <h1 className="text-[24px] lg:text-[34px] text-white font-black font-orbitron">
                {dynamicContent.title}
              </h1>
              <p className="w-[340px] md:w-[550px] xl:w-[600px] md:text-[14px] lg:text-[18px] text-white font-bold font-jura mt-6">
                {dynamicContent.description}
              </p>
              <div className="py-10">
                <div>
                  <Link
                    href="/explore"
                    className="button-slanted w-[300px] md:w-[475px] h-[44px] px-4 py-6 button font-jura font-boldbuton border-[1px] border-white hover:bg-gradient-to-r hover:from-[#7E51F8] hover:to-[#D007A6] text-white transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center hover:border-0"
                  >
                    <span className="button-slanted-content md:text-[14px] lg:text-[18px] text-white font-bold font-jura">
                      LEARN MORE ABOUT VIRTUAL GP
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end hidden lg:flex">
              <Image
                src={bahrain}
                width={520}
                height={566}
                alt="lounge"
                className="h-[460px] w-[430px] xl:h-[566px] xl:w-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BahrainParty;




