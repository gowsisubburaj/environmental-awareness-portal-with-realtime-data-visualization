
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { HistoricalDataPoint } from '../types';
import { Metric } from '../types';
import { METRIC_DETAILS } from '../constants';

interface HistoricalChartsProps {
  data: HistoricalDataPoint[];
}

interface ChartConfig {
    metric: Metric;
    stroke: string;
}

const chartConfigs: ChartConfig[] = [
    { metric: Metric.AQI, stroke: '#6366F1' }, // Indigo
    { metric: Metric.Temperature, stroke: '#F59E0B' }, // Amber
    { metric: Metric.Humidity, stroke: '#0EA5E9' }, // Sky
    { metric: Metric.CO2, stroke: '#10B981' }, // Emerald
];

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
        <p className="font-bold text-gray-800 dark:text-gray-100">{`Month: ${label}`}</p>
        {payload.map((pld: any) => (
          <div key={pld.dataKey} style={{ color: pld.color }}>
            {`${pld.name}: ${pld.value} ${METRIC_DETAILS[pld.name as Metric].unit}`}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const SingleMetricChart: React.FC<{ data: HistoricalDataPoint[], config: ChartConfig }> = ({ data, config }) => {
    return (
        <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.3)" />
                    <XAxis dataKey="date" stroke="rgb(156 163 175)" />
                    <YAxis stroke="rgb(156 163 175)" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey={config.metric} stroke={config.stroke} strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};


export const HistoricalCharts: React.FC<HistoricalChartsProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Historical Trends</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {chartConfigs.map(config => (
            <div key={config.metric} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{config.metric} Trend (Last 6 Months)</h3>
                <SingleMetricChart data={data} config={config} />
            </div>
        ))}
      </div>
    </div>
  );
};
