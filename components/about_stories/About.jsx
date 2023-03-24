import Image from 'next/image'


const About = () => {
   return(
      <div className=' flex flex-col sm:flex-row lg:m-10' >

         {/* About section */}
            <div className='boxshadow m-5 mt-[2rem]  sm:flex-1'>

                  <Image src={'/assets/asset 11.jfif'} alt='/' height={287} width={503}/>

                  <div className='m-5'>

                        <h2 className='text-[#1f1f1f] text-[20px] tracking-[0.2px] leading-[27px] py-2 lg:text-[23px]'>About Us</h2>
                        
                        <p className='text-[#6c6c6c] text-sm tracking-[1px] leading-[20px] lg:text-[16px]'>
                              Find out more about our company and heritage.
                        </p>

                       <div className='border-[1px]  border-[#006437] my-5 rounded-full text-center w-fit sm:w-[7.4rem] md:w-[8.5rem] mb-1 hover:bg-[#85cead] '>

                              <button className='text-[15px] text-[#006437] leading-[11.5px] py-3 px-3  whitespace-nowrap font-semibold '>
                              Find out more
                              </button>
                      </div>

                      <br></br>

                  </div> 
            </div>

            {/* Starbucks Stories Section */}
            <div className='boxshadow m-5 mt-[2rem]  sm:flex-1'>

                  <Image src={'/assets/asset 12.jfif'} alt='/' height={287} width={503}/>

                        <div className='m-5'>

                              <h2 className='text-[#1f1f1f] text-[20px] tracking-[0.2px] leading-[27px] py-2'>Starbucks Stories</h2>
                              
                              <p className='text-[#6c6c6c] text-sm tracking-[0.14px] leading-[20px] lg:text-[16px]'>
                                    Keep up to date with our latest stories and news.
                              </p>

                              <div className='border-[1px]  border-[#006437] my-5 rounded-full text-center w-fit sm:w-[7.4rem] md:w-[8.5rem] mb-1 hover:bg-[#85cead] '>

                                          <button className='text-[16px] text-[#006437] leading-[11.5px] py-3 px-3  whitespace-nowrap font-semibold '>
                                          Find out more
                                          </button>
                              </div>

                              {/* <br className='hidden md:visible'></br> */}

                  </div> 
            </div>

      </div>
   )
}

export default About;