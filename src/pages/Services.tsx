
import { Code, Brain, Palette, Database, Cloud, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description: "End-to-end web application development using modern technologies like React, Node.js, Express, and MongoDB. From concept to deployment, I create scalable and maintainable solutions.",
    features: [
      "MERN Stack Development",
      "RESTful API Design",
      "Database Architecture",
      "Authentication & Authorization",
      "Real-time Features with Socket.io"
    ]
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Intelligent data-driven solutions using advanced ML algorithms. I specialize in predictive modeling, natural language processing, and computer vision applications.",
    features: [
      "Predictive Modeling",
      "Natural Language Processing",
      "Computer Vision",
      "Data Analysis & Visualization",
      "Model Deployment & Optimization"
    ]
  },
  {
    icon: Palette,
    title: "UI Development with UX Sensibility",
    description: "Creating beautiful, intuitive, and responsive user interfaces that provide exceptional user experiences across all devices and platforms.",
    features: [
      "Responsive Web Design",
      "Modern CSS Frameworks",
      "Interactive Animations",
      "Cross-browser Compatibility",
      "Performance Optimization"
    ]
  },
  {
    icon: Database,
    title: "API Development & Database Management",
    description: "Robust backend services with efficient database design, API architecture, and data management solutions that scale with your business needs.",
    features: [
      "RESTful API Development",
      "Database Design & Optimization",
      "Data Migration Services",
      "API Documentation",
      "Performance Monitoring"
    ]
  },
  {
    icon: Cloud,
    title: "Deployment & DevOps",
    description: "Complete deployment solutions with modern DevOps practices, ensuring your applications are secure, scalable, and highly available.",
    features: [
      "Cloud Deployment (AWS, Heroku)",
      "CI/CD Pipeline Setup",
      "Docker Containerization",
      "Performance Monitoring",
      "Security Best Practices"
    ]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing applications with performance audits, code optimization, and implementation of best practices for faster load times.",
    features: [
      "Performance Audits",
      "Code Optimization",
      "Bundle Size Reduction",
      "Caching Strategies",
      "SEO Optimization"
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Services <span className="text-gradient">Offered</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I provide comprehensive web development and machine learning services to help bring your ideas to life. 
            From frontend design to backend architecture and AI solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="glass-effect p-8 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                  <service.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">My Development Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="glass-effect p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400 font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">Discovery</h4>
              <p className="text-gray-400 text-sm">Understanding your requirements and project goals</p>
            </Card>

            <Card className="glass-effect p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400 font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">Planning</h4>
              <p className="text-gray-400 text-sm">Creating detailed project roadmap and architecture</p>
            </Card>

            <Card className="glass-effect p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400 font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">Development</h4>
              <p className="text-gray-400 text-sm">Building your solution with regular updates</p>
            </Card>

            <Card className="glass-effect p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400 font-bold">4</span>
              </div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">Delivery</h4>
              <p className="text-gray-400 text-sm">Testing, deployment, and ongoing support</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
