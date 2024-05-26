import {
    LOGIN_START_USER,
    FETCHING_START_USER,
    REGISTER_START_USER,
    DONE_LOGIN_PROCESS,
    DONE_REGISTER_PROCESS,
    FAILED_USERFETCH_PROCESS,
    DONE_USERFETCH_PROCESS,
    FAILED_LOGIN_PROCESS,
    FAILED_REGISTER_PROCESS,
    SIGNOUT,
} from '../actions/userAction';

const initialState = {
    user: null,
    token: sessionStorage.getItem('token') || null, //token dari sessionstorage
    isAuthenticated: sessionStorage.getItem('token') ? true : false, //untuk penanda apakah sudah login atau belum sesuai token di session
    isLoading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        //starting fetching loadingnya dimulai
        case LOGIN_START_USER:
        case REGISTER_START_USER:
        case FETCHING_START_USER:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case DONE_LOGIN_PROCESS:
            //saat berhasil login isAutheticatednya jadi true 
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                isLoading: false,
                error: null
            };
            case DONE_USERFETCH_PROCESS:
                return {
                    ...state,
                    user: action.payload.data,
                    isLoading: false,
                    error: null
                };
        case DONE_REGISTER_PROCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            };
        case FAILED_LOGIN_PROCESS:
        case FAILED_REGISTER_PROCESS:
        case FAILED_USERFETCH_PROCESS:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
            case SIGNOUT:
            return {
                ...state,
                isAuthenticated : false
            };
        default:
            return state;
    }
};

export default userReducer;
