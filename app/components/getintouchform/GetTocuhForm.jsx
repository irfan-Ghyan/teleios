// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { supabase } from '../../../supabase';
// import Link from 'next/link';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     type: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.firstName) newErrors.firstName = 'First name is required';
//     if (!formData.lastName) newErrors.lastName = 'Last name is required';
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email address is invalid';
//     }
//     if (!formData.phone) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = 'Phone number must be 10 digits';
//     }
//     if (!formData.type) newErrors.type = 'Trip type is required';

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log('Form data:', formData);

//       try {
//         const { data, error } = await supabase
//           .from('corprate')
//           .insert([
//             {
//               first_name: formData.firstName,
//               last_name: formData.lastName,
//               phone: formData.phone,
//               email: formData.email,
//               trip_type: formData.type,
//             },
//           ]);

//         if (error) {
//           throw error;
//         }

//         console.log('Data:', data);
//         setIsSubmitted(true);
        
//         setTimeout(() => {
//           setIsSubmitted(false);
//         }, 3000);

//         setFormData({
//           firstName: '',
//           lastName: '',
//           phone: '',
//           email: '',
//           type: '',
//         });
//       } catch (error) {
//         console.error('Error adding data:', error);
//       }
      
//     }
    
//   };

//   const [isRadioSelected, setIsRadioSelected] = useState(false);
//   const radioContainerRef = useRef(null);

//   const handleRadioChange = () => {
//     setIsRadioSelected(true);
//   };

//   const handleClickOutside = (event) => {
//     if (radioContainerRef.current && !radioContainerRef.current.contains(event.target)) {
//       setIsRadioSelected(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="flex items-center justify-center py-[20px] lg:py-[40px]">
//       <div className="w-full max-w-2xl px-4">
//         <h2 className="text-[32px] lg:text-[42px] text-white font-black font-orbitron text-center">Get In Touch</h2>
//         <p className="text-center text-[14px] font-medium font-jura text-white py-2">
//           We look forward to hosting your Event please complete the form and a member of our team will be in touch.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//           <div className="lg:flex justify-between">
//             <div>
//               <label htmlFor="firstName" className="block text-[14px] font-medium font-jura text-white py-2">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="Enter your first name"
//                 id="firstName"
//                 className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
//             </div>
//             <div className="xl:ml-[14px]">
//               <label htmlFor="lastName" className="block text-[14px] font-medium font-jura text-white py-2">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Enter your last name"
//                 id="lastName"
//                 className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
//             </div>
//           </div>

//           <div className="xl:flex justify-between">
//             <div>
//               <label htmlFor="email" className="block text-[14px] font-medium font-jura text-white py-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 id="email"
//                 className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
//             </div>
//             <div className="xl:ml-[14px]">
//               <label htmlFor="phone" className="block text-[14px] font-medium font-jura text-white py-2">
//                 Phone
//               </label>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Enter your phone"
//                 id="phone"
//                 className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
//             </div>
//           </div>

//           <div>
//             <label htmlFor="type" className="block text-[14px] font-medium font-jura text-white py-2">
//               Trip Type
//             </label>
//             <select
//               name="type"
//               id="type"
//               className="mt-1 p-4 block w-full xl:w-[646px] bg-[#2C1864C2] py-[10px] text-[14px] font-medium text-white font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//               value={formData.type}
//               onChange={handleChange}
//               required
//             >
//               <option value="" className="text-[14px] font-medium w-full lg:w-[316px] font-jura text-white placeholder-white">
//                 Select type
//               </option>
//               <option value="Type 1" className="text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white">
//                 Type 1
//               </option>
//               <option value="Type 2" className="text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white">
//                 Type 2
//               </option>
//               <option value="Type 3" className="text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white">
//                 Type 3
//               </option>
//             </select>
//             {errors.type && <p className="text-red-500 text-xs">{errors.type}</p>}
//           </div>

//           {/* <div className="lg:flex justify-between py-4">
//             <div className="w-full lg:flex justify-between">
//               <div className="flex py-4">
//                 <input
//                   type="radio"
//                   className="square-radio form-radio"
//                   name="contactMethod"
//                   value="phone"
//                   checked={formData.contactMethod === 'phone'}
//                   onChange={handleChange}
//                 />
//                 <span className="ml-2 text-[14px] font-medium font-jura text-white">
//                   Vestibulum faucibus odio vitae arcu auctor lectus.
//                 </span>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className="button-slanted text-[14px] font-medium font-jura text-white w-[200px] lg:w-[233px] h-[44px] buton px-8 bg-gradient-to-r from-[#7E51F8] to-[#D00746] transition duration-300 rounded-tl-lg rounded-br-lg border-0 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//                 >
//                   <span className="button-slanted-content">SUBMIT</span>
//                 </button>
//               </div>
//             </div>
//           </div> */}

//           <div className="lg:flex justify-between py-4">
//             <div className="w-full lg:flex justify-between" ref={radioContainerRef}>
//               <div className="flex py-4">
//               <label className="custom-radio-container">
//                   <input
//                     type="radio"
//                     className="hidden" 
//                     value="phone"
//                     checked={isRadioSelected}
//                     onChange={handleRadioChange}
//                   />
//                   <span className={`custom-radio ${isRadioSelected ? 'checked' : ''}`} />
//                 </label>
//                 <span
//                   className={`ml-2 text-[14px] font-medium font-jura ${isRadioSelected ? 'text-white' : 'text-[#6e6295c2]'
//                     }`}
//                 >
//                   Read to confirm you have read and agree to <spa><Link href="/terms&conditions">Terms & Conditions</Link></spa>
//                 </span>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className="w-[200px] h-[34px] lg:w-[233px] lg:h-[44px] px-8 py-3 bg-opacity-50 button border-[1px] border-white font-jura font-bold text-white hover:bg-gradient-to-r ml-2 hover:from-[#D007A6] hover:to-[#7E51F8] transition duration-300 rounded-tl-lg rounded-br-lg hover:border-0"
//                 >
//                   <span className="button-slanted-content">SUBMIT</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {isSubmitted && (
//             <div className="bg-[#2AC67029] text-[#2AC670] p-4 rounded-lg mt-4 flex">
//               <Image src="/assets/images/success-submit.png" alt="alt" height={12} width={12} className="w-[16px] h-[16px] mt-[4px]" />
//               <p className="ml-[8px]">Your submission was successful! Our Team will contact you in some time!</p>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;



// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { supabase } from '../../../supabase';
// import Link from 'next/link';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     type: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isRadioSelected, setIsRadioSelected] = useState(false);
//   const radioContainerRef = useRef(null);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Validate form inputs
//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.firstName) newErrors.firstName = 'First name is required';
//     if (!formData.lastName) newErrors.lastName = 'Last name is required';
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email address is invalid';
//     }
//     if (!formData.phone) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = 'Phone number must be 10 digits';
//     }
//     if (!formData.type) newErrors.type = 'Trip type is required';

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log('Form data:', formData);

//       try {
//         const { data, error } = await supabase
//           .from('corprate')
//           .insert([
//             {
//               first_name: formData.firstName,
//               last_name: formData.lastName,
//               phone: formData.phone,
//               email: formData.email,
//               trip_type: formData.type,
//             },
//           ]);

//         if (error) {
//           throw error;
//         }

//         console.log('Data:', data);
//         setIsSubmitted(true);

//         setTimeout(() => {
//           setIsSubmitted(false);
//         }, 3000);

//         setFormData({
//           firstName: '',
//           lastName: '',
//           phone: '',
//           email: '',
//           type: '',
//         });
//       } catch (error) {
//         console.error('Error adding data:', error);
//       }
//     }
//   };

//   // // Handle radio change
//   // const handleRadioChange = () => {
//   //   setIsRadioSelected(!isRadioSelected);
//   // };
//   const handleRadioClick = () => {
//     setIsRadioSelected((prevState) => !prevState); // Toggle the checked state on click
//   };

//   // Handle click outside
//   const handleClickOutside = (event) => {
//     if (radioContainerRef.current && !radioContainerRef.current.contains(event.target)) {
//       setIsRadioSelected(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="flex items-center justify-center py-[20px] lg:py-[40px]">
//       <div className="w-full max-w-2xl px-4">
//         <h2 className="text-[32px] lg:text-[42px] text-white font-black font-orbitron text-center">
//           Get In Touch
//         </h2>
//         <p className="text-center text-[18px] font-bold font-jura text-white py-2">
//           We look forward to hosting your Event. Please complete the form and a member of our team
//           will be in touch.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
         
//         <div className="lg:flex justify-between">
//             <div>
//               <label htmlFor="firstName" className="block text-[14px] font-bold font-jura text-white py-2">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="Enter your first name"
//                 id="firstName"
//                 className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-[14px] font-bold font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
//             </div>
//             <div className="xl:ml-[14px]">
//               <label htmlFor="lastName" className="block text-[14px] font-boldfont-jura text-white py-2">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Enter your last name"
//                 id="lastName"
//                 className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-bold font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
//             </div>
//           </div>

//           <div className="lg:flex justify-between">
//             <div>
//               <label htmlFor="email" className="block text-[14px] font-bold font-jura text-white py-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 id="email"
//                 className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-bold font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
//             </div>
//             <div className="xl:ml-[14px]">
//               <label htmlFor="phone" className="block text-[14px] font-bold font-jura text-white py-2">
//                 Phone
//               </label>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Enter your phone"
//                 id="phone"
//                 className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-bold font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
//             </div>
//           </div>

//           <div>
//             <label htmlFor="type" className="block text-[14px] w-full font-bold font-jura text-white py-2">
//               Event Type
//             </label>
//             <select
//               name="type"
//               id="type"
//               className="mt-1 p-4 block w-full xl:w-[646px] bg-[#2C1864C2] py-[10px] text-[14px] font-bold text-white font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//               value={formData.type}
//               onChange={handleChange}
//               required
//             >
//               <option value="" className="text-[14px] font-bold w-full font-jura text-white placeholder-white">
//                 Select event type
//               </option>
//               <option value="Type 1" className="text-[14px] w-full lg:w-[316px] font-bold font-jura text-white placeholder-white">
//                 Type 1
//               </option>
//               <option value="Type 2" className="text-[14px] w-full lg:w-[316px] font-bold font-jura text-white placeholder-white">
//                 Type 2
//               </option>
//               <option value="Type 3" className="text-[14px] w-full lg:w-[316px] font-bold font-jura text-white placeholder-white">
//                 Type 3
//               </option>
//             </select>
//             {errors.type && <p className="text-red-500 text-xs">{errors.type}</p>}
//           </div>

       

//           {/* <div className="lg:flex justify-between py-4">
//             <div className="w-full lg:flex justify-between">
//               <div className="flex py-4">
//                 <input
//                   type="radio"
//                   className="square-radio form-radio"
//                   name="contactMethod"
//                   value="phone"
//                   checked={formData.contactMethod === 'phone'}
//                   onChange={handleChange}
//                 />
//                 <span className="ml-2 text-[14px] font-medium font-jura text-white">
//                   Vestibulum faucibus odio vitae arcu auctor lectus.
//                 </span>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className="button-slanted text-[14px] font-medium font-jura text-white w-[200px] lg:w-[233px] h-[44px] buton px-8 bg-gradient-to-r from-[#7E51F8] to-[#D00746] transition duration-300 rounded-tl-lg rounded-br-lg border-0 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//                 >
//                   <span className="button-slanted-content">SUBMIT</span>
//                 </button>
//               </div>
//             </div>
//           </div> */}
//           {/* Checkbox (Radio) and Submit Button */}
//           {/* <div className="lg:flex justify-between py-4">
//             <div className="w-full lg:flex justify-between" ref={radioContainerRef}>
//               <div className="flex">
//                 <label className="custom-radio-container">
//                   <input
//                     type="radio"
//                     className="hidden"
//                     value="phone"
//                     checked={isRadioSelected}
//                     onChange={handleRadioChange}
//                   />
//                   <span className={`custom-radio ${isRadioSelected ? 'checked' : ''}`} />
//                 </label>
//                 <span
//                   className={`ml-2 text-[14px] font-medium font-jura pt-2 pl-3 ${
//                     isRadioSelected ? 'text-white' : 'text-[#6e6295c2]'
//                   }`}
//                 >
//                   I agree to the{' '}
//                   <Link href="/terms&conditions" className='underline'>Terms & Conditions</Link>
//                 </span>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className={` button-slanted w-[180px] h-[34px] lg:w-[200px] lg:h-[40px] px-8 font-jura font-bold text-white border-[1px] border-white transition duration-300 rounded-tl-lg rounded-br-lg ml-2 ${
//                     isRadioSelected
//                       ? 'hover:bg-gradient-to-r hover:from-[#D007A6] hover:to-[#7E51F8]  bg-gradient-to-r from-[#7E51F8] to-[#D007A6] hover:border-0'
//                       : 'bg-opacity-50 cursor-not-allowed'
//                   }`}
//                   disabled={!isRadioSelected}
//                 >
//                   <span className="button-slanted-content">SUBMIT</span>
//                 </button>
//               </div>
//             </div>
//           </div> */}


// <div className="lg:flex justify-between py-4">
//     <div className="w-full lg:flex justify-between" ref={radioContainerRef}>
//       <div className="flex">
//         <label className="custom-radio-container">
//           <input
//             type="radio"
//             className="hidden"
//             value="phone"
//             checked={isRadioSelected}
//             onClick={handleRadioClick} // Toggle selection directly on click
//             readOnly // Prevents default behavior and only allows manual state handling
//           />
//           <span className={`custom-radio ${isRadioSelected ? 'checked' : ''}`} />
//         </label>
//         <span
//           className={`ml-2 text-[14px] font-medium font-jura pt-2 pl-3 ${
//             isRadioSelected ? 'text-white' : 'text-[#6e6295c2]'
//           }`}
//         >
//           I agree to the{' '}
//           <Link href="/terms&conditions" className="underline">
//             Terms & Conditions
//           </Link>
//         </span>
//       </div>
//       <div className="mt-[16px] md:mt-[10px] lg:mt-0 xl:mt-0">
//         <button
//           type="submit"
//           className={`button-slanted w-[180px] h-[34px] lg:w-[200px] lg:h-[40px] px-8 font-jura font-bold text-white border-[1px] border-white transition duration-300 rounded-tl-lg rounded-br-lg ml-2 ${
//             isRadioSelected
//               ? 'hover:bg-gradient-to-r hover:from-[#D007A6] hover:to-[#7E51F8] bg-gradient-to-r from-[#7E51F8] to-[#D007A6] hover:border-0'
//               : 'bg-opacity-50 cursor-not-allowed'
//           }`}
//           disabled={!isRadioSelected}
//         >
//           <span className="button-slanted-content">SUBMIT</span>
//         </button>
//       </div>
//     </div>
//   </div>

//           {/* Success Message */}
//           {isSubmitted && (
//             <div className="bg-[#2AC67029] text-[#2AC670] p-4 rounded-lg mt-4 flex">
//               <Image
//                 src="/assets/images/success-submit.png"
//                 alt="alt"
//                 height={12}
//                 width={12}
//                 className="w-[16px] h-[16px] mt-[4px]"
//               />
//               <p className="ml-[8px]">
//                 Your submission was successful! Our Team will contact you in some time!
//               </p>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;




// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { supabase } from '../../../supabase';
// import Link from 'next/link';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     type: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isRadioSelected, setIsRadioSelected] = useState(false);
//   const [isFormValid, setIsFormValid] = useState(false); // New state to track form validation

//   const radioContainerRef = useRef(null);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Validate form inputs
//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.firstName) newErrors.firstName = 'First name is required';
//     if (!formData.lastName) newErrors.lastName = 'Last name is required';
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email address is invalid';
//     }
//     if (!formData.phone) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = 'Phone number must be 10 digits';
//     }
//     if (!formData.type) newErrors.type = 'Event type is required';

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   // Check form validity whenever form data changes
//   useEffect(() => {
//     setIsFormValid(validateForm());
//   }, [formData]);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isFormValid) {
//       console.log('Form data:', formData);

//       try {
//         const { data, error } = await supabase.from('corprate').insert([
//           {
//             first_name: formData.firstName,
//             last_name: formData.lastName,
//             phone: formData.phone,
//             email: formData.email,
//             trip_type: formData.type,
//           },
//         ]);

//         if (error) {
//           throw error;
//         }

//         console.log('Data:', data);
//         setIsSubmitted(true);

//         setTimeout(() => {
//           setIsSubmitted(false);
//         }, 3000);

//         // Reset the form
//         setFormData({
//           firstName: '',
//           lastName: '',
//           phone: '',
//           email: '',
//           type: '',
//         });
//         setIsRadioSelected(false); // Uncheck the radio after submission
//       } catch (error) {
//         console.error('Error adding data:', error);
//       }
//     }
//   };

//   // Handle radio button click only if the form is valid
//   const handleRadioClick = () => {
//     if (isFormValid) {
//       setIsRadioSelected((prevState) => !prevState);
//     } else {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         form: 'Please fill out all required fields before selecting the checkbox.',
//       }));
//     }
//   };

//   // Handle click outside to unselect the radio
//   const handleClickOutside = (event) => {
//     if (radioContainerRef.current && !radioContainerRef.current.contains(event.target)) {
//       setIsRadioSelected(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="flex items-center justify-center py-[20px] lg:py-[40px]">
//       <div className="w-full max-w-2xl px-4">
//         <h2 className="text-[32px] lg:text-[42px] text-white font-black font-orbitron text-center">
//           Get In Touch
//         </h2>
//         <p className="text-center text-[18px] font-bold font-jura text-white py-2">
//           We look forward to hosting your Event. Please complete the form and a member of our team
//           will be in touch.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//         <div className="lg:flex justify-between">
// <div>
//   <label htmlFor="firstName" className="block text-[14px] font-bold font-jura text-white py-2">
//     First Name
//   </label>
//   <input
//     type="text"
//     name="firstName"
//     placeholder="Enter your first name"
//     id="firstName"
//     className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-[14px] font-bold font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//     value={formData.firstName}
//     onChange={handleChange}
//     required
//   />
//   {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
// </div>
// <div className="xl:ml-[14px]">
//   <label htmlFor="lastName" className="block text-[14px] font-boldfont-jura text-white py-2">
//     Last Name
//   </label>
//   <input
//     type="text"
//     name="lastName"
//     placeholder="Enter your last name"
//     id="lastName"
//     className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-bold font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//     value={formData.lastName}
//     onChange={handleChange}
//     required
//   />
//   {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
// </div>
// </div>

// <div className="lg:flex justify-between">
// <div>
//   <label htmlFor="email" className="block text-[14px] font-bold font-jura text-white py-2">
//     Email
//   </label>
//   <input
//     type="email"
//     name="email"
//     placeholder="Enter your email"
//     id="email"
//     className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-bold font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//     value={formData.email}
//     onChange={handleChange}
//     required
//   />
//   {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
// </div>
// <div className="xl:ml-[14px]">
//   <label htmlFor="phone" className="block text-[14px] font-bold font-jura text-white py-2">
//     Phone
//   </label>
//   <input
//     type="text"
//     name="phone"
//     placeholder="Enter your phone"
//     id="phone"
//     className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-bold font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//     value={formData.phone}
//     onChange={handleChange}
//     required
//   />
//   {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
// </div>
// </div>

// <div>
// <label htmlFor="type" className="block text-[14px] w-full font-bold font-jura text-white py-2">
//   Event Type
// </label>
// <select
//   name="type"
//   id="type"
//   className="mt-1 p-4 block w-full xl:w-[646px] bg-[#2C1864C2] py-[10px] text-[14px] font-bold text-white font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
//   value={formData.type}
//   onChange={handleChange}
//   required
// >
//   <option value="" className="text-[14px] font-bold w-full font-jura text-white placeholder-white">
//     Select event type
//   </option>
//   <option value="Type 1" className="text-[14px] w-full lg:w-[316px] font-bold font-jura text-white placeholder-white">
//     Type 1
//   </option>
//   <option value="Type 2" className="text-[14px] w-full lg:w-[316px] font-bold font-jura text-white placeholder-white">
//     Type 2
//   </option>
//   <option value="Type 3" className="text-[14px] w-full lg:w-[316px] font-bold font-jura text-white placeholder-white">
//     Type 3
//   </option>
// </select>
// {errors.type && <p className="text-red-500 text-xs">{errors.type}</p>}
// </div>

//           <div className="lg:flex justify-between py-4">
//             <div className="w-full lg:flex justify-between" ref={radioContainerRef}>
//               <div className="flex">
//                 <label className="custom-radio-container">
//                   <input
//                     type="radio"
//                     className="hidden"
//                     checked={isRadioSelected}
//                     onClick={handleRadioClick} // Toggle selection directly on click
//                     readOnly
//                   />
//                   <span className={`custom-radio ${isRadioSelected ? 'checked' : ''}`} />
//                 </label>
//                 <span className={`ml-2 text-[14px] font-medium font-jura pt-2 pl-3 ${isRadioSelected ? 'text-white' : 'text-[#6e6295c2]'}`}>
//                   I agree to the{' '}
//                   <Link href="/terms&conditions" className="underline">
//                     Terms & Conditions
//                   </Link>
//                 </span>
//               </div>
//               <div className="mt-[16px] md:mt-[10px] lg:mt-0 xl:mt-0">
//                 <button
//                   type="submit"
//                   className={`button-slanted w-[180px] h-[34px] lg:w-[200px] lg:h-[40px] px-8 font-jura font-bold text-white border-[1px] border-white transition duration-300 rounded-tl-lg rounded-br-lg ml-2 ${
//                     isRadioSelected
//                       ? 'hover:bg-gradient-to-r hover:from-[#D007A6] hover:to-[#7E51F8] bg-gradient-to-r from-[#7E51F8] to-[#D007A6] hover:border-0'
//                       : 'bg-opacity-50 cursor-not-allowed'
//                   }`}
//                   disabled={!isRadioSelected}
//                 >
//                   <span className="button-slanted-content">SUBMIT</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Display form error if form is not valid */}
//           {errors.form && <p className="text-red-500 text-xs">{errors.form}</p>}

//           {/* Success Message */}
//           {isSubmitted && (
//             <div className="bg-[#2AC67029] text-[#2AC670] p-4 rounded-lg mt-4 flex">
//               <Image
//                 src="/assets/images/success-submit.png"
//                 alt="alt"
//                 height={12}
//                 width={12}
//                 className="w-[16px] h-[16px] mt-[4px]"
//               />
//               <p className="ml-[8px]">Your submission was successful! Our Team will contact you in some time!</p>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;


'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { supabase } from '../../../supabase';
import Link from 'next/link';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',

  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false); // Track if the form has been submitted
  const [showRadioError, setShowRadioError] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); 

  // const radioContainerRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Clear the error for the field as the user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? '' : prevErrors[name], // Clear error if input is not empty
    }));
  
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    // if (!formData.type) newErrors.type = 'Event type is required';

    setErrors(newErrors);

    // Return whether the form is valid or not
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true); // Mark that the form has been submitted

    if (validateForm() && isCheckboxChecked) {
      console.log('Form data:', formData);

      try {
        const { data, error } = await supabase.from('corprate').insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phone,
            email: formData.email,
            
          },
        ]);

        if (error) {
          throw error;
        }

        console.log('Data:', data);
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);

        // Reset the form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
      
        });
        setIsRadioSelected(false); // Uncheck the radio after submission
        setHasSubmitted(false); // Reset the form submission state
        setIsCheckboxChecked(false);
      } catch (error) {
        console.error('Error adding data:', error);
      }
    }
  };

  
  const handleRadioClick = () => {
    setIsRadioSelected((prevState) => !prevState); // Toggle radio button state
  };
  // Handle radio button click only if the form is valid
  // const handleRadioClick = () => {
  //   if (validateForm()) {
  //     setIsRadioSelected((prevState) => !prevState);
  //   } else {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       form: 'Please fill out all required fields before selecting the checkbox.',
  //     }));
  //   }
  // };

  // Handle click outside to unselect the radio
  // const handleClickOutside = (event) => {
  //   if (radioContainerRef.current && !radioContainerRef.current.contains(event.target)) {
  //     setIsRadioSelected(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  return (
    <div className="flex items-center justify-center py-[20px] lg:py-[40px]">
      <div className="w-full max-w-2xl px-4">
        <h2 className="text-[32px] lg:text-[42px] text-white font-black font-orbitron text-center">
          Get In Touch
        </h2>
        <p className="text-center text-[18px] font-bold font-jura text-white py-2">
          We look forward to hosting your Event. Please complete the form and a member of our team
          will be in touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div className="lg:flex justify-between">
<div>
  <label htmlFor="firstName" className="block text-[14px] font-bold font-jura text-white py-2">
    First Name
  </label>
  <input
    type="text"
    name="firstName"
    placeholder="Enter your first name"
    id="firstName"
    className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-[14px] font-bold font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
    value={formData.firstName}
    onChange={handleChange}
    
  />
  {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
</div>
<div className="xl:ml-[14px]">
  <label htmlFor="lastName" className="block text-[14px] font-bold font-jura text-white py-2">
    Last Name
  </label>
  <input
    type="text"
    name="lastName"
    placeholder="Enter your last name"
    id="lastName"
    className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-bold font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
    value={formData.lastName}
    onChange={handleChange}
    
  />
  {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
</div>
</div>

<div className="lg:flex justify-between">
<div>
  <label htmlFor="email" className="block text-[14px] font-bold font-jura text-white py-2">
    Email
  </label>
  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    id="email"
    className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-bold font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
    value={formData.email}
    onChange={handleChange}
    
  />
  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
</div>
<div className="xl:ml-[14px]">
  <label htmlFor="phone" className="block text-[14px] font-bold font-jura text-white py-2">
    Phone
  </label>
  <input
    type="text"
    name="phone"
    placeholder="Enter your phone"
    id="phone"
    className="mt-1 p-4 block w-full lg:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-bold font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
    value={formData.phone}
    onChange={handleChange}
    
  />
  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
</div>
</div>

{/* <div>
  <label htmlFor="type" className="block text-[14px] w-full font-bold font-jura text-white py-2">
    Event Type
  </label>
  <select
    name="type"
    id="type"
    className="mt-1 p-4 block w-full xl:w-[646px] bg-[#2C1864C2] py-[10px] text-[14px] font-bold text-white font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
    value={formData.type}
    onChange={handleChange}
  >
    <option value="">Select an event type</option>
    <option value="business">Business</option>
    <option value="wedding">Wedding</option>
    <option value="concert">Concert</option>
  </select>
  {errors.type && <p className="text-red-500 text-xs">{errors.type}</p>}
</div> */}

{/* Radio Button */}
<div className="lg:flex justify-between">
      <div className="w-full lg:flex justify-between">
        <div className="flex py-4">
          <label className="custom-radio-container">
            <input
              type="radio"
              className="hidden"
              value="phone"
              checked={isRadioSelected}
              onClick={handleRadioClick} 
              onChange={handleCheckboxChange} // Optional, if you want to perform any action on change
            />
            <span className={`custom-radio ${isRadioSelected ? 'checked' : ''}`} />
          </label>
          <span className={`ml-4 text-[14px] font-medium font-jura mt-1 ${isRadioSelected ? 'text-white' : 'text-[#6e6295c2]'}`}>
            I agree to the{' '}
            <Link href="/terms&conditions" className="underline">Terms & Conditions</Link>
          </span>
        </div>

        <div className="mt-4">
        <button
  type="submit"
  className={`button-slanted w-[200px] lg:w-[233px] h-[44px] px-8 py-6 button font-jura font-bold border-[1px] border-white ${
    isRadioSelected ? 'hover:bg-gradient-to-r hover:from-[#7E51F8] hover:to-[#D007A6] hover:border-0 text-white' : 'border-white text-gray-300'
  } ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center`}
>
  <span className="button-slanted-content">SUBMIT</span>
</button>
        </div>
      </div>
    </div>

    {showRadioError && (
      <p className="text-red-500 text-xs">Please fill all required fields to agree to the terms.</p>
    )}
    {isSubmitted && (
      <div className="bg-[#2AC67029] text-[#2AC670] p-4 rounded-lg mt-4 flex">
        <Image
          src="/assets/images/success-submit.png"
          alt="alt"
          height={12}
          width={12}
          className="w-[16px] h-[16px] mt-[4px]"
        />
        <p className="ml-[8px]">Your form has been successfully submitted!</p>
      </div>
    )}
        </form>
      </div>
    </div>
  );
};

export default Form;



