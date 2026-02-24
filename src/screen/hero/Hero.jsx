// // // // import { useEffect } from "react";
// // // // import { useLocation } from "react-router-dom";
// // // // import { FaXTwitter } from "react-icons/fa6";
// // // // import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
// // // // import { hero } from "../../assets/data/data";
// // // // import { motion } from "framer-motion";

// // // // export const Hero = () => {
// // // //   const location = useLocation();

// // // //   useEffect(() => {
// // // //     if (location.state?.scrollToContact) {
// // // //       setTimeout(() => {
// // // //         const section = document.getElementById("contact-section");
// // // //         if (section) {
// // // //           section.scrollIntoView({ behavior: "smooth" });
// // // //         }
// // // //       }, 300);
// // // //     }
// // // //   }, [location]);

// // // //   const socialIcons = [
// // // //     {
// // // //       id: 1,
// // // //       icon: <FaXTwitter size={17} />,
// // // //       url: "https://x.com/mdshoaibdev",
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       icon: <FaFacebookF size={20} />,
// // // //       url: "https://www.facebook.com/md.shoaib.959839/",
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       icon: <FaLinkedinIn size={20} />,
// // // //       url: "https://www.linkedin.com/in/md-shoaib-07b32a314",
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       icon: <FaWhatsapp size={20} />,
// // // //       url: "https://wa.me/8801724519674",
// // // //     },
// // // //     {
// // // //       id: 5,
// // // //       icon: <FaInstagram size={20} />,
// // // //       url: "https://www.instagram.com/shoaib8749/",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <>
// // // //       <section className="hero-section">
// // // //         <motion.div
// // // //           className="intro_text"
// // // //           initial={{ opacity: 0, scale: 0.5 }}
// // // //           animate={{ opacity: 1, scale: 1 }}
// // // //           transition={{ duration: 1.5, ease: "easeOut" }}
// // // //         >
// // // //           <svg viewBox="0 0 1320 300">
// // // //             <text x="50%" y="50%" textAnchor="middle">HI</text>
// // // //           </svg>
// // // //         </motion.div>

// // // //         <div className="container">
// // // //           <div className="content flexSB">
// // // //             <div className="left w-half">
// // // //               <div className="hero-content-box">
// // // //                 <motion.span
// // // //                   className="hero-sub-title"
// // // //                   initial={{ opacity: 0, y: 30 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 1, ease: "easeOut" }}
// // // //                 >
// // // //                   I am Md Shoaib
// // // //                 </motion.span>

// // // //                 <motion.h1
// // // //                   className="hero-title"
// // // //                   initial={{ opacity: 0, y: 30 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
// // // //                 >
// // // //                   Web Developer +<br /> UI Designer
// // // //                 </motion.h1>

// // // //                 <div className="text-center hero-image-box d-md-none">
// // // //                   <motion.img
// // // //                     src="assets/img/hero/me.png"
// // // //                     alt=""
// // // //                     initial={{ opacity: 0, x: -100 }}
// // // //                     animate={{ opacity: 1, x: 0 }}
// // // //                     transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
// // // //                   />
// // // //                 </div>

// // // //                 <motion.p
// // // //                   className="lead"
// // // //                   initial={{ opacity: 0, y: 30 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
// // // //                 >
// // // //                   I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
// // // //                 </motion.p>

// // // //                 <motion.div
// // // //                   className="button-box flexG"
// // // //                   initial={{ opacity: 0, y: 30 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
// // // //                 >
// // // //                   <a
// // // //                     href="/MdShoaibResume.pdf"
// // // //                     download="Md_Shoaib_Resume"
// // // //                     className="btn tj-btn-secondary"
// // // //                   >
// // // //                     Download CV <i className="flaticon-download"></i>
// // // //                   </a>
// // // //                   <ul className="ul-reset social-icons">
// // // //                     {socialIcons.map((icon, index) => (
// // // //                       <motion.li
// // // //                         key={index}
// // // //                         initial={{ opacity: 0, x: -10 }}
// // // //                         animate={{ opacity: 1, x: 0 }}
// // // //                         transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
// // // //                       >
// // // //                         <a href={icon.url} target="_blank" rel="noopener noreferrer">
// // // //                           {icon.icon}
// // // //                         </a>
// // // //                       </motion.li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </motion.div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="right w-half">
// // // //               <div className="text-center hero-image-box">
// // // //                 <motion.img
// // // //                   src="../images/common/profile1.jpg"
// // // //                   alt="profile"
// // // //                   style={{ width: "400px", height: "500px", objectFit: "cover" }}
// // // //                   initial={{ opacity: 0, x: 100 }}
// // // //                   animate={{ opacity: 1, x: 0 }}
// // // //                   transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="funfact-area grid4">
// // // //             {hero.map((item, index) => (
// // // //               <motion.div
// // // //                 className="funfact-item"
// // // //                 key={index}
// // // //                 initial={{ opacity: 0, y: 50 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 transition={{ duration: 1, ease: "easeOut", delay: 0.8 + index * 0.2 }}
// // // //               >
// // // //                 <div className="number"><span>{item.text}</span></div>
// // // //                 <div className="text">{item.title}</div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </>
// // // //   );
// // // // };



// // // // ALhamdulliah Another Style

// // // // import { useEffect } from "react";
// // // // import { useLocation } from "react-router-dom";
// // // // import { FaXTwitter } from "react-icons/fa6";
// // // // import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
// // // // import { hero } from "../../assets/data/data";
// // // // import { motion } from "framer-motion";

// // // // export const Hero = () => {
// // // //   const location = useLocation();

// // // //   useEffect(() => {
// // // //     if (location.state?.scrollToContact) {
// // // //       setTimeout(() => {
// // // //         const section = document.getElementById("contact-section");
// // // //         if (section) {
// // // //           section.scrollIntoView({ behavior: "smooth" });
// // // //         }
// // // //       }, 300);
// // // //     }
// // // //   }, [location]);

// // // //   const socialIcons = [
// // // //     { id: 1, icon: <FaXTwitter size={17} />, url: "#" },
// // // //     { id: 2, icon: <FaFacebookF size={20} />, url: "#" },
// // // //     { id: 3, icon: <FaLinkedinIn size={20} />, url: "#" },
// // // //     { id: 4, icon: <FaWhatsapp size={20} />, url: "#" },
// // // //     { id: 5, icon: <FaInstagram size={20} />, url: "#" },
// // // //   ];

// // // //   return (
// // // //     <section
// // // //       style={{
// // // //         minHeight: "100vh",
// // // //         display: "flex",
// // // //         alignItems: "center",
// // // //         background:
// // // //           "radial-gradient(circle at 20% 30%, #2e1760 0%, #120a25 60%, #0c0618 100%)",
// // // //         padding: "120px 0",
// // // //       }}
// // // //     >
// // // //       <div
// // // //         className="container"
// // // //         style={{
// // // //           display: "flex",
// // // //           flexWrap: "wrap",
// // // //           alignItems: "center",
// // // //           justifyContent: "space-between",
// // // //           gap: "60px",
// // // //         }}
// // // //       >
// // // //         {/* LEFT GLASS CONTENT */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, x: -80 }}
// // // //           animate={{ opacity: 1, x: 0 }}
// // // //           transition={{ duration: 1 }}
// // // //           style={{
// // // //             flex: "1 1 500px",
// // // //             backdropFilter: "blur(20px)",
// // // //             background: "rgba(255,255,255,0.05)",
// // // //             padding: "50px",
// // // //             borderRadius: "25px",
// // // //             border: "1px solid rgba(255,255,255,0.1)",
// // // //             boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
// // // //           }}
// // // //         >
// // // //           <span
// // // //             style={{
// // // //               color: "#c084fc",
// // // //               letterSpacing: "2px",
// // // //               fontSize: "14px",
// // // //             }}
// // // //           >
// // // //             FULL STACK DEVELOPER
// // // //           </span>

// // // //           <h1
// // // //             style={{
// // // //               fontSize: "clamp(36px,5vw,60px)",
// // // //               fontWeight: "700",
// // // //               margin: "20px 0",
// // // //               background:
// // // //                 "linear-gradient(90deg,#fff,#c084fc,#a855f7)",
// // // //               WebkitBackgroundClip: "text",
// // // //               WebkitTextFillColor: "transparent",
// // // //             }}
// // // //           >
// // // //             Hi, I'm Md Shoaib
// // // //           </h1>

// // // //           <p
// // // //             style={{
// // // //               fontSize: "18px",
// // // //               color: "#cfcfcf",
// // // //               lineHeight: "1.6",
// // // //               marginBottom: "30px",
// // // //             }}
// // // //           >
// // // //             I design and build powerful web experiences with modern UI,
// // // //             smooth animations and premium aesthetics.
// // // //           </p>

// // // //           {/* Buttons */}
// // // //           <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
// // // //             <a
// // // //               href="/MdShoaibResume.pdf"
// // // //               style={{
// // // //                 padding: "14px 30px",
// // // //                 background:
// // // //                   "linear-gradient(90deg,#a855f7,#c084fc)",
// // // //                 borderRadius: "50px",
// // // //                 color: "#fff",
// // // //                 textDecoration: "none",
// // // //                 fontWeight: "600",
// // // //                 boxShadow:
// // // //                   "0 10px 25px rgba(168,85,247,0.5)",
// // // //               }}
// // // //             >
// // // //               Download CV
// // // //             </a>

// // // //             <div style={{ display: "flex", gap: "15px" }}>
// // // //               {socialIcons.map((icon, index) => (
// // // //                 <motion.a
// // // //                   key={index}
// // // //                   whileHover={{ scale: 1.2 }}
// // // //                   href={icon.url}
// // // //                   style={{
// // // //                     width: "40px",
// // // //                     height: "40px",
// // // //                     borderRadius: "50%",
// // // //                     background: "rgba(255,255,255,0.1)",
// // // //                     display: "flex",
// // // //                     alignItems: "center",
// // // //                     justifyContent: "center",
// // // //                     color: "#fff",
// // // //                   }}
// // // //                 >
// // // //                   {icon.icon}
// // // //                 </motion.a>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* RIGHT FLOATING IMAGE */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, x: 80 }}
// // // //           animate={{ opacity: 1, x: 0 }}
// // // //           transition={{ duration: 1 }}
// // // //           style={{
// // // //             flex: "1 1 400px",
// // // //             textAlign: "center",
// // // //             position: "relative",
// // // //           }}
// // // //         >
// // // //           <div
// // // //             style={{
// // // //               position: "absolute",
// // // //               width: "350px",
// // // //               height: "350px",
// // // //               background:
// // // //                 "radial-gradient(circle,#a855f7 0%,transparent 70%)",
// // // //               filter: "blur(100px)",
// // // //               top: "50%",
// // // //               left: "50%",
// // // //               transform: "translate(-50%,-50%)",
// // // //               zIndex: 0,
// // // //             }}
// // // //           />

// // // //           <motion.img
// // // //             src="../images/common/profile1.jpg"
// // // //             alt="profile"
// // // //             whileHover={{ scale: 1.05 }}
// // // //             style={{
// // // //               width: "100%",
// // // //               maxWidth: "380px",
// // // //               borderRadius: "25px",
// // // //               position: "relative",
// // // //               zIndex: 2,
// // // //               boxShadow:
// // // //                 "0 20px 60px rgba(0,0,0,0.6)",
// // // //             }}
// // // //           />
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };









// // // // import { useEffect } from "react";
// // // // import { useLocation } from "react-router-dom";
// // // // import { FaXTwitter } from "react-icons/fa6";
// // // // import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
// // // // import { hero } from "../../assets/data/data";
// // // // import { motion } from "framer-motion";

// // // // export const Hero = () => {
// // // //   const location = useLocation();

// // // //   useEffect(() => {
// // // //     if (location.state?.scrollToContact) {
// // // //       setTimeout(() => {
// // // //         const section = document.getElementById("contact-section");
// // // //         if (section) {
// // // //           section.scrollIntoView({ behavior: "smooth" });
// // // //         }
// // // //       }, 300);
// // // //     }
// // // //   }, [location]);

// // // //   const socialIcons = [
// // // //     { id: 1, icon: <FaXTwitter size={17} />, url: "https://x.com/mdshoaibdev" },
// // // //     { id: 2, icon: <FaFacebookF size={20} />, url: "https://www.facebook.com/md.shoaib.959839/" },
// // // //     { id: 3, icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/in/md-shoaib-07b32a314" },
// // // //     { id: 4, icon: <FaWhatsapp size={20} />, url: "https://wa.me/8801724519674" },
// // // //     { id: 5, icon: <FaInstagram size={20} />, url: "https://www.instagram.com/shoaib8749/" },
// // // //   ];

// // // //   return (
// // // //     <>
// // // //       <section className="hero-section">
// // // //         <motion.div
// // // //           className="intro_text"
// // // //           initial={{ opacity: 0, scale: 0.5 }}
// // // //           animate={{ opacity: 1, scale: 1 }}
// // // //           transition={{ duration: 1.5, ease: "easeOut" }}
// // // //         >
// // // //           <svg viewBox="0 0 1320 300">
// // // //             <text x="50%" y="50%" textAnchor="middle">
// // // //               HI
// // // //             </text>
// // // //           </svg>
// // // //         </motion.div>

// // // //         <div className="container">
// // // //           {/* Desktop layout EXACT same */}
// // // //           <div
// // // //             className="content flexSB"
// // // //             style={{
// // // //               flexWrap: "wrap", // only for mobile stacking
// // // //             }}
// // // //           >
// // // //             {/* LEFT */}
// // // //             <div
// // // //               className="left w-half"
// // // //               style={{
// // // //                 minWidth: "300px",
// // // //               }}
// // // //             >
// // // //               <div className="hero-content-box">

// // // //                 <motion.span
// // // //                   className="hero-sub-title"
// // // //                   initial={{ opacity: 0, y: 30 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 1 }}
// // // //                 >
// // // //                   I am Md Shoaib
// // // //                 </motion.span>

// // // //                 <motion.h1
// // // //                   className="hero-title"
// // // //                   initial={{ opacity: 0, y: 30 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 1.2, delay: 0.2 }}
// // // //                   style={{
// // // //                     fontSize: "clamp(30px, 4vw, 56px)", // responsive only
// // // //                     lineHeight: "1.2",
// // // //                   }}
// // // //                 >
// // // //                   Web Developer +<br /> UI Designer
// // // //                 </motion.h1>

// // // //                 <div className="text-center hero-image-box d-md-none">
// // // //                   <motion.img
// // // //                     src="assets/img/hero/me.png"
// // // //                     alt=""
// // // //                     initial={{ opacity: 0, x: -100 }}
// // // //                     animate={{ opacity: 1, x: 0 }}
// // // //                     transition={{ duration: 1.5, delay: 0.3 }}
// // // //                     style={{
// // // //                       maxWidth: "280px",
// // // //                       width: "100%",
// // // //                       height: "auto",
// // // //                     }}
// // // //                   />
// // // //                 </div>

// // // //                 <motion.p
// // // //                   className="lead"
// // // //                   initial={{ opacity: 0, y: 30 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 1.2, delay: 0.4 }}
// // // //                   style={{
// // // //                     fontSize: "clamp(14px, 2vw, 18px)",
// // // //                   }}
// // // //                 >
// // // //                   I break down complex user experience problems to create
// // // //                   integrity-focused solutions that connect billions of people.
// // // //                 </motion.p>

// // // //                 <motion.div
// // // //                   className="button-box flexG"
// // // //                   initial={{ opacity: 0, y: 30 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 1.2, delay: 0.5 }}
// // // //                   style={{
// // // //                     flexWrap: "wrap",
// // // //                     gap: "20px",
// // // //                   }}
// // // //                 >
// // // //                   <a
// // // //                     href="/MdShoaibResume.pdf"
// // // //                     download="Md_Shoaib_Resume"
// // // //                     className="btn tj-btn-secondary"
// // // //                   >
// // // //                     Download CV
// // // //                   </a>

// // // //                   <ul
// // // //                     className="ul-reset social-icons"
// // // //                     style={{
// // // //                       display: "flex",
// // // //                       gap: "15px",
// // // //                       flexWrap: "wrap",
// // // //                     }}
// // // //                   >
// // // //                     {socialIcons.map((icon, index) => (
// // // //                       <motion.li
// // // //                         key={index}
// // // //                         initial={{ opacity: 0, x: -10 }}
// // // //                         animate={{ opacity: 1, x: 0 }}
// // // //                         transition={{
// // // //                           duration: 0.5,
// // // //                           delay: 0.6 + index * 0.15,
// // // //                         }}
// // // //                       >
// // // //                         <a
// // // //                           href={icon.url}
// // // //                           target="_blank"
// // // //                           rel="noopener noreferrer"
// // // //                         >
// // // //                           {icon.icon}
// // // //                         </a>
// // // //                       </motion.li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </motion.div>
// // // //               </div>
// // // //             </div>

// // // //             {/* RIGHT */}
// // // //             <div
// // // //               className="right w-half"
// // // //               style={{
// // // //                 textAlign: "center",
// // // //                 minWidth: "300px",
// // // //               }}
// // // //             >
// // // //               <div className="text-center hero-image-box">
// // // //                 <motion.img
// // // //                   src="../images/common/profile1.jpg"
// // // //                   alt="profile"
// // // //                   initial={{ opacity: 0, x: 100 }}
// // // //                   animate={{ opacity: 1, x: 0 }}
// // // //                   transition={{ duration: 1.5, delay: 0.7 }}
// // // //                   style={{
// // // //                     width: "100%",
// // // //                     maxWidth: "400px", // keeps desktop same
// // // //                     height: "auto",
// // // //                     objectFit: "cover",
// // // //                   }}
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* FUNFACT RESPONSIVE ONLY */}
// // // //           <div
// // // //             className="funfact-area grid4"
// // // //             style={{
// // // //               display: "grid",
// // // //               gridTemplateColumns:
// // // //                 "repeat(auto-fit, minmax(160px, 1fr))",
// // // //               gap: "30px",
// // // //               marginTop: "80px",
// // // //             }}
// // // //           >
// // // //             {hero.map((item, index) => (
// // // //               <motion.div
// // // //                 className="funfact-item"
// // // //                 key={index}
// // // //                 initial={{ opacity: 0, y: 50 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 transition={{
// // // //                   duration: 1,
// // // //                   delay: 0.8 + index * 0.2,
// // // //                 }}
// // // //               >
// // // //                 <div
// // // //                   className="number"
// // // //                   style={{ fontSize: "28px", fontWeight: "700" }}
// // // //                 >
// // // //                   <span>{item.text}</span>
// // // //                 </div>
// // // //                 <div className="text">{item.title}</div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </>
// // // //   );
// // // // };

// // // import { useEffect, useState } from "react";
// // // import { useLocation } from "react-router-dom";
// // // import { FaXTwitter } from "react-icons/fa6";
// // // import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
// // // import { hero } from "../../assets/data/data";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // export const Hero = () => {
// // //   const location = useLocation();
// // //   const [index, setIndex] = useState(0);

// // //   const titles = [
// // //     "Full-Stack Engineer & UI Architect",
// // //     "Designing Code. Engineering Experience.",
// // //     "Building Modern Digital Experiences",
// // //     "Frontend Specialist & Experience Designer"
// // //   ];

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setIndex((prev) => (prev + 1) % titles.length);
// // //     }, 3000);
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   useEffect(() => {
// // //     if (location.state?.scrollToContact) {
// // //       setTimeout(() => {
// // //         const section = document.getElementById("contact-section");
// // //         if (section) {
// // //           section.scrollIntoView({ behavior: "smooth" });
// // //         }
// // //       }, 300);
// // //     }
// // //   }, [location]);

// // //   const socialIcons = [
// // //     { id: 1, icon: <FaXTwitter size={17} />, url: "https://x.com/mdshoaibdev" },
// // //     { id: 2, icon: <FaFacebookF size={20} />, url: "https://www.facebook.com/md.shoaib.959839/" },
// // //     { id: 3, icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/in/md-shoaib-07b32a314" },
// // //     { id: 4, icon: <FaWhatsapp size={20} />, url: "https://wa.me/8801724519674" },
// // //     { id: 5, icon: <FaInstagram size={20} />, url: "https://www.instagram.com/shoaib8749/" },
// // //   ];

// // //   return (
// // //     <section className="hero-section">
// // //       <div className="container">
// // //         <div className="content flexSB" style={{ flexWrap: "wrap" }}>
          
// // //           {/* LEFT */}
// // //           <div className="left w-half" style={{ minWidth: "300px" }}>
// // //             <div className="hero-content-box">

// // //               <motion.span
// // //                 className="hero-sub-title"
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 1 }}
// // //               >
// // //                 I am Md Shoaib
// // //               </motion.span>

// // //               {/* 🔥 Animated Premium Title */}
// // //               <div style={{ minHeight: "80px" }}>
// // //                 <AnimatePresence mode="wait">
// // //                   <motion.h1
// // //                     key={titles[index]}
// // //                     initial={{ opacity: 0, y: 40 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     exit={{ opacity: 0, y: -40 }}
// // //                     transition={{ duration: 0.8 }}
// // //                     style={{
// // //                       fontSize: "clamp(30px, 4vw, 56px)",
// // //                       lineHeight: "1.2",
// // //                       background:
// // //                         "linear-gradient(90deg,#ffffff,#c084fc,#a855f7)",
// // //                       WebkitBackgroundClip: "text",
// // //                       WebkitTextFillColor: "transparent",
// // //                       fontWeight: "700",
// // //                     }}
// // //                   >
// // //                     {titles[index]}
// // //                   </motion.h1>
// // //                 </AnimatePresence>
// // //               </div>

// // //               <motion.p
// // //                 className="lead"
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 1.2, delay: 0.4 }}
// // //                 style={{
// // //                   fontSize: "clamp(14px, 2vw, 18px)",
// // //                 }}
// // //               >
// // //                 I design and build powerful web experiences with modern UI,
// // //                 smooth animations and premium aesthetics.
// // //               </motion.p>

// // //               <motion.div
// // //                 className="button-box flexG"
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 1.2, delay: 0.5 }}
// // //                 style={{ flexWrap: "wrap", gap: "20px" }}
// // //               >
// // //                 <a
// // //                   href="/MdShoaibResume.pdf"
// // //                   download="Md_Shoaib_Resume"
// // //                   className="btn tj-btn-secondary"
// // //                 >
// // //                   Download CV
// // //                 </a>

// // //                 <ul
// // //                   className="ul-reset social-icons"
// // //                   style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}
// // //                 >
// // //                   {socialIcons.map((icon, index) => (
// // //                     <motion.li
// // //                       key={index}
// // //                       initial={{ opacity: 0, x: -10 }}
// // //                       animate={{ opacity: 1, x: 0 }}
// // //                       transition={{
// // //                         duration: 0.5,
// // //                         delay: 0.6 + index * 0.15,
// // //                       }}
// // //                     >
// // //                       <a
// // //                         href={icon.url}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                       >
// // //                         {icon.icon}
// // //                       </a>
// // //                     </motion.li>
// // //                   ))}
// // //                 </ul>
// // //               </motion.div>
// // //             </div>
// // //           </div>

// // //           {/* RIGHT */}
// // //           <div
// // //             className="right w-half"
// // //             style={{ textAlign: "center", minWidth: "300px" }}
// // //           >
// // //             <div className="text-center hero-image-box">
// // //               <motion.img
// // //                 src="../images/common/profile1.jpg"
// // //                 alt="profile"
// // //                 initial={{ opacity: 0, x: 100 }}
// // //                 animate={{ opacity: 1, x: 0 }}
// // //                 transition={{ duration: 1.5, delay: 0.7 }}
// // //                 style={{
// // //                   width: "100%",
// // //                   maxWidth: "400px",
// // //                   height: "auto",
// // //                   objectFit: "cover",
// // //                 }}
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* FUNFACT SAME */}
// // //         <div
// // //           className="funfact-area grid4"
// // //           style={{
// // //             display: "grid",
// // //             gridTemplateColumns:
// // //               "repeat(auto-fit, minmax(160px, 1fr))",
// // //             gap: "30px",
// // //             marginTop: "80px",
// // //           }}
// // //         >
// // //           {hero.map((item, index) => (
// // //             <motion.div
// // //               className="funfact-item"
// // //               key={index}
// // //               initial={{ opacity: 0, y: 50 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{
// // //                 duration: 1,
// // //                 delay: 0.8 + index * 0.2,
// // //               }}
// // //             >
// // //               <div
// // //                 className="number"
// // //                 style={{ fontSize: "28px", fontWeight: "700" }}
// // //               >
// // //                 <span>{item.text}</span>
// // //               </div>
// // //               <div className="text">{item.title}</div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };


// // import { useEffect, useState } from "react";
// // import { useLocation } from "react-router-dom";
// // import { FaXTwitter } from "react-icons/fa6";
// // import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
// // import { hero } from "../../assets/data/data";
// // import { motion, AnimatePresence } from "framer-motion";

// // export const Hero = () => {
// //   const location = useLocation();

// //   /* ===== Typewriter Name ===== */
// //   const fullName = "Md Shoaib";
// //   const [displayName, setDisplayName] = useState("");
// //   const [nameIndex, setNameIndex] = useState(0);

// //   useEffect(() => {
// //     if (nameIndex < fullName.length) {
// //       const timeout = setTimeout(() => {
// //         setDisplayName((prev) => prev + fullName[nameIndex]);
// //         setNameIndex(nameIndex + 1);
// //       }, 120);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [nameIndex]);

// //   /* ===== Same Length Titles ===== */
// //   const titles = [
// //     "Full Stack Web Engineer",
// //     "Creative UI Experience Dev",
// //     "Modern Frontend Architect",
// //     "Interactive Web Specialist"
// //   ];

// //   const [titleIndex, setTitleIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setTitleIndex((prev) => (prev + 1) % titles.length);
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   useEffect(() => {
// //     if (location.state?.scrollToContact) {
// //       setTimeout(() => {
// //         const section = document.getElementById("contact-section");
// //         if (section) {
// //           section.scrollIntoView({ behavior: "smooth" });
// //         }
// //       }, 300);
// //     }
// //   }, [location]);

// //   const socialIcons = [
// //     { id: 1, icon: <FaXTwitter size={17} />, url: "#" },
// //     { id: 2, icon: <FaFacebookF size={20} />, url: "#" },
// //     { id: 3, icon: <FaLinkedinIn size={20} />, url: "#" },
// //     { id: 4, icon: <FaWhatsapp size={20} />, url: "#" },
// //     { id: 5, icon: <FaInstagram size={20} />, url: "#" },
// //   ];

// //   return (
// //     <section className="hero-section">
// //       <div className="container">
// //         <div className="content flexSB" style={{ flexWrap: "wrap" }}>

// //           {/* LEFT */}
// //           <div className="left w-half" style={{ minWidth: "300px" }}>
// //             <div className="hero-content-box">

// //               {/* 🔥 Letter By Letter Name */}
// //               <h2
// //                 style={{
// //                   fontSize: "clamp(22px,3vw,32px)",
// //                   fontWeight: "600",
// //                   color: "#c084fc",
// //                   minHeight: "40px",
// //                 }}
// //               >
// //                 I am{" "}
// //                 <span style={{ color: "#fff" }}>
// //                   {displayName}
// //                   <span style={{ opacity: 0.5 }}>|</span>
// //                 </span>
// //               </h2>

// //               {/* 🔥 Rotating Same-Length Titles */}
// //               <div style={{ minHeight: "80px", marginTop: "20px" }}>
// //                 <AnimatePresence mode="wait">
// //                   <motion.h1
// //                     key={titles[titleIndex]}
// //                     initial={{ opacity: 0, y: 40 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     exit={{ opacity: 0, y: -40 }}
// //                     transition={{ duration: 0.7 }}
// //                     style={{
// //                       fontSize: "clamp(30px, 4vw, 56px)",
// //                       lineHeight: "1.2",
// //                       fontWeight: "700",
// //                       background:
// //                         "linear-gradient(90deg,#ffffff,#c084fc,#a855f7)",
// //                       WebkitBackgroundClip: "text",
// //                       WebkitTextFillColor: "transparent",
// //                     }}
// //                   >
// //                     {titles[titleIndex]}
// //                   </motion.h1>
// //                 </AnimatePresence>
// //               </div>

// //               <p
// //                 style={{
// //                   fontSize: "clamp(14px, 2vw, 18px)",
// //                   marginTop: "20px",
// //                 }}
// //               >
// //                 I design and build powerful web experiences with modern UI,
// //                 smooth animations and premium aesthetics.
// //               </p>

// //               {/* Buttons */}
// //               <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "30px" }}>
// //                 <a
// //                   href="/MdShoaibResume.pdf"
// //                   style={{
// //                     padding: "14px 30px",
// //                     background:
// //                       "linear-gradient(90deg,#a855f7,#c084fc)",
// //                     borderRadius: "50px",
// //                     color: "#fff",
// //                     textDecoration: "none",
// //                     fontWeight: "600",
// //                   }}
// //                 >
// //                   Download CV
// //                 </a>

// //                 <div style={{ display: "flex", gap: "15px" }}>
// //                   {socialIcons.map((icon, index) => (
// //                     <motion.a
// //                       key={index}
// //                       whileHover={{ scale: 1.2 }}
// //                       href={icon.url}
// //                       style={{
// //                         width: "40px",
// //                         height: "40px",
// //                         borderRadius: "50%",
// //                         background: "rgba(255,255,255,0.1)",
// //                         display: "flex",
// //                         alignItems: "center",
// //                         justifyContent: "center",
// //                         color: "#fff",
// //                       }}
// //                     >
// //                       {icon.icon}
// //                     </motion.a>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* RIGHT IMAGE */}
// //           <div
// //             className="right w-half"
// //             style={{ textAlign: "center", minWidth: "300px" }}
// //           >
// //             <motion.img
// //               src="../images/common/profile1.jpg"
// //               alt="profile"
// //               initial={{ opacity: 0, x: 100 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 1.2 }}
// //               style={{
// //                 width: "100%",
// //                 maxWidth: "400px",
// //                 borderRadius: "20px",
// //               }}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };


// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { hero } from "../../assets/data/data";
// import { motion, AnimatePresence } from "framer-motion";

// export const Hero = () => {
//   const location = useLocation();

//   /* ===============================
//      TYPEWRITER NAME (Repeat Every 2s)
//   ================================== */
//   const fullName = "Md Shoaib";
//   const [displayName, setDisplayName] = useState("");
//   const [typingIndex, setTypingIndex] = useState(0);

//   useEffect(() => {
//     let timeout;

//     if (typingIndex < fullName.length) {
//       timeout = setTimeout(() => {
//         setDisplayName((prev) => prev + fullName[typingIndex]);
//         setTypingIndex((prev) => prev + 1);
//       }, 120);
//     } else {
//       timeout = setTimeout(() => {
//         setDisplayName("");
//         setTypingIndex(0);
//       }, 2000); // wait 2 sec then repeat
//     }

//     return () => clearTimeout(timeout);
//   }, [typingIndex]);

//   /* ===============================
//      SAME LENGTH TITLES ROTATION
//   ================================== */
//   const titles = [
//     "Full Stack Web Engineer",
//     "Creative UI Experience Dev",
//     "Modern Frontend Architect",
//     "Interactive Web Specialist"
//   ]; // all same length style-wise

//   const [titleIndex, setTitleIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTitleIndex((prev) => (prev + 1) % titles.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   /* =============================== */

//   useEffect(() => {
//     if (location.state?.scrollToContact) {
//       setTimeout(() => {
//         const section = document.getElementById("contact-section");
//         if (section) {
//           section.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 300);
//     }
//   }, [location]);

//   const socialIcons = [
//     { id: 1, icon: <FaXTwitter size={17} />, url: "https://x.com/mdshoaibdev" },
//     { id: 2, icon: <FaFacebookF size={20} />, url: "https://www.facebook.com/md.shoaib.959839/" },
//     { id: 3, icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/in/md-shoaib-07b32a314" },
//     { id: 4, icon: <FaWhatsapp size={20} />, url: "https://wa.me/8801724519674" },
//     { id: 5, icon: <FaInstagram size={20} />, url: "https://www.instagram.com/shoaib8749/" },
//   ];

//   return (
//     <>
//       <section className="hero-section">
//         <motion.div
//           className="intro_text"
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <svg viewBox="0 0 1320 300">
//             <text x="50%" y="50%" textAnchor="middle">
//               HI
//             </text>
//           </svg>
//         </motion.div>

//         <div className="container">
//           {/* Desktop layout EXACT same */}
//           <div
//             className="content flexSB"
//             style={{
//               flexWrap: "wrap",
//             }}
//           >
//             {/* LEFT */}
//             <div
//               className="left w-half"
//               style={{
//                 minWidth: "300px",
//               }}
//             >
//               <div className="hero-content-box">

//                 {/* ===== Animated Name ===== */}
//                 <motion.span
//                   className="hero-sub-title"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1 }}
//                 >
//                   I am {displayName}
//                   <span style={{ opacity: 0.5 }}>|</span>
//                 </motion.span>

//                 {/* ===== Rotating Same-Length Titles ===== */}
//                 <div style={{ minHeight: "70px" }}>
//                   <AnimatePresence mode="wait">
//                     <motion.h1
//                       key={titles[titleIndex]}
//                       className="hero-title"
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -30 }}
//                       transition={{ duration: 0.6 }}
//                       style={{
//                         fontSize: "clamp(30px, 4vw, 56px)",
//                         lineHeight: "1.2",
//                       }}
//                     >
//                       {titles[titleIndex]}
//                     </motion.h1>
//                   </AnimatePresence>
//                 </div>

//                 <motion.p
//                   className="lead"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1.2, delay: 0.4 }}
//                   style={{
//                     fontSize: "clamp(14px, 2vw, 18px)",
//                   }}
//                 >
//                   I break down complex user experience problems to create
//                   integrity-focused solutions that connect billions of people.
//                 </motion.p>

//                 <motion.div
//                   className="button-box flexG"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1.2, delay: 0.5 }}
//                   style={{
//                     flexWrap: "wrap",
//                     gap: "20px",
//                   }}
//                 >
//                   <a
//                     href="/MdShoaibResume.pdf"
//                     download="Md_Shoaib_Resume"
//                     className="btn tj-btn-secondary"
//                   >
//                     Download CV
//                   </a>

//                   <ul
//                     className="ul-reset social-icons"
//                     style={{
//                       display: "flex",
//                       gap: "15px",
//                       flexWrap: "wrap",
//                     }}
//                   >
//                     {socialIcons.map((icon, index) => (
//                       <motion.li
//                         key={index}
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{
//                           duration: 0.5,
//                           delay: 0.6 + index * 0.15,
//                         }}
//                       >
//                         <a
//                           href={icon.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           {icon.icon}
//                         </a>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div
//               className="right w-half"
//               style={{
//                 textAlign: "center",
//                 minWidth: "300px",
//               }}
//             >
//               <div className="text-center hero-image-box">
//                 <motion.img
//                   src="../images/common/profile1.jpg"
//                   alt="profile"
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 1.5, delay: 0.7 }}
//                   style={{
//                     width: "100%",
//                     maxWidth: "400px",
//                     height: "auto",
//                     objectFit: "cover",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* FUNFACT RESPONSIVE ONLY */}
//           <div
//             className="funfact-area grid4"
//             style={{
//               display: "grid",
//               gridTemplateColumns:
//                 "repeat(auto-fit, minmax(160px, 1fr))",
//               gap: "30px",
//               marginTop: "80px",
//             }}
//           >
//             {hero.map((item, index) => (
//               <motion.div
//                 className="funfact-item"
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 1,
//                   delay: 0.8 + index * 0.2,
//                 }}
//               >
//                 <div
//                   className="number"
//                   style={{ fontSize: "28px", fontWeight: "700" }}
//                 >
//                   <span>{item.text}</span>
//                 </div>
//                 <div className="text">{item.title}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };




// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { hero } from "../../assets/data/data";
// import { motion, AnimatePresence } from "framer-motion";

// export const Hero = () => {
//   const location = useLocation();

//   /* ===============================
//      TYPEWRITER NAME (ONLY ONCE)
//   ================================== */
//   const fullName = "Md Shoaib";
//   const [displayName, setDisplayName] = useState("");
//   const [typingIndex, setTypingIndex] = useState(0);

//   useEffect(() => {
//     if (typingIndex < fullName.length) {
//       const timeout = setTimeout(() => {
//         setDisplayName((prev) => prev + fullName[typingIndex]);
//         setTypingIndex((prev) => prev + 1);
//       }, 120);
//       return () => clearTimeout(timeout);
//     }
//   }, [typingIndex]);

//   /* ===============================
//      SAME LENGTH TITLES ROTATION
//   ================================== */
//   const titles = [
//     "Full Stack Web Engineer",
//     "Creative UI Experience Dev",
//     "Modern Frontend Architect",
//     "Interactive Web Specialist"
//   ];

//   const [titleIndex, setTitleIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTitleIndex((prev) => (prev + 1) % titles.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   /* =============================== */

//   useEffect(() => {
//     if (location.state?.scrollToContact) {
//       setTimeout(() => {
//         const section = document.getElementById("contact-section");
//         if (section) {
//           section.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 300);
//     }
//   }, [location]);

//   const socialIcons = [
//     { id: 1, icon: <FaXTwitter size={17} />, url: "https://x.com/mdshoaibdev" },
//     { id: 2, icon: <FaFacebookF size={20} />, url: "https://www.facebook.com/md.shoaib.959839/" },
//     { id: 3, icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/in/md-shoaib-07b32a314" },
//     { id: 4, icon: <FaWhatsapp size={20} />, url: "https://wa.me/8801724519674" },
//     { id: 5, icon: <FaInstagram size={20} />, url: "https://www.instagram.com/shoaib8749/" },
//   ];

//   return (
//     <>
//       <section className="hero-section">
//         <motion.div
//           className="intro_text"
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <svg viewBox="0 0 1320 300">
//             <text x="50%" y="50%" textAnchor="middle">
//               HI
//             </text>
//           </svg>
//         </motion.div>

//         <div className="container">
//           <div className="content flexSB" style={{ flexWrap: "wrap" }}>

//             {/* LEFT */}
//             <div className="left w-half" style={{ minWidth: "300px" }}>
//               <div className="hero-content-box">

//                 {/* ===== Updated Name Styling ===== */}
//                 <motion.span
//                   className="hero-sub-title"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1 }}
//                 >
//                   <span style={{ color: "#c084fc" }}>
//                     I am
//                   </span>{" "}
//                   {/* <span
//                     style={{
//                       background:
//                         "linear-gradient(90deg,#ffffff,#c084fc,#a855f7)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                     }}
//                   >
//                     {displayName}
//                   </span> */}
//                   {/* <span
//   style={{
//     color: "#ffffff",
//     textShadow: "0 0 8px rgba(255,255,255,0.4)",
//   }}
// >
//   {displayName}
// </span> */}
// <span
//   style={{
//     color: "#ffffff",
//   }}
// >
//   {displayName}
// </span>


//                 </motion.span>

//                 {/* ===== Rotating Titles (Purple Color) ===== */}
//                 <div style={{ minHeight: "70px" }}>
//                   <AnimatePresence mode="wait">
//                     <motion.h1
//                       key={titles[titleIndex]}
//                       className="hero-title"
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -30 }}
//                       transition={{ duration: 0.6 }}
//                       style={{
//                         fontSize: "clamp(30px, 4vw, 56px)",
//                         lineHeight: "1.2",
//                         color: "#c084fc",
//                       }}
//                     >
//                       {titles[titleIndex]}
//                     </motion.h1>
//                   </AnimatePresence>
//                 </div>

//                 <motion.p
//                   className="lead"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1.2, delay: 0.4 }}
//                   style={{
//                     fontSize: "clamp(14px, 2vw, 18px)",
//                   }}
//                 >
//                   I break down complex user experience problems to create
//                   integrity-focused solutions that connect billions of people.
//                 </motion.p>

//                 <motion.div
//                   className="button-box flexG"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1.2, delay: 0.5 }}
//                   style={{
//                     flexWrap: "wrap",
//                     gap: "20px",
//                   }}
//                 >
//                   <a
//                     href="/MdShoaibResume.pdf"
//                     download="Md_Shoaib_Resume"
//                     className="btn tj-btn-primary"
//                   >
//                     Download CV
//                   </a>

//                   <ul
//                     className="ul-reset social-icons"
//                     style={{
//                       display: "flex",
//                       gap: "15px",
//                       flexWrap: "wrap",
//                     }}
//                   >
//                     {socialIcons.map((icon, index) => (
//                       <motion.li
//                         key={index}
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{
//                           duration: 0.5,
//                           delay: 0.6 + index * 0.15,
//                         }}
//                       >
//                         <a
//                           href={icon.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           {icon.icon}
//                         </a>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div
//               className="right w-half"
//               style={{
//                 textAlign: "center",
//                 minWidth: "300px",
//               }}
//             >
//               <div className="text-center hero-image-box">
//                 <motion.img
//                   src="../images/common/profile1.jpg"
//                   alt="profile"
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 1.5, delay: 0.7 }}
//                   style={{
//                     width: "100%",
//                     maxWidth: "400px",
//                     height: "auto",
//                     objectFit: "cover",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* FUNFACT SAME */}
//           <div
//             className="funfact-area grid4"
//             style={{
//               display: "grid",
//               gridTemplateColumns:
//                 "repeat(auto-fit, minmax(160px, 1fr))",
//               gap: "30px",
//               marginTop: "80px",
//             }}
//           >
//             {hero.map((item, index) => (
//               <motion.div
//                 className="funfact-item"
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 1,
//                   delay: 0.8 + index * 0.2,
//                 }}
//               >
//                 <div
//                   className="number"
//                   style={{ fontSize: "28px", fontWeight: "700" }}
//                 >
//                   <span>{item.text}</span>
//                 </div>
//                 <div className="text">{item.title}</div>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };


// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { hero } from "../../assets/data/data";
// import { motion, AnimatePresence } from "framer-motion";

// export const Hero = () => {
//   const location = useLocation();

//   /* ===============================
//      TYPEWRITER NAME (ONLY ONCE)
//   ================================== */
//   const fullName = "Md Shoaib";
//   const [displayName, setDisplayName] = useState("");
//   const [typingIndex, setTypingIndex] = useState(0);

//   useEffect(() => {
//     if (typingIndex < fullName.length) {
//       const timeout = setTimeout(() => {
//         setDisplayName((prev) => prev + fullName[typingIndex]);
//         setTypingIndex((prev) => prev + 1);
//       }, 120);
//       return () => clearTimeout(timeout);
//     }
//   }, [typingIndex]);

//   /* ===============================
//      SAME LENGTH TITLES ROTATION
//   ================================== */
//   const titles = [
//     "Full Stack Web Engineer",
//     "Creative UI Experience Dev",
//     "Modern Frontend Architect",
//     "Interactive Web Specialist"
//   ];

//   const [titleIndex, setTitleIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTitleIndex((prev) => (prev + 1) % titles.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   /* =============================== */

//   useEffect(() => {
//     if (location.state?.scrollToContact) {
//       setTimeout(() => {
//         const section = document.getElementById("contact-section");
//         if (section) {
//           section.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 300);
//     }
//   }, [location]);

//   const socialIcons = [
//     { id: 1, icon: <FaXTwitter size={17} />, url: "https://x.com/mdshoaibdev" },
//     { id: 2, icon: <FaFacebookF size={20} />, url: "https://www.facebook.com/md.shoaib.959839/" },
//     { id: 3, icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/in/md-shoaib-07b32a314" },
//     { id: 4, icon: <FaWhatsapp size={20} />, url: "https://wa.me/8801724519674" },
//     { id: 5, icon: <FaInstagram size={20} />, url: "https://www.instagram.com/shoaib8749/" },
//   ];

//   return (
//     <>
//       <section className="hero-section">
//         <motion.div
//           className="intro_text"
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <svg viewBox="0 0 1320 300">
//             <text x="50%" y="50%" textAnchor="middle">
//               HI
//             </text>
//           </svg>
//         </motion.div>

//         <div className="container">
//           <div className="content flexSB" style={{ flexWrap: "wrap" }}>

//             {/* LEFT */}
//             <div className="left w-half" style={{ minWidth: "300px" }}>
//               <div className="hero-content-box">

//                 {/* ===== Updated Name Styling ===== */}
//                 <motion.span
//                   className="hero-sub-title"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1 }}
//                 >
//                   <span style={{ color: "#c084fc" }}>
//                     I am
//                   </span>{" "}
// <span
//   style={{
//     color: "#ffffff",
//   }}
// >
//   {displayName}
// </span>


//                 </motion.span>

//                 {/* ===== Rotating Titles (Purple Color) ===== */}
//                 <div style={{ minHeight: "70px" }}>
//                   <AnimatePresence mode="wait">
//                     <motion.h1
//                       key={titles[titleIndex]}
//                       className="hero-title"
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -30 }}
//                       transition={{ duration: 0.6 }}
//                       style={{
//                         fontSize: "clamp(30px, 4vw, 56px)",
//                         lineHeight: "1.2",
//                         color: "#c084fc",
//                       }}
//                     >
//                       {titles[titleIndex]}
//                     </motion.h1>
//                   </AnimatePresence>
//                 </div>

//                 <motion.p
//                   className="lead"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1.2, delay: 0.4 }}
//                   style={{
//                     fontSize: "clamp(14px, 2vw, 18px)",
//                   }}
//                 >
//                   I break down complex user experience problems to create
//                   integrity-focused solutions that connect billions of people.
//                 </motion.p>

//                 <motion.div
//                   className="button-box flexG"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1.2, delay: 0.5 }}
//                   style={{
//                     flexWrap: "wrap",
//                     gap: "20px",
//                   }}
//                 >
//                   <a
//                     href="/MdShoaibResume.pdf"
//                     download="Md_Shoaib_Resume"
//                     className="btn tj-btn-primary"
//                   >
//                     Download CV
//                   </a>

//                   <ul
//                     className="ul-reset social-icons"
//                     style={{
//                       display: "flex",
//                       gap: "15px",
//                       flexWrap: "wrap",
//                     }}
//                   >
//                     {socialIcons.map((icon, index) => (
//                       <motion.li
//                         key={index}
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{
//                           duration: 0.5,
//                           delay: 0.6 + index * 0.15,
//                         }}
//                       >
//                         <a
//                           href={icon.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           {icon.icon}
//                         </a>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div
//               className="right w-half"
//               style={{
//                 textAlign: "center",
//                 minWidth: "300px",
//               }}
//             >
//               <div className="text-center hero-image-box">
//                 <motion.img
//                   src="../images/common/profile1.jpg"
//                   alt="profile"
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 1.5, delay: 0.7 }}
//                   style={{
//                     width: "100%",
//                     maxWidth: "400px",
//                     height: "auto",
//                     objectFit: "cover",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };


import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { hero } from "../../assets/data/data";
import { motion, AnimatePresence } from "framer-motion";

export const Hero = () => {
  const location = useLocation();

  const fullName = "Md Shoaib";
  const [displayName, setDisplayName] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    if (typingIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayName((prev) => prev + fullName[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

  const titles = [
    "Full Stack Web Engineer",
    "Creative UI Experience Dev",
    "Modern Frontend Architect",
    "Interactive Web Specialist"
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialIcons = [
    { id: 1, icon: <FaXTwitter size={17} />, url: "https://x.com/mdshoaibdev" },
    { id: 2, icon: <FaFacebookF size={20} />, url: "https://www.facebook.com/md.shoaib.959839/" },
    { id: 3, icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/in/md-shoaib-07b32a314" },
    { id: 4, icon: <FaWhatsapp size={20} />, url: "https://wa.me/8801724519674" },
    { id: 5, icon: <FaInstagram size={20} />, url: "https://www.instagram.com/shoaib8749/" },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="content flexSB" style={{ flexWrap: "wrap" }}>

            {/* LEFT */}
            <div className="left w-half" style={{ minWidth: "300px" }}>
              <div className="hero-content-box">

                <motion.span
                  className="hero-sub-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <span style={{ color: "#c084fc" }}>I am </span>
                  <span style={{ color: "#ffffff" }}>
                    {displayName}
                  </span>
                </motion.span>

                <div style={{ minHeight: "70px" }}>
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={titles[titleIndex]}
                      className="hero-title"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        fontSize: "clamp(30px, 4vw, 56px)",
                        lineHeight: "1.2",
                        color: "#c084fc",
                      }}
                    >
                      {titles[titleIndex]}
                    </motion.h1>
                  </AnimatePresence>
                </div>

                <motion.p
                  className="lead"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  style={{
                    fontSize: "clamp(14px, 2vw, 18px)",
                  }}
                >
                  I break down complex user experience problems to create
                  integrity-focused solutions that connect billions of people.
                </motion.p>

                {/* BUTTON + ICONS */}
                <motion.div
                  className="button-box flexG"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  style={{
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  <a
                    href="/MdShoaibResume.pdf"
                    download="Md_Shoaib_Resume"
                    className="btn tj-btn-primary"
                  >
                    Download CV
                  </a>

                  <ul
                    className="ul-reset social-icons"
                    style={{
                      display: "flex",
                      gap: "15px",
                      flexWrap: "wrap",
                    }}
                  >
                    {socialIcons.map((icon) => (
                      <motion.li key={icon.id}>
                        <a
                          href={icon.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {icon.icon}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

              </div>
            </div>

            {/* RIGHT */}
            <div
              className="right w-half"
              style={{
                textAlign: "center",
                minWidth: "300px",
              }}
            >
              <div className="text-center hero-image-box">
                <motion.img
                  src="../images/common/profile1.jpg"
                  alt="profile"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ✅ MOBILE ONLY FIX */}
        <style>
          {`
          @media (max-width: 768px) {

            .button-box {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              gap: 15px !important;
            }

            .button-box .btn {
              width: 100%;
              max-width: 250px;
              text-align: center;
            }

            .social-icons {
              flex-wrap: nowrap !important;
              justify-content: center !important;
              width: 100%;
            }

            .social-icons li {
              list-style: none;
            }

          }
          `}
        </style>

      </section>
    </>
  );
};