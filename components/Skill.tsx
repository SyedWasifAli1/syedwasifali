// const skills = [
//     'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind',
//     'Three.js', 'TypeScript', 'Git', 'Firebase', 'Node.js'
//   ];
  
//   export default function Skills() {
//     return (
//       <section className="py-24 px-6 bg-gradient-to-t from-black to-gray-900" id="skills">
//         <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">Skills</h2>
        
//         <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
//           {skills.map((skill, i) => (
//             <div
//               key={i}
//               className="group relative px-6 py-3 bg-gray-800 text-white rounded-full border border-cyan-500 shadow-lg
//                          hover:scale-110 hover:border-white hover:shadow-cyan-400/30 transition-transform duration-300
//                          cursor-pointer"
//             >
//               <span className="text-lg font-medium group-hover:text-cyan-400 transition">{skill}</span>
  
//               {/* Glowing Ring Effect */}
//               <div className="absolute -inset-0.5 bg-cyan-500 opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition" />
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }
  


// 'use client';

// import { motion, easeOut } from 'framer-motion';

// const skills = [
//   'HTML', 'CSS', 'JavaScript', 'React', 'Next.js','Angular', 'Tailwind','Flutter', 'Python','SQL Server','My SQL','mongodb',
//  'TypeScript', 'Github', 'Firebase', 'Express.js','Node.js'
// ];

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, scale: 0.8, y: 20 },
//   show: { 
//     opacity: 1, 
//     scale: 1, 
//     y: 0, 
//     transition: { duration: 0.4, ease: easeOut } 
//   },
// };

// export default function Skills() {
//   return (
//     <section className="py-24 px-6 bg-gradient-to-t from-black to-gray-900" id="skills">
//       <motion.h2
//         className="text-4xl font-bold text-cyan-400 text-center mb-12"
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         Skills
//       </motion.h2>

//       <motion.div
//         className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         {skills.map((skill, i) => (
//           <motion.div
//             key={i}
//             variants={itemVariants}
//             className="group relative px-6 py-3 bg-gray-800 text-white rounded-full border border-cyan-500 shadow-lg
//                        hover:scale-110 hover:border-white hover:shadow-cyan-400/30 transition-transform duration-300
//                        cursor-pointer"
//           >
//             <span className="text-lg font-medium group-hover:text-cyan-400 transition">{skill}</span>
//             <div className="absolute -inset-0.5 bg-cyan-500 opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition" />
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiAngular, SiFlutter, SiMongodb, SiMysql, SiFirebase, SiTypescript, SiExpress } from 'react-icons/si';
import { useRef, useEffect, useState } from 'react';

const skills = [
  { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs color="#000000" /> },
  { name: 'Angular', icon: <SiAngular color="#DD0031" /> },
  { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" /> },
  { name: 'Flutter', icon: <SiFlutter color="#02569B" /> },
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
  { name: 'SQL Server', icon: <SiMysql color="#4479A1" /> },
  { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
  { name: 'GitHub', icon: <FaGithub color="#181717" /> },
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'Express.js', icon: <SiExpress color="#000000" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
];

export default function Skills() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const slider = sliderRef.current;
    const speed = 0.5;
    let animationFrame: number;

    const scroll = () => {
      if (!paused && slider) {
        slider.scrollLeft += speed;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  return (
    <section className="py-24 px-6 bg-gradient-to-t from-white to-gray-100" id="skills">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        My Skills
      </motion.h2>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex gap-6 whitespace-nowrap overflow-hidden scrollbar-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {skills.concat(skills).map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 relative px-6 py-3 bg-gray-800 text-white rounded-full border border-cyan-500 shadow-lg
                       hover:scale-110 hover:border-white hover:shadow-cyan-400/30 transition-transform duration-300 flex-shrink-0"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-lg font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
