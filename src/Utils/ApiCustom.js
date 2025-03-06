import axios from "axios";

let ApiCustom = axios.create({})

ApiCustom.interceptors.request.use(config2 =>{
    config2.headers.token = localStorage.getItem('rushikeshtechTokenid') 
    config2.headers.Authorizationmanuallyset = localStorage.getItem('rushikeshtechTokenid')
    console.log("updated")
    console.log(config2)
    return config2
})

export default ApiCustom