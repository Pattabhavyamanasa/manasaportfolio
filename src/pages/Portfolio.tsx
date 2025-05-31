import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const projects = [{
  title: "Pet Adoption Platform",
  description: "A comprehensive MERN stack application that connects pets with loving families. Features include user authentication, pet profiles, adoption requests, and admin dashboard.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
  github: "https://github.com/bhavyamanasa/pet-adoption",
  live: "https://pet-adoption-demo.netlify.app",
  status: "Completed"
}, {
  title: "Smart Agriculture ML",
  description: "Machine learning solution for crop prediction and yield optimization. Uses various ML algorithms to analyze soil conditions, weather patterns, and historical data.",
  technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "ML Algorithms"],
  github: "https://github.com/bhavyamanasa/smart-agriculture",
  live: "",
  status: "Hackathon Project"
}, {
  title: "Event Management System",
  description: "Full-stack MERN application for event planning and management. Features event creation, booking system, payment integration, and real-time notifications.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Stripe API"],
  github: "https://github.com/bhavyamanasa/event-management",
  live: "",
  status: "In Progress"
}, {
  title: "Weather App",
  description: "Responsive weather application with real-time weather data, 5-day forecast, location-based services, and beautiful UI with weather animations.",
  technologies: ["React", "OpenWeather API", "CSS3", "Geolocation API"],
  github: "https://github.com/bhavyamanasa/weather-app",
  live: "https://weather-app-bhavya.netlify.app",
  status: "Completed"
}, {
  title: "Fake Profile Detection ML",
  description: "Machine learning model to detect fake social media profiles using various features like profile completeness, posting patterns, and network analysis.",
  technologies: ["Python", "Scikit-learn", "Natural Language Processing", "Data Analysis"],
  github: "https://github.com/bhavyamanasa/fake-profile-detection",
  live: "",
  status: "Completed"
}, {
  title: "Tic Tac Toe Game",
  description: "Interactive Tic Tac Toe game with AI opponent, score tracking, different difficulty levels, and smooth animations. Built with vanilla JavaScript.",
  technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic", "AI Algorithm"],
  github: "https://github.com/bhavyamanasa/tic-tac-toe",
  live: "https://tic-tac-toe-bhavya.netlify.app",
  status: "Completed"
}];
export default function Portfolio() {
  return <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">PROJECTS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my expertise in full-stack development, 
            machine learning, and creating innovative solutions to real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => <Card key={index} className="glass-effect overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${project.status === "Completed" ? "bg-green-500/20 text-green-400" : project.status === "In Progress" ? "bg-yellow-500/20 text-yellow-400" : "bg-blue-500/20 text-blue-400"}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => <span key={techIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                      {tech}
                    </span>)}
                </div>
                
                <div className="flex space-x-3">
                  <Button asChild variant="outline" size="sm" className="border-cyan-500/50 hover:border-cyan-400">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  {project.live && <Button asChild size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>}
                </div>
              </div>
            </Card>)}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-effect p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                <a href="mailto:bhavyamanasap@mail.com">
                  Get In Touch
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>;
}