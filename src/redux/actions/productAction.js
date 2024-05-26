import axios from "axios";

// Membuat case - case yang nantinya digunakan untuk reducer
export const FETCHING_START = "FETCHING_START";
export const DONE_FETCHING_PROCESS = "DONE_FETCHING_PROCESS";
export const FAILED_FETCHING_PROCESS = "FAILED_FETCHING_PROCESS";
export const DONE_ADD_PRODUCT = "DONE_ADD_PRODUCT";
export const FAILED_ADD_PRODUCT = "FAILED_ADD_PRODUCT";
export const DONE_UPDATE_PRODUCT = "DONE_UPDATE_PRODUCT";
export const FAILED_UPDATE_PRODUCT = "FAILED_UPDATE_PRODUCT";
export const DONE_DELETE_PRODUCT = "DONE_DELETE_PRODUCT";
export const FAILED_DELETE_PRODUCT = "FAILED_DELETE_PRODUCT";


// fungsi fungsi untuk setting data dan case
    // untuk proses fetching
const startFetching = () => ({
    type: FETCHING_START
});
const doneFetching = (data) => ({
    type: DONE_FETCHING_PROCESS,
    payload: data
});
const failedFetching = (error) => ({
    type: FAILED_FETCHING_PROCESS,
    payload: error
});
    // untuk proses add product
const doneAddProduct = (data) => ({
    type: DONE_ADD_PRODUCT,
    payload: data
});
const failedAddProduct = (error) => ({
    type: FAILED_ADD_PRODUCT,
    payload: error
});
    // untuk proses update product
const doneUpdateProduct = (data,id) => ({
    type: DONE_UPDATE_PRODUCT,
    payload: {
        id,data
    }
});
const failedUpdateProduct = (error) => ({
    type: FAILED_UPDATE_PRODUCT,
    payload: error
});
    // untuk porses delete product
const doneDeleteProduct = (id) => ({
    type: DONE_DELETE_PRODUCT,
    payload: id
});
const failedDeleteProduct = (error) => ({
    type: FAILED_DELETE_PRODUCT,
    payload: error
});

//fungsi fungsi async untuk CRUD product
export const getAllProducts = () => async (dispatch) => {
    dispatch(startFetching()); //dispatch untuk memanggil func start fetch
    try {
        const res = await axios.get('http://localhost:8080/products'); //axios get req
        const responseData = res.data;
        dispatch(doneFetching(responseData.data)); //mengambil data dan mengirimkan ke reducere untuk disimpan
    } catch (error) {
        let errorMessage = "An error occurred";
        console.log(error);
        dispatch(failedFetching(errorMessage));
    }
    
};
export const postProduct = (productData) => async (dispatch) => {
    dispatch(startFetching());
    let errorMessage = ''
    const token = sessionStorage.getItem('token')
    if (token) {
        try {
            const config = {
                headers: {
                  Authorization: token // Menyertakan token dalam header otorisasi
                }
              };
              const formData = new FormData();
            formData.append('name', productData.namaProduct);
            formData.append('deskripsi', productData.deskripsiProduct);
            formData.append('harga', productData.hargaProduct);
            formData.append('file', productData.file);          
            const res = await axios.post('http://localhost:8080/products',formData ,config);
            const responseData = res.data;
            dispatch(doneAddProduct(responseData.data));
            alert("Sukses")
        } catch (error) {
            let errorMessage = "An error occurred";
            if (error.response) {
                if (error.response.status === 401) {
                    //jika user memasukan token yang tidak sesuai maka akan dikembalikan ke halaman home dan menghapus semua sessionstorage
                    errorMessage = "unauthorized";
                    alert('unauthorized, redirecting to page')
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('user')
                    window.location.href = '/'
                } else if (error.response.status === 500) {
                    alert('server error, please try again')
                }
            }
            console.log(error);
            dispatch(failedAddProduct(errorMessage));
        }
    } else {
        errorMessage = 'token doesnt exist'
        dispatch(failedFetching(errorMessage));

    }
    
};
export const updateProduct = (productData,id) => async (dispatch) => {
    dispatch(startFetching());
    let errorMessage = ''
    const token = sessionStorage.getItem('token')
    if (token) {
        try {
            const config = {
                headers: {
                  Authorization: token // Menyertakan token dalam header otorisasi
                }
              };
              const formData = new FormData();
            formData.append('name', productData.namaProduct);
            formData.append('deskripsi', productData.deskripsiProduct);
            formData.append('harga', productData.hargaProduct);        
            const res = await axios.put(`http://localhost:8080/products/${id}`,formData ,config);
            const responseData = res.data;
            dispatch(doneUpdateProduct(responseData.data,id));
            alert("Sukses")
        } catch (error) {
            let errorMessage = "An error occurred";
            if (error.response) {
                if (error.response.status === 401) {
                    //jika user memasukan token yang tidak sesuai maka akan dikembalikan ke halaman home dan menghapus semua sessionstorage
                    errorMessage = "unauthorized";
                    alert('unauthorized, redirecting to page')
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('user')
                    window.location.href = '/'
                } else if (error.response.status === 500) {
                    alert('server error, please try again')
                }
            }
            console.log(error);
            dispatch(failedUpdateProduct(errorMessage));
        }
    } else {
        errorMessage = 'token doesnt exist'
        dispatch(failedFetching(errorMessage));

    }
    
};
export const deleteProduct = (id) => async (dispatch) => {
    dispatch(startFetching());
    const token = sessionStorage.getItem('token')
    if (token) {
        try {
            const config = {
                headers: {
                  Authorization: token // Menyertakan token dalam header otorisasi
                }
              };
            await axios.delete(`http://localhost:8080/products/${id}`,config);
            dispatch(doneDeleteProduct(id));
            alert("Sukses")
        } catch (error) {
            let errorMessage = "An error occurred";
            if (error.response) {
                if (error.response.status === 401) {
                    //jika user memasukan token yang tidak sesuai maka akan dikembalikan ke halaman home dan menghapus semua sessionstorage
                    errorMessage = "unauthorized";
                    alert('unauthorized, redirecting to page')
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('user')
                    window.location.href = '/'
                } else if (error.response.status === 500) {
                    alert('server error, please try again')
                }
            }
            console.log(error);
            dispatch(failedDeleteProduct(errorMessage));
        }
    } else {
        dispatch(failedFetching('token doesnt exist'));
        window.location.href = '/'

    }
    
};
