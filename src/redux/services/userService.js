import axios from "axios";

const url = "http://localhost:8080";

const userService = {
    loginUser: async(userData)=>{
        return await axios.post(`${url}/api/users/login`,userData)
    },
    registerUser: async (userData) => {
        return await axios.post(`${url}/api/users/register`,userData);
      },
}

export default userService;