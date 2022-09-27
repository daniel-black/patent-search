import axios from "axios";
import { usptoUrl } from "../lib/constants";
import * as https from 'https';

const axiosClient = axios.create({
  baseURL: usptoUrl,
  timeout: 12000,
  headers: { "Content-Type": "application/json" },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

export default axiosClient;