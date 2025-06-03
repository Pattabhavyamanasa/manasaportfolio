import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await emailjs.send(
        'service_ix4hozl', // service ID
        'template_kfn2h0i', // template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'bhavyamanasap@gmail.com'
        },
        'kcnmH8ywDeOXKlPN8' // public key
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      
    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or simply connect with fellow developers and innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Let's Start a Conversation</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you have a project in mind, need technical consultation, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="glass-effect p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-1">Email</h3>
                    <a 
                      href="mailto:bhavyamanasap@gmail.com"
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      bhavyamanasap@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="glass-effect p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-1">Phone</h3>
                    <a 
                      href="tel:+919949959288"
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      +91 9949959288
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="glass-effect p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-1">Location</h3>
                    <p className="text-gray-300">
                      V. Madugula, Anakapalle<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect on Social Media</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/bhavyamanasa-patta-193647291" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 glass-effect rounded-lg hover:bg-cyan-500/20 transition-colors group"
                >
                  <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-cyan-400" />
                </a>
                <a 
                  href="https://github.com/bhavyamanasa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 glass-effect rounded-lg hover:bg-cyan-500/20 transition-colors group"
                >
                  <Github className="h-6 w-6 text-gray-400 group-hover:text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect p-8">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-dark-card border-gray-600 focus:border-cyan-400"
                    placeholder="John Doe"
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-dark-card border-gray-600 focus:border-cyan-400"
                    placeholder="john@example.com"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-dark-card border-gray-600 focus:border-cyan-400"
                  placeholder="Project Inquiry / Collaboration"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-dark-card border-gray-600 focus:border-cyan-400 resize-none"
                  placeholder="Tell me about your project or how I can help..."
                  disabled={isLoading}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3"
                disabled={isLoading}
              >
                <Send className="h-4 w-4 mr-2" />
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
              <p className="text-sm text-cyan-400">
                <strong>Quick Response:</strong> I typically respond to emails within 24 hours. 
                For urgent matters, feel free to call me directly.
              </p>
            </div>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <Card className="glass-effect p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Available for Opportunities</h2>
            <p className="text-gray-400 mb-6">
              I'm currently open to freelance projects, full-time opportunities, and collaborative ventures. 
              If you're looking for a dedicated developer who brings both technical expertise and creative 
              problem-solving to the table, let's discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                <a href="/resume" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://linkedin.com/in/bhavyamanasa-patta-193647291" target="_blank" rel="noopener noreferrer">
                  View LinkedIn Profile
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
