import axios from "axios";

const activitiesAPI = {
  getRandomActivity: async () => {
    try{
      const response = await axios.get("https://www.boredapi.com/api/activity/");
      return response.data;
    }
    catch(error){
      console.log(error);
    }
  },
  getActivityByType: async (type) => {
    try{
      const response = await axios.get(`https://www.boredapi.com/api/activity?type=${type}`);
      return response.data;
    }
    catch(error){
      console.log(error);
    }
  }
}

export default activitiesAPI;