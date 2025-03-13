import { configureStore } from "@reduxjs/toolkit";
import countnumberReducer from './Counter'

export default configureStore(
    {
        reducer:{
            countnumber : countnumberReducer
        }
    }
)