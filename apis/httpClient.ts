import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import config from "@/config";
import { requestInterceptors, responseInterceptors } from "@/utils/api";
import { Storage } from "@/storage";

export interface HttpClientConfig {
  baseURL?: string;
  timeout?: number;
  headers?: { Authorization?: string };
}

export class HttpClient {
  private api: AxiosInstance;

  private static clientConfig: HttpClientConfig;

  constructor(url: string, axiosConfig: HttpClientConfig) {
    this.api = axios.create({
      ...axiosConfig,
      baseURL: `${axiosConfig.baseURL}${url}`,
    });
    HttpClient.clientConfig = {
      headers: { Authorization: Storage.getItem("ACCESS_TOKEN") || "" },
    };
    this.setting();
  }

  get(requestConfig?: AxiosRequestConfig) {
    return this.api.get("", { ...HttpClient.clientConfig, ...requestConfig });
  }

  getById(requestConfig?: AxiosRequestConfig) {
    return this.api.get("/:id", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  getByName(requestConfig?: AxiosRequestConfig) {
    return this.api.get("/:name", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  fit(requestConfig?: AxiosRequestConfig) {
    return this.api.get("/fit", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  post(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post("", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  upload(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post("/upload", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  put(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.put("", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  auto(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.put("/auto", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  search(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post("/search", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  signup(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post("/signup", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  signin(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post("/signin", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  save(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post("/save", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  delete(requestConfig?: AxiosRequestConfig) {
    return this.api.delete("", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  self(requestConfig?: AxiosRequestConfig) {
    return this.api.get("/self", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  private setting() {
    HttpClient.setCommonInterceptors(this.api);
  }

  static setAccessToken() {
    const accessToken = Storage.getItem("ACCESS_TOKEN");
    HttpClient.clientConfig.headers = {
      ...HttpClient.clientConfig.headers,
      Authorization: accessToken || undefined,
    };
  }

  static removeAccessToken() {
    Storage.setItem("ACCESS_TOKEN", "");
  }

  private static setCommonInterceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(requestInterceptors as any);
    instance.interceptors.response.use(responseInterceptors);
  }
}

const axiosConfig: HttpClientConfig = {
  baseURL: config.baseURL,
  timeout: 9999999999999,
};

export default {
  company: new HttpClient("/api/company", axiosConfig),
  companyFind: new HttpClient("/api/company/find", axiosConfig),
  user: new HttpClient("/api/user", axiosConfig),
  wordcloud: new HttpClient("/api/wordcloud", axiosConfig),
  auth: new HttpClient("/api/auth", axiosConfig),
  jaso: new HttpClient("/api/jaso", axiosConfig),
  jasoUpdate: new HttpClient("/api/jaso/update", axiosConfig),
};
