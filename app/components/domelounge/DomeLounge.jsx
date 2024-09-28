'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import lounge from '../../../public/assets/images/dome/customize1.png';

const DomeLounge = () => {
  const domes = [
    { title: 'LOUNGE AREA', description: 'Relax and unwind in our stylish lounge area, designed for your comfort and enjoyment. Whether you are waiting for your racing session, or catching up with friends, our lounge is the perfect spot to kick back, enjoy the mood, and recharge.' },
  ];

  return (
    <div className="w-full max-w-full lg:overflow-hidden xl:h-[700px] px-4 bg-cover bg-center">
      <div className="inset-0 bg-transparent flex md:flex-col md:pr-6">
        <div className="flex flex-col justify-between pt-[20px] py-[30px]">
          {domes.map((dome, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8 mb-10 lg:mb-0">
              <div className="order-2 lg:order-1 lg:w-1/2 flex flex-col justify-between">
                {/* <h4 className="text-[34px] xl:text-[35px] text-[#D008A6] font-bold font-jura">{dome.subtitle}</h4> */}
                <h1 className="text-[24px] md:text-[38px] text-white font-black font-orbitron">{dome.title}</h1>
                <p className="md:w-[400px] lg:w-[550px] xl:w-[600px] md:text-[14px] lg:text-[18px] text-white font-bold font-jura mt-6 text-justify">{dome.description}</p>
                {/* <div className="py-10">
                  <Link href="https://feverup.com/m/187813" target="_blank" rel="noopener noreferrer" className="button-slanted w-[233px] h-[44px] px-8 py-6 button font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center">
                    <span className='button-slanted-content'>BOOK NOW</span>
                  </Link>
                </div> */}
              </div>
              <div className="order-1 lg:order-2 lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
                <Image src={lounge} width={520} height={566} alt="lounge" className="h-[350px] lg:h-[566px] xl:h-[566px] w-[516px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomeLounge;
