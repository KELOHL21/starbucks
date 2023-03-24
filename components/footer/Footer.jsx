import Image from 'next/image'

const Footer = () => {
   return (
      <div className='bg-white w-full '>
         <br></br>
         <div className='m-10'>
               <div>

                  <ul className=''>
                     <li className=' text-[23px] py-5 m-5 flex flex-row justify-between leading-[31px] tracking-[0.15px]'>
                        About Us
                        <Image src={'/assets/asset 5.svg'} alt='/' height={20} width={20}/>
                     </li>
                     <li className='text-[23px] py-5  m-5 flex flex-row justify-between leading-[31px] tracking-[0.15px]'>
                        Contact us
                        <Image src={'/assets/asset 5.svg'} alt='/' height={20} width={20}/>
                     </li>
                     <li className='text-[23px] py-5  m-5 flex flex-row justify-between leading-[31px] tracking-[0.15px]'>
                        Starbucks Card
                        <Image src={'/assets/asset 5.svg'} alt='/' height={20} width={20}/>
                     </li>
                  </ul>
               </div>

               <div className='h-[2px] w-100% m-5 bg-[#6c6c6c]/50'></div>

               {/* Social Links */}
               <div>
                  <ul className='flex flex-row m-5'>
                     {/* Facebook */}
                     <li className='px-2'>
                     <Image src={'/assets/asset 8.svg'} alt='/' height={40} width={40}/>
                     </li>
                     {/* Insta */}
                     <li className='px-2'>
                     <Image src={'/assets/asset 9.svg'} alt='/' height={40} width={40}/>
                     </li>
                     {/* Twitter */}
                     <li className='px-2'>
                     <Image src={'/assets/asset 10.svg'} alt='/' height={40} width={40}/>
                     </li>
                  </ul>
               </div>

               {/* Links */}
               <div>
                  <ul className='m-5'>
                     <li className='text-sm font-bold text-[#1f1f1f] py-4 leading-[16.8px] tracking-[0.14px] hover:text-[#6c6c6c] cursor-pointer'>Privacy Policy</li>
                     <li className='text-sm font-bold text-[#1f1f1f] py-4 leading-[16.8px] tracking-[0.14px] hover:text-[#6c6c6c] cursor-pointer'>Terms of Use</li>
                     <li className='text-sm font-bold text-[#1f1f1f] py-4 leading-[16.8px] tracking-[0.14px] hover:text-[#6c6c6c] cursor-pointer'>Cookie Notice</li>
                     <li className='text-sm font-bold text-[#1f1f1f] py-4 leading-[16.8px] tracking-[0.14px] hover:text-[#6c6c6c] cursor-pointer'>Cookie Policy</li>
                  </ul>
               </div>

               <br></br>
               </div>
      </div>
   )

}

export default Footer