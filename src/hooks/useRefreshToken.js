import { API_ENDPOINTS } from "../api/api-endpoints";
import axios from "../api/axios";
import useAuth from "./useAuth";

const BASE_URL = "https://auth-backend-playground.herokuapp.com";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get(`${BASE_URL}${API_ENDPOINTS.REFRESH}`, {
      withCredentials: true,
      user: auth?.email
    });
    setAuth((prev) => {
      console.log(prev);
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
