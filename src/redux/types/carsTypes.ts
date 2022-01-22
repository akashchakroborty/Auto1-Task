export type SortType = 'asc' | 'desc';
export type MileageType = 'km' | 'mi';
export type FuelType = 'Diesel' | 'Petrol';

export interface CarsRequest {
  page?: number;
  manufacturer?: string;
  color?: string;
  sort?: SortType;
}

export interface Mileage {
  number: number;
  unit: MileageType;
}

export interface Car {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  mileage: Mileage;
  fuelType: FuelType;
  color: string;
  pictureUrl: string;
}

export interface CarsResponse {
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
}

export interface CarDetails {
  data?: Car;
  loading: boolean;
  error: boolean;
}

export interface CarsState {
  data: Car[];
  totalPageCount: number;
  totalCarsCount: number;
  loading: boolean;
  error: boolean;
  carDetails: CarDetails;
}
