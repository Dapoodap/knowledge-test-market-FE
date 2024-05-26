import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Dashboard } from '../pages/Dashboard';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import React Icons
import { deleteProduct, getAllProducts, postProduct, updateProduct } from '../redux/actions/productAction';

export const DataProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  const loading = useSelector(state => state.product.loading);
  const [editingProduct, setEditingProduct] = useState(null); // State untuk mengetahui kalo kondisinya sedang mengedit
  const [formData, setFormData] = useState({}); // Untuk mengrimkan data

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // fungsi handle edit
  const handleEditClick = (product) => {
    setEditingProduct(product); //membuat sekarang jadi mode product
    setFormData({ ...product }); // Set form data ke current data 
  };

  // Function to handle cancel edit
  const cancelEdit = () => {
    setEditingProduct(null); //membuat jadi mode tambah
    setFormData({}); // Clear form data
  };

  // Function to handle save edit
  const saveEdit = () => {
    dispatch(updateProduct(formData, formData.id));
    setEditingProduct(null);
    setFormData({}); // Clear form data
    formData.file = null;
    
  };

  // Function to handle add product
  const handleAddProduct = () => {
    // ini buat nambahin data handle kalo datanya ditambah
    dispatch(postProduct(formData));
    setFormData({});
  };

  // handle image submi
  const handleImage = async (e) => {
    const selectedFile = e.target.files[0];
    formData.file = selectedFile;
  };

  // Function untuk handling form 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      // kalo kondisinya mode edit dia akan ke saveEdit
      saveEdit();
    } else {
      // If mode tambah data baru dia jalankan fungsi addproduct
      handleAddProduct();
    }
  };

  // untuk hapus data
  const handleDelete = (id) =>{
    dispatch(deleteProduct(id))
  }

  return (
    <Dashboard>
      <div className="w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold w-fit">Products</h2>
        {formData && (
          <form onSubmit={handleSubmit} className="w-full mt-4">
            <div className="flex flex-col mb-4">
              <label className="font-semibold" htmlFor="namaProduct">Product Name</label>
              <input type="text" id="namaProduct" name="namaProduct" value={formData.namaProduct || ''} onChange={handleChange} className="px-3 py-1 border rounded" />
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-semibold" htmlFor="deskripsiProduct">Description</label>
              <textarea id="deskripsiProduct" name="deskripsiProduct" value={formData.deskripsiProduct || ''} onChange={handleChange} className="px-3 py-1 border rounded"></textarea>
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-semibold" htmlFor="hargaProduct">Price</label>
              <input type="text" id="hargaProduct" name="hargaProduct" value={formData.hargaProduct || ''} onChange={handleChange} className="px-3 py-1 border rounded" />
            </div>
            {editingProduct ? null : (
              <div className="flex flex-col mb-4">
                <label className="font-semibold" htmlFor="file">Foto Product</label>
                <input type="file" id="file" name="file" onChange={handleImage} className="px-3 py-1 border rounded" />
              </div>
            )}
           {loading ?  <button disabled type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
              loading
            </button> :  <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
              {editingProduct ? 'Save Changes' : 'Add Product'}
            </button>}
          </form>
        )}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td className="px-4 py-2 border">{product.id}</td>
                  <td className="px-4 py-2 border">{product.namaProduct}</td>
                  <td className="px-4 py-2 border">{product.deskripsiProduct}</td>
                  <td className="px-4 py-2 border">{product.hargaProduct}</td>
                  <td className="px-4 py-2 border">
                    {editingProduct === product ? (
                      <>
                        <button className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700" onClick={cancelEdit}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => handleEditClick(product)}>
                          <FaEdit />
                        </button>
                        <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700" onClick={()=>{handleDelete(product.id)}}>
                          <FaTrash />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Dashboard>
  );
};
