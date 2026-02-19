// // import { linklist } from "../../assets/data/data";
// // import { motion } from "framer-motion";
// // import { useState, useEffect } from "react";
// // import { IoIosArrowUp } from "react-icons/io";

// // export const Footer = () => {
// //   const [showScrollUp, setShowScrollUp] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > 300) {
// //         setShowScrollUp(true);
// //       } else {
// //         setShowScrollUp(false);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   return (
// //     <motion.footer
// //       className="tj-footer-area"
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.8 }}
// //     >
// //       <div className="container text-center">
// //         {/* Logo Box */}
// //         <motion.div
// //           className="logo-box"
// //           initial={{ y: -30, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           {/* <a href="/" className="footer-logo">
// //             Portfolio
// //           </a> */}
// //               <motion.span
// //                 whileHover={{ scale: 1.05 }}
// //                 transition={{
// //                   type: "spring",
// //                   stiffness: 200,
// //                 }}
// //                 style={{
// //                   fontSize: "30px",
// //                   fontWeight: "600",
// //                   fontFamily: "'Brush Script MT', cursive",
// //                   background:
// //                     "linear-gradient(90deg, #ffffff, #c084fc, #a855f7)",
// //                   WebkitBackgroundClip: "text",
// //                   WebkitTextFillColor: "transparent",
// //                   textShadow:
// //                     "0 0 10px rgba(168,85,247,0.6), 0 0 20px rgba(168,85,247,0.4)",
// //                   position: "relative",
// //                 }}
// //               >
// //                 Md Shoaib
// //               </motion.span>
// //         </motion.div>

// //         {/* Footer Menu */}
// //         <motion.div
// //           className="footer-menu"
// //           initial={{ y: 30, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.7, delay: 0.2 }}
// //         >
// //           <nav>
// //             <ul>
// //               {linklist.map((link) => (
// //                 <motion.li
// //                   key={link.id}
// //                   initial={{ x: -20, opacity: 0 }}
// //                   animate={{ x: 0, opacity: 1 }}
// //                   transition={{ duration: 0.5, delay: 0.2 }}
// //                 >
// //                   <a href={link.link}>{link.text}</a>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </nav>
// //         </motion.div>

// //         {/* Copyright Text */}
// //         <motion.div
// //           className="copy-text"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //         >
// //           <p>
// //             &copy; 2025 All rights reserved by
// //             <a href="#" target="_blank"> Md Shoaib </a>
// //           </p>
// //         </motion.div>
// //       </div>

// //       {/* Scroll Up Button */}
// //       {showScrollUp && (
// //         <div className="scroll-up" onClick={scrollToTop}>
// //           <IoIosArrowUp size={30} />
// //         </div>
// //       )}
// //     </motion.footer>
// //   );
// // };


// import { linklist } from "../../assets/data/data";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { IoIosArrowUp } from "react-icons/io";

// export const Footer = () => {
//   const [showScrollUp, setShowScrollUp] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowScrollUp(true);
//       } else {
//         setShowScrollUp(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <motion.footer
//       className="tj-footer-area"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container text-center">
//         {/* Logo Box */}
//         <motion.div
//           className="logo-box"
//           initial={{ y: -30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//               <motion.span
//                 whileHover={{ scale: 1.05 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 200,
//                 }}
//                 style={{
//                   fontSize: "30px",
//                   fontWeight: "600",
//                   fontFamily: "'Brush Script MT', cursive",
//                   background:
//                     "linear-gradient(90deg, #ffffff, #c084fc, #a855f7)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   textShadow:
//                     "0 0 10px rgba(168,85,247,0.6), 0 0 20px rgba(168,85,247,0.4)",
//                   position: "relative",
//                 }}
//               >
//                 Md Shoaib
//               </motion.span>
//         </motion.div>

//         {/* Footer Menu */}
//         <motion.div
//           className="footer-menu"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//         >
//           <nav>
//             <ul>
//               {linklist.map((link) => (
//                 <motion.li
//                   key={link.id}
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                   <a href={link.link}>{link.text}</a>
//                 </motion.li>
//               ))}
//             </ul>
//           </nav>
//         </motion.div>

//         {/* Copyright Text */}
//         <motion.div
//           className="copy-text"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <p>
//             &copy; 2025 All rights reserved by
//             <a href="#" target="_blank"> Md Shoaib </a>
//           </p>
//         </motion.div>
//       </div>

//       {/* Scroll Up Button */}
//       {showScrollUp && (
//         <div className="scroll-up" onClick={scrollToTop}>
//           <IoIosArrowUp size={30} />
//         </div>
//       )}
//     </motion.footer>
//   );
// };


import { linklist } from "../../assets/data/data";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export const Footer = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="tj-footer-area"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container text-center">

        {/* Logo Box */}
        <motion.div
          className="logo-box"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              fontSize: "30px",
              fontWeight: "600",
              fontFamily: "'Brush Script MT', cursive",
              background:
                "linear-gradient(90deg, #ffffff, #8750f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Md Shoaib
          </span>
        </motion.div>

        {/* Footer Menu */}
        <motion.div
          className="footer-menu"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <nav>
            <ul>
              {linklist.map((link) => (
                <motion.li
                  key={link.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <a href={link.link}>{link.text}</a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="copy-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            &copy; 2026 All rights reserved by{" "}
            <a href="#" target="_blank" rel="noreferrer">
              Md Shoaib
            </a>
          </p>
        </motion.div>

      </div>

      {/* Scroll Up Button */}
      {showScrollUp && (
        <div className="scroll-up" onClick={scrollToTop}>
          <IoIosArrowUp size={30} />
        </div>
      )}
    </motion.footer>
  );
};
