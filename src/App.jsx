import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FeedbackPage from "./components/FeedbackPage";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./components/firebase";


const App = () => {
  // useEffect(()=> {
  //   const Fetch= async() => {
  //     const sp=await getDocs(collection(db,"Feedback")) 
  //     sp.docs.map((doc) => {
  //       console.log(doc.id,"=> ", doc.data());
  //     });
  //   }
  //   Fetch();
  // },[])
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="container mx-auto px-8">
      
        <Navbar />
        <Hero /> 
        <About />
        <Education />
        <Technologies />
        <Experience />
        <Projects />
        <FeedbackPage />
        <Contact />
      </div>
    </div>
  );
};

export default App;
