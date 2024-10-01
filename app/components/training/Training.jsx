// 'use client';

// import React from 'react';
// import Link from 'next/link';

// const Training = () => {




//   return (
//     <div className=" w-full max-w-full overflow-hidden lg:h-[650px] xl:h-[885px] bg-cover bg-right lg:bg-center " style={{ backgroundImage: "url('/assets/images/training/bg-3.png')" }}>
      
//       <div className='bottom-0 w-full bg-[#11072C] bg-opacity-60 lg:bg-opacity-0 md:bg-opacity-60 xl:bg-opacity-0 px-4'>
//       <div className=" px-4 md:flex md:flex-col  sm:pt-[100px] md:pt-[100px] md:pr-6  md:px-8 max-w-7xl mx-auto ">
//         <div className='border-solid border-b-[1px] border-white border-opacity-20 text-end mt-10 md:mt-0'>
//           <h1 className='text-[14px] text-white font-normal drop-shadow-xl font-orbitron pb-4 mt-10 md:mt-0'>EDUCATION & TRAININGS</h1>
//         </div>
//         <div className='flex flex-col justify-between md:mt-[36px] md:mb-[41px]'>

//             <div className='xl:py-[30px] xl:pt-[70px]'>
//               <h1 className='text-[34px] md:text-[54px] text-white font-black font-orbitron'>EDUCATION & <br/>TRAININGS</h1>
//               <p className='md:w-[400px] lg:w-[550px] xl:w-[600px] md:text-[14px] lg:text-[18px] text-white font-bold font-jura mt-6 text-justify leading-7'>
//               Discover immersive learning experiences at Teleios Dome. From educational trips exploring our factory to safety driving lessons and group racing instruction, we offer dynamic programs to engage learners of all ages. Prepare to embark on an educational journey at Teleios Dome.
//               </p>
//             </div>
//           <div className="flex justify-center lg:justify-start m-bottom">
//           <div className='pt-4 pb-10'>
//             <Link href="/education"  className="button-slanted w-[200px] lg:w-[233px] h-[44px] px-8 py-6 button font-jura font-bold border-[1px] border-white hover:bg-gradient-to-r hover:from-[#7E51F8] hover:to-[#D007A6] hover:border-0 text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center">
//             <span className='button-slanted-content'>FIND OUT MORE</span>
//             </Link>
//           </div>
//         </div>
//         </div>
        
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Training;


'use client';

import React from 'react';
import Link from 'next/link';

const Training = () => {
  return (
    <div className="training-section w-full max-w-full overflow-hidden lg:h-[650px] xl:h-[885px] bg-cover bg-right lg:bg-right xl:bg-center px-4 md:px-0 lg:px-0 xl:px-0" 
         style={{ backgroundImage: "url('/assets/images/training/bg-3.png')" }}
    >
      <div className='w-full bg-[#11072C] bg-opacity-80 lg:bg-opacity-60 md:bg-opacity-60 xl:bg-opacity-0 px-4 mt-[230px] sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0'>
        <div className="px-4 md:flex md:flex-col sm:pt-[100px] md:pt-[100px] md:pr-6 md:px-8 max-w-7xl mx-auto bottom-0 py-2 ">
          {/* Heading */}
          <div className='border-solid border-b-[1px] border-white border-opacity-20 text-end mt-10 md:mt-0'>
            <h1 className='text-[14px] text-white font-normal drop-shadow-xl font-orbitron pb-4 mt-10 md:mt-0'>EDUCATION & TRAININGS</h1>
          </div>

          {/* Main Content */}
          <div className='flex flex-col justify-between md:mt-[36px] md:mb-[41px]'>
            <div className='xl:py-[30px] xl:pt-[70px]'>
              <h1 className=' text-[24px] sm:text-[34px] md:text-[54px] text-white font-black font-orbitron'>EDUCATION & <br /> TRAININGS</h1>
              <p className='md:w-[400px] lg:w-[550px] xl:w-[600px] md:text-[14px] lg:text-[18px] text-white font-bold font-jura mt-6 text-justify leading-7'>
                Discover immersive learning experiences at Teleios Dome. From educational trips exploring our factory to safety driving lessons and group racing instruction, we offer dynamic programs to engage learners of all ages. Prepare to embark on an educational journey at Teleios Dome.
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start m-bottom">
              <div className='pt-4 pb-10'>
                <Link href="/education" className="button-slanted w-[200px] lg:w-[233px] h-[44px] px-8 py-6 button font-jura font-bold border-[1px] border-white hover:bg-gradient-to-r hover:from-[#7E51F8] hover:to-[#D007A6] hover:border-0 text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center">
                  <span className='button-slanted-content'>FIND OUT MORE</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Media Query for Mobile Screen */}
      <style jsx>{`
        @media (max-width: 430px) {
          .training-section {
            height: 772px;

  
           
          }
        }
      `}</style>
    </div>
  );
};

export default Training;



