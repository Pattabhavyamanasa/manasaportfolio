
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Resume() {
  const handleDownload = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/lovable-uploads/dd8137b4-8575-44e9-b110-33b1182823a2.png';
    link.download = 'Bhavya_Manasa_Resume.pdf';
    link.click();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 print:p-0">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-cyan-500 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">P Bhavya Manasa</h1>
        <p className="text-sm text-gray-600 mb-2">Undergraduate(pursuing)</p>
        <p className="text-sm text-gray-600 mb-4">KIET-W, Portfolio Website</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
          <span className="text-blue-600">bhavyamanasap@gmail.com</span>
          <span>+91 9949959288</span>
          <span className="text-blue-600">LinkedIn</span>
          <span className="text-blue-600">GitHub</span>
        </div>
      </div>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">EDUCATION</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-4 text-sm">
            <div className="font-semibold">Degree</div>
            <div className="font-semibold">Specialization</div>
            <div className="font-semibold">Institute</div>
            <div className="font-semibold">Year</div>
            <div className="font-semibold">CGPA</div>
          </div>
          <div className="grid grid-cols-5 gap-4 text-sm">
            <div>B.Tech</div>
            <div>CSE(AI and ML)</div>
            <div>KIET-Wakinada</div>
            <div>2022-Present</div>
            <div>7.5</div>
          </div>
          <div className="grid grid-cols-5 gap-4 text-sm">
            <div>MPC</div>
            <div>(Mathematics, Physics)</div>
            <div>Oxford Junior College</div>
            <div>2021</div>
            <div>9.5</div>
          </div>
          <div className="grid grid-cols-5 gap-4 text-sm">
            <div></div>
            <div></div>
            <div>SSC-Vikash Model</div>
            <div>2019</div>
            <div>9.5</div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">WORK EXPERIENCE</h3>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-800">Python Full Stack Developer Intern, Eduskills Academy, Andhra Pradesh</h4>
              <span className="text-sm text-gray-600 italic">Jul-Aug 2024</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Gained hands-on experience in full-stack web development building and maintaining features using Python (Flask/Django), HTML, CSS, and JavaScript.</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Collaborated with senior developers to build RESTful APIs and resolve bugs, ensuring seamless system functionality.</li>
              <li>Overcame technical challenges in "integrating third-party APIs" or "optimizing database queries", improving code efficiency and project delivery.</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-800">AI and ML Intern, ExcelR EdTech (with APSICHE), Andhra Pradesh</h4>
              <span className="text-sm text-gray-600 italic">Oct-Dec 2024</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Worked on building and optimizing machine learning models Deep Learning, NLP, Computer Vision, Supervised and Unsupervised Learning to address complex problems.</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Evaluated model performance rigorously using metrics like precision, recall, F1-score, and AUC to get high accuracy score and iteratively refined algorithms to enhance robustness and predictive power.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">PROJECTS</h3>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-semibold text-blue-600">Smart Agriculture Soil NPK Level Prediction ML project</h4>
                <a 
                  href="https://github.com/Pattabhavyamanasa/SMART-AGRICULTURE.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
              <span className="text-sm text-gray-600 italic">Mar-Apr 2023</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Implemented and optimized Decision tree and linear regression to predict NPK levels in soil with 89% accuracy. Integrated MongoDB and Flask for efficient data management and deployment.</li>
              <li>Built a robust real-time prediction pipeline utilizing MongoDB for data storage and Flask for web integration.</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-blue-600">Zomato Clone (GitHub)</h4>
              <span className="text-sm text-gray-600 italic">Feb-Mar 2024</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Developed a feature-rich Zomato clone from concept to deployment using the MERN stack (MongoDB, Express.js, React.js, Node.js)</li>
              <li>Implemented core functionalities including restaurant discovery, menu browse, secure user authentication, and order placement.</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-semibold text-blue-600">Pet Adoption Platform, Adopt pets through website(Full-Stack project)</h4>
                <a 
                  href="https://github.com/Pattabhavyamanasa/Pet-adoption-platform.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
              <span className="text-sm text-gray-600 italic">Sep-Dec 2023</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Engineered a dynamic pet adoption website, enabling users to browse, search and inquire about adoptable pets. Highly user-centric interface that provides a seamless user experience for connecting pets.</li>
              <li>Implemented robust data management with MongoDB to store and retrieve pet listings and user information; handled adoption requests effectively.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Positions of Responsibility */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">POSITIONS OF RESPONSIBILITY</h3>
        
        <div>
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-lg font-semibold text-gray-800">Team Leader Smart Agriculture Hackathon</h4>
            <span className="text-sm text-gray-600 italic">Mar-Apr 2023</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
            <li>Led a 5-member team to develop an ML-based crop prediction system</li>
            <li>Conducted research on suitable ML models and data preprocessing strategies. Coordinated with mentors extensively to ensure project milestones and deliverables were met.</li>
          </ul>
        </div>
      </section>

      {/* Extra-Curricular Achievements */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">EXTRA-CURRICULAR ACHIEVEMENTS/ACTIVITIES</h3>
        
        <div className="space-y-2 text-sm">
          <div>• <strong>Secured 1st place among 25+ teams</strong> and won a cash prize of 15,000 for Hackathon project innovation</div>
          <div>• <strong>Nankai AICSAT Participant</strong> – Secure Top 20,000 rank across India in aptitude test.</div>
          <div>• <strong>NSS Camp Coordinator (7 days)</strong> – Led tree plantation and health awareness drives awarded for leadership</div>
          <div>• <strong>Technical fest organizer</strong> – Contributed to organizing college technical events</div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Technical Skills</h3>
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-semibold text-gray-800">Languages: </span>
            <span className="text-gray-700">Python, JavaScript, HTML5, CSS3, Java, SQL</span>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Tools: </span>
            <span className="text-gray-700">Git, GitHub, VS Code, Heroku, Netlify, Jupyter Notebook, LaTeX, Docker, Postman</span>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Frameworks/Libraries: </span>
            <span className="text-gray-700">Flask, Django, React.js, TensorFlow, Keras, Scikit-learn, Pandas, NumPy</span>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Databases: </span>
            <span className="text-gray-700">MongoDB, SQL</span>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">CERTIFICATIONS</h3>
        
        <div className="space-y-2 text-sm">
          <div>• <strong>Infosys</strong> – AWS Certified Machine Learning</div>
          <div>• <strong>IBM</strong> – Python for Data Science certification</div>
        </div>
      </section>

      {/* Download Button - Hidden in print */}
      <div className="text-center print:hidden">
        <Button onClick={handleDownload} className="bg-cyan-500 hover:bg-cyan-600 text-white">
          <Download className="h-4 w-4 mr-2" />
          Download Resume
        </Button>
      </div>
    </div>
  );
}
