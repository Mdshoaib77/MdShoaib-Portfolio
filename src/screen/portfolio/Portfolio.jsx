// import { NavLink } from "react-router-dom";
// import { projects } from "../../assets/data/data";
// import { GoArrowUpRight } from "react-icons/go";
// import { motion } from "framer-motion";

// export const Portfolio = () => {
//   return (
//     <motion.section
//       className="portfolio-section"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="container">
//         <div className="section-header text-center">
//           <motion.h2
//             className="section-title"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             My Recent Works
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
//           </motion.p>
//         </div>

//         <div className="portfolio-filter text-center">
//           <div className="button-group filter-button-group">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//             >
//               All
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//             >
//               UX/UI
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//             >
//               Branding
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//             >
//               Websites
//             </motion.button>
//             <div className="active-bg"></div>
//           </div>
//         </div>

//         <motion.div
//           className="portfolio-box"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           <div className="grid2">
//             {projects.map((project) => (
//               <motion.div
//                 className="portfolio-item branding"
//                 key={project.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <div className="image-box">
//                   <motion.img
//                     src={project.cover}
//                     alt=""
//                     initial={{ scale: 1.1 }}
//                     whileHover={{ scale: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </div>
//                 <div className="content-box">
//                   <NavLink to="/details">
//                     <motion.h3
//                       className="portfolio-title"
//                       initial={{ y: -10, opacity: 0 }}
//                       whileInView={{ y: 0, opacity: 1 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       {project.title}
//                     </motion.h3>
//                   </NavLink>
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.4 }}
//                   >
//                     {project.desc}
//                   </motion.p>
//                   <motion.i
//                     initial={{ x: 20, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.3, delay: 0.6 }}
//                   >
//                     <GoArrowUpRight size={50} />
//                   </motion.i>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };


// import { useRef, useState } from "react";
// import { FaPlay } from "react-icons/fa";
// import { GoArrowUpRight } from "react-icons/go";
// import { motion } from "framer-motion";
// import videoFile from "../../Video/Web Development GIG.mp4";

// const primary = "#8750f7";

// export const Portfolio = () => {
//   const videoRefs = useRef([]);
//   const [activeVideo, setActiveVideo] = useState(null);

//   const toggleVideo = (index) => {
//     const video = videoRefs.current[index];
//     if (!video) return;

//     if (activeVideo === index) {
//       video.pause();
//       setActiveVideo(null);
//     } else {
//       videoRefs.current.forEach((v) => {
//         if (v) {
//           v.pause();
//           v.currentTime = 0;
//         }
//       });

//       video.muted = false;
//       video.play();
//       setActiveVideo(index);
//     }
//   };

//   const projects = [
//     {
//       title: "Portfolio | MERN Stack",
//       desc: "Full MERN Stack Portfolio with authentication, admin dashboard, JWT auth and Stripe integration.",
//       tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Stripe"],
//       url: "https://your-mern-portfolio-url.com",
//     },
//     {
//       title: "E-Commerce | MERN",
//       desc: "Advanced eCommerce platform with cart system, payment gateway and admin control panel.",
//       tech: ["MERN", "Redux", "Stripe", "Cloudinary"],
//       url: "#",
//     },
//     {
//       title: "Booking System",
//       desc: "Full booking system with real-time scheduling and secure authentication.",
//       tech: ["MongoDB", "Node", "React", "JWT"],
//       url: "#",
//     },
//     {
//       title: "SaaS Dashboard",
//       desc: "Premium SaaS dashboard with subscription and analytics system.",
//       tech: ["Next.js", "Tailwind", "Node.js"],
//       url: "#",
//     },
//   ];

//   return (
//     <section style={{ padding: "100px 0", background: "#1c2336" }}>
//       <div className="container">

//         <h2 style={{
//           textAlign: "center",
//           color: "#fff",
//           fontSize: "38px",
//           marginBottom: "70px"
//         }}>
//           My Recent Projects
//         </h2>

//         {/* GRID */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
//             gap: "40px",
//           }}
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               style={{
//                 background: "#111318",
//                 borderRadius: "25px",
//                 padding: "30px",
//                 display: "flex",
//                 gap: "30px",
//                 flexWrap: "wrap",
//                 border: `1px solid ${primary}30`,
//                 boxShadow: `0 0 40px ${primary}20`,
//               }}
//             >

//               {/* LEFT VIDEO */}
//               <div style={{
//                 flex: "1 1 280px",
//                 position: "relative",
//                 borderRadius: "20px",
//                 overflow: "hidden",
//               }}>
//                 <video
//                   ref={(el) => (videoRefs.current[index] = el)}
//                   src={videoFile}
//                   poster="/images/common/profile1.jpg"
//                   style={{
//                     width: "100%",
//                     height: "260px",
//                     objectFit: "cover",
//                     borderRadius: "20px",
//                   }}
//                 />

//                 {/* Play Overlay */}
//                 <div
//                   onClick={() => toggleVideo(index)}
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     cursor: "pointer",
//                     background:
//                       activeVideo === index
//                         ? "transparent"
//                         : "rgba(0,0,0,0.45)",
//                     transition: "0.3s",
//                   }}
//                 >
//                   {activeVideo !== index && (
//                     <div
//                       style={{
//                         width: "75px",
//                         height: "75px",
//                         borderRadius: "50%",
//                         background: primary,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         boxShadow: `0 0 30px ${primary}`,
//                       }}
//                     >
//                       <FaPlay color="#fff" size={24} />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* RIGHT CONTENT */}
//               <div style={{ flex: "1 1 280px", color: "#fff" }}>
//                 <div style={{
//                   display: "inline-block",
//                   padding: "5px 15px",
//                   borderRadius: "20px",
//                   background: `${primary}20`,
//                   color: primary,
//                   fontSize: "12px",
//                   marginBottom: "15px",
//                 }}>
//                   MERN STACK
//                 </div>

//                 <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>
//                   {project.title}
//                 </h3>

//                 <p style={{
//                   color: "#aaa",
//                   marginBottom: "20px",
//                   lineHeight: "1.6"
//                 }}>
//                   {project.desc}
//                 </p>

//                 {/* TECH TAGS */}
//                 <div style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: "10px",
//                   marginBottom: "25px"
//                 }}>
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       style={{
//                         padding: "6px 14px",
//                         borderRadius: "20px",
//                         background: "#1b1f27",
//                         border: `1px solid ${primary}`,
//                         color: primary,
//                         fontSize: "12px",
//                       }}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <a
//                   href={project.url}
//                   target="_blank"
//                   rel="noreferrer"
//                   style={{
//                     display: "inline-flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     padding: "12px 25px",
//                     borderRadius: "30px",
//                     background: primary,
//                     color: "#fff",
//                     fontWeight: "600",
//                     textDecoration: "none",
//                   }}
//                 >
//                   Live Preview <GoArrowUpRight />
//                 </a>
//               </div>

//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



// import { motion } from "framer-motion";
// import { GoArrowUpRight } from "react-icons/go";
// import project1 from "../../../src/assets/zamans.png";
// import project2 from "../../../src/assets/Foodessa.png"
// import demoImage from "../../../src/assets/zamans.png";

// const primary = "#8750f7";

// export const Portfolio = () => {

//   const projects = [
//     {
//       id: 1,
//       title: "Zaman's Gadget",
//       desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online. This application allows users to view, search, and purchase various gadgets with a modern, responsive design and secure user authentication.",
//       tech: [
//         "React",
//         "Tailwind CSS",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "JWT"
//       ],
//       image: project1,
//       link: "https://zamansgadget.com/"
//     },
//     // {
//     //   id: 2,
//     //   title: "Demo MERN Project",
//     //   desc: "Full MERN stack project with authentication system and modern UI dashboard.",
//     //   tech: ["React", "Node.js", "MongoDB", "JWT"],
//     //   image: project2,
//     //   link: "https://foodessa.netlify.app/"
//     // },
//     {
//   id: 2,
//   title: "Foodessa – Full Stack Food Ordering App",
//   desc: "A complete MERN stack food ordering platform with user authentication, category-based food browsing, cart system, and dedicated admin dashboard for managing foods and orders.",
//   tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
//   image: project2,
//   link: "https://foodessa.netlify.app/"
// },
//     {
//       id: 3,
//       title: "E-Commerce Platform",
//       desc: "Advanced shopping platform with cart system and payment gateway integration.",
//       tech: ["MERN", "Stripe", "Redux"],
//       image: demoImage,
//       link: "#"
//     },
//     {
//       id: 4,
//       title: "Admin Dashboard",
//       desc: "Modern admin dashboard with analytics and full management system.",
//       tech: ["React", "Tailwind", "Node.js"],
//       image: demoImage,
//       link: "#"
//     }
//   ];

//   return (
//     <motion.section
//       className="portfolio-section"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       style={{ padding: "100px 0", background: "#0d0f14" }}
//     >
//       <div className="container">

//         {/* SAME SECTION TITLE */}
//         <div className="section-header text-center">
//           {/* <motion.h2
//             className="section-title"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             My Recent Projects
//           </motion.h2> */}
//             <motion.h2
//             className="section-title"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             My Recent Works
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             I put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
//           </motion.p>
//         </div>

//         {/* GRID 2x2 Desktop */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(550px, 1fr))",
//             gap: "40px",
//             marginTop: "60px"
//           }}
//         >
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               whileHover={{ y: -8 }}
//               transition={{ duration: 0.3 }}
//               style={{
//                 background: "#111318",
//                 borderRadius: "25px",
//                 padding: "35px",
//                 display: "flex",
//                 gap: "35px",
//                 flexWrap: "wrap",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 boxShadow: "0 0 40px rgba(0,0,0,0.5)"
//               }}
//             >

//               {/* LEFT IMAGE */}
//               <div
//                 style={{
//                   flex: "1 1 300px",
//                   borderRadius: "20px",
//                   overflow: "hidden"
//                 }}
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     borderRadius: "20px"
//                   }}
//                 />
//               </div>

//               {/* RIGHT CONTENT */}
//               <div style={{ flex: "1 1 300px", color: "#fff" }}>

//                 <div
//                   style={{
//                     display: "inline-block",
//                     padding: "6px 18px",
//                     borderRadius: "20px",
//                     background: `${primary}20`,
//                     color: primary,
//                     fontSize: "12px",
//                     marginBottom: "15px"
//                   }}
//                 >
//                   MERN STACK
//                 </div>

//                 <h3 style={{ fontSize: "26px", marginBottom: "15px" }}>
//                   {project.title}
//                 </h3>

//                 <p
//                   style={{
//                     color: "#aaa",
//                     marginBottom: "20px",
//                     lineHeight: "1.6"
//                   }}
//                 >
//                   {project.desc}
//                 </p>

//                 {/* TECH TAGS */}
//                 <div
//                   style={{
//                     display: "flex",
//                     flexWrap: "wrap",
//                     gap: "10px",
//                     marginBottom: "25px"
//                   }}
//                 >
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       style={{
//                         padding: "6px 14px",
//                         borderRadius: "20px",
//                         background: "#1b1f27",
//                         border: `1px solid ${primary}`,
//                         color: primary,
//                         fontSize: "12px"
//                       }}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* LIVE LINK */}
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   style={{
//                     display: "inline-flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     padding: "12px 28px",
//                     borderRadius: "30px",
//                     background: primary,
//                     color: "#fff",
//                     fontWeight: "600",
//                     textDecoration: "none"
//                   }}
//                 >
//                   Live Preview <GoArrowUpRight />
//                 </a>

//               </div>

//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </motion.section>
//   );
// };



// import { motion } from "framer-motion";
// import { GoArrowUpRight } from "react-icons/go";
// import project1 from "../../../src/assets/zamans.png";
// import project2 from "../../../src/assets/Foodessa.png";
// import project3 from "../../../src/assets/outfiro.png";
// import project4 from "../../../src/assets/realstate.png";


// const primary = "#8750f7";

// export const Portfolio = () => {

//   const projects = [
//     {
//       id: 1,
//       title: "Zaman's Gadget",
//       desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online with secure authentication and modern UI experience.",
//       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
//       image: project1,
//       link: "https://zamansgadget.com/"
//     },
//     {
//       id: 2,
//       title: "Foodessa Food Ordering App",
//       desc: "A complete MERN stack food ordering platform with authentication, category filtering, cart system, and a powerful admin dashboard.",
//       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT",],
//       image: project2,
//       link: "https://foodessa.netlify.app/"
//     },
// {
//   id: 3,
//   title: "Outfiro Fashion Store",
//   desc: "Modern fullstack dress selling platform featuring dynamic product listings, cart management, and secure payment gateway.",
//   tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
//   image: project3,
//   link: "https://outfiro.netlify.app/"
// },
// {
//   id: 4,
//   title: "Real Estate Platform",
//   desc: "Modern property listing platform with advanced search filters and secure management system.And Web3Forms contact handling.",
//   tech: ["React", "Tailwind", "web3form"],
//   image: project4,
//   link: "https://real-estate-vy0e.onrender.com/"
// }
//   ];

//   return (
//     <section
//       style={{
//         padding: "120px 0",
//         background: "linear-gradient(180deg,#0d0f14 0%, #0b0c10 100%)"
//       }}
//     >
//       <div className="container">

//         {/* SECTION HEADER */}
//         <div style={{ textAlign: "center", marginBottom: "80px" }}>
//           <motion.h2
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             style={{
//               fontSize: "48px",
//               fontWeight: "800",
//               background: "linear-gradient(90deg,#8750f7,#c084fc)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               marginBottom: "20px"
//             }}
//           >
//             My Recent Works
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             style={{
//               color: "#aaa",
//               maxWidth: "650px",
//               margin: "0 auto",
//               fontSize: "18px",
//               lineHeight: "1.6"
//             }}
//           >
//             I transform ideas into premium web experiences that inspire users
//             and deliver real-world solutions.
//           </motion.p>
//         </div>

//         {/* PROJECT GRID */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
//             gap: "50px"
//           }}
//         >
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               whileHover={{ y: -12 }}
//               transition={{ duration: 0.4 }}
//               style={{
//                 background: "rgba(255,255,255,0.03)",
//                 backdropFilter: "blur(12px)",
//                 borderRadius: "30px",
//                 padding: "35px",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "25px",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
//                 transition: "all 0.4s ease"
//               }}
//             >

//               {/* IMAGE */}
//               <div
//                 style={{
//                   borderRadius: "20px",
//                   overflow: "hidden",
//                   position: "relative"
//                 }}
//               >
//                 <motion.img
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.6 }}
//                   src={project.image}
//                   alt={project.title}
//                   style={{
//                     width: "100%",
//                     borderRadius: "20px",
//                     objectFit: "cover"
//                   }}
//                 />
//               </div>

//               {/* CONTENT */}
//               <div style={{ color: "#fff" }}>

//                 <div
//                   style={{
//                     display: "inline-block",
//                     padding: "6px 18px",
//                     borderRadius: "30px",
//                     background: `${primary}15`,
//                     color: primary,
//                     fontSize: "12px",
//                     marginBottom: "15px",
//                     letterSpacing: "1px"
//                   }}
//                 >
//                   MERN STACK
//                 </div>

//                 <h3
//                   style={{
//                     fontSize: "28px",
//                     fontWeight: "700",
//                     marginBottom: "15px"
//                   }}
//                 >
//                   {project.title}
//                 </h3>

//                 <p
//                   style={{
//                     color: "#b5b5b5",
//                     lineHeight: "1.7",
//                     marginBottom: "20px"
//                   }}
//                 >
//                   {project.desc}
//                 </p>

//                 {/* TECH TAGS */}
//                 <div
//                   style={{
//                     display: "flex",
//                     flexWrap: "wrap",
//                     gap: "10px",
//                     marginBottom: "25px"
//                   }}
//                 >
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       style={{
//                         padding: "6px 14px",
//                         borderRadius: "20px",
//                         background: "rgba(255,255,255,0.05)",
//                         border: `1px solid ${primary}`,
//                         color: primary,
//                         fontSize: "12px",
//                         transition: "all 0.3s ease"
//                       }}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* BUTTON */}
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   style={{
//                     display: "inline-flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     padding: "14px 30px",
//                     borderRadius: "40px",
//                     background: `linear-gradient(90deg,#8750f7,#c084fc)`,
//                     color: "#fff",
//                     fontWeight: "600",
//                     textDecoration: "none",
//                     transition: "all 0.3s ease",
//                     boxShadow: "0 10px 25px rgba(135,80,247,0.4)"
//                   }}
//                 >
//                   Live Preview <GoArrowUpRight />
//                 </a>

//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import project1 from "../../../src/assets/zamans.png";
import project2 from "../../../src/assets/Foodessa.png";
import project3 from "../../../src/assets/outfiro.png";
import project4 from "../../../src/assets/realstate.png";

const primary = "#8750f7";

export const Portfolio = () => {

  const projects = [
    {
      id: 1,
      title: "Zaman's Gadget",
      desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online with secure authentication and modern UI experience.",
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
      image: project1,
      link: "https://zamansgadget.com/"
    },
    {
      id: 2,
      title: "Foodessa Food Ordering App",
      desc: "A complete MERN stack food ordering platform with authentication, category filtering, cart system, and a powerful admin dashboard.",
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
      image: project2,
      link: "https://foodessa.netlify.app/"
    },
    {
      id: 3,
      title: "Outfiro Fashion Store",
      desc: "Modern fullstack dress selling platform featuring dynamic product listings, cart management, and secure payment gateway.",
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
      image: project3,
      link: "https://outfiro.netlify.app/"
    },
    {
      id: 4,
      title: "Real Estate Platform",
      desc: "Modern property listing platform with advanced search filters and secure management system.And Web3Forms contact handling.",
      tech: ["React", "Tailwind", "web3form"],
      image: project4,
      link: "https://real-estate-vy0e.onrender.com/"
    }
  ];

  return (
    <section
      style={{
        padding: "120px 0",
        background: "linear-gradient(180deg,#0d0f14 0%, #0b0c10 100%)",
        overflowX: "hidden" // ✅ stop horizontal scroll
      }}
    >
      <div
        className="container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px"
        }}
      >

        {/* SECTION HEADER */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "48px",
              fontWeight: "800",
              background: "linear-gradient(90deg,#8750f7,#c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "20px"
            }}
          >
            My Recent Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              color: "#aaa",
              maxWidth: "650px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: "1.6"
            }}
          >
            I transform ideas into premium web experiences that inspire users
            and deliver real-world solutions.
          </motion.p>
        </div>

        {/* PROJECT GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", // ✅ responsive fix
            gap: "50px"
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
                borderRadius: "30px",
                padding: "35px",
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                transition: "all 0.4s ease",
                width: "100%"
              }}
            >

              {/* IMAGE */}
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                  width: "100%"
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
              </div>

              {/* CONTENT */}
              <div style={{ color: "#fff" }}>

                <div
                  style={{
                    display: "inline-block",
                    padding: "6px 18px",
                    borderRadius: "30px",
                    background: `${primary}15`,
                    color: primary,
                    fontSize: "12px",
                    marginBottom: "15px",
                    letterSpacing: "1px"
                  }}
                >
                  MERN STACK
                </div>

                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    marginBottom: "15px"
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "#b5b5b5",
                    lineHeight: "1.7",
                    marginBottom: "20px"
                  }}
                >
                  {project.desc}
                </p>

                {/* TECH TAGS */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "25px"
                  }}
                >
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "20px",
                        background: "rgba(255,255,255,0.05)",
                        border: `1px solid ${primary}`,
                        color: primary,
                        fontSize: "12px",
                        transition: "all 0.3s ease"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 30px",
                    borderRadius: "40px",
                    background: `linear-gradient(90deg,#8750f7,#c084fc)`,
                    color: "#fff",
                    fontWeight: "600",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 25px rgba(135,80,247,0.4)"
                  }}
                >
                  Live Preview <GoArrowUpRight />
                </a>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};