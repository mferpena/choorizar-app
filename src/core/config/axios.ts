import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://demo6806380.mockable.io",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const retryRequest = async <T>(
  fn: () => Promise<AxiosResponse<T>>,
  retries = 2,
  delay = 1000
): Promise<AxiosResponse<T>> => {
  try {
    return await fn();
  } catch (err) {
    if (retries <= 0) throw err;
    await new Promise((res) => setTimeout(res, delay));
    return retryRequest(fn, retries - 1, delay);
  }
};

export default axiosInstance;
