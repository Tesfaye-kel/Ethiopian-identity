import React from 'react';
import EthnicCard from '../components/EthnicCard';

function EthnicGroups() {
  // Sample data
  const groups = [
    { name: 'Oromo', description: 'The largest ethnic group in Ethiopia, with a rich cultural heritage.', imageUrl: 'https://images.unsplash.com/photo-1620042325469-d43a715a7c00?q=80&w=400&auto=format&fit=crop' },
    { name: 'Amhara', description: 'The second largest group, historically influential in the nation\'s politics.', imageUrl: 'https://images.unsplash.com/photo-1618829262293-d88b88f89f8a?q=80&w=400&auto=format&fit=crop' },
    { name: 'Somali', description: 'A predominantly pastoralist group living in the eastern part of the country.', imageUrl: 'https://images.unsplash.com/photo-1617992999558-c756c4634240?q=80&w=400&auto=format&fit=crop' },
    { name: 'Tigrayan', description: 'Inhabiting the northern Tigray Region, known for ancient historical sites.', imageUrl: 'https://images.unsplash.com/photo-1580619315624-05e2f559222c?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="ethnic-groups-page py-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Ethnic Groups of Ethiopia</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {groups.map(group => (
          <EthnicCard key={group.name} name={group.name} description={group.description} imageUrl={group.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default EthnicGroups;