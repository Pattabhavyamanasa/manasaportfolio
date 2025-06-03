
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Bhavya Manasa</h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
          <span className="text-blue-600">bhavyamanasap@gmail.com</span>
          <span>9949959288</span>
          <span className="text-blue-600">LinkedIn</span>
          <span className="text-blue-600">GitHub</span>
          <span className="text-blue-600">Portfolio</span>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Summary</h3>
        <p className="text-gray-700 leading-relaxed">
          Final-year engineering student with hands-on experience in AI/ML and full-stack development. Skilled 
          in Python, Flask, React.js, and ML frameworks. Adept at delivering scalable web platforms and ML 
          applications. Strong problem solver with excellent communication skills.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Technical Skills</h3>
        <div className="space-y-3">
          <div>
            <span className="font-semibold text-gray-800">Languages: </span>
            <span className="text-gray-700">Python, JavaScript, HTML5, CSS3, Java, SQL</span>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Frameworks/Libraries: </span>
            <span className="text-gray-700">Flask, Django, React.js, TensorFlow, Keras, Scikit-learn, Pandas, NumPy</span>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Tools: </span>
            <span className="text-gray-700">Git, GitHub, Jupyter, VS Code, Heroku, Jira, Netlify</span>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Databases: </span>
            <span className="text-gray-700">MongoDB, MySQL</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Projects</h3>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-blue-600">Fake Profile Detection</h4>
              <span className="text-sm text-gray-600 italic">Jan 2023 - Present</span>
            </div>
            <p className="text-sm text-gray-600 italic mb-2">Machine Learning Project (Python, NLTK, Scikit-learn)</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Built a classification model to detect fraudulent user profiles using behavioral features.</li>
              <li>Engineered features from follower ratios, bio content, and post frequency.</li>
              <li>Achieved F1-score of 0.89, improving platform integrity.</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-blue-600">Smart Agriculture</h4>
              <span className="text-sm text-gray-600 italic">Aug 2023</span>
            </div>
            <p className="text-sm text-gray-600 italic mb-2">ML Project (Python, Flask, Decision Tree)</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Predicted NPK levels in soil using Random Forest and Gradient Boosting regressors.</li>
              <li>Utilized MongoDB and Flask to build a real-time prediction pipeline.</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-blue-600">Pet Adoption Platform</h4>
              <span className="text-sm text-gray-600 italic">Dec 2024</span>
            </div>
            <p className="text-sm text-gray-600 italic mb-2">Full-Stack Project (Python, HTML, CSS, JavaScript, MongoDB)</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Developed a responsive full-stack web app enabling pet listing, filtering, and adoption management.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Experience</h3>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-800">AI & ML Intern</h4>
              <span className="text-sm text-gray-600 italic">Jul 2024 - Aug 2024</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">ExcelR EdTech (with APSICHE), Andhra Pradesh</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Completed comprehensive AI/ML internship, developing models and deploying REST APIs using Flask.</li>
              <li>Collaborated with data scientists to tune models and extract key features.</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-800">Python Fullstack Developer Intern</h4>
              <span className="text-sm text-gray-600 italic">Oct 2024 - Dec 2024</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Eduskills Academy, Andhra Pradesh</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
              <li>Built full-stack applications with Django/Flask and JavaScript; integrated third-party APIs.</li>
              <li>Managed MongoDB and SQL databases; optimized code for performance and scalability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Education</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">B.Tech - Kakinada Institute Of Engineering and Technology</h4>
                <p className="text-gray-700">Computer Science Engineering</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-600 italic">Aug 2022 - May 2026</span>
                <p className="font-semibold">85.4%</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Intermediate - Oxford Junior College, Chodavaram</h4>
                <p className="text-gray-700">MPC Stream</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-600 italic">Aug 2019 - May 2021</span>
                <p className="font-semibold">92%</p>
              </div>
            </div>
          </div>
        </div>
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
