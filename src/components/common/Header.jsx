// // // // // // import { useState, useEffect } from "react";
// // // // // // import { linklist } from "../../assets/data/data";
// // // // // // import { NavLink } from "react-router-dom";
// // // // // // import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
// // // // // // import { motion } from "framer-motion";

// // // // // // export const Header = () => {
// // // // // //   const [isSticky, setIsSticky] = useState(false);
// // // // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       setIsSticky(window.scrollY > 0);
// // // // // //     };

// // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // //   }, []);

// // // // // //   const toggleMenu = () => {
// // // // // //     setIsMenuOpen(!isMenuOpen);
// // // // // //   };

// // // // // //   return (
// // // // // //     <motion.header
// // // // // //       className={`tj-header-area header-absolute ${isSticky ? "sticky" : ""}`}
// // // // // //       initial={{ opacity: 0 }}
// // // // // //       animate={{ opacity: 1 }}
// // // // // //       transition={{ duration: 0.5 }}
// // // // // //     >
// // // // // //       <div className="container flexSB">
// // // // // //         {/* Logo */}
// // // // // //         <motion.div
// // // // // //           className="logo-box"
// // // // // //           initial={{ x: -50, opacity: 0 }}
// // // // // //           animate={{ x: 0, opacity: 1 }}
// // // // // //           transition={{ duration: 0.6 }}
// // // // // //         >
// // // // // //           <NavLink
// // // // // //             to="/"
// // // // // //             className="portfolio-text"
// // // // // //             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// // // // // //           >
// // // // // //             Portfolio
// // // // // //           </NavLink>
// // // // // //         </motion.div>

// // // // // //         {/* Menu */}
// // // // // //         <motion.div
// // // // // //           className={`header-menu ${isMenuOpen ? "open" : ""}`}
// // // // // //           initial={{ y: -20, opacity: 0 }}
// // // // // //           animate={{ y: 0, opacity: 1 }}
// // // // // //           transition={{ duration: 0.6 }}
// // // // // //         >
// // // // // //           <nav>
// // // // // //             <ul>
// // // // // //               {linklist.map((link) => (
// // // // // //                 <motion.li
// // // // // //                   key={link.id}
// // // // // //                   initial={{ x: -30, opacity: 0 }}
// // // // // //                   animate={{ x: 0, opacity: 1 }}
// // // // // //                   transition={{ duration: 0.4, delay: 0.1 * link.id }}
// // // // // //                 >
// // // // // //                   <NavLink
// // // // // //                     to={link.link}
// // // // // //                     onClick={() => {
// // // // // //                       setIsMenuOpen(false);
// // // // // //                       if (link.link === "/") {
// // // // // //                         window.scrollTo({ top: 0, behavior: "smooth" });
// // // // // //                       }
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     {link.text}
// // // // // //                   </NavLink>
// // // // // //                 </motion.li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </nav>
// // // // // //         </motion.div>

// // // // // //         {/* Right Section */}
// // // // // //         <div className="flexSB">
// // // // // //           <motion.div
// // // // // //             className="header-button"
// // // // // //             initial={{ opacity: 0 }}
// // // // // //             animate={{ opacity: 1 }}
// // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // //           >
// // // // // //             <NavLink
// // // // // //               to="/"
// // // // // //               state={{ scrollToContact: true }}
// // // // // //               className="btn tj-btn-primary"
// // // // // //               onClick={() => setIsMenuOpen(false)}
// // // // // //             >
// // // // // //               Hire me!
// // // // // //             </NavLink>
// // // // // //           </motion.div>

// // // // // //           {/* Mobile Menu Toggle */}
// // // // // //           <div className="menu-icon" onClick={toggleMenu}>
// // // // // //             {isMenuOpen ? <IoCloseOutline size={40} /> : <IoMenuOutline size={40} />}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </motion.header>
// // // // // //   );
// // // // // // };


// // // // // import { useState, useEffect } from "react";
// // // // // import { linklist } from "../../assets/data/data";
// // // // // import { NavLink } from "react-router-dom";
// // // // // import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
// // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // export const Header = () => {
// // // // //   const [isSticky, setIsSticky] = useState(false);
// // // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       setIsSticky(window.scrollY > 0);
// // // // //     };

// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, []);

// // // // //   const toggleMenu = () => {
// // // // //     setIsMenuOpen(!isMenuOpen);
// // // // //   };

// // // // //   const closeMenu = () => {
// // // // //     setIsMenuOpen(false);
// // // // //   };

// // // // //   /* ===== Drawer Animation ===== */

// // // // //   const drawerVariant = {
// // // // //     hidden: { x: "-100%" },
// // // // //     visible: {
// // // // //       x: 0,
// // // // //       transition: {
// // // // //         duration: 0.5,
// // // // //         ease: [0.22, 1, 0.36, 1], // smooth premium cubic-bezier
// // // // //       },
// // // // //     },
// // // // //     exit: {
// // // // //       x: "-100%",
// // // // //       transition: {
// // // // //         duration: 0.4,
// // // // //         ease: "easeInOut",
// // // // //       },
// // // // //     },
// // // // //   };

// // // // //   const overlayVariant = {
// // // // //     hidden: { opacity: 0 },
// // // // //     visible: { opacity: 1, transition: { duration: 0.3 } },
// // // // //     exit: { opacity: 0, transition: { duration: 0.3 } },
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       <motion.header
// // // // //         className={`tj-header-area header-absolute ${
// // // // //           isSticky ? "sticky" : ""
// // // // //         }`}
// // // // //         initial={{ opacity: 0 }}
// // // // //         animate={{ opacity: 1 }}
// // // // //         transition={{ duration: 0.5 }}
// // // // //       >
// // // // //         <div className="container flexSB">
// // // // //           {/* Logo */}
// // // // //           <motion.div
// // // // //             className="logo-box"
// // // // //             initial={{ x: -50, opacity: 0 }}
// // // // //             animate={{ x: 0, opacity: 1 }}
// // // // //             transition={{ duration: 0.6 }}
// // // // //           >
// // // // //             <NavLink
// // // // //               to="/"
// // // // //               className="portfolio-text"
// // // // //               onClick={() =>
// // // // //                 window.scrollTo({ top: 0, behavior: "smooth" })
// // // // //               }
// // // // //             >
// // // // //               Portfolio
// // // // //             </NavLink>
// // // // //           </motion.div>

// // // // //           {/* Desktop Menu */}
// // // // //           <div className="header-menu desktop-menu">
// // // // //             <nav>
// // // // //               <ul>
// // // // //                 {linklist.map((link) => (
// // // // //                   <li key={link.id}>
// // // // //                     <NavLink
// // // // //                       to={link.link}
// // // // //                       onClick={() => {
// // // // //                         if (link.link === "/") {
// // // // //                           window.scrollTo({
// // // // //                             top: 0,
// // // // //                             behavior: "smooth",
// // // // //                           });
// // // // //                         }
// // // // //                       }}
// // // // //                     >
// // // // //                       {link.text}
// // // // //                     </NavLink>
// // // // //                   </li>
// // // // //                 ))}
// // // // //               </ul>
// // // // //             </nav>
// // // // //           </div>

// // // // //           {/* Right Section */}
// // // // //           <div className="flexSB">
// // // // //             <div className="header-button">
// // // // //               <NavLink
// // // // //                 to="/"
// // // // //                 state={{ scrollToContact: true }}
// // // // //                 className="btn tj-btn-primary"
// // // // //               >
// // // // //                 Hire me!
// // // // //               </NavLink>
// // // // //             </div>

// // // // //             {/* Mobile Menu Toggle */}
// // // // //             <div className="menu-icon" onClick={toggleMenu}>
// // // // //               <IoMenuOutline size={36} />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </motion.header>

// // // // //       {/* ===== MOBILE DRAWER ===== */}
// // // // //       <AnimatePresence>
// // // // //         {isMenuOpen && (
// // // // //           <>
// // // // //             {/* Overlay */}
// // // // //             <motion.div
// // // // //               className="mobile-overlay"
// // // // //               variants={overlayVariant}
// // // // //               initial="hidden"
// // // // //               animate="visible"
// // // // //               exit="exit"
// // // // //               onClick={closeMenu}
// // // // //               style={{
// // // // //                 position: "fixed",
// // // // //                 inset: 0,
// // // // //                 background: "rgba(0,0,0,0.5)",
// // // // //                 backdropFilter: "blur(4px)",
// // // // //                 zIndex: 998,
// // // // //               }}
// // // // //             />

// // // // //             {/* Drawer */}
// // // // //             <motion.div
// // // // //               className="mobile-drawer"
// // // // //               variants={drawerVariant}
// // // // //               initial="hidden"
// // // // //               animate="visible"
// // // // //               exit="exit"
// // // // //               style={{
// // // // //                 position: "fixed",
// // // // //                 top: 0,
// // // // //                 left: 0,
// // // // //                 height: "100vh",
// // // // //                 width: "70%",
// // // // //                 maxWidth: "320px",
// // // // //                 background: "#111",
// // // // //                 padding: "30px",
// // // // //                 zIndex: 999,
// // // // //                 boxShadow: "5px 0 25px rgba(0,0,0,0.4)",
// // // // //                 display: "flex",
// // // // //                 flexDirection: "column",
// // // // //               }}
// // // // //             >
// // // // //               {/* Close Button */}
// // // // //               <div
// // // // //                 style={{
// // // // //                   display: "flex",
// // // // //                   justifyContent: "flex-end",
// // // // //                   marginBottom: "40px",
// // // // //                   cursor: "pointer",
// // // // //                 }}
// // // // //                 onClick={closeMenu}
// // // // //               >
// // // // //                 <IoCloseOutline size={36} />
// // // // //               </div>

// // // // //               {/* Menu Links */}
// // // // //               <nav>
// // // // //                 <ul style={{ listStyle: "none", padding: 0 }}>
// // // // //                   {linklist.map((link, index) => (
// // // // //                     <motion.li
// // // // //                       key={link.id}
// // // // //                       initial={{ opacity: 0, x: -30 }}
// // // // //                       animate={{ opacity: 1, x: 0 }}
// // // // //                       transition={{
// // // // //                         delay: 0.1 * index,
// // // // //                         duration: 0.4,
// // // // //                       }}
// // // // //                       style={{ marginBottom: "20px" }}
// // // // //                     >
// // // // //                       <NavLink
// // // // //                         to={link.link}
// // // // //                         onClick={() => {
// // // // //                           closeMenu();
// // // // //                           if (link.link === "/") {
// // // // //                             window.scrollTo({
// // // // //                               top: 0,
// // // // //                               behavior: "smooth",
// // // // //                             });
// // // // //                           }
// // // // //                         }}
// // // // //                         style={{
// // // // //                           fontSize: "18px",
// // // // //                           color: "#fff",
// // // // //                           textDecoration: "none",
// // // // //                         }}
// // // // //                       >
// // // // //                         {link.text}
// // // // //                       </NavLink>
// // // // //                     </motion.li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </nav>
// // // // //             </motion.div>
// // // // //           </>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </>
// // // // //   );
// // // // // };


// // // // import { useState, useEffect } from "react";
// // // // import { linklist } from "../../assets/data/data";
// // // // import { NavLink } from "react-router-dom";
// // // // import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // export const Header = () => {
// // // //   const [isSticky, setIsSticky] = useState(false);
// // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setIsSticky(window.scrollY > 0);
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   const toggleMenu = () => {
// // // //     setIsMenuOpen(!isMenuOpen);
// // // //   };

// // // //   const closeMenu = () => {
// // // //     setIsMenuOpen(false);
// // // //   };

// // // //   /* ===== Drawer Animation ===== */

// // // //   const drawerVariant = {
// // // //     hidden: { x: "-100%" },
// // // //     visible: {
// // // //       x: 0,
// // // //       transition: {
// // // //         duration: 0.5,
// // // //         ease: [0.22, 1, 0.36, 1],
// // // //       },
// // // //     },
// // // //     exit: {
// // // //       x: "-100%",
// // // //       transition: {
// // // //         duration: 0.4,
// // // //         ease: "easeInOut",
// // // //       },
// // // //     },
// // // //   };

// // // //   const overlayVariant = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: { opacity: 1, transition: { duration: 0.3 } },
// // // //     exit: { opacity: 0, transition: { duration: 0.3 } },
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <motion.header
// // // //         className={`tj-header-area header-absolute ${
// // // //           isSticky ? "sticky" : ""
// // // //         }`}
// // // //         initial={{ opacity: 0 }}
// // // //         animate={{ opacity: 1 }}
// // // //         transition={{ duration: 0.5 }}
// // // //       >
// // // //         <div className="container flexSB">
// // // //           {/* Logo */}
// // // //           <motion.div
// // // //             className="logo-box"
// // // //             initial={{ x: -50, opacity: 0 }}
// // // //             animate={{ x: 0, opacity: 1 }}
// // // //             transition={{ duration: 0.6 }}
// // // //           >
// // // //             <NavLink
// // // //               to="/"
// // // //               className="portfolio-text"
// // // //               onClick={() =>
// // // //                 window.scrollTo({ top: 0, behavior: "smooth" })
// // // //               }
// // // //             >
// // // //               Portfolio
// // // //             </NavLink>
// // // //           </motion.div>

// // // //           {/* Desktop Menu */}
// // // //           <div className="header-menu desktop-menu">
// // // //             <nav>
// // // //               <ul>
// // // //                 {linklist.map((link) => (
// // // //                   <li key={link.id}>
// // // //                     <NavLink
// // // //                       to={link.link}
// // // //                       onClick={() => {
// // // //                         if (link.link === "/") {
// // // //                           window.scrollTo({
// // // //                             top: 0,
// // // //                             behavior: "smooth",
// // // //                           });
// // // //                         }
// // // //                       }}
// // // //                     >
// // // //                       {link.text}
// // // //                     </NavLink>
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>
// // // //             </nav>
// // // //           </div>

// // // //           {/* Right Section */}
// // // //           <div className="flexSB">
// // // //             <div className="header-button">
// // // //               <NavLink
// // // //                 to="/"
// // // //                 state={{ scrollToContact: true }}
// // // //                 className="btn tj-btn-primary"
// // // //               >
// // // //                 Hire me!
// // // //               </NavLink>
// // // //             </div>

// // // //             {/* Mobile Menu Toggle */}
// // // //             <div className="menu-icon" onClick={toggleMenu}>
// // // //               <IoMenuOutline size={36} />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </motion.header>

// // // //       {/* ===== MOBILE DRAWER ===== */}
// // // //       <AnimatePresence>
// // // //         {isMenuOpen && (
// // // //           <>
// // // //             {/* Overlay */}
// // // //             <motion.div
// // // //               className="mobile-overlay"
// // // //               variants={overlayVariant}
// // // //               initial="hidden"
// // // //               animate="visible"
// // // //               exit="exit"
// // // //               onClick={closeMenu}
// // // //               style={{
// // // //                 position: "fixed",
// // // //                 inset: 0,
// // // //                 background: "rgba(0,0,0,0.5)",
// // // //                 backdropFilter: "blur(4px)",
// // // //                 zIndex: 998,
// // // //               }}
// // // //             />

// // // //             {/* Drawer */}
// // // //             <motion.div
// // // //               className="mobile-drawer"
// // // //               variants={drawerVariant}
// // // //               initial="hidden"
// // // //               animate="visible"
// // // //               exit="exit"
// // // //               style={{
// // // //                 position: "fixed",
// // // //                 top: 0,
// // // //                 left: 0,
// // // //                 height: "100vh",
// // // //                 width: "70%",
// // // //                 maxWidth: "320px",

// // // //                 /* 🔥 SAME HERO PURPLE GRADIENT */
// // // //                 background:
// // // //                   "linear-gradient(135deg, #140824, #1e0f35, #2a1245)",

// // // //                 padding: "30px",
// // // //                 zIndex: 999,
// // // //                 boxShadow: "5px 0 25px rgba(0,0,0,0.4)",
// // // //                 display: "flex",
// // // //                 flexDirection: "column",
// // // //               }}
// // // //             >
// // // //               {/* Close Button */}
// // // //               <div
// // // //                 style={{
// // // //                   display: "flex",
// // // //                   justifyContent: "flex-end",
// // // //                   marginBottom: "40px",
// // // //                   cursor: "pointer",
// // // //                 }}
// // // //                 onClick={closeMenu}
// // // //               >
// // // //                 <IoCloseOutline size={36} color="#fff" />
// // // //               </div>

// // // //               {/* Menu Links */}
// // // //               <nav>
// // // //                 <ul style={{ listStyle: "none", padding: 0 }}>
// // // //                   {linklist.map((link, index) => (
// // // //                     <motion.li
// // // //                       key={link.id}
// // // //                       initial={{ opacity: 0, x: -30 }}
// // // //                       animate={{ opacity: 1, x: 0 }}
// // // //                       transition={{
// // // //                         delay: 0.1 * index,
// // // //                         duration: 0.4,
// // // //                       }}
// // // //                       style={{ marginBottom: "20px" }}
// // // //                     >
// // // //                       <NavLink
// // // //                         to={link.link}
// // // //                         onClick={() => {
// // // //                           closeMenu();
// // // //                           if (link.link === "/") {
// // // //                             window.scrollTo({
// // // //                               top: 0,
// // // //                               behavior: "smooth",
// // // //                             });
// // // //                           }
// // // //                         }}
// // // //                         style={{
// // // //                           fontSize: "18px",
// // // //                           color: "#fff",
// // // //                           textDecoration: "none",
// // // //                         }}
// // // //                       >
// // // //                         {link.text}
// // // //                       </NavLink>
// // // //                     </motion.li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </nav>
// // // //             </motion.div>
// // // //           </>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </>
// // // //   );
// // // // };

// // // import { useState, useEffect } from "react";
// // // import { linklist } from "../../assets/data/data";
// // // import { NavLink } from "react-router-dom";
// // // import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // export const Header = () => {
// // //   const [isSticky, setIsSticky] = useState(false);
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsSticky(window.scrollY > 0);
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const toggleMenu = () => {
// // //     setIsMenuOpen(!isMenuOpen);
// // //   };

// // //   const closeMenu = () => {
// // //     setIsMenuOpen(false);
// // //   };

// // //   /* ===== Drawer Animation ===== */

// // //   const drawerVariant = {
// // //     hidden: { x: "-100%" },
// // //     visible: {
// // //       x: 0,
// // //       transition: {
// // //         duration: 0.5,
// // //         ease: [0.22, 1, 0.36, 1],
// // //       },
// // //     },
// // //     exit: {
// // //       x: "-100%",
// // //       transition: {
// // //         duration: 0.4,
// // //         ease: "easeInOut",
// // //       },
// // //     },
// // //   };

// // //   const overlayVariant = {
// // //     hidden: { opacity: 0 },
// // //     visible: { opacity: 1, transition: { duration: 0.3 } },
// // //     exit: { opacity: 0, transition: { duration: 0.3 } },
// // //   };

// // //   return (
// // //     <>
// // //       <motion.header
// // //         className={`tj-header-area header-absolute ${
// // //           isSticky ? "sticky" : ""
// // //         }`}
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ duration: 0.5 }}
// // //       >
// // //         <div className="container flexSB">
// // //           {/* Logo */}
// // //           <motion.div
// // //             className="logo-box"
// // //             initial={{ x: -50, opacity: 0 }}
// // //             animate={{ x: 0, opacity: 1 }}
// // //             transition={{ duration: 0.6 }}
// // //           >
// // //             <NavLink
// // //               to="/"
// // //               className="portfolio-text"
// // //               onClick={() =>
// // //                 window.scrollTo({ top: 0, behavior: "smooth" })
// // //               }
// // //             >
// // //               Portfolio
// // //             </NavLink>
// // //           </motion.div>

// // //           {/* Desktop Menu */}
// // //           <div className="header-menu desktop-menu">
// // //             <nav>
// // //               <ul>
// // //                 {linklist.map((link) => (
// // //                   <li key={link.id}>
// // //                     <NavLink
// // //                       to={link.link}
// // //                       onClick={() => {
// // //                         if (link.link === "/") {
// // //                           window.scrollTo({
// // //                             top: 0,
// // //                             behavior: "smooth",
// // //                           });
// // //                         }
// // //                       }}
// // //                     >
// // //                       {link.text}
// // //                     </NavLink>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </nav>
// // //           </div>

// // //           {/* Right Section */}
// // //           <div className="flexSB">
// // //             <div className="header-button">
// // //               <NavLink
// // //                 to="/"
// // //                 state={{ scrollToContact: true }}
// // //                 className="btn tj-btn-primary"
// // //               >
// // //                 Hire me!
// // //               </NavLink>
// // //             </div>

// // //             {/* Mobile Menu Toggle */}
// // //             <div className="menu-icon" onClick={toggleMenu}>
// // //               <IoMenuOutline size={36} />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </motion.header>

// // //       {/* ===== MOBILE DRAWER ===== */}
// // //       <AnimatePresence>
// // //         {isMenuOpen && (
// // //           <>
// // //             {/* Overlay */}
// // //             <motion.div
// // //               className="mobile-overlay"
// // //               variants={overlayVariant}
// // //               initial="hidden"
// // //               animate="visible"
// // //               exit="exit"
// // //               onClick={closeMenu}
// // //               style={{
// // //                 position: "fixed",
// // //                 inset: 0,
// // //                 background: "rgba(0,0,0,0.5)",
// // //                 backdropFilter: "blur(4px)",
// // //                 zIndex: 998,
// // //               }}
// // //             />

// // //             {/* Drawer */}
// // //             <motion.div
// // //               className="mobile-drawer"
// // //               variants={drawerVariant}
// // //               initial="hidden"
// // //               animate="visible"
// // //               exit="exit"
// // //               style={{
// // //                 position: "fixed",
// // //                 top: 0,
// // //                 left: 0,
// // //                 height: "100vh",
// // //                 width: "70%",
// // //                 maxWidth: "320px",

// // //                 /* 💎 BEST MATCH WITH HERO */
// // //                 background:
// // //                   "linear-gradient(135deg, #1b0c2e, #2b1450, #3a1d6e)",

// // //                 padding: "30px",
// // //                 zIndex: 999,
// // //                 boxShadow: "5px 0 30px rgba(0,0,0,0.5)",
// // //                 borderRight: "1px solid rgba(255,255,255,0.08)",
// // //                 backdropFilter: "blur(20px)",

// // //                 display: "flex",
// // //                 flexDirection: "column",
// // //               }}
// // //             >
// // //               {/* Close Button */}
// // //               <div
// // //                 style={{
// // //                   display: "flex",
// // //                   justifyContent: "flex-end",
// // //                   marginBottom: "40px",
// // //                   cursor: "pointer",
// // //                 }}
// // //                 onClick={closeMenu}
// // //               >
// // //                 <IoCloseOutline size={36} color="#fff" />
// // //               </div>

// // //               {/* Menu Links */}
// // //               <nav>
// // //                 <ul style={{ listStyle: "none", padding: 0 }}>
// // //                   {linklist.map((link, index) => (
// // //                     <motion.li
// // //                       key={link.id}
// // //                       initial={{ opacity: 0, x: -30 }}
// // //                       animate={{ opacity: 1, x: 0 }}
// // //                       transition={{
// // //                         delay: 0.1 * index,
// // //                         duration: 0.4,
// // //                       }}
// // //                       style={{ marginBottom: "20px" }}
// // //                     >
// // //                       <NavLink
// // //                         to={link.link}
// // //                         onClick={() => {
// // //                           closeMenu();
// // //                           if (link.link === "/") {
// // //                             window.scrollTo({
// // //                               top: 0,
// // //                               behavior: "smooth",
// // //                             });
// // //                           }
// // //                         }}
// // //                         style={{
// // //                           fontSize: "18px",
// // //                           color: "#fff",
// // //                           textDecoration: "none",
// // //                         }}
// // //                       >
// // //                         {link.text}
// // //                       </NavLink>
// // //                     </motion.li>
// // //                   ))}
// // //                 </ul>
// // //               </nav>
// // //             </motion.div>
// // //           </>
// // //         )}
// // //       </AnimatePresence>
// // //     </>
// // //   );
// // // };



// // // import { useState, useEffect } from "react";
// // // import { linklist } from "../../assets/data/data";
// // // import { NavLink } from "react-router-dom";
// // // import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // export const Header = () => {
// // //   const [isSticky, setIsSticky] = useState(false);
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsSticky(window.scrollY > 0);
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
// // //   const closeMenu = () => setIsMenuOpen(false);

// // //   /* ===== Ultra Smooth Spring Animation ===== */

// // //   const drawerVariant = {
// // //     hidden: { x: "-100%" },
// // //     visible: {
// // //       x: 0,
// // //       transition: {
// // //         type: "spring",
// // //         stiffness: 70,
// // //         damping: 18,
// // //       },
// // //     },
// // //     exit: {
// // //       x: "-100%",
// // //       transition: { duration: 0.4 },
// // //     },
// // //   };

// // //   const overlayVariant = {
// // //     hidden: { opacity: 0 },
// // //     visible: { opacity: 1, transition: { duration: 0.3 } },
// // //     exit: { opacity: 0, transition: { duration: 0.3 } },
// // //   };

// // //   return (
// // //     <>
// // //       <motion.header
// // //         className={`tj-header-area header-absolute ${
// // //           isSticky ? "sticky" : ""
// // //         }`}
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ duration: 0.5 }}
// // //       >
// // //         <div className="container flexSB">
// // //           {/* Logo */}
// // //           <motion.div
// // //             className="logo-box"
// // //             initial={{ x: -50, opacity: 0 }}
// // //             animate={{ x: 0, opacity: 1 }}
// // //             transition={{ duration: 0.6 }}
// // //           >
// // //             <NavLink
// // //               to="/"
// // //               className="portfolio-text"
// // //               onClick={() =>
// // //                 window.scrollTo({ top: 0, behavior: "smooth" })
// // //               }
// // //             >
// // //               Md Shoaib
// // //             </NavLink>
// // //           </motion.div>

// // //           {/* Desktop Menu */}
// // //           <div className="header-menu desktop-menu">
// // //             <nav>
// // //               <ul>
// // //                 {linklist.map((link) => (
// // //                   <li key={link.id}>
// // //                     <NavLink to={link.link}>{link.text}</NavLink>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </nav>
// // //           </div>

// // //           {/* Right Section */}
// // //           <div className="flexSB">
// // //             <div className="header-button">
// // //               <NavLink
// // //                 to="/"
// // //                 state={{ scrollToContact: true }}
// // //                 className="btn tj-btn-primary"
// // //               >
// // //                 Hire me!
// // //               </NavLink>
// // //             </div>

// // //             <div className="menu-icon" onClick={toggleMenu}>
// // //               <IoMenuOutline size={36} />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </motion.header>

// // //       {/* ===== PREMIUM MOBILE DRAWER ===== */}
// // //       <AnimatePresence>
// // //         {isMenuOpen && (
// // //           <>
// // //             {/* Overlay */}
// // //             <motion.div
// // //               variants={overlayVariant}
// // //               initial="hidden"
// // //               animate="visible"
// // //               exit="exit"
// // //               onClick={closeMenu}
// // //               style={{
// // //                 position: "fixed",
// // //                 inset: 0,
// // //                 background: "rgba(0,0,0,0.6)",
// // //                 backdropFilter: "blur(8px)",
// // //                 zIndex: 998,
// // //               }}
// // //             />

// // //             {/* Drawer */}
// // //             <motion.div
// // //               variants={drawerVariant}
// // //               initial="hidden"
// // //               animate="visible"
// // //               exit="exit"
// // //               style={{
// // //                 position: "fixed",
// // //                 top: 0,
// // //                 left: 0,
// // //                 height: "100vh",
// // //                 width: "75%",
// // //                 maxWidth: "340px",

// // //                 /* 🌌 Softer Luxury Gradient */
// // //                 background:
// // //                   "linear-gradient(160deg, #1a0f2f, #2e1760, #4b2a8f)",

// // //                 padding: "40px 30px",
// // //                 zIndex: 999,
// // //                 boxShadow: "10px 0 40px rgba(0,0,0,0.6)",
// // //                 borderRight: "1px solid rgba(255,255,255,0.08)",
// // //                 backdropFilter: "blur(20px)",

// // //                 display: "flex",
// // //                 flexDirection: "column",
// // //               }}
// // //             >
// // //               {/* Close Button */}
// // //               <div
// // //                 style={{
// // //                   display: "flex",
// // //                   justifyContent: "flex-end",
// // //                   marginBottom: "60px",
// // //                   cursor: "pointer",
// // //                 }}
// // //                 onClick={closeMenu}
// // //               >
// // //                 <IoCloseOutline size={38} color="#fff" />
// // //               </div>

// // //               {/* Menu Links */}
// // //               <nav>
// // //                 <ul style={{ listStyle: "none", padding: 0 }}>
// // //                   {linklist.map((link, index) => (
// // //                     <motion.li
// // //                       key={link.id}
// // //                       initial={{ opacity: 0, x: -40 }}
// // //                       animate={{ opacity: 1, x: 0 }}
// // //                       transition={{
// // //                         delay: 0.12 * index,
// // //                         duration: 0.5,
// // //                       }}
// // //                       style={{ marginBottom: "30px" }}
// // //                     >
// // //                       <NavLink
// // //                         to={link.link}
// // //                         onClick={closeMenu}
// // //                         style={{
// // //                           fontSize: "22px",
// // //                           fontWeight: "600",
// // //                           letterSpacing: "1px",
// // //                           textDecoration: "none",
// // //                           background:
// // //                             "linear-gradient(90deg, #ffffff, #c084fc)",
// // //                           WebkitBackgroundClip: "text",
// // //                           WebkitTextFillColor: "transparent",
// // //                           transition: "all 0.3s ease",
// // //                         }}
// // //                       >
// // //                         {link.text}
// // //                       </NavLink>
// // //                     </motion.li>
// // //                   ))}
// // //                 </ul>
// // //               </nav>
// // //             </motion.div>
// // //           </>
// // //         )}
// // //       </AnimatePresence>
// // //     </>
// // //   );
// // // };


// // {/* 💎 Ultra Gorgeous Modern Logo */}
// // <motion.div
// //   className="logo-box"
// //   initial={{ x: -50, opacity: 0 }}
// //   animate={{ x: 0, opacity: 1 }}
// //   transition={{ duration: 0.6 }}
// // >
// //   <NavLink
// //     to="/"
// //     onClick={() =>
// //       window.scrollTo({ top: 0, behavior: "smooth" })
// //     }
// //     style={{
// //       fontSize: "28px",
// //       fontWeight: "800",
// //       letterSpacing: "2px",
// //       textDecoration: "none",
// //       position: "relative",
// //       display: "inline-block",
// //       fontFamily: "sans-serif",
// //     }}
// //   >
// //     <motion.span
// //       style={{
// //         color: "#ffffff",
// //       }}
// //       whileHover={{ scale: 1.05 }}
// //       transition={{ type: "spring", stiffness: 200 }}
// //     >
// //       Md{" "}
// //     </motion.span>

// //     <motion.span
// //       style={{
// //         background:
// //           "linear-gradient(90deg, #a855f7, #c084fc, #ffffff)",
// //         WebkitBackgroundClip: "text",
// //         WebkitTextFillColor: "transparent",
// //       }}
// //       whileHover={{
// //         textShadow: "0px 0px 25px rgba(168,85,247,0.9)",
// //       }}
// //       transition={{ duration: 0.3 }}
// //     >
// //       Shoaib
// //     </motion.span>

// //     {/* Underline Glow */}
// //     <motion.div
// //       initial={{ width: 0 }}
// //       whileHover={{ width: "100%" }}
// //       transition={{ duration: 0.4 }}
// //       style={{
// //         height: "3px",
// //         background:
// //           "linear-gradient(90deg, #a855f7, #c084fc)",
// //         position: "absolute",
// //         bottom: "-6px",
// //         left: 0,
// //         borderRadius: "10px",
// //       }}
// //     />
// //   </NavLink>
// // </motion.div>


// import { useState, useEffect } from "react";
// import { linklist } from "../../assets/data/data";
// import { NavLink } from "react-router-dom";
// import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
// import { motion, AnimatePresence } from "framer-motion";

// export const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   const drawerVariant = {
//     hidden: { x: "-100%" },
//     visible: {
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 70,
//         damping: 18,
//       },
//     },
//     exit: {
//       x: "-100%",
//       transition: { duration: 0.4 },
//     },
//   };

//   const overlayVariant = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, transition: { duration: 0.3 } },
//   };

//   return (
//     <>
//       <motion.header
//         className={`tj-header-area header-absolute ${
//           isSticky ? "sticky" : ""
//         }`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="container flexSB">
//           {/* 💎 Gorgeous Modern Split Logo */}
//           <motion.div
//             className="logo-box"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <NavLink
//               to="/"
//               onClick={() =>
//                 window.scrollTo({ top: 0, behavior: "smooth" })
//               }
//               style={{
//                 fontSize: "28px",
//                 fontWeight: "800",
//                 letterSpacing: "2px",
//                 textDecoration: "none",
//                 position: "relative",
//                 display: "inline-block",
//                 fontFamily: "sans-serif",
//               }}
//             >
//               <motion.span
//                 style={{ color: "#ffffff" }}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 200 }}
//               >
//                 Md{" "}
//               </motion.span>

//               <motion.span
//                 style={{
//                   background:
//                     "linear-gradient(90deg, #a855f7, #c084fc, #ffffff)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//                 whileHover={{
//                   textShadow:
//                     "0px 0px 25px rgba(168,85,247,0.9)",
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 Shoaib
//               </motion.span>

//               {/* Animated Underline */}
//               <motion.div
//                 initial={{ width: 0 }}
//                 whileHover={{ width: "100%" }}
//                 transition={{ duration: 0.4 }}
//                 style={{
//                   height: "3px",
//                   background:
//                     "linear-gradient(90deg, #a855f7, #c084fc)",
//                   position: "absolute",
//                   bottom: "-6px",
//                   left: 0,
//                   borderRadius: "10px",
//                 }}
//               />
//             </NavLink>
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="header-menu desktop-menu">
//             <nav>
//               <ul>
//                 {linklist.map((link) => (
//                   <li key={link.id}>
//                     <NavLink to={link.link}>
//                       {link.text}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>

//           {/* Right Section */}
//           <div className="flexSB">
//             <div className="header-button">
//               <NavLink
//                 to="/"
//                 state={{ scrollToContact: true }}
//                 className="btn tj-btn-primary"
//               >
//                 Hire me!
//               </NavLink>
//             </div>

//             <div className="menu-icon" onClick={toggleMenu}>
//               <IoMenuOutline size={36} />
//             </div>
//           </div>
//         </div>
//       </motion.header>

//       {/* ===== PREMIUM MOBILE DRAWER ===== */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             <motion.div
//               variants={overlayVariant}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               onClick={closeMenu}
//               style={{
//                 position: "fixed",
//                 inset: 0,
//                 background: "rgba(0,0,0,0.6)",
//                 backdropFilter: "blur(8px)",
//                 zIndex: 998,
//               }}
//             />

//             <motion.div
//               variants={drawerVariant}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 height: "100vh",
//                 width: "75%",
//                 maxWidth: "340px",
//                 background:
//                   "linear-gradient(160deg, #1a0f2f, #2e1760, #4b2a8f)",
//                 padding: "40px 30px",
//                 zIndex: 999,
//                 boxShadow:
//                   "10px 0 40px rgba(0,0,0,0.6)",
//                 borderRight:
//                   "1px solid rgba(255,255,255,0.08)",
//                 backdropFilter: "blur(20px)",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "flex-end",
//                   marginBottom: "60px",
//                   cursor: "pointer",
//                 }}
//                 onClick={closeMenu}
//               >
//                 <IoCloseOutline
//                   size={38}
//                   color="#fff"
//                 />
//               </div>

//               <nav>
//                 <ul style={{ listStyle: "none", padding: 0 }}>
//                   {linklist.map((link, index) => (
//                     <motion.li
//                       key={link.id}
//                       initial={{
//                         opacity: 0,
//                         x: -40,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         x: 0,
//                       }}
//                       transition={{
//                         delay: 0.12 * index,
//                         duration: 0.5,
//                       }}
//                       style={{
//                         marginBottom: "30px",
//                       }}
//                     >
//                       <NavLink
//                         to={link.link}
//                         onClick={closeMenu}
//                         style={{
//                           fontSize: "22px",
//                           fontWeight: "600",
//                           letterSpacing: "1px",
//                           textDecoration: "none",
//                           background:
//                             "linear-gradient(90deg, #ffffff, #c084fc)",
//                           WebkitBackgroundClip:
//                             "text",
//                           WebkitTextFillColor:
//                             "transparent",
//                         }}
//                       >
//                         {link.text}
//                       </NavLink>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </nav>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };


// import { useState, useEffect } from "react";
// import { linklist } from "../../assets/data/data";
// import { NavLink } from "react-router-dom";
// import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
// import { motion, AnimatePresence } from "framer-motion";

// export const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   /* ===== Smooth Spring Drawer ===== */

//   const drawerVariant = {
//     hidden: { x: "-100%" },
//     visible: {
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 70,
//         damping: 18,
//       },
//     },
//     exit: {
//       x: "-100%",
//       transition: { duration: 0.4 },
//     },
//   };

//   const overlayVariant = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, transition: { duration: 0.3 } },
//   };

//   return (
//     <>
//       <motion.header
//         className={`tj-header-area header-absolute ${
//           isSticky ? "sticky" : ""
//         }`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="container flexSB">
//           {/* 🔥 Neon Signature Logo */}
//           <motion.div
//             className="logo-box"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <NavLink
//               to="/"
//               onClick={() =>
//                 window.scrollTo({ top: 0, behavior: "smooth" })
//               }
//               style={{
//                 textDecoration: "none",
//                 display: "inline-block",
//               }}
//             >
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

//               {/* Glow Underline */}
//               <motion.div
//                 initial={{ width: 0 }}
//                 whileHover={{ width: "100%" }}
//                 transition={{ duration: 0.4 }}
//                 style={{
//                   height: "4px",
//                   background:
//                     "linear-gradient(90deg, #a855f7, #c084fc)",
//                   borderRadius: "20px",
//                   marginTop: "4px",
//                   boxShadow:
//                     "0 0 15px rgba(168,85,247,0.8)",
//                 }}
//               />
//             </NavLink>
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="header-menu desktop-menu">
//             <nav>
//               <ul>
//                 {linklist.map((link) => (
//                   <li key={link.id}>
//                     <NavLink to={link.link}>
//                       {link.text}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>

//           {/* Right Section */}
//           <div className="flexSB">
//             <div className="header-button">
//               <NavLink
//                 to="/"
//                 state={{ scrollToContact: true }}
//                 className="btn tj-btn-primary"
//               >
//                 Hire me!
//               </NavLink>
//             </div>

//             <div className="menu-icon" onClick={toggleMenu}>
//               <IoMenuOutline size={36} />
//             </div>
//           </div>
//         </div>
//       </motion.header>

//       {/* ===== PREMIUM MOBILE DRAWER ===== */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               variants={overlayVariant}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               onClick={closeMenu}
//               style={{
//                 position: "fixed",
//                 inset: 0,
//                 background: "rgba(0,0,0,0.6)",
//                 backdropFilter: "blur(8px)",
//                 zIndex: 998,
//               }}
//             />

//             {/* Drawer */}
//             <motion.div
//               variants={drawerVariant}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 height: "100vh",
//                 width: "75%",
//                 maxWidth: "340px",
//                 background:
//                   "linear-gradient(160deg, #1a0f2f, #2e1760, #4b2a8f)",
//                 padding: "40px 30px",
//                 zIndex: 999,
//                 boxShadow:
//                   "10px 0 40px rgba(0,0,0,0.6)",
//                 borderRight:
//                   "1px solid rgba(255,255,255,0.08)",
//                 backdropFilter: "blur(20px)",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "flex-end",
//                   marginBottom: "60px",
//                   cursor: "pointer",
//                 }}
//                 onClick={closeMenu}
//               >
//                 <IoCloseOutline
//                   size={38}
//                   color="#fff"
//                 />
//               </div>

//               <nav>
//                 <ul style={{ listStyle: "none", padding: 0 }}>
//                   {linklist.map((link, index) => (
//                     <motion.li
//                       key={link.id}
//                       initial={{
//                         opacity: 0,
//                         x: -40,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         x: 0,
//                       }}
//                       transition={{
//                         delay: 0.12 * index,
//                         duration: 0.5,
//                       }}
//                       style={{
//                         marginBottom: "30px",
//                       }}
//                     >
//                       <NavLink
//                         to={link.link}
//                         onClick={closeMenu}
//                         style={{
//                           fontSize: "22px",
//                           fontWeight: "600",
//                           letterSpacing: "1px",
//                           textDecoration: "none",
//                           background:
//                             "linear-gradient(90deg, #ffffff, #c084fc)",
//                           WebkitBackgroundClip:
//                             "text",
//                           WebkitTextFillColor:
//                             "transparent",
//                         }}
//                       >
//                         {link.text}
//                       </NavLink>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </nav>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };


import { useState, useEffect } from "react";
import { linklist } from "../../assets/data/data";
import { NavLink } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const drawerVariant = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 18,
      },
    },
    exit: {
      x: "-100%",
      transition: { duration: 0.4 },
    },
  };

  const overlayVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.header
        className={`tj-header-area header-absolute ${
          isSticky ? "sticky" : ""
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flexSB">

          {/* 🔥 Logo (No Effect, Only Gradient Color) */}
          <motion.div
            className="logo-box"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <NavLink
              to="/"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              style={{
                textDecoration: "none",
                display: "inline-block",
              }}
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
            </NavLink>
          </motion.div>

          {/* Desktop Menu */}
          <div className="header-menu desktop-menu">
            <nav>
              <ul>
                {linklist.map((link) => (
                  <li key={link.id}>
                    <NavLink to={link.link}>
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flexSB">
            <div className="header-button">
              <NavLink
                to="/"
                state={{ scrollToContact: true }}
                className="btn tj-btn-primary"
              >
                Hire me!
              </NavLink>
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
              <IoMenuOutline size={36} />
            </div>
          </div>
        </div>
      </motion.header>

      {/* ===== MOBILE DRAWER ===== */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              variants={overlayVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeMenu}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(8px)",
                zIndex: 998,
              }}
            />

            <motion.div
              variants={drawerVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "100vh",
                width: "75%",
                maxWidth: "340px",
                background:
                  "linear-gradient(160deg, #1a0f2f, #2e1760, #4b2a8f)",
                padding: "40px 30px",
                zIndex: 999,
                boxShadow:
                  "10px 0 40px rgba(0,0,0,0.6)",
                borderRight:
                  "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "60px",
                  cursor: "pointer",
                }}
                onClick={closeMenu}
              >
                <IoCloseOutline size={38} color="#fff" />
              </div>

              <nav>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {linklist.map((link, index) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.12 * index,
                        duration: 0.5,
                      }}
                      style={{ marginBottom: "30px" }}
                    >
                      <NavLink
                        to={link.link}
                        onClick={closeMenu}
                        style={{
                          fontSize: "22px",
                          fontWeight: "600",
                          letterSpacing: "1px",
                          textDecoration: "none",
                          background:
                            "linear-gradient(90deg, #ffffff, #c084fc)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor:
                            "transparent",
                        }}
                      >
                        {link.text}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
