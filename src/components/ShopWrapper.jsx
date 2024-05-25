import sample from '../assets/koko.jpg';
export const ShopWrapper = () => {
  return (
    <div className="flex flex-col gap-8 px-5 mt-8 mb-8 sm:px-8">
        <div className="flex items-center justify-between w-full">
        <h2 className="text-xl font-semibold">Our Highlight Product</h2>
        <p className="text-lg font-normal">see all {">"}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
            <div className="flex flex-col sm:max-w-[300px] max-w-[320px] gap-4 p-3 hover:shadow-custom-shadow border rounded-xl card">
                <img src={sample} className='w-full rounded-xl' alt="" />
                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-semibold'>Baju Koko</h2>
                    <p className='text-sm font-normal text-justify'>Halo Tim Muslimin, Saat ini baju koko sedang berkembang loh, banyak pemuda yang...</p>
                    <h1 className='text-xl font-bold'>Rp.250.000,00</h1>
                </div>
                <button className='px-4 py-2 text-white bg-blue-600 rounded-xl w-fit'>Lihat Barang Ini</button>
            </div>
        </div>
    </div>
  )
}
