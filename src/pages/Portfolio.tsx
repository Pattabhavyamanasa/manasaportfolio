
import { ExternalLink, Github, Filter, Star, Clock, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [{
  title: "Pet Adoption Platform",
  description: "A comprehensive MERN stack application that connects pets with loving families. Features include user authentication, pet profiles, adoption requests, and admin dashboard.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
  github: "https://github.com/bhavyamanasa/pet-adoption",
  live: "https://pet-adoption-demo.netlify.app",
  status: "Completed",
  category: "Full Stack",
  featured: true,
  image: "/placeholder.svg"
}, {
  title: "Smart Agriculture ML",
  description: "Machine learning solution for crop prediction and yield optimization. Uses various ML algorithms to analyze soil conditions, weather patterns, and historical data.",
  technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "ML Algorithms"],
  github: "https://github.com/bhavyamanasa/smart-agriculture",
  live: "",
  status: "Hackathon Project",
  category: "Machine Learning",
  featured: true,
  image: "/placeholder.svg"
}, {
  title: "Event Management System",
  description: "Full-stack MERN application for event planning and management. Features event creation, booking system, payment integration, and real-time notifications.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Stripe API"],
  github: "https://github.com/bhavyamanasa/event-management",
  live: "",
  status: "In Progress",
  category: "Full Stack",
  featured: false,
  image: "/placeholder.svg"
}, {
  title: "Weather App",
  description: "Responsive weather application with real-time weather data, 5-day forecast, location-based services, and beautiful UI with weather animations.",
  technologies: ["React", "OpenWeather API", "CSS3", "Geolocation API"],
  github: "https://github.com/bhavyamanasa/weather-app",
  live: "https://weather-app-bhavya.netlify.app",
  status: "Completed",
  category: "Frontend",
  featured: false,
  image: "/placeholder.svg"
}, {
  title: "Fake Profile Detection ML",
  description: "Machine learning model to detect fake social media profiles using various features like profile completeness, posting patterns, and network analysis.",
  technologies: ["Python", "Scikit-learn", "Natural Language Processing", "Data Analysis"],
  github: "https://github.com/bhavyamanasa/fake-profile-detection",
  live: "",
  status: "Completed",
  category: "Machine Learning",
  featured: false,
  image: "/placeholder.svg"
}, {
  title: "Tic Tac Toe Game",
  description: "Interactive Tic Tac Toe game with AI opponent, score tracking, different difficulty levels, and smooth animations. Built with vanilla JavaScript.",
  technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic", "AI Algorithm"],
  github: "https://github.com/bhavyamanasa/tic-tac-toe",
  live: "https://tic-tac-toe-bhavya.netlify.app",
  status: "Completed",
  category: "Frontend",
  featured: false,
  image: "/placeholder.svg"
}];

const categories = ["All", "Full Stack", "Machine Learning", "Frontend"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  );

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
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient animate-pulse">PROJECTS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my expertise in full-stack development, 
            machine learning, and creating innovative solutions to real-world problems.
          </p>
        </div>

        {/* Dynamic Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 p-1 bg-dark-card/50 rounded-lg backdrop-blur-sm border border-gray-700">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                    : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                }`}
              >
                <Filter className="h-4 w-4" />
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.filter(p => p.featured).map((project, index) => (
              <Card 
                key={index} 
                className="glass-effect overflow-hidden group hover:scale-105 transition-all duration-500 border-cyan-500/20"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs rounded-full border flex items-center gap-1 ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        {project.status}
                      </span>
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded border border-cyan-500/30">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">
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
                        <Button asChild size="sm" className="bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
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

        {/* All Projects Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="glass-effect overflow-hidden group hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                onMouseEnter={() => setHoveredProject(index + 100)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative">
                  <div className="h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card/60 to-transparent" />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 text-xs rounded-full border flex items-center gap-1 ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
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
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded"
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
        <div className="text-center">
          <Card className="glass-effect p-8 max-w-2xl mx-auto hover:scale-105 transition-all duration-300 border-cyan-500/20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg" />
              <div className="relative">
                <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
                <p className="text-gray-400 mb-6">
                  I'm always open to discussing new opportunities and exciting projects. 
                  Let's create something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                    <a href="mailto:bhavyamanasap@mail.com">
                      Get In Touch
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-cyan-500/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
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
