
import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {children}
        </p>
    </div>
);

export const AwarenessSection: React.FC = () => {
    return (
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Understanding the Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InfoCard title="Air Quality Index (AQI)">
                    The AQI is a scale used to report the quality of the air. It tells you how clean or polluted your air is, and what associated health effects might be a concern. An AQI below 50 represents good air quality, while a value over 300 represents hazardous air quality.
                </InfoCard>
                <InfoCard title="Carbon Dioxide (CO₂)">
                    CO₂ is a key greenhouse gas that drives global climate change. While a natural part of Earth's atmosphere, human activities have substantially increased its concentration. High levels of CO₂ can also affect cognitive performance and well-being indoors.
                </InfoCard>
                <InfoCard title="Temperature & Humidity">
                    These are fundamental climate variables. Rising global temperatures are a primary indicator of climate change, leading to more extreme weather events. Humidity affects how we perceive temperature (the "feels like" temperature) and plays a role in weather patterns.
                </InfoCard>
                 <InfoCard title="Why It Matters">
                    Monitoring these metrics is crucial for public health and environmental protection. High pollution levels can cause respiratory issues, while long-term climate trends impact ecosystems, agriculture, and our way of life. Awareness is the first step towards action.
                </InfoCard>
            </div>
        </div>
    );
};
