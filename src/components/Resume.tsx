
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Resume() {
  const handleDownload = () => {
    // Download the actual PDF file
    const link = document.createElement('a');
    link.href = '/lovable-uploads/c5906619-76d0-4528-87b8-f8d5c4026240.png';
    link.download = 'Bhavya_Manasa_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 print:p-0">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-cyan-500 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">P Bhavya Manasa</h1>
        <p className="text-gray-600 mb-2">Undergraduate</p>
        <p className="text-gray-600 mb-2">KIET-W</p>
        <p className="text-gray-600 mb-4">Portfolio Website</p>
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
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">B.Tech</h4>
              <p className="text-gray-700">CSE AI and ML</p>
              <p className="text-gray-700">(mathematics,physics)</p>
            </div>
            <div className="text-right">
              <p className="text-gray-700">KIET-Wakalanda</p>
              <p className="text-gray-700">2022-Present</p>
              <p className="font-semibold">7.5</p>
            </div>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">MPC</h4>
              <p className="text-gray-700">(mathematics,physics)</p>
            </div>
            <div className="text-right">
              <p className="text-gray-700">Oxford Junior College</p>
              <p className="text-gray-700">2021</p>
              <p className="font-semibold">9.5</p>
            </div>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">SSC</h4>
            </div>
            <div className="text-right">
              <p className="text-gray-700">ZPHS Chodavaram</p>
              <p className="text-gray-700">2019</p>
              <p className="font-semibold">9.8</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">WORK EXPERIENCE</h3>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-800">Python Full Stack Developer Intern, Eduskill Academy, Andhra Pradesh</h4>
              <span className="text-sm text-gray-600 italic">Jul-Aug 2024</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Gained hands-on experience in full-stack web development, building and maintaining features using Python (Flask/Django), HTML, CSS, and JavaScript.</li>
              <li>Collaborated with senior developers to build RESTful APIs and resolve bugs, ensuring seamless system functionality.</li>
              <li>Addressed technical challenges in "integrating third-party APIs" or "optimizing database queries", improving code efficiency and project delivery.</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-800">AI and ML Intern, ExcelR EdTech (with APSICHE), Andhra Pradesh</h4>
              <span className="text-sm text-gray-600 italic">Oct-Dec 2024</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Built and evaluated end-to-end machine learning models using Deep Learning, NLP, Computer Vision, Supervised and Unsupervised Learning to address complex problems.</li>
              <li>Evaluated model performance rigorously using key metrics like precision, recall, F1-score, and AUC to get high accuracy score and iteratively refined algorithms to enhance robustness and predictive power.</li>
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
              <h4 className="text-lg font-semibold text-blue-600">Smart Agriculture Soil NPK Level Prediction ML project</h4>
              <span className="text-sm text-gray-600 italic">Mar-Apr 2023</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Implemented and optimized Decision tree and linear regression to predict NPK levels in soil with 90% accuracy.</li>
              <li>Integrated MongoDB and Flask for efficient data management and deployment.</li>
              <li>Built a robust real-time prediction pipeline utilizing MongoDB for data storage and Flask for web integration.</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-blue-600">Zomato Clone Project</h4>
              <span className="text-sm text-gray-600 italic">Feb-Mar 2024</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Developed a feature-rich Zomato clone from concept to deployment using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
              <li>Implemented core functionalities including restaurant discovery, menu browse, secure user authentication, and order placement.</li>
              <li>Implemented robust user authentication and authorization, enabling adoption requests, effectively.</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-blue-600">Pet Adoption Platform - (Major project through website-Full Stack project)</h4>
              <span className="text-sm text-gray-600 italic">Sep-Dec 2023</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Engineered a dynamic pet adoption website, enabling users to browse, search and inquire about adoptable pets/highly and efficient user interfaces that deliver an outstanding user experience for connecting pets.</li>
              <li>Implemented robust user authentication with MongoDB to store and retrieve pet listings and user information strategically and conducted thorough testing and optimization to ensure requests, effectively.</li>
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
            <li>Conducted research on suitable ML models and data preprocessing strategies. Coordinated with mentors to review progress and seek guidance on complex technical challenges.</li>
          </ul>
        </div>
      </section>

      {/* Extra-Curricular Achievements */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">EXTRA-CURRICULAR ACHIEVEMENTS/ACTIVITIES</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>Secured 1st place among 25+ teams and won a cash prize of ₹5,000 for Hackathon project innovation</li>
          <li>Ranked AIECAT Participant - Secure Top 20,000 rank across India in aptitude test.</li>
          <li>NSS Camp Coordinator (7 days) - Led tree plantation and health awareness drives awarded for leadership.</li>
          <li>Music Club Participant - Actively contributed to cultural events.</li>
        </ul>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">TECHNICAL SKILLS</h3>
        <div className="space-y-3">
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
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>Infosys - AWS Certified Machine Learning</li>
          <li>Iem - Python for Data Science certification</li>
        </ul>
      </section>

      {/* Download Button - Hidden in print */}
      <div className="text-center print:hidden">
        <Button onClick={handleDownload} className="bg-cyan-500 hover:bg-cyan-600 text-white">
          <Download className="h-4 w-4 mr-2" />
          Download Resume PDF
        </Button>
      </div>
    </div>
  );
}
