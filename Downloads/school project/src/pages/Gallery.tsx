import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface Image {
  id: string;
  url: string;
  title: string;
  category: string;
}

const images: Image[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Campus Main Building',
    category: 'Campus'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Library Reading Room',
    category: 'Facilities'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Graduation Day',
    category: 'Events'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Student Life',
    category: 'Campus Life'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1598992220397-44f0f50fbfe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Science Lab',
    category: 'Facilities'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Sports Complex',
    category: 'Facilities'
  }
];

const categories = ['All', 'Campus', 'Facilities', 'Events', 'Campus Life'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredImages = images.filter(
    image => selectedCategory === 'All' || image.category === selectedCategory
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white opacity-0 animate-fade-in">
            Our Gallery
          </h1>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 opacity-0 animate-fade-in ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer opacity-0 animate-fade-in"
                style={{ animationDelay: `${(index + categories.length) * 100}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold text-center px-4">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}