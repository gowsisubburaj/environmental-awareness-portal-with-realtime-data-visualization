
import React from 'react';
import { LeafIcon } from './icons/LeafIcon';

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LeafIcon className="w-8 h-8 text-green-500" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            EnviroPortal
          </span>
        </div>
        <nav>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
            About
          </a>
        </nav>
      </div>
    </header>
  );
};
