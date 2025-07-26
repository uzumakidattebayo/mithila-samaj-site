const FeaturedEvents = () => {
  const events = [
    {
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Regional Conference on Community Development",
      description: "Annual Regional Conference on Effective Local Governance: Accountability, Participation and Inclusion is conceptualised as a multi-stakeholder platform of civil society organisations, academicians, government and donor agencies which engages in critical reflection on strengthening local governance in the region."
    },
    {
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Community Empowerment Project",
      description: "The project helped the Mithila Samaj Bikash Manch and its partners gain new alliance, partnerships and collaborative strategies in the quest for enlarging civic spaces and choices especially at the subnational level, activities secured the role and contribution..."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Featured Events
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;