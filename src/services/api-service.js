import axios from "axios";

export const config = {
  baseURL: "http://localhost:3000"
};

const ApiService = (() => {
  const service = axios.create(config);
  return {
    get(url, params = {}) {
      return service.get(url, params);
    },
    post(url, data) {
      return service.post(url, data);
    }
  };
})();

export default ApiService;
