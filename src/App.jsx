// // import { useEffect, useState } from "react";
// // import {
// //   Home,
// //   Layout,
// //   Portfolio,         // Add Portfolio here
// //   PortfolioDetails,
// //   Service,
// //   Resume,
// //   Skill,
// //   Testimonial,
// //   Blog,
// //   Contact,
// // } from "./utils/Router";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";

// // function App() {
// //   const [showLoader, setShowLoader] = useState(true);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setShowLoader(false);
// //     }, 5000);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <>
// //       {showLoader && (
// //         <div className="preloader">
// //           <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
// //             <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
// //           </svg>

// //           <div className="preloader-heading">
// //             <div className="load-text">
// //               <span>M</span>
// //               <span>D</span>
// //               <span>S</span>
// //               <span>H</span>
// //               <span>O</span>
// //               <span>A</span>
// //               <span>I</span>
// //               <span>B</span>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {!showLoader && (
// //         <BrowserRouter>
// //           <Routes>
// //             <Route
// //               path="/"
// //               element={
// //                 <Layout>
// //                   <Home />
// //                 </Layout>
// //               }
// //             />
// //             <Route
// //               path="/details"
// //               element={
// //                 <Layout>
// //                   <PortfolioDetails />
// //                 </Layout>
// //               }
// //             />
// //             <Route
// //               path="/service"
// //               element={
// //                 <Layout>
// //                   <Service />
// //                 </Layout>
// //               }
// //             />
// //             <Route
// //               path="/portfolio"  // Correct route for Portfolio (Works)
// //               element={
// //                 <Layout>
// //                   <Portfolio />
// //                 </Layout>
// //               }
// //             />
// //             <Route
// //               path="/resume"
// //               element={
// //                 <Layout>
// //                   <Resume />
// //                 </Layout>
// //               }
// //             />
// //             <Route
// //               path="/skill"
// //               element={
// //                 <Layout>
// //                   <Skill />
// //                 </Layout>
// //               }
// //             />
// //             <Route
// //               path="/testimonials"
// //               element={
// //                 <Layout>
// //                   <Testimonial />
// //                 </Layout>
// //               }
// //             />
// //             <Route
// //               path="/blog"
// //               element={
// //                 <Layout>
// //                   <Blog />
// //                 </Layout>
// //               }
// //             />
// //             <Route
// //               path="/contact"
// //               element={
// //                 <Layout>
// //                   <Contact />
// //                 </Layout>
// //               }
// //             />
// //           </Routes>
// //         </BrowserRouter>
// //       )}
// //     </>
// //   );
// // }

// // export default App;


// import { useEffect, useState } from "react";
// import {
//   Home,
//   Layout,
//   Portfolio,
//   PortfolioDetails,
//   Service,
//   Resume,
//   Skill,
//   Testimonial,
//   Blog,
//   Contact,
// } from "./utils/Router";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   const [showLoader, setShowLoader] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLoader(false);
//     }, 4000); // 4 seconds premium loader

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {showLoader && (
//         <div className="preloader">

//           {/* Background Glow */}
//           <div className="loader-wrapper">

//             <div className="loader-ring">
//               <div className="loader-inner-ring"></div>
//             </div>

//             <h2 className="loader-name">Md Shoaib</h2>
//             <p className="loader-role">Full Stack Developer</p>

//           </div>
//         </div>
//       )}

//       {!showLoader && (
//         <BrowserRouter>
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <Layout>
//                   <Home />
//                 </Layout>
//               }
//             />
//             <Route
//               path="/details"
//               element={
//                 <Layout>
//                   <PortfolioDetails />
//                 </Layout>
//               }
//             />
//             <Route
//               path="/service"
//               element={
//                 <Layout>
//                   <Service />
//                 </Layout>
//               }
//             />
//             <Route
//               path="/portfolio"
//               element={
//                 <Layout>
//                   <Portfolio />
//                 </Layout>
//               }
//             />
//             <Route
//               path="/resume"
//               element={
//                 <Layout>
//                   <Resume />
//                 </Layout>
//               }
//             />
//             <Route
//               path="/skill"
//               element={
//                 <Layout>
//                   <Skill />
//                 </Layout>
//               }
//             />
//             <Route
//               path="/testimonials"
//               element={
//                 <Layout>
//                   <Testimonial />
//                 </Layout>
//               }
//             />
//             <Route
//               path="/blog"
//               element={
//                 <Layout>
//                   <Blog />
//                 </Layout>
//               }
//             />
//             <Route
//               path="/contact"
//               element={
//                 <Layout>
//                   <Contact />
//                 </Layout>
//               }
//             />
//           </Routes>
//         </BrowserRouter>
//       )}
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import {
  Home,
  Layout,
  Portfolio,
  PortfolioDetails,
  Service,
  Resume,
  Skill,
  Testimonial,
  Blog,
  Contact,
} from "./utils/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  const fullName = "MD SHOAIB";
  const [displayName, setDisplayName] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Typing effect
    if (index < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayName((prev) => prev + fullName[index]);
        setIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="preloader">

          <div className="loader-wrapper">

            <div className="loader-ring">
              <div className="loader-inner-ring"></div>
            </div>

            <h3 className="loader-iam">I AM</h3>

            <h2 className="loader-name">
              {displayName}
              <span className="cursor">|</span>
            </h2>

            <p className="loader-role">Full Stack Developer</p>

          </div>
        </div>
      )}

      {!showLoader && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/details" element={<Layout><PortfolioDetails /></Layout>} />
            <Route path="/service" element={<Layout><Service /></Layout>} />
            <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
            <Route path="/resume" element={<Layout><Resume /></Layout>} />
            <Route path="/skill" element={<Layout><Skill /></Layout>} />
            <Route path="/testimonials" element={<Layout><Testimonial /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
