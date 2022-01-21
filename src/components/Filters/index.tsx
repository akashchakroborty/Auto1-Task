import React, { useEffect } from 'react';
import {
 Button, FormControl, MenuItem, Select, InputLabel
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CarsRequest } from '../../redux/types/carsTypes';
import { Manufacturer } from '../../redux/types/filtersTypes';

export interface FiltersProps {
  getCars: (props: CarsRequest) => void;
  setFilters: (props: CarsRequest) => void;
  getColors: () => void;
  getManufacturers: () => void;
  manufacturers: Manufacturer[];
  colors: string[];
  activeFilters: CarsRequest;
}

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 24,
  },
  formControl: {
    margin: '8px 0 24px !important',
    minWidth: 120,
  },
  option: {
    textTransform: 'capitalize',
  },
  filterButton: {
    alignSelf: 'flex-end',
  },
});

const Filters: React.FC<FiltersProps> = ({
  colors,
  manufacturers,
  activeFilters,
  getManufacturers,
  setFilters,
  getCars,
  getColors,
}) => {
  const classes = useStyles();
  const { manufacturer, color, sort } = activeFilters;
  const handleColorChange = (event: { target: { value: string } }) =>
    setFilters({ color: event.target.value });

  const handleManufacturerChange = (event: { target: { value: any } }) =>
    setFilters({ manufacturer: event.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters({ page: 1 });
    getCars({
 color, manufacturer, page: 1, sort
});
  };
  useEffect(() => {
    if (!colors.length) {
      getColors();
    }
    if (!manufacturers.length) {
      getManufacturers();
    }
  }, [getColors, getManufacturers]);
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <InputLabel id="colorFilterLabel">Color</InputLabel>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          id="colorFilterSelect"
          labelId="colorFilterLabel"
          value={color || ''}
          onChange={handleColorChange}
          displayEmpty
          className={classes.option}
        >
          <MenuItem value="">
            <span>All Car Colors</span>
          </MenuItem>
          {colors.map((colorOption) => (
            <MenuItem key={colorOption} value={colorOption} className={classes.option}>
              {colorOption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <InputLabel id="manufacturerFilterLabel">Manufacturer</InputLabel>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          id="manufacturerFilterSelect"
          labelId="manufacturerFilterLabel"
          value={manufacturer || ''}
          onChange={handleManufacturerChange}
          displayEmpty
          className={classes.option}
        >
          <MenuItem value="">
            <span>All Manufacturers</span>
          </MenuItem>
          {manufacturers.map((manufacturerOption) => (
            <MenuItem
              key={manufacturerOption.name}
              value={manufacturerOption.name}
              className={classes.option}
            >
              {manufacturerOption.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth={false}
        className={classes.filterButton}
      >
        Filter
      </Button>
    </form>
  );
};

export default Filters;
