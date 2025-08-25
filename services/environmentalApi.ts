
import type { EnvironmentalData, HistoricalDataPoint } from '../types';
import { Metric } from '../types';

// Utility to generate random numbers in a range
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generates mock current data for a given city
const generateCurrentData = (city: string): EnvironmentalData => {
  // Simple hash to get slightly different (but consistent) data for the same city
  const cityHash = city.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  return {
    [Metric.AQI]: (cityHash % 150) + random(10, 30),
    [Metric.Temperature]: (cityHash % 25) + random(0, 10),
    [Metric.Humidity]: (cityHash % 50) + random(30, 40),
    [Metric.CO2]: (cityHash % 150) + random(400, 450),
    [Metric.WindSpeed]: (cityHash % 10) + random(5, 15),
  };
};

// Generates mock historical data for the last 6 months
const generateHistoricalData = (currentData: EnvironmentalData): HistoricalDataPoint[] => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].reverse();
  const data: HistoricalDataPoint[] = [];

  for (let i = 0; i < 6; i++) {
    const month = months[i];
    data.push({
      date: month,
      [Metric.AQI]: currentData[Metric.AQI] + random(-20, 20),
      [Metric.Temperature]: currentData[Metric.Temperature] + random(-5, 5),
      [Metric.Humidity]: currentData[Metric.Humidity] + random(-10, 10),
      [Metric.CO2]: currentData[Metric.CO2] + random(-30, 30),
    });
  }
  return data.reverse();
};

export const mockFetchEnvironmentalData = (city: string): Promise<{ current: EnvironmentalData; historical: HistoricalDataPoint[] }> => {
  console.log(`Fetching mock data for ${city}...`);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (city.toLowerCase() === 'error') {
        reject(new Error('Failed to fetch data. The city name "error" is used for testing purposes.'));
      } else {
        const current = generateCurrentData(city);
        const historical = generateHistoricalData(current);
        resolve({ current, historical });
      }
    }, 1500); // Simulate network delay
  });
};
