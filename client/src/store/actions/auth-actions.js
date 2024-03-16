// import axios from "axios";
import api from "../../utils/api";
import { authActions } from '../auth-slice';
import { uiActions } from "../ui-slice";


export const login = (payload) => {
    return async dispatch => {
        dispatch(uiActions.loginLoading());
        // await api.get('/sanctum/csrf-cookie');

        const postData = async () => {
            const response = await api.post("/v1/user/login", payload);

            const data = await response.data;
            return data;
        };

        try {
            const user = await postData();
            await dispatch(authActions.login(user));
            dispatch(uiActions.loginLoading());
        } catch (error) {
            console.log(error);
            dispatch(uiActions.loginLoading());

        }
    }
};




export const register = (payload) => {
    return async dispatch => {
        dispatch(uiActions.registerLoading())
        // await api.get('/sanctum/csrf-cookie');

        const postData = async () => {
            const response = await api.post("/v1/user/register", payload);

            const data = await response.data;
            return data;
        };

        try {
            const user = await postData();
            await dispatch(authActions.register(user));
            dispatch(uiActions.registerLoading());
        } catch (error) {
            console.log(error);
            dispatch(uiActions.registerLoading());
        }
    }
};


export const logout = (token) => {
    return async dispatch => {
        // await api.get('/sanctum/csrf-cookie');

        const logout = async () => {
            const response = await api.get('/v1/user/logout');
            const message = response.data;
            return message;
        };

        try {
            await logout();
            dispatch(authActions.logout());
            
        } catch (error) {
            console.log(error);
        }

    }
};