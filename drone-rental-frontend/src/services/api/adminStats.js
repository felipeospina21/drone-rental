import axios from 'axios';

function getRequest(url, token) {
  try {
    const config = {
      headers: { 'Access-token': token },
    };
    const res = axios.get(url, config);
    return res;
  } catch (error) {
    throw new Error(error);
  }
}

function getUserCount(token) {
  return getRequest('http://localhost:8080/api/users/countUsers', token);
}

function getTotalEarning(token) {
  return getRequest('http://localhost:8080/api/users/totalEarnings', token);
}

export { getTotalEarning, getUserCount };
