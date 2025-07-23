import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: gallery1,
      title: "Women Empowerment Workshop",
      description: "Skills development and training programs for women in rural communities"
    },
    {
      src: gallery2,
      title: "Tree Plantation Drive",
      description: "Environmental conservation initiatives with community participation"
    },
    {
      src: gallery3,
      title: "Health Awareness Camp",
      description: "Medical check-ups and health education in remote villages"
    },
    {
      src: gallery1,
      title: "Education Program",
      description: "Providing quality education to underprivileged children"
    },
    {
      src: gallery2,
      title: "Community Development",
      description: "Infrastructure development projects in rural areas"
    },
    {
      src: gallery3,
      title: "Healthcare Services",
      description: "Mobile health clinics reaching remote communities"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Work in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our gallery to see the impact we're making in communities across the Mithila region.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                  onClick={closeLightbox}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Image */}
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded">
                  <h3 className="font-semibold text-lg mb-1">{images[selectedImage].title}</h3>
                  <p className="text-sm opacity-90">{images[selectedImage].description}</p>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button variant="default" className="bg-gradient-primary hover:shadow-medium transition-all duration-300">
              View More Photos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;