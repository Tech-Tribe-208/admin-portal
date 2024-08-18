import {API_URL} from "@env";

const baseURL = API_URL;

import axios from 'axios';

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
        const response = await axios.post(`${baseURL}/admin/bookings`);
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
    }
}

module.exports = apiRequests;