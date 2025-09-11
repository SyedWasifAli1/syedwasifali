// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { Menu, X } from 'lucide-react'; // Uncomment this line if needed

// export default function Navbar() {
//   const [showLogoModal, setShowLogoModal] = useState(false);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);

//   const navLinks = [
//     { href: '#hero', label: 'Home' },
//     { href: '#about', label: 'About' },
//     { href: '#skills', label: 'Skills' },
//     { href: '#projects', label: 'Projects' },
//     { href: '#contact', label: 'Contact' },
//   ];

//   return (
//     <>
//       <nav className="fixed top-0 w-full bg-transparent text-white shadow-md z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           {/* Logo */}
//           <div className="cursor-pointer" onClick={() => setShowLogoModal(true)}>
//             <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
//           </div>

//           {/* Desktop Menu */}
//           <div className="space-x-6 hidden md:flex">
//             {navLinks.map((link) => (
//               <a key={link.href} href={link.href} className="hover:text-cyan-400 transition">
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Toggle Button */}
//           <div className="md:hidden">
//             <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
//               {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu with Animation */}
//       <AnimatePresence>
//         {showMobileMenu && (
//           <motion.div
//             initial={{ y: '-100%', opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: '-100%', opacity: 0 }}
//             transition={{ duration: 0.4 }}
//             className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white z-40"
//           >
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="text-xl hover:text-cyan-400 transition"
//                 onClick={() => setShowMobileMenu(false)}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Logo Modal with Animation */}
//       <AnimatePresence>
//         {showLogoModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.5 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.5 }}
//               transition={{ duration: 0.3 }}
//               className="relative"
//             >
//               <Image
//                 src="/logo.png"
//                 alt="Large Logo"
//                 width={300}
//                 height={300}
//                 className="rounded-xl shadow-lg"
//               />
//               <button
//                 className="absolute top-2 right-2 text-white text-2xl"
//                 onClick={() => setShowLogoModal(false)}
//               >
//                 &times;
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }





// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [showLogoModal, setShowLogoModal] = useState(false);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);

//   const navLinks = [
//     { href: '#hero', label: 'Home' },
//     { href: '#about', label: 'About' },
//     { href: '#skills', label: 'Skills' },
//     { href: '#projects', label: 'Projects' },
//     { href: '#contact', label: 'Contact' },
//   ];

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full bg-white text-gray-800 shadow-md z-50 transition-colors duration-300">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           {/* Logo */}
//           <div
//             className="cursor-pointer hover:scale-105 transition-transform duration-200"
//             onClick={() => setShowLogoModal(true)}
//           >
//             <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
//           </div>

//           {/* Desktop Menu */}
//           <div className="space-x-6 hidden md:flex font-medium">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="hover:text-cyan-500 transition-colors duration-200"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button
//               className="p-2 rounded-md hover:bg-gray-100 transition"
//               onClick={() => setShowMobileMenu(!showMobileMenu)}
//             >
//               {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {showMobileMenu && (
//           <motion.div
//             initial={{ y: '-100%', opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: '-100%', opacity: 0 }}
//             transition={{ duration: 0.4 }}
//             className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-gray-800 z-40"
//           >
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="text-xl font-medium hover:text-cyan-500 transition"
//                 onClick={() => setShowMobileMenu(false)}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Logo Modal */}
//       <AnimatePresence>
//         {showLogoModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.5 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.5 }}
//               transition={{ duration: 0.3 }}
//               className="relative bg-white p-4 rounded-2xl shadow-xl"
//             >
//               <Image
//                 src="/logo.png"
//                 alt="Large Logo"
//                 width={300}
//                 height={300}
//                 className="rounded-xl"
//               />
//               <button
//                 className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-3xl font-bold"
//                 onClick={() => setShowLogoModal(false)}
//               >
//                 &times;
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
// import ThemeToggle from './theme'; // Ensure this path is correct
export default function Navbar() {
  const [showLogoModal, setShowLogoModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-md z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div
            className="cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => setShowLogoModal(true)}
          >
            <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
          </div>

          {/* Desktop Menu */}
          <div className="space-x-6 hidden md:flex font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            {/* ✅ Theme Toggle Desktop */}
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {/* ✅ Theme Toggle Mobile */}
            {/* <ThemeToggle /> */}
            <button
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center space-y-6 text-gray-800 dark:text-gray-100 z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl font-medium hover:text-cyan-500 transition"
                onClick={() => setShowMobileMenu(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Modal */}
      <AnimatePresence>
        {showLogoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl"
            >
              <Image
                src="/logo.png"
                alt="Large Logo"
                width={300}
                height={300}
                className="rounded-xl"
              />
              <button
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-3xl font-bold"
                onClick={() => setShowLogoModal(false)}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
