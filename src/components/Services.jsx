import React from 'react';
import services from '../../public/services.js';

const Services = () => {
  return (
    <div className="mt-16 px-4 sm:px-6 lg:px-10">
      <h1 className="text-primary font-bold text-3xl mb-10 text-center">
        The Services I Offer
      </h1>

      {services.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-12">
          <h2 className="text-white text-xl font-semibold mb-5">{group.category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {group.items.map((service) => (
              <div
                key={service.id}
                className="bg-light hover:bg-primary transition-all duration-300 rounded-xl p-4 text-white shadow-md hover:shadow-xl flex flex-col items-center text-center min-h-[180px]"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-10 h-10 object-contain mb-3"
                />
                <h6 className="text-sm font-semibold mb-1">{service.name}</h6>
                <p className="text-xs leading-snug">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
