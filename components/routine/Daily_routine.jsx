import Image from 'next/image'

const Daily_Routines = () => {

   return (
      
      <div className='lg:m-10'>

            <div className='m-5 '> 

               <div className='text-[14px] lg:text-[12px] font-extrabold tracking-[1.5px] text-start leading-[18px] py-3 text-[#1f1f1f] '>

                  <h2 >YOUR DAILY ROUTINE, THE STARBUCKS WAY</h2>  

            </div>

            <div className='flex flex-col md:flex-row '>

                  <div className='mb-2 flex-1'> 
                  {/* Image */}
                     <Image src={'/assets/asset 2.png'} alt='/' height={650} width={650}></Image>
                  </div>
                  

                  <div className='flex-1 md:pl-14'>

                        <h2 className='py-2 text-[20px] tracking-[0.25px] leading-[25px] font-bold '>To Go With Your Coffee</h2>

                        <div>

                           <p className='py-5 text-[#6c6c6c] text-sm  tracking-[0.14px] leading-[20px] lg:w-[95%]'>We`re fast becoming known for fabulous food & beverage pairing options, developed by expert chefs, with both savoury and sweet menu items.</p>

                           <p className=' text-[#6c6c6c] text-sm font-medium tracking-[0.14px] leading-[20px] lg:w-[95%] '>Pairings include breakfast or lunchtime options of a French Toast Brioche with Chicken Schnitzel, finished with mayonnaise and a hint of mustard, paired with a Cold Brew.
                           </p>

                           <div className='border-[1px] border-spacing-0 border-[#006437] my-7 rounded-full text-center w-fit hover:bg-[#85cead]' ><button className='text-[15px] text-[#006437] leading-[11.5px] py-2 px-3 whitespace-nowrap font-semibold'>Order now</button> 
                           </div>

                        </div>
                        
                  </div>

            </div>

            </div>
      </div>
   )
};

export default Daily_Routines;