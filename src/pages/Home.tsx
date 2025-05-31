
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gray-300">Hello, I'm </span>
              <span className="text-gradient">Bhavyamanasa</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
              Full-Stack Web Developer & Machine Learning Enthusiast
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about building intuitive user experiences and intelligent data-driven solutions 
              using React, Node.js, Python, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                <Link to="/portfolio">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Let's Talk</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="https://linkedin.com/in/bhavyamanasa-patta-193647291" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/bhavyamanasa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:bhavyamanasap@mail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-effect p-8 text-center">
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">3+</h3>
              <p className="text-gray-300">Years Experience</p>
            </Card>
            <Card className="glass-effect p-8 text-center">
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">15+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </Card>
            <Card className="glass-effect p-8 text-center">
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">5+</h3>
              <p className="text-gray-300">Technologies Mastered</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 px-4 bg-dark-card/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and machine learning.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="glass-effect overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Pet Adoption Platform</h3>
                <p className="text-gray-400 mb-4">MERN stack application for connecting pets with loving families</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">MongoDB</span>
                </div>
              </div>
            </Card>

            <Card className="glass-effect overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Smart Agriculture ML</h3>
                <p className="text-gray-400 mb-4">Machine learning solution for crop prediction and yield optimization</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">ML</span>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">AI</span>
                </div>
              </div>
            </Card>

            <Card className="glass-effect overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Event Management System</h3>
                <p className="text-gray-400 mb-4">Full-stack MERN application for event planning and management</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">MERN</span>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">Express</span>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">JWT</span>
                </div>
              </div>
            </Card>
          </div>

          <Button asChild size="lg" variant="outline">
            <Link to="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
