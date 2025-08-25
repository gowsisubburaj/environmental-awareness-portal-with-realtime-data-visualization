
export enum Metric {
  AQI = 'AQI',
  Temperature = 'Temperature',
  Humidity = 'Humidity',
  CO2 = 'CO2',
  WindSpeed = 'Wind Speed',
}

export interface EnvironmentalData {
  [Metric.AQI]: number;
  [Metric.Temperature]: number;
  [Metric.Humidity]: number;
  [Metric.CO2]: number;
  [Metric.WindSpeed]: number;
}

export interface HistoricalDataPoint {
  date: string; // e.g., 'Jan', 'Feb'
  [Metric.AQI]: number;
  [Metric.Temperature]: number;
  [Metric.Humidity]: number;
  [Metric.CO2]: number;
}

export interface MetricInfo {
  title: Metric;
  value: number;
  unit: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
}
