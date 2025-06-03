
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Resume() {
  const handleDownload = () => {
    // Create a printable version
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 print:p-0">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-cyan-500 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Bhavyamanasa Patta</h1>
        <h2 className="text-xl text-cyan-600 mb-4">Full-Stack Web Developer & Machine Learning Enthusiast</h2>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4 text-cyan-600" />
            <span>bhavyamanasap@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4 text-cyan-600" />
            <span>+91 9949959288</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-cyan-600" />
            <span>V. Madugula, Anakapalle, Andhra Pradesh, India</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center gap-1 text-sm">
            <Linkedin className="h-4 w-4 text-cyan-600" />
            <span>linkedin.com/in/bhavyamanasa-patta-193647291</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Github className="h-4 w-4 text-cyan-600" />
            <span>github.com/bhavyamanasa</span>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Professional Summary</h3>
        <p className="text-gray-700 leading-relaxed">
          Passionate Full-Stack Web Developer and Machine Learning Enthusiast with expertise in React, Node.js, 
          Python, and modern web technologies. Experienced in building scalable web applications, implementing 
          machine learning solutions, and creating intuitive user experiences. Strong problem-solving skills with 
          a focus on delivering high-quality, maintainable code.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Frontend Development</h4>
            <p className="text-gray-700">React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Responsive Design</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Backend Development</h4>
            <p className="text-gray-700">Node.js, Express.js, RESTful APIs, Authentication, JWT, Database Design</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Database & Tools</h4>
            <p className="text-gray-700">MongoDB, MySQL, Git, GitHub, VS Code, Postman, npm/yarn</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Machine Learning</h4>
            <p className="text-gray-700">Python, Scikit-learn, TensorFlow, Data Analysis, Predictive Modeling</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Featured Projects</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Pet Adoption Platform</h4>
            <p className="text-gray-700 mb-2">
              MERN stack application connecting pets with loving families. Features user authentication, 
              pet listings, adoption requests, and admin dashboard.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Technologies:</strong> React, Node.js, Express, MongoDB, JWT Authentication
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Smart Agriculture ML Solution</h4>
            <p className="text-gray-700 mb-2">
              Machine learning application for crop prediction and yield optimization using historical 
              data and weather patterns.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Technologies:</strong> Python, Scikit-learn, Data Analysis, Predictive Modeling
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Event Management System</h4>
            <p className="text-gray-700 mb-2">
              Full-stack MERN application for event planning and management with booking system 
              and payment integration.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Technologies:</strong> MERN Stack, Express.js, JWT, RESTful APIs
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Education</h3>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Bachelor's Degree in Technology</h4>
          <p className="text-gray-700">Computer Science & Engineering</p>
          <p className="text-gray-600 text-sm">Focused on Software Development and Machine Learning</p>
        </div>
      </section>

      {/* Additional Information */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Additional Information</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Strong problem-solving and analytical thinking skills</li>
          <li>Excellent communication and teamwork abilities</li>
          <li>Passionate about learning new technologies and staying updated with industry trends</li>
          <li>Experience with agile development methodologies</li>
          <li>Available for freelance projects and full-time opportunities</li>
        </ul>
      </section>

      {/* Download Button - Hidden in print */}
      <div className="text-center print:hidden">
        <Button onClick={handleDownload} className="bg-cyan-500 hover:bg-cyan-600 text-white">
          <Download className="h-4 w-4 mr-2" />
          Download as PDF
        </Button>
      </div>
    </div>
  );
}
