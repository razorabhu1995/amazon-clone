import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-2d7a5/us-central1/api"
});
//change api url to deployed firebase API in the Functions tab of Firebase console (need upgraded firebase account with blaze)
export default instance;