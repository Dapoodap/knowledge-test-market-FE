import axios from "axios";


export const LOGIN_START_USER = "LOGIN_START_USER";
export const REGISTER_START_USER = "REGISTER_START_USER";
export const FETCHING_START_USER = "REGISTER_START_USER";
export const DONE_LOGIN_PROCESS = "DONE_LOGIN_PROCESS";
export const DONE_REGISTER_PROCESS = "DONE_REGISTER_PROCESS";
export const DONE_USERFETCH_PROCESS = "DONE_REGISTER_PROCESS";
export const FAILED_LOGIN_PROCESS = "FAILED_LOGIN_PROCESS";
export const FAILED_REGISTER_PROCESS = "FAILED_REGISTER_PROCESS";
export const FAILED_USERFETCH_PROCESS = "FAILED_REGISTER_PROCESS";
export const SIGNOUT = "SIGNOUT";


const startLoginFetching = () => ({
    type: LOGIN_START_USER
});
const SignOutFunc = () => ({
    type: SIGNOUT
});
const startRegisterFetching = () => ({
    type: REGISTER_START_USER
});
const startUserFetching = () =>({
    type : FETCHING_START_USER
})

const doneLogin = (data) => ({
    type: DONE_LOGIN_PROCESS,
    payload: data
});
const doneRegister = () => ({
    type: DONE_REGISTER_PROCESS
});
const doneUserFetching = (data) => ({
    type: DONE_USERFETCH_PROCESS,
    payload : data // Pass the userData received from the API
});

const failedLoginFetching = (error) => ({
    type: FAILED_LOGIN_PROCESS,
    payload: error
});

const failedRegisterFetching = (error) => ({
    type: FAILED_REGISTER_PROCESS,
    payload: error
});

const failedUserFetching = (error) => ({
    type :error
})

// fungsi untuk login, kalo berhasil dia set token dan id ke session
export const loginProcess = (data) => async (dispatch) => {
    dispatch(startLoginFetching());
    try {
        const res = await axios.post('http://localhost:8080/user/login', data);
        const responseData = res.data;
        sessionStorage.setItem('token', responseData.token);
        sessionStorage.setItem('id', responseData.data.id);
        dispatch(doneLogin(responseData.data));
    } catch (error) {
        let errorMessage = "An error occurred";
        if (error.response) {
            if (error.response.status === 401) {
                errorMessage = "Incorrect credentials";
            } else if (error.response.status === 404) {
                errorMessage = "User not registered";
            } else if (error.response.status === 500) {
                errorMessage = "Server error";
            }
        }
        console.log(error);
        dispatch(failedLoginFetching(errorMessage));
    }
};

// fungsi untuk register, kalo berhasil dia redirect to login
export const registerProcess = (data) => async (dispatch) => {
    dispatch(startRegisterFetching());
    try {
        await axios.post('http://localhost:8080/user/register', data);
        dispatch(doneRegister());
        alert('sukses register, silahkan login')
        window.location.href = '/login'
    } catch (error) {
        let errorMessage = "An error occurred";
        if (error.response) {
            if (error.response.status === 500) {
                errorMessage = "Server error";
                alert(errorMessage)
            }
        }
        console.log(error);
        dispatch(failedRegisterFetching(errorMessage));
    }
};

// ini untuk get user by id 
export const getUserByID = (userID) => async (dispatch) => {
   const token = sessionStorage.getItem('token')
   if (token) {
    try {
        const config = {
            headers: {
              Authorization: token // Menyertakan token dalam header otorisasi
            }
          };
        // Mulai proses pengambilan data
        dispatch(startUserFetching());

        // Lakukan permintaan ke backend
        const res = await axios.get(`http://localhost:8080/user/${userID}`, config);

        // Jika permintaan berhasil, kirim data ke redux store
        const userData = res.data;
        dispatch(doneUserFetching(userData.data));} 
        catch (error) {
        // Menangani kesalahan jika terjadi
        let errorMessage = "An error occurred";
        if (error.response) {
            if (error.response.status === 404) {
                errorMessage = "User not found";
            } else if (error.response.status === 500) {
                errorMessage = "Server error";
            }
        }
        console.log(error);
        dispatch(failedUserFetching(errorMessage));
    }
   }else{
    let errorMessage = 'token doesnt exist'
        dispatch(failedUserFetching(errorMessage));
   }
};

//untuk signout
export const SignOutHandler = () => (dispatch)=>{
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('id')
    dispatch(SignOutFunc())
}
