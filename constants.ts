
import { Metric } from './types';

export const METRIC_DETAILS = {
  [Metric.AQI]: {
    unit: '',
    description: 'Air Quality Index',
    color: 'indigo',
  },
  [Metric.Temperature]: {
    unit: '°C',
    description: 'Ambient Temperature',
    color: 'amber',
  },
  [Metric.Humidity]: {
    unit: '%',
    description: 'Relative Humidity',
    color: 'sky',
  },
  [Metric.CO2]: {
    unit: 'ppm',
    description: 'Carbon Dioxide Level',
    color: 'emerald',
  },
  [Metric.WindSpeed]: {
    unit: 'km/h',
    description: 'Current Wind Speed',
    color: 'rose',
  },
};
