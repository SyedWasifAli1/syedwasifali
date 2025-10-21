// import Image from 'next/image';
// import { FaGithub, FaYoutube } from 'react-icons/fa';

// const projects = [
//   {
//     title: 'E-commerce Dashboard',
//     description: 'Crafted with Next.js, Tailwind CSS, and Firebase for seamless, immersive product experiences',
//     image: '/project/project01.png',
//     github: 'https://github.com/SyedWasifAli1/ecommercedashboard',
//     video: 'https://bazaristan-dashboard-4t47.vercel.app/',
//   },
//   {
//     title: 'Portfolio Website',
//     description: 'Responsive animated developer portfolio built with Next.js and Tailwind CSS.',
//     image: '/project/project1.png',
//     github: 'https://github.com/yourusername/portfolio',
//     video: 'https://youtube.com/your-demo-video2',
//   },
// ];

// export default function Projects() {
//   return (
//     <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black" id="projects">
//       <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">Projects</h2>

//       <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//         {projects.map((project, i) => (
//           <div
//             key={i}
//             className="relative group bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.03] transition-all duration-500"
//           >
//             {/* Image */}
//             <Image
//               src={project.image}
//               alt={project.title}
//               className="w-full h-52  opacity-90 group-hover:opacity-100 transition"
//               width={400}
//               height={300}
//             />

//             {/* Content */}
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
//               <p className="text-gray-300 mb-4">{project.description}</p>

//               {/* Action Buttons */}
//               <div className="flex space-x-4">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   className="text-white hover:text-cyan-400 text-2xl transition"
//                   title="GitHub Repo"
//                 >
//                   <FaGithub />
//                 </a>
//                 <a
//                   href={project.video}
//                   target="_blank"
//                   className="text-white hover:text-red-500 text-2xl transition"
//                   title="Project Demo"
//                 >
//                   <FaYoutube />
//                 </a>
//               </div>
//             </div>

//             {/* Glow Border on Hover */}
//             <div className="absolute inset-0 border border-cyan-500 opacity-0 group-hover:opacity-50 rounded-2xl transition duration-300 blur-sm" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



'use client';

import Image from 'next/image';
import { FaGithub, FaYoutube } from 'react-icons/fa';
const projects = [
  {
    title: 'Travel World',
    description: 'A modern travel booking platform built with Next.js and Firebase — smooth, fast, and visually immersive for every explorer.',
    image: '/project/travelworld.png',
    github: 'https://github.com/SyedWasifAli1/ecommercedashboard',
    video: 'https://travel-world-khaki.vercel.app/',
  },
  {
    title: 'Faraz General Store',
    description: 'Smart online store for daily essentials — built with Next.js and Firebase, optimized for speed and user experience.',
    image: '/project/faraz.png',
    github: 'https://farazgeneralstore.vercel.app/',
    video: 'https://farazgeneralstore.vercel.app/'
  },
  {
    title: 'Elite Store',
    description: 'Premium eCommerce website with elegant UI and seamless product management — crafted with Next.js and Tailwind CSS.',
    image: '/project/elitestore.png',
    github: 'https://elitestore01.lovable.app/',
    video: 'https://elitestore01.lovable.app/'
  },
  {
    title: 'Taste Bite',
    description: 'Beautiful restaurant website that delivers a smooth food ordering experience — built using Next.js and Tailwind CSS.',
    image: '/project/tastebite.png',
    github: 'https://tastebite-premier-grill.lovable.app/',
    video: 'https://tastebite-premier-grill.lovable.app/'
  },
  {
    title: 'Elegant Store',
    description: 'Minimalist and responsive fashion eCommerce website — designed for elegance and performance with Next.js.',
    image: '/project/elegantstore.png',
    github: 'https://elegantstore-wasif.lovable.app/',
    video: 'https://elegantstore-wasif.lovable.app/'
  },
  {
    title: 'Hotel Website',
    description: 'Luxury hotel booking website with modern UI, smooth animations, and responsive design — built with Next.js.',
    image: '/project/hotel.png',
    github: 'https://github.com/yourusername/hotelwebsite',
    video: 'https://hotelmanagementsystem-tau.vercel.app/',
  },
  {
    title: 'Travel Agency',
    description: 'Responsive travel agency website for global explorers — built with Next.js and Tailwind CSS for a perfect journey online.',
    image: '/project/travelagency.png',
    github: 'https://travelworld-wasif.lovable.app/',
    video: 'https://travelworld-wasif.lovable.app/',
  },
  {
    title: 'Data Earthscape Climate Agency',
    description: 'Interactive data-driven platform visualizing global climate trends — built with Next.js, Firebase, and Tailwind CSS.',
    image: '/project/climate.png',
    github: 'https://www.tiktok.com/@syedwasifali080/video/7558880567182249236',
    video: 'https://www.tiktok.com/@syedwasifali080/video/7558880567182249236'
  },
  {
    title: 'Portfolio Website',
    description: 'Animated and responsive developer portfolio that highlights creativity and skills — powered by Next.js and Tailwind CSS.',
    image: '/project/portfolio.png',
    github: 'https://syedwasifali-portfolio.vercel.app/',
    video: 'https://syedwasifali-portfolio.vercel.app/',
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Dynamic admin dashboard for managing products, orders, and analytics — built with Next.js and Firebase for real-time control.',
    image: '/project/ecommercedashboard.png',
    github: 'https://github.com/SyedWasifAli1/ecommercedashboard',
    video: 'https://bazaristan-dashboard-4t47.vercel.app/',
  },
];


export default function Projects() {
  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-100"
      id="projects"
    >
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            onClick={() => window.open(project.video, '_blank')}
            className="relative group bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl cursor-pointer"
          >
            {/* Image */}
         {/* Image Wrapper */}
<div className="relative flex justify-center p-4 bg-gray-200 overflow-hidden">
  <Image
    src={project.image}
    alt={project.title}
    width={520}
    height={300}
    className="w-full max-w-[520px] h-auto object-cover group-hover:scale-100 transition-transform duration-500"
  />
</div>



            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
                {project.title}
              </h3>
              <p className="text-gray-800 mb-4">{project.description}</p>

              {/* Action Buttons */}
              <div
                className="flex space-x-4"
                onClick={(e) => e.stopPropagation()} // Prevent card click
              >
                <a
                  href={project.github}
                  target="_blank"
                  className="text-gray-800 hover:text-cyan-500 text-2xl transition"
                  title="GitHub Repo"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.video}
                  target="_blank"
                  className="text-gray-800 hover:text-red-500 text-2xl transition"
                  title="Project Demo"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Glow Border */}
            <div className="absolute inset-0 border border-cyan-500 opacity-0 group-hover:opacity-50 rounded-2xl transition duration-300 blur-sm" />
          </div>
        ))}
      </div>
    </section>
  );
}
