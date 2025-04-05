import { useAuth } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
export const AppContext=createContext()
const AppContextProvider=(props)=>{
    const [credit,setCredit]=useState(false)
    const backend_url=import.meta.env.VITE_BACKEND_URL
    const {getToken}=useAuth()
    const loadCreditdata=async()=>{
        
        try {
            const token=await getToken()
            console.log("Token:", token); // Add this line
            console.log("Backend URL:", backend_url);
            const apiUrl = `${backend_url.endsWith('/') ? backend_url : backend_url + '/' }api/user/credits`;
            const {data}=await axios.get(apiUrl,{headers:{token}})
            console.log("API Response Data:", data);
            if(data.success){
                setCredit(data.credit)
                console.log(data.credit);
                
            }
            
        } catch (error) {
            console.log(error.message);
         toast.error(error.message)

        }
    }
    const value={
        credit,setCredit,backend_url,loadCreditdata 
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider