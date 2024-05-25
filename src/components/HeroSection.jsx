import heroMask from '../assets/heroMask.svg';

export const HeroSection = () => {
  return (
    <div className="flex flex-wrap items-start justify-center w-full gap-2 px-5 py-10 lg:items-center lg:px-10 sm:flex-nowrap sm:py-20">
      <div className="flex flex-col w-full gap-10 text-center sm:w-1/2 sm:text-start">
        <p className="text-lg font-normal sm:text-xl">Welcome to <span className="font-semibold underline">MarketStore</span></p>
        <div className='flex flex-col gap-2'>
        <h1 className="text-3xl font-bold sm:text-5xl">Discover Your Style. Shop the Latest Trends in <span className="text-primary">Fashion</span> Now!</h1>
        <p className="text-lg font-light">Find your perfect style in ours shop, there is more than 1000+ styles</p>
        </div>
        <button className='py-3 m-auto text-sm font-medium text-white bg-green-700 rounded-full sm:m-0 px-7 w-fit'>Shop Now !</button>
      </div>
      <div className="flex justify-center w-full p-2 sm:w-1/2">
        <img src={heroMask} loading='lazy' width={600} alt="" />
      </div>
      
      
    </div>
  );
}
