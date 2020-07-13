import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=5000");
  },
  getNames: function(name) {
    return axios.get("https://randomuser.me/api/?inc=" + name );
  }
};
