
import { GraduationCap, Briefcase, Award, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack web developer and ML enthusiast skilled in React, Node.js, Python, MongoDB, 
            with a strong foundation in artificial intelligence and machine learning technologies.
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-20">
          <Card className="glass-effect p-8">
            <div className="flex items-center mb-6">
              <MapPin className="h-6 w-6 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-semibold">Personal Background</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Currently based in V. Madugula, Anakapalle, Andhra Pradesh, India, I am a dedicated Computer Science 
              Engineering student specializing in Artificial Intelligence and Machine Learning at KIETW, Kakinada. 
              My journey in technology began with a curiosity about how software can solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With hands-on experience in full-stack development and machine learning, I enjoy creating solutions 
              that bridge the gap between intuitive user experiences and intelligent data-driven insights. I'm 
              passionate about continuous learning and staying updated with the latest technology trends.
            </p>
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-6 w-6 text-cyan-400 mr-3" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-6">
            <Card className="glass-effect p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-cyan-400">B.Tech CSE (AI & ML)</h3>
                <span className="text-gray-400">2022 - Present</span>
              </div>
              <p className="text-gray-300 mb-2">KIETW, Kakinada</p>
              <p className="text-gray-400">CGPA: 7.0/10</p>
            </Card>

            <Card className="glass-effect p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-cyan-400">XII (Intermediate)</h3>
                <span className="text-gray-400">2019 - 2021</span>
              </div>
              <p className="text-gray-300 mb-2">Oxford Junior College, Chodavaram</p>
              <p className="text-gray-400">Percentage: 60%</p>
            </Card>

            <Card className="glass-effect p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-cyan-400">X (Matriculation)</h3>
                <span className="text-gray-400">2019</span>
              </div>
              <p className="text-gray-300 mb-2">Sri Vignan Public School, V. Madugula</p>
            </Card>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Briefcase className="h-6 w-6 text-cyan-400 mr-3" />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          
          <div className="space-y-6">
            <Card className="glass-effect p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">AI & ML Intern</h3>
              <p className="text-gray-300 mb-2">ExcelR EdTech + APSCHE</p>
              <ul className="text-gray-400 space-y-1">
                <li>• Developed machine learning models for data analysis and prediction</li>
                <li>• Worked on natural language processing and computer vision projects</li>
                <li>• Collaborated with cross-functional teams on AI-driven solutions</li>
              </ul>
            </Card>

            <Card className="glass-effect p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Python Fullstack Developer</h3>
              <p className="text-gray-300 mb-2">Eduskills Virtual Internship</p>
              <ul className="text-gray-400 space-y-1">
                <li>• Built full-stack web applications using Python and Django</li>
                <li>• Implemented RESTful APIs and database management systems</li>
                <li>• Developed responsive frontend interfaces with modern frameworks</li>
              </ul>
            </Card>

            <Card className="glass-effect p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">AI Summer Intern</h3>
              <p className="text-gray-300 mb-2">Swecha</p>
              <ul className="text-gray-400 space-y-1">
                <li>• Participated in AI research and development projects</li>
                <li>• Gained hands-on experience with machine learning algorithms</li>
                <li>• Contributed to open-source AI initiatives</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Award className="h-6 w-6 text-cyan-400 mr-3" />
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-effect p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="glass-effect p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "Python", "Django", "Flask", "RESTful APIs"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="glass-effect p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Database & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Postman"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="glass-effect p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "OpenCV"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="glass-effect p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">AI Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["NLP", "Computer Vision", "Deep Learning", "Neural Networks", "Data Analysis"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="glass-effect p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Deployment</h3>
              <div className="flex flex-wrap gap-2">
                {["Heroku", "Netlify", "Vercel", "AWS", "Docker", "CI/CD"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
