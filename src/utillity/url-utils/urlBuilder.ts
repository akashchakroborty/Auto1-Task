import { CarsRequest } from '../../redux/types/carsTypes';
import { CARS_URL } from './urls';

const pickBy = (object: { [s: string]: unknown } | ArrayLike<unknown>, predicate = (v: any) => v) =>
  Object.entries(object)
    .filter(([k, v]) => predicate(v))
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

const isEmpty = (object: string) =>
  Object.keys(object).length === 0 && object.constructor === Object;

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
