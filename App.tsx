
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CurrentDataDashboard } from './components/CurrentDataDashboard';
import { HistoricalCharts } from './components/HistoricalCharts';
import { AwarenessSection } from './components/AwarenessSection';
import { mockFetchEnvironmentalData } from './services/environmentalApi';
import type { EnvironmentalData, HistoricalDataPoint } from './types';
import { Metric } from './types';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [data, setData] = useState<EnvironmentalData | null>(null);
  const [historicalData, setHistoricalData] = useState<HistoricalDataPoint[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  const handleSearch = useCallback(async (searchCity: string) => {
    if (!searchCity) {
      setError('Please enter a city name.');
      return;
    }
    setLoading(true);
    setError(null);
    setData(null);
    setHistoricalData([]);
    setCity(searchCity);
    setInitialLoad(false);

    try {
      const { current, historical } = await mockFetchEnvironmentalData(searchCity);
      setData(current);
      setHistoricalData(historical);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-2">
            Environmental Awareness Portal
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Get real-time and historical environmental data for your city.
          </p>

          <SearchBar onSearch={handleSearch} loading={loading} />

          {loading && (
            <div className="flex justify-center items-center mt-12">
              <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
          )}

          {error && (
            <div className="mt-12 text-center bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg" role="alert">
              <strong className="font-bold">Error:</strong>
              <span className="block sm:inline ml-2">{error}</span>
            </div>
          )}
          
          {initialLoad && !loading && !error && (
            <div className="mt-12 text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Welcome!</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Search for a city to begin exploring environmental data.</p>
            </div>
          )}

          {!initialLoad && !loading && !error && data && (
            <>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                Current Conditions in <span className="text-blue-500">{city}</span>
              </h2>
              <CurrentDataDashboard data={data} />
              
              <HistoricalCharts data={historicalData} />

              <AwarenessSection />
            </>
          )}
        </div>
      </main>
      <footer className="text-center p-4 mt-8 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Environmental Awareness Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
