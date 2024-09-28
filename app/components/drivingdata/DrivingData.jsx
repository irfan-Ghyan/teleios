// 'use client';

// import React from 'react';

// import Link from 'next/link';

// const DrivingData = () => {
//   const domes = [
//     { title: 'Safety Driving', description: 'Safety Driving: Talk with officials on road safety and experience real-world driving conditions in a safe environment. Our specialized program, tailored for ages 15+, integrates traffic simulation into our simulators. Students practice driving skills in realistic scenarios to prepare for the road with confidence. ', imageUrl: '/assets/images/education/police.png' },
   
//   ];
//   const scrollToSection = () => {
//     const targetSection = document.getElementById('target-section');
//     if (targetSection) {
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="relative w-full lg:h-[499px] h-[600px] max-w-full overflow-hidden flex lg:mb-[100px]">
//       {domes.map((dome, index) => (
//         <div
//           key={index}
//           className="absolute w-full h-full bg-[#11072C] bg-opacity-30 lg:p-10 sm:p-4 "
//           style={{
//             backgroundImage: `url(${dome.imageUrl})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           <div className="absolute inset-0 bg-[#11072C] bg-opacity-30 z-0"></div>
//           <div className="relative flex flex-col px-4 lg:px-40 padding-px items-start justify-end h-full bg-opacity-50 pb-10 md:pb-0 lg:pb-0 xl:pb-0">
//             <h2 className="text-[32px] md:text-[54px] mb-4 text-white font-black font-orbitron text-shadow:_0_1px_0_rgb(0_0_0_/_40%)">{dome.title}</h2>
//             <p className="text-[18px] mb-4 text-white font-bold font-jura text-shadow:_0_1px_0_rgb(0_0_0_/_40%) text-justify">{dome.description}</p>
//             <div className=" w-full flex lg:justify-end justify-center">
//               <button
//                onClick={scrollToSection}
//                 className="w-[200px] lg:w-[233px] h-[44px] px-8 py-6 button-slanted font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center"
//               >
//                 <span className="button-slanted-content">ENQUIRY NOW</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DrivingData;


'use client';

import React from 'react';
import Link from 'next/link';

const DrivingData = () => {


  const trainings = [
    {
      title: 'Safety Driving',
      description:
        'Safety Driving: Talk with officials on road safety and experience real-world driving conditions in a safe environment. Our specialized program, tailored for ages 15+, integrates traffic simulation into our simulators. Students practice driving skills in realistic scenarios to prepare for the road with confidence.',
    },
  ];

    const scrollToSection = () => {
    const targetSection = document.getElementById('target-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="w-full max-w-full overflow-hidden lg:h-[400px] xl:h-[685px] bg-cover bg-left lg:bg-center " style={{ backgroundImage: "url('/assets/images/education/s-bg2.png')" }}
    >
      <div className='w-full px-4  '>
      <div className="inset-0 flex flex-col md:flex-row md:items-center md:justify-end px-4 md:pr-6 xl:py-[20px] md:px-8 max-w-7xl mx-auto my-10 md:my-0 lg:my-0 xl:my-0">
        <div className="w-full flex flex-col text-end">
          
          <div className="flex flex-col justify-between px-4 mt-[140px] sm:mt-[140px] md:mt-[0px] lg:mt-[0px] xl:mt-[36px] md:mb-[41px] md:items-end lg:items-end xl:items-end bg-[#11072C] bg-opacity-80 lg:bg-opacity-0 md:bg-opacity-0 xl:bg-opacity-0 p-8">
            {trainings.map((training, index) => (
              <div key={index} className="xl:pb-[30px] xl:pt-[100px] text-left ">
                <h1 className="text-[34px] md:text-[54px] text-white font-black font-orbitron">{training.title}</h1>
                <p className="md:w-[400px] lg:w-[550px] xl:w-[600px] md:text-[14px] lg:text-[18px] text-white font-black font-jura mt-6 leading-7 text-justify">
                  {training.description}
                </p>
              </div>
            ))}
            <div className="flex justify-center lg:justify-start m-bottom">
          <div className='pt-4 pb-10'>
            <button onClick={scrollToSection} className="button-slanted w-[200px] lg:w-[233px] h-[44px] px-8 py-6 button font-jura font-bold border-[1px] border-white hover:bg-gradient-to-r hover:from-[#7E51F8] hover:to-[#D007A6] hover:border-0 text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center">
            <span className='button-slanted-content'>ENQUIRE NOW</span>
            </button>
          </div>
        </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DrivingData;

