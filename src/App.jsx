import { Navbar } from "./components/Navbar";
import eyePattern from "../public/eyePattern.svg";
import puzzlePattern from "../public/puzzlePattern.svg";
import blob from "../public/blob.svg"
import { Caraosel } from "./components/Caraosel";
import slide1  from "../public/slide-1.webp"
import slide2  from "../public/slide-2.webp"
import slide3  from "../public/slide-3.webp"
import slide4  from "../public/slide-4.webp"
import slide5  from "../public/slide-5.webp"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="">
        {/* Top Header */}
        <div 
          style={{
            backgroundImage: `url(${eyePattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} 
          className="w-[90%] mx-auto px-4 py-8 md:py-12 lg:py-16"
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
            <div 
              style={{
                borderRadius: "47% 53% 72% 28% / 45% 31% 69% 55%",
                backgroundImage: `url("https://plus.unsplash.com/premium_photo-1724859700548-ba3ecbe717f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }} 
              className="bg-yellow-50 h-[250px] w-[250px] md:h-[350px] md:w-[350px] mb-8 lg:mb-0"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="font-oswald font-medium text-3xl md:text-4xl lg:text-5xl">Welcome to Vidhya Bharti School</h1>
              <p className="font-nunito font-medium mt-4 text-xl md:text-2xl">"Education is hidden in the soul of your child"</p>
              <button className="bg-maroon-200 px-5 py-2 mt-6 rounded-md text-white hover:bg-maroon-300 transition-colors">Admission</button>
            </div>
          </div>
        </div>
        
        {/* School Intro */}
        <div className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div 
            style={{
              backgroundImage: `url(${blob})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left center',
            }}
            className="absolute left-0 top-0 w-1/4 h-full opacity-50"
          />
          <div 
            style={{
              backgroundImage: `url(${blob})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right center',
            }}
            className="absolute right-0 top-0 w-1/4 h-full opacity-50"
          />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center font-nunito text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vishal Bharti Senior Secondary School</h2>
              <p className="text-xl md:text-2xl font-semibold mb-6">Discover Vishal Bharti Senior Secondary School's Unique Approach to Learning</p>
              <p className="text-base md:text-lg font-medium">
                At Vishal Bharti Senior Secondary School, we believe that every student has the potential to excel academically and personally. That's why we've developed a unique approach to learning that focuses on each student's individual needs and learning style. Our teachers are dedicated to fostering a supportive and inclusive learning environment, where students are encouraged to explore new ideas and take risks. We offer a wide range of academic and extracurricular programmes that enable our students to build a strong foundation for success.
              </p>
            </div>
          </div>
        </div>

        {/* Our gallery */}
        <div className="w-full px-4 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">Our Gallery</h2>
            <Caraosel sliderImages={[slide1, slide2, slide3, slide4, slide5]} />
          </div>
        </div>
      </main>
    </div>
  );
}

