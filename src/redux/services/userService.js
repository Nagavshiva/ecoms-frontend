import axios from "axios";

const url = "https://ecoms-backend.onrender.com";

const userService = {
    loginUser: async(userData)=>{
        return await axios.post(`${url}/api/users/login`,userData)
    },
    registerUser: async (userData) => {
        return await axios.post(`${url}/api/users/register`,userData);
      },
}

export default userService;