import axios from "axios";

// include  CORS « Access-Control-Allow-Origin » header in the request
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = "https://api.imgflip.com/get_memes ";