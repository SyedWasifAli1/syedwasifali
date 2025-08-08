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
  

'use client';

import { motion, easeOut } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Next.js','Angular', 'Tailwind','Flutter', 'Python','SQL Server','My SQL','mongodb',
 'TypeScript', 'Github', 'Firebase', 'Express.js','Node.js'
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: easeOut } 
  },
};

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-gradient-to-t from-black to-gray-900" id="skills">
      <motion.h2
        className="text-4xl font-bold text-cyan-400 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group relative px-6 py-3 bg-gray-800 text-white rounded-full border border-cyan-500 shadow-lg
                       hover:scale-110 hover:border-white hover:shadow-cyan-400/30 transition-transform duration-300
                       cursor-pointer"
          >
            <span className="text-lg font-medium group-hover:text-cyan-400 transition">{skill}</span>
            <div className="absolute -inset-0.5 bg-cyan-500 opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
