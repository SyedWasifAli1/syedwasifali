import Image from 'next/image';
import { FaGithub, FaYoutube } from 'react-icons/fa';

const projects = [
  {
    title: '3D Product Showcase',
    description: 'Built using Three.js and React Three Fiber for immersive product displays.',
    image: '/project/project1.png',
    github: 'https://github.com/yourusername/3d-showcase',
    video: 'https://youtube.com/your-demo-video1',
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive animated developer portfolio built with Next.js and Tailwind CSS.',
    image: '/projects/portfolio-site.png',
    github: 'https://github.com/yourusername/portfolio',
    video: 'https://youtube.com/your-demo-video2',
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black" id="projects">
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">Projects</h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative group bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.03] transition-all duration-500"
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover opacity-90 group-hover:opacity-100 transition"
              width={400}
              height={300}
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-white hover:text-cyan-400 text-2xl transition"
                  title="GitHub Repo"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.video}
                  target="_blank"
                  className="text-white hover:text-red-500 text-2xl transition"
                  title="Project Demo"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Glow Border on Hover */}
            <div className="absolute inset-0 border border-cyan-500 opacity-0 group-hover:opacity-50 rounded-2xl transition duration-300 blur-sm" />
          </div>
        ))}
      </div>
    </section>
  );
}
