import axios from "axios";


export default {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=20");  
  },
  getNames: function (query) {
    return axios.get("https://randomuser.me/api/?results=" + query)
  }
};
