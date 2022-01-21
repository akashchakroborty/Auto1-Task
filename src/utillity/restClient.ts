import axios, { AxiosResponse, Method } from 'axios';
import { CarsResponse } from '../redux/types/carsTypes';
import { Manufacturer } from '../redux/types/filtersTypes';

export interface Options {
  method: 'get';
  url: string;
}

interface AxiosParams {
  method: Method;
  url: string;
  headers: any;
}

export enum HttpMethods {
  get = 'get',
}

export enum StatusCode {
  success = 200,
}

export type ApiResponse = CarsResponse & { manufacturers: Manufacturer[] } & { colors: string[] };

export const RestClient = async (options: Options): Promise<AxiosResponse<ApiResponse>> => {
  const commonHeader = {
    'Content-Type': 'application/json',
  };
  const axiosInstance = axios.create({
    validateStatus(status: number) {
      return status >= 200 && status < 400;
    },
  });
  const axiosParams: AxiosParams = {
    method: options.method,
    url: options.url,
    headers: { ...commonHeader },
  };
  const response = await axiosInstance(axiosParams);
  return response;
};
