import Image from "next/image";

export const Hero = () => {
  return (
    <>
    <div className="h-[950px] w-screen flex px-20 justify-center items-center">
        <div className=" bg-gray-800 w-full h-full rounded-4xl relative overflow-hidden">
            <Image src="/assets/3.png" width={1000} height={1000} alt="huog" className="w-full h-full absolute object-cover"/>
        </div>
    </div>
    </>
  )
}

export default Hero;