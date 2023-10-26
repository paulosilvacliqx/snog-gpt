/* eslint-disable @typescript-eslint/promise-function-async */
import axios, {
  AxiosHeaders,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";
import { getToken } from "../auth";

const request = async (params: AxiosRequestConfig) => {
  const secondsInMinute = 60;
  const millisecondsInSecond = 1000;
  const timeout = secondsInMinute * millisecondsInSecond;

  params.timeout = timeout;

  const headers: RawAxiosRequestHeaders | AxiosHeaders = {
    "Content-Type": "application/json",
    ...params.headers,
  };

  try {
    const token = getToken();

    if (token) {
      headers.Authorization = token;
    }
  } catch (ex) {
    if (ex !== "No current user") {
      throw ex;
    }
  }

  params.headers = headers;

  return axios({
    ...params,
  }).then(
    (event) => event,
    (error) => {
      throw error;
    }
  );
};

const getBaseUrl = (baseUrl?: string) => {
  return baseUrl || import.meta.env.VITE_APP_WEB_API;
};

export const get = (props: AxiosRequestConfig, baseURL?: string) =>
  request({
    baseURL: getBaseUrl(baseURL),
    ...props,
    method: "GET",
  });

export const post = (props: AxiosRequestConfig, baseURL?: string) =>
  request({
    baseURL: getBaseUrl(baseURL),
    ...props,
    method: "POST",
  });

export const put = (props: AxiosRequestConfig, baseURL?: string) =>
  request({
    baseURL: getBaseUrl(baseURL),
    ...props,
    method: "PUT",
  });

export const patch = (props: AxiosRequestConfig, baseURL?: string) =>
  request({
    baseURL: getBaseUrl(baseURL),
    ...props,
    method: "PATCH",
  });

export const del = (props: AxiosRequestConfig, baseURL?: string) =>
  request({
    baseURL: getBaseUrl(baseURL),
    ...props,
    method: "DELETE",
  });

export default {
  del,
  get,
  patch,
  post,
  put,
};
