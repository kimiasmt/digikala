const axios = require("axios");

const baseUrl= "https://www.digikala.com/"


const fetch = async (url:string, data:any, method:string) => {
    if ((!data || data === "") || data === null) data = {}; //for get method
    let headers = {
        "token": `mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv`
    };

    try {
        let response;
        response = await axios({url: baseUrl + url, data, method, headers});
        console.log("res" , response.data)
        if (response.data.errorCode){
            return;
        } else {
            return response.data;
        }
    } catch (e) {
        console.log(e);
    }
};


export default fetch;
