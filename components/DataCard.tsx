
import React from 'react';
import type { Metric } from '../types';
import { METRIC_DETAILS } from '../constants';

interface DataCardProps {
  metric: Metric;
  value: number;
  icon: React.ReactNode;
}

export const DataCard: React.FC<DataCardProps> = ({ metric, value, icon }) => {
  const details = METRIC_DETAILS[metric];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{details.description}</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          {value} <span className="text-xl font-normal">{details.unit}</span>
        </p>
      </div>
    </div>
  );
};
