import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../redux/actions/productAction';

export const ShopWrapper = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products); 

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  function formatCurrency(number) {
    const formattedNumber = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  
    return formattedNumber.replace(/IDR/g, 'Rp.');
  }

  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  }

  return (
    <div className="flex flex-col gap-8 px-5 mt-8 mb-8 sm:px-8">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl font-semibold">Our Highlight Product</h2>
        <p className="text-lg font-normal">see all {">"}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {products.map((item) => (
          <div key={item.id} className="flex flex-col max-w-[320px] cursor-pointer justify-between p-3 hover:shadow-custom-shadow border rounded-xl card">
            <img src={item.gambarProduct} className="w-full rounded-xl" alt="" />
            <div className="flex flex-col flex-grow gap-2">
              <h2 className="text-xl font-semibold">{item.namaProduct}</h2>
              <p className="text-sm font-normal text-justify">{truncateString(item.deskripsiProduct, 100)}</p>
            </div>
            <h1 className="text-xl font-bold">{formatCurrency(item.hargaProduct)}</h1>

          </div>
        ))}
      </div>
    </div>
  );
};
