import React from 'react';

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1581825533939-9b51383e218c?q=80&w=800&auto=format&fit=crop', alt: 'Ethiopian coffee ceremony' },
  { src: 'https://images.unsplash.com/photo-1580619315623-8336b582883a?q=80&w=800&auto=format&fit=crop', alt: 'Bustling market scene in Ethiopia' },
  { src: 'https://images.unsplash.com/photo-1604115907433-f27835398545?q=80&w=800&auto=format&fit=crop', alt: 'Ancient script on parchment' },
  { src: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=800&auto=format&fit=crop', alt: 'Woman from the Mursi tribe' },
  { src: 'https://images.unsplash.com/photo-1604115907429-457e58a3a4c8?q=80&w=800&auto=format&fit=crop', alt: 'Traditional Ethiopian food, Injera' },
  { src: 'https://images.unsplash.com/photo-1617992999558-c756c4634240?q=80&w=800&auto=format&fit=crop', alt: 'Colorful textiles and fabrics' },
];

function CultureGallery() {
  return (
    <div className="culture-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {galleryItems.map((item, index) => (
        <div key={index} className="overflow-hidden rounded-xl shadow-lg group">
          <img 
            className="h-48 sm:h-56 md:h-64 lg:h-72 w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
            src={item.src} 
            alt={item.alt} />
        </div>
      ))}
    </div>
  );
}

export default CultureGallery;

