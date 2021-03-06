import axios from "axios";
import { config } from '../config.js';

const API_URL = config.serverAddress + "/api/v1/";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "users/login", {
                username,
                password
            })
            .then(response => {
                console.log(response)
                if (response.data.accessToken) {
                    const now = new Date();
                    const item = {
                        value: response.data,
                        expiry: now.getTime() + 6000000
                    }
                    localStorage.setItem("user", JSON.stringify(item));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(email, firstName, lastName, country, mobile) {
        return axios.post(API_URL + "signup", {
            email,
            firstName,
            lastName,
            country,
            mobile
        });
    }

    getCurrentUser() {
        const itemStr = localStorage.getItem('user');

        // if the item doesn't exist, return null
        if (!itemStr) {
            return null;
        }

        const item = JSON.parse(itemStr);
        const now = new Date();

        // compare the expiry time of the item with the current time
        if (now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            localStorage.removeItem("user");
            return null;
        }
        return item.value;
    }
}

export default new AuthService();