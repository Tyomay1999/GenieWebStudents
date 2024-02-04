import axios from "axios";
import dataControl from "../../Services/dataControl";

export const fetchingDataWithAxiosMiddleware = (
    method,
    url,
    formData,
    cancelToken
) => {
    const handlerObjectForSend = {
        method,
        url,
        headers: {
            "Content-Type": "multipart/form-data",
            // SessionID: `${sessionStorage.getItem("SessionID")}`,
            // IP: `${sessionStorage.getItem("ip")}`,
        },
    };

    const token = dataControl.getToken()
    if ( token ) {
        handlerObjectForSend.headers[ 'x-access-token' ] = token
    }

    if ( cancelToken ) {
        handlerObjectForSend.cancelToken = cancelToken;
    }
    if ( method !== "GET" ) {
        handlerObjectForSend.data = formData;
    }
    return axios( handlerObjectForSend );
};
