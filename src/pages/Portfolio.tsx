
import { ExternalLink, Github, Filter, Star, Clock, CheckCircle, Code, Database, Brain, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const projects = [{
  title: "Pet Adoption Platform",
  description: "A comprehensive MERN stack application that connects pets with loving families. Features include user authentication, pet profiles, adoption requests, and admin dashboard.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
  github: "https://github.com/bhavyamanasa/pet-adoption",
  live: "https://pet-adoption-demo.netlify.app",
  status: "Completed",
  category: "Full Stack",
  featured: true,
  image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=400&fit=crop"
}, {
  title: "Smart Agriculture ML",
  description: "Machine learning solution for crop prediction and yield optimization. Uses various ML algorithms to analyze soil conditions, weather patterns, and historical data.",
  technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "ML Algorithms"],
  github: "https://github.com/bhavyamanasa/smart-agriculture",
  live: "",
  status: "Hackathon Project",
  category: "Machine Learning",
  featured: true,
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=400&fit=crop"
}, {
  title: "Event Management System",
  description: "Full-stack MERN application for event planning and management. Features event creation, booking system, payment integration, and real-time notifications.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Stripe API"],
  github: "https://github.com/bhavyamanasa/event-management",
  live: "",
  status: "In Progress",
  category: "Full Stack",
  featured: false,
  image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop"
}, {
  title: "Weather App",
  description: "Responsive weather application with real-time weather data, 5-day forecast, location-based services, and beautiful UI with weather animations.",
  technologies: ["React", "OpenWeather API", "CSS3", "Geolocation API"],
  github: "https://github.com/bhavyamanasa/weather-app",
  live: "https://weather-app-bhavya.netlify.app",
  status: "Completed",
  category: "Frontend",
  featured: false,
  image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop"
}, {
  title: "Fake Profile Detection ML",
  description: "Machine learning model to detect fake social media profiles using various features like profile completeness, posting patterns, and network analysis.",
  technologies: ["Python", "Scikit-learn", "Natural Language Processing", "Data Analysis"],
  github: "https://github.com/bhavyamanasa/fake-profile-detection",
  live: "",
  status: "Completed",
  category: "Machine Learning",
  featured: false,
  image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=400&fit=crop"
}, {
  title: "Tic Tac Toe Game",
  description: "Interactive Tic Tac Toe game with AI opponent, score tracking, different difficulty levels, and smooth animations. Built with vanilla JavaScript.",
  technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic", "AI Algorithm"],
  github: "https://github.com/bhavyamanasa/tic-tac-toe",
  live: "https://tic-tac-toe-bhavya.netlify.app",
  status: "Completed",
  category: "Frontend",
  featured: false,
  image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=400&fit=crop"
}];

const categories = ["All", "Full Stack", "Machine Learning", "Frontend"];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Full Stack":
      return <Database className="h-4 w-4" />;
    case "Machine Learning":
      return <Brain className="h-4 w-4" />;
    case "Frontend":
      return <Globe className="h-4 w-4" />;
    default:
      return <Code className="h-4 w-4" />;
  }
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [animatedCards, setAnimatedCards] = useState<Set<number>>(new Set());

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  );

  useEffect(() => {
    // Animate cards on load
    const timer = setTimeout(() => {
      setAnimatedCards(new Set(Array.from({ length: projects.length }, (_, i) => i)));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Reset animation when category changes
    setAnimatedCards(new Set());
    const timer = setTimeout(() => {
      setAnimatedCards(new Set(Array.from({ length: filteredProjects.length }, (_, i) => i)));
    }, 50);
    return () => clearTimeout(timer);
  }, [selectedCategory, filteredProjects.length]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4" />;
      case "In Progress":
        return <Clock className="h-4 w-4" />;
      default:
        return <Star className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-cyan-500/3 to-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Animated Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-6">
            <h1 className="text-4xl md:text-6xl font-bold relative z-10">
              My <span className="text-gradient animate-pulse relative">
                PROJECTS
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl animate-pulse" />
              </span>
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl rounded-lg animate-pulse" />
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A collection of projects that showcase my expertise in full-stack development, 
            machine learning, and creating innovative solutions to real-world problems.
          </p>
        </div>

        {/* Enhanced Dynamic Filter Tabs */}
        <div className="flex justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-dark-card/50 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-2xl">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-500 flex items-center gap-2 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                    : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/10"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {getCategoryIcon(category)}
                {category}
                {selectedCategory === category && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Featured Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient animate-fade-in">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.filter(p => p.featured).map((project, index) => (
              <Card 
                key={index} 
                className={`glass-effect overflow-hidden group hover:scale-105 transition-all duration-700 border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  animatedCards.has(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative">
                  {/* Enhanced Project Image */}
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card/90 via-dark-card/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Status and Category */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className={`px-3 py-1 text-xs rounded-full border flex items-center gap-1 backdrop-blur-sm ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        {project.status}
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30 backdrop-blur-sm flex items-center gap-1">
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Overlay with Quick Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex gap-3">
                        <Button asChild variant="outline" size="sm" className="border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        {project.live && (
                          <Button asChild size="sm" className="bg-cyan-500/80 backdrop-blur-sm hover:bg-cyan-600/80">
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Enhanced Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full hover:bg-gray-500/30 transition-colors">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button asChild variant="outline" size="sm" className="border-cyan-500/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      
                      {project.live && (
                        <Button asChild size="sm" className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced All Projects Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className={`glass-effect overflow-hidden group hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 border-gray-700/50 hover:border-cyan-500/30 ${
                  animatedCards.has(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(index + 100)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative">
                  {/* Project Image */}
                  <div className="h-40 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent" />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 text-xs rounded-full border flex items-center gap-1 backdrop-blur-sm ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30 backdrop-blur-sm flex items-center gap-1">
                        {getCategoryIcon(project.category)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded hover:bg-cyan-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button asChild variant="outline" size="sm" className="flex-1 border-cyan-500/50 hover:border-cyan-400 text-xs">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      
                      {project.live && (
                        <Button asChild size="sm" className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-xs">
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <Card className="glass-effect p-8 max-w-2xl mx-auto hover:scale-105 transition-all duration-500 border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg animate-pulse" />
              <div className="relative">
                <h2 className="text-2xl font-bold mb-4 text-gradient">Interested in Working Together?</h2>
                <p className="text-gray-400 mb-6">
                  I'm always open to discussing new opportunities and exciting projects. 
                  Let's create something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105">
                    <a href="mailto:bhavyamanasap@mail.com">
                      Get In Touch
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-cyan-500/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:scale-105">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
