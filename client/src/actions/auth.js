import * as api from '../api'
import { AUTH } from '../constants/actionTypes';


export const signin = (formData, history) => async (dispatch) => {
    try {
        //send the data to the database 

        history('/');
    } catch (error) {
        console.log(error);
    }
}




export const signup = (formData, history) => async (dispatch) => {
    try {
        //send the data to the database 
        history('/');
    } catch (error) {
        console.log(error);
    }
}
