import Image from 'next/image'
 
 const HeroSection = () => {
   return (
         <div>
            <div className="innershadow z-[-999] relative w-full h-screen ">
                  <Image className="object-cover " src={'/assets/asset 0.png'} alt='/' layout="fill" />
            </div>

         </div>
   )
 };

 export default HeroSection;