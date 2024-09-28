'use client';

import React from 'react';
import Image from 'next/image';
import Builing1 from '../../../public/assets/icons/building.png';
import Builing2 from '../../../public/assets/icons/networking.png';
import Builing3 from '../../../public/assets/icons/conferences.png';
import Link from 'next/link';

const CorporateBuilding = () => {
  return (
    <div className='w-full flex flex-wrap justify-center items-center my-0 md:my-20 lg:my-20'>
      <div className="relative w-full md:w-1/3 h-[240px] md:h-[319px] hover-trigger" style={{ backgroundImage: "url('/assets/images/pics-17.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center hover-content transition-transform duration-300">
          <Link href="/enquiry-form" className="flex flex-col items-center text-center">
            <Image src={Builing1} width={60} height={60} alt="building" className="mb-4" />
            <h1 className='text-[18px] text-white font-bold font-orbitron'>Team Building</h1>
            <p className='text-white font-jura text-center hidden md:block text-balance'>Boost team cohesion with a dynamic simulator challenge, combining immersive scenarios with collaborative problem-solving. Perfect for enhancing communication and teamwork.</p>
            {/* <button className='hidden md:block mt-2 button-slanted w-[160px] h-[44px] px-4 py-2 button font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center'>
            <span className='button-slanted-content'>Enquire now</span>
            </button> */}
          </Link>
        </div>
      </div>

      <div className="relative w-full md:w-1/3 h-[240px] md:h-[319px] hover-trigger" style={{ backgroundImage: "url('/assets/images/pics-98.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center hover-content transition-transform duration-300">
          <Link href="/enquiry-form" className="flex flex-col items-center text-center">
            <Image src={Builing2} width={60} height={60} alt="building" className="mb-4" />
            <h1 className='text-[18px] text-white font-bold font-orbitron '>Networking</h1>
            <p className='text-white font-jura text-center hidden md:block text-balance'>Elevate networking at our simulator venue with interactive experiences that spark conversations and foster connections. Ideal for blending fun with professional engagement.</p>
            {/* <button className='hidden md:block mt-2 button-slanted w-[160px] h-[44px] px-4 py-2 button font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center'>
            <span className='button-slanted-content'>Enquire now</span>
            </button> */}
          </Link>
        </div>
      </div>

      <div className="relative w-full md:w-1/3 h-[240px] md:h-[319px] hover-trigger" style={{ backgroundImage: "url('/assets/images/Stage.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center hover-content transition-transform duration-300">
          <Link href="/enquiry-form" className="flex flex-col items-center text-center">
            <Image src={Builing3} width={60} height={60} alt="building" className="mb-4" />
            <h1 className='text-[18px] text-white font-bold font-orbitron'>Conferences</h1>
            <p className='text-white font-jura text-center hidden md:block text-balance'>Enhance your conference with interactive simulator sessions, blending engagement with cutting-edge technology. Perfect for dynamic presentations and networking.</p>
            {/* <button className='hidden md:block mt-2 button-slanted w-[160px] h-[44px] px-4 py-2 button font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center'>
              <span className='button-slanted-content'>Enquire now</span></button> */}
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hover-trigger {
          position: relative;
          overflow: hidden;
        }
        .hover-content {
          transform: translateY(100%);
        }
        .hover-trigger:hover .hover-content {
          transform: translateY(0);
        }
        .hover-trigger:hover .hover-content p,
        .hover-trigger:hover .hover-content button {
          display: block;
        }
        @media (max-width: 764px) {
          .hover-content {
            transform: translateY(0);
          }
          .hover-content p,
          .hover-content button {
            display: block !important;
          }
        }
      `}</style>
    </div>
  )
}

export default CorporateBuilding;
