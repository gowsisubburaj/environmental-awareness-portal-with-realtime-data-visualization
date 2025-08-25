
import React from 'react';
import type { EnvironmentalData } from '../types';
import { Metric } from '../types';
import { DataCard } from './DataCard';
import { LeafIcon } from './icons/LeafIcon';
import { ThermometerIcon } from './icons/ThermometerIcon';
import { DropletIcon } from './icons/DropletIcon';
import { CloudIcon } from './icons/CloudIcon';
import { WindIcon } from './icons/WindIcon';

interface CurrentDataDashboardProps {
  data: EnvironmentalData;
}

export const CurrentDataDashboard: React.FC<CurrentDataDashboardProps> = ({ data }) => {
  const metrics = [
    { 
      metric: Metric.AQI, 
      icon: <LeafIcon className="w-8 h-8" />,
      colorClass: 'text-indigo-500' 
    },
    { 
      metric: Metric.Temperature, 
      icon: <ThermometerIcon className="w-8 h-8" />,
      colorClass: 'text-amber-500' 
    },
    { 
      metric: Metric.Humidity, 
      icon: <DropletIcon className="w-8 h-8" />,
      colorClass: 'text-sky-500'
    },
    { 
      metric: Metric.CO2, 
      icon: <CloudIcon className="w-8 h-8" />,
      colorClass: 'text-emerald-500'
    },
    { 
      metric: Metric.WindSpeed, 
      icon: <WindIcon className="w-8 h-8" />,
      colorClass: 'text-rose-500' 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map(({ metric, icon, colorClass }) => (
        <DataCard
          key={metric}
          metric={metric}
          value={data[metric]}
          icon={React.cloneElement(icon, { className: `${icon.props.className} ${colorClass}` })}
        />
      ))}
    </div>
  );
};
