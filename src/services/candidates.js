import ApiService from "./api-service";

const URL_CANDIDATES = "/candidates";

const getCandidates = async data => {
  const response = await ApiService.get(URL_CANDIDATES, data);
  return response.data;
};

const searchCandidates = async (value, searchBy) => {
  const searchByLike = `${searchBy}_like=`;
  const url_search = `${URL_CANDIDATES}?${searchBy ? searchByLike : "q="}${value}`;
  const response = await ApiService.get(url_search);
  return response.data;
};

const createCandidate = async data => {
  const response = await ApiService.post(URL_CANDIDATES, data);
  return response.data;
};

export { getCandidates , createCandidate, searchCandidates };
