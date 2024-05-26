import {
    FETCHING_START,DONE_FETCHING_PROCESS,FAILED_FETCHING_PROCESS,
    DONE_ADD_PRODUCT,
    FAILED_ADD_PRODUCT,
    DONE_UPDATE_PRODUCT,
    FAILED_UPDATE_PRODUCT,
    DONE_DELETE_PRODUCT,
    FAILED_DELETE_PRODUCT
} from '../actions/productAction'

// Initial state
const initialState = {
    products: [],
    loading: false,
    error: null
  };
  
  // Product reducer
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_START:
        return {
          ...state,
          loading: true,
          error: null
        };
      case DONE_FETCHING_PROCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
          error: null
        };
      case FAILED_FETCHING_PROCESS:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case DONE_ADD_PRODUCT:
        return {
          ...state,
          loading: false,
          products: [...state.products, action.payload],
          error: null
        };
        case FAILED_ADD_PRODUCT:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
        case DONE_UPDATE_PRODUCT: {
          const updatedProducts = state.products.map(product =>
            product.id === action.payload.id ? { ...product, ...action.payload.data } : product
          );
          return {
            ...state,
            loading: false,
            products: updatedProducts,
            error: null
          };
        }
        case FAILED_UPDATE_PRODUCT:
          return {
            ...state,
            loading: false,
            error: action.payload
          };
          case DONE_DELETE_PRODUCT: {
            return {
              ...state,
              loading: false,
              products: state.products.filter(product => product.id != action.payload),
              error: null
            };
          }
          case FAILED_DELETE_PRODUCT: {
            return {
              ...state,
              loading: false,
              error: action.payload
            };
          }
      default:
        return state;
    }
  };
  
  export default productReducer;
  