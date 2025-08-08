'use client';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black text-center px-4 pt-20 overflow-hidden">
      {/* 🔵 Background Animated Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-cyan-500 opacity-30 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-purple-500 opacity-20 blur-2xl rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500 opacity-25 blur-2xl rounded-full animate-pulse"></div>
      </div>

      {/* 🌟 Main Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
  Hi, I&apos;m <span className="text-cyan-400">SYED WASIF ALI</span>
</h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-xl">
          I'm a full stack developer skilled in Flutter, Next.js, MERN/MEAN, Firebase, and Python AI — building modern, scalable web & mobile apps.
        </p>
      </div>
    </section>
  );
}




// 'use client';

// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black text-center px-4 pt-20 overflow-hidden">
      
//       {/* 🔵 Background Animated Blobs */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <div className="absolute top-10 left-1/4 w-72 h-72 bg-cyan-500 opacity-30 blur-3xl rounded-full animate-pulse-slow"></div>
//         <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-purple-500 opacity-20 blur-2xl rounded-full animate-spin-slow"></div>
//         <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500 opacity-25 blur-2xl rounded-full animate-pulse"></div>
//       </div>

//       {/* 🌟 Main Animated Content */}
//       <motion.div
//         className="relative z-10"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//       >
//         <motion.h1
//           className="text-5xl md:text-7xl font-bold mb-4"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//         >
//           Hi, I'm <span className="text-cyan-400">SYED WASIF ALI</span>
//         </motion.h1>

//         <motion.p
//           className="text-xl md:text-2xl text-gray-300 max-w-xl"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.7 }}
//         >
//           A creative frontend developer focused on building 3D, interactive & responsive websites.
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// }
