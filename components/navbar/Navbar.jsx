import Image from 'next/image';
import {useState , useEffect} from 'react';

const Navbar = () => {

   const [nav, setNav]= useState(false);

   const handleNav = () => {
         setNav(!nav);
   }

   return(

   <div >

      {/* Navbar Wrapper */}
      <div className="flex justify-between w-full h-24 bg-[#ffffff] py-2 px-2 2xl:px-5 items-center top-0 z-10">

         {/* Logo and Links */}

            <div className='flex flex-row'>

               <div className='px-6'>
                  
               <Image src='/assets/asset 4.svg' alt='starbucks_logo' height={50} width={50}></Image>

               </div>

               <ul className='hidden sm:flex flex-row font-bold text-sm items-center'>
               
                  <li className='px-3 uppercase cursor-pointer hover:text-[#006437]'>
                     Our Coffees
                  </li>
                  <li className='px-3 uppercase cursor-pointer hover:text-[#006437]'>
                     Delivers
                  </li>
                  <li className='px-3 uppercase cursor-pointer hover:text-[#006437]'>
                     Rewards
                  </li>
               </ul>
            </div> 

         {/* Store Locator  */}

         <div className="hidden sm:inline ">
            <ul className='flex flex-row group items-center text-sm font-bold '>
                  <Image  className='group-hover:text-[#6c6c6c] cursor-pointer' src={'/assets/asset 6.svg'} alt='/' height={20} width={20}></Image>
               <li className=' sm:px-2  mr-10 cursor-pointer  group-hover:text-[#6c6c6c]'>Find a store</li>
            </ul>
         </div>

         <div onClick={handleNav} className='sm:hidden mr-5 cursor-pointer hover:bg-[#f7f7f7] hover:rounded-full hover:py-[5px] hover:px-[5px] duration-500 ease-in'>
            <Image src={'/assets/asset 7.svg'} alt="/" height={25} width={25}></Image>
         </div>
         
      </div>

      {/* Mobile Design */}

      <div className={nav ? 'fixed sm:hidden right-0 top-15 h-screen w-full bg-black/20 ' : ''}>

         <div className={nav ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] p-10 ease-in-out duration-500 h-screen bg-[#ffffff]' : 'fixed right-[-100%] h-screen p-10 top-0 ease-in-out duration-500 ' }>

            <div onClick={handleNav} className=' items-center text-right cursor-pointer'>
               <Image  src={'/assets/cross.png'} alt="/" height={25} width={25}></Image>
            </div>
            
            <ul className='py-10'>
               <li className='text-xl py-5 cursor-pointer'>
                  Our Coffees
               </li>
               <li className='text-xl py-5 cursor-pointer'>
                  Delivers
               </li>
               <li className='text-xl py-5'>
                  Rewards
               </li>
               <div className='h-[1.5px] w-100% my-5 bg-[#6c6c6c]/70'></div>
               <ul className='flex flex-row items-center text-sm font-bold'>
                  <Image src={'/assets/asset 6.svg'} alt='/' height={25} width={25}></Image>
               <li className='text-[15px] py-6 px-2 font-semibold'>Find a store</li>
            </ul>
            </ul>
         </div>
       </div>
      </div>
   
   );
}

export default Navbar;