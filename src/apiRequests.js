import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const apiRequests = {
    login: async (adminInfo) => {
        try{
            const response = await axios.post(`${baseURL}/admin/login`, adminInfo);
            return response;
        }
        catch(error){
            return error.response;
        }
    },
    getBookings: async () => {
        try{
            const response = await axios.get(`${baseURL}/admin/bookings`);
            return response;
        }   
        catch(error){
            return error.response;
        }
    },
    createCleaner: async (cleanerInfo) => {
        try{
            const response = await axios.post(`${baseURL}/admin/cleaners`, cleanerInfo);
            return response;
        }
        catch(error){
            return error.response;
        }
    },
    getCleaners: async () => {
        try{
            const response = await axios.get(`${baseURL}/admin/cleaners`);
            return response;
        }
        catch(error){
            return error.response;
        }
    },  
    getStatistics: async () => {
        try{
            const response = await axios.get(`${baseURL}/admin/statistics`);
            return response;
        }
        catch(error){
            return error.response;
        }
    },
}

export default apiRequests;