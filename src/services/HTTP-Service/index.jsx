import axios from "../API-Client"

export const handleLogin = async (e, user, password) => {
  e.preventDefault();
  
  try {
    const response = await axios.post(
      "/auth",
      JSON.stringify({ username: user, password }),
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      }
    );
  } catch {
    
  }

}

export const LoadCommunityDataSet = async (e) => {
  e.preventDefault();

  
}