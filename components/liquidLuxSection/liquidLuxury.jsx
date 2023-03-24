 import Image from 'next/image'

const Liquid_Luxury = () => {
   return (
      <div className=' flex flex-col '>

         <Image className="fixed z-[-999]" src={'/assets/asset 1.png'} alt='/' height={534} width={1335}/>

         <div className='m-5 lg:m-16 '>
            <h1 className='text-[30px] leading-[37px] tracking-[0.15px] py-4 text-[#1f1f1f]'>Take a Sip of liquid Luxury</h1>
            <p className='text-[15px] leading-[25px] tracking-[0.14px] text-[#6c6c6c] text-left lg:w-[90%] lg:text-[16px]'>It took 8 months and more than 80 different roast iterations before we landed on the exact flavour profile our customers wanted. This unique blend brings together the sweet citrus flavours of East African beans and the smooth body of Latin American beans, all roasted to the peak of their flavour. Try the softly balanced Blonde Roast for the smoothest expression of your favourite espresso beverage or take a bag of whole bean luxury home with you to brew the perfect cup. Also available via Starbucks Delivers on UberEats & MrD.</p>

            <div className='border-[1px] border-spacing-0 border-[#006437] my-7 rounded-full text-center w-fit hover:bg-[#85cead]'>

               <button className='text-[15px] text-[#006437] leading-[11.5px] py-2 px-3  whitespace-nowrap font-semibold'>
                  Order now
               </button>
               
            </div>

         </div>
      </div>
   )
}

export default Liquid_Luxury;