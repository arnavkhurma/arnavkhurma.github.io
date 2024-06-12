import './App.css';

function App() {
  return (
    <>
      <div className="bg-white w-[80vw] rounded-lg p-4">
        <div className="flex p-2 gap-1">
          <div className="">
            <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <div className="card__content text-center mt-0">
          <div className="flex items-center justify-center">
            <img src="pp.jpeg" alt="Arnav Khurma" className="rounded-full w-16 h-16 mr-4" />
            <div className="text-left">
              <h1 className="text-3xl font-bold">Arnav Khurma</h1>
              <h2 className="text-xl text-gray-700">Computer Science ∩ Mathematics @ Virginia Tech | Quantitative Researcher @ COINS</h2>
            </div>
          </div>
          <p className="text-gray-600 mt-4 text-left p-4 mb-2 font-bold">
            Enthusiastic international Junior at Virginia Tech seeking internship and co-op opportunities in dynamic and innovative environments within Software Engineering, Trading, and Quantitative Research sectors. Proven track record of academic excellence and practical experience in quantitative research, software development, and financial modeling.
          </p>
          <p className="text-left px-4">
            <span className='font-bold'>Certifications: </span>
          </p>
          <ul className="list-none text-left px-4">
            <li className="flex items-center px-4">
              <img src="akuna.jpeg" alt="" className="w-4 h-4 mr-2" />
              Akuna Capital's Options 101
            </li>
            <li className="flex items-center px-4">
              <img src="bloomberg.png" alt="" className="w-4 h-4 mr-2" />
              Bloomberg Market Concepts
            </li>
            <li className="flex items-center px-4">
              <img src="jpmc.png" alt="" className="w-4 h-4 mr-2" />
              JPMorgan Chase & Co’s Quantitative Research Virtual Experience
            </li>
            <li className="flex items-center px-4">
              <img src="linkedin.png" alt="" className="w-4 h-4 mr-2" />
              Algorithmic Trading and Financial Modeling in Python and R
            </li>
            <li className="flex items-center px-4">
              <img src="harvard.jpg" alt="" className="w-4 h-4 mr-2" />
              Harvard University's CS50X: Introduction to Computer Science
            </li>
          </ul>
          <p className="text-left px-4">
            <span className='font-bold'>Awards: </span></p>
          <ul className="list-disc text-left px-4 mb-4">
            <li className="flex items-center px-4">
              <img src="trophy.png" alt="" className="w-4 h-4 mr-2" />
              Dean’s List with Honors Distinction (Fall 2022, Fall 2023)
            </li>
            <li className="flex items-center px-4">
              <img src="trophy.png" alt="" className="w-4 h-4 mr-2" />
              Winner, Best RESTful Web Service Implementation using Spring Boot & Docker, HackViolet Hackathon 2024
            </li>
            <li className="flex items-center px-4">
              <img src="trophy.png" alt="" className="w-4 h-4 mr-2" />
              Winner, Commodities Trading Competition 2024 at Virginia Tech Commodity Trading Group (COINS)
            </li>
          </ul>
          <p className="text-left px-4">
            <span className='font-bold'>Technical Skills: </span>
            Java, Python, R, C, JavaScript/TypeScript, HTML/CSS, SQL, Node.js, React.js, x86/RISC-V Assembly, Bash
          </p>
          <p className="text-left px-4">
            <span className='font-bold'>Developer / Finance Tools: </span>
            Bloomberg Terminal, MATLAB, Google Cloud Platform (GCP), IntelliJ, PyCharm, Eclipse, Jupyter Notebooks, Git, Bootstrap, Spring Boot, Agile, Docker, Microsoft Office (Excel, PowerPoint), CI/CD
          </p>
          <p className="text-left px-4 mb-6">
            <span className='font-bold'>Interests: </span>
            Game Theory, Systematic Trading, Quantitative Research, Statistical Data Modeling, Econometrics, Algorithmic Systems, Poker
          </p>
          <hr className="my-4 border-gray-400" />
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="flex items-center text-gray-700 gap-4 mb-4 md:mb-0">
              <div className="flex items-center">
                <img src="/phone.png" alt="Phone: " className="w-4 h-4 mr-1" />
                <span>(540) 824-9505</span>
              </div>
              <div className="flex items-center">
                <img src="/email.png" alt="Email: " className="w-4 h-4 mr-1" />
                <span>arnavkhurma@vt.edu</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/arnav-khurma" className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-900">
                LinkedIn
              </a>
              <a href="https://github.com/arnavkhurma" className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-900 text-white">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

