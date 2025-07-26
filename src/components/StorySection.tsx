import { Button } from "@/components/ui/button";

const StorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Our Story */}
          <div className="text-center text-white group">
            <div className="relative overflow-hidden rounded-lg mb-6 h-64 bg-cover bg-center"
                 style={{backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Our <strong className="text-orange-400">Story</strong></h3>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                    About us
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Our Goals */}
          <div className="text-center text-white group">
            <div className="relative overflow-hidden rounded-lg mb-6 h-64 bg-cover bg-center"
                 style={{backgroundImage: "url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Our <strong className="text-orange-400">Goals</strong></h3>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                    Know more
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Our Members */}
          <div className="text-center text-white group">
            <div className="relative overflow-hidden rounded-lg mb-6 h-64 bg-cover bg-center"
                 style={{backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Our <strong className="text-orange-400">Members</strong></h3>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                    Know more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;