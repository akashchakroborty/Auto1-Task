import { CarsRequest } from '../../redux/types/carsTypes';
import {
  CARS_URL,
  CAR_DETAILS_URL,
  COLORS_URL,
  MANUFACTURERS_URL
  } from './urls';

const pickBy = (object: { [s: string]: unknown } | ArrayLike<unknown>, predicate = (v: any) => v) =>
  Object.entries(object)
    .filter(([k, v]) => predicate(v))
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

const isEmpty = (object: string) =>
  Object.keys(object).length === 0 && object.constructor === Object;

const buildUrl = (path: string, parameterMap?: Map<string, any>) => {
  let urlPath = path.repeat(1);
  if (parameterMap) {
    parameterMap.forEach(
      (parameterValue, parameterKey) => (urlPath = urlPath.replace(parameterKey, parameterValue)),
    );
  }
  return urlPath;
};

const createUrlFromParams = (paramObj: any, path: string) => {
  const urlParams = new URLSearchParams(pickBy(paramObj)).toString();
  const baseUrl = ` ${path}`;
  return isEmpty(urlParams) ? baseUrl : `${baseUrl}?${urlParams}`;
};

export const getCarsUrl = (props: CarsRequest): string => {
  return createUrlFromParams(
    {
      ...props,
    },
    CARS_URL,
  );
};

export const getColorsUrl = (): string => {
  return COLORS_URL;
};

export const getManufacturersUrl = (): string => {
  return MANUFACTURERS_URL;
};

export const getCarDetailsUrl = (stockNumber: number): string => {
  return buildUrl(CAR_DETAILS_URL, new Map([['$stockNumber', stockNumber]]));
};
