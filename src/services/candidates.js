import ApiService from "./api-service";

const URL_CANDIDATES = "/candidates";

const getCandidates = async data => {
  const response = await ApiService.get(URL_CANDIDATES, data);
  return response.data;
};

const createCandidate = async data => {
    const response = await ApiService.post(URL_CANDIDATES, data);
    return response.data;
  };

export { getCandidates , createCandidate };
