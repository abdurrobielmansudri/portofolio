import React, { useState, useEffect } from 'react';
import { 
  FiGithub, FiLinkedin, FiMail, FiExternalLink, 
  FiDownload, FiCode, FiLayers, FiTerminal, FiSend, FiBriefcase 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const projects = [
    {
      title: "Videobelajar - React Front-End",
      category: "Web & Apps",
      desc: "Platform kursus online interaktif lengkap dengan sistem autentikasi, pemilihan kelas, hingga alur checkout pembayaran berbasis React & Vite.",
      tags: ["React.js", "Vite", "Tailwind CSS", "Axios"],
      link: "https://github.com/abdurrobielmansudri/videobelajar-react"
    },
    {
      title: "To-Do List App (React)",
      category: "Web & Apps",
      desc: "Aplikasi manajemen tugas harian interaktif untuk menambah, menghapus, dan menandai status tugas secara real-time menggunakan state management React.",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
      link: "https://github.com/abdurrobielmansudri/abdurrobi-20001-todolist-Mission"
    },
    {
      title: "Edu-Course API Advance",
      category: "Web & Apps",
      desc: "REST API tingkat lanjut menggunakan Express.js dan MySQL, dilengkapi JWT Authentication, Nodemailer, dan Multer upload file.",
      tags: ["Node.js", "Express.js", "MySQL", "JWT", "Multer"],
      link: "https://github.com/abdurrobielmansudri/edu-course-api-advance"
    },
    {
      title: "Edu-Course API Basic",
      category: "Web & Apps",
      desc: "Sistem backend dasar untuk pengelolaan data kursus dengan operasi CRUD penuh yang terhubung ke database relasional MySQL.",
      tags: ["Express.js", "MySQL", "Postman", "JavaScript"],
      link: "https://github.com/abdurrobielmansudri/edu-course-api"
    }
  ];

  const filteredProjects = activeTab === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className={`${darkMode ? 'bg-stone-950 text-stone-100' : 'bg-[#fcfbf9] text-[#14213a]'} font-sans min-h-screen selection:bg-amber-100 selection:text-amber-900 transition-colors duration-300 scroll-smooth`}>
      
      {/* HEADER / NAVBAR */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-stone-950/80 border-stone-800' : 'bg-[#fcfbf9]/80 border-stone-200'} backdrop-blur-md border-b transition-all duration-300`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-serif text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            Abdurrobi<span className="text-amber-700">.</span>
          </a>
          
          <nav className={`hidden md:flex items-center gap-8 text-sm font-medium ${darkMode ? 'text-stone-300' : 'text-stone-600'}`}>
            <a href="#about" className={`hover:${darkMode ? 'text-white' : 'text-black'} transition-colors duration-200`}>About</a>
            <a href="#experience" className={`hover:${darkMode ? 'text-white' : 'text-black'} transition-colors duration-200`}>Experience</a>
            <a href="#skills" className={`hover:${darkMode ? 'text-white' : 'text-black'} transition-colors duration-200`}>What I Can Do</a>
            <a href="#projects" className={`hover:${darkMode ? 'text-white' : 'text-black'} transition-colors duration-200`}>Projects</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* TOMBOL TOGGLE THEME */}
            <button 
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-full border ${darkMode ? 'border-stone-700 bg-stone-900 text-yellow-400' : 'border-stone-300 bg-white text-stone-800'} hover:scale-105 transition-all duration-200 shadow-xs cursor-pointer flex items-center justify-center w-10 h-10`}
              title="Ganti Tema"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <a 
              href="#contact" 
              className={`${darkMode ? 'bg-white text-black hover:bg-stone-200' : 'bg-black text-white hover:bg-stone-800'} px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:scale-105 active:scale-95`}
            >
              HIRE ME ↗
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className={`inline-block px-3 py-1 ${darkMode ? 'bg-stone-800 text-stone-300' : 'bg-stone-200/60 text-stone-700'} rounded-full text-xs font-semibold tracking-wide uppercase mb-6`}>
            Full Stack Web Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-normal leading-[1.05] mb-6">
            Hi, I'm <br /><span className="text-amber-700 italic">Abdurrobi.</span>
          </h1>
          <p className={`${darkMode ? 'text-stone-400' : 'text-stone-600'} text-lg leading-relaxed mb-8 max-w-xl`}>
            Lulusan S1 Teknik Informatika Universitas Pamulang yang berfokus membangun dan mengembangkan aplikasi web modern dari sisi antarmuka hingga server.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className={`${darkMode ? 'bg-white text-black hover:bg-stone-200' : 'bg-black text-white hover:bg-stone-800'} px-6 py-3 rounded-xl font-medium text-sm flex items-center gap-2 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95`}
            >
              Explore Work &rarr;
            </a>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noreferrer"
              className={`border ${darkMode ? 'border-stone-700 bg-stone-900 hover:bg-stone-800' : 'border-stone-300 bg-white hover:bg-stone-50'} px-6 py-3 rounded-xl font-medium text-sm flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95`}
            >
              <FiDownload /> Download CV
            </a>
          </div>
        </div>

        {/* Hero Visual Card / Photo */}
        <div className="relative flex justify-center">
          <div className={`w-72 h-80 md:w-80 md:h-96 rounded-[2.5rem] overflow-hidden border-2 ${darkMode ? 'border-stone-700 bg-stone-800' : 'border-stone-300 bg-stone-200'} shadow-xl relative transition-transform duration-500 hover:scale-[1.02]`}>
            <img 
              src="/foto.jpg" 
              alt="Abdurrobi Elman Sudri" 
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              onError={(e)=>{
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
              }}
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className={`py-20 border-t ${darkMode ? 'border-stone-800 bg-stone-900 text-stone-300' : 'border-stone-200 bg-white text-stone-600'} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[220px_1fr] gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">DISCOVER</span>
            <h2 className={`text-3xl font-serif mt-1 ${darkMode ? 'text-white' : 'text-black'}`}>About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`font-semibold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-black'}`}>
                <span className="w-2 h-2 rounded-full bg-amber-700"></span> Profile & Background
              </h3>
              <p className="text-sm leading-relaxed">
                Fresh graduate S1 Teknik Informatika Universitas Pamulang asal Tasikmalaya yang memiliki ketertarikan mendalam pada rekayasa perangkat lunak, arsitektur web, dan pemecahan masalah logika pemrograman.
              </p>
            </div>
            <div>
              <h3 className={`font-semibold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-black'}`}>
                <span className="w-2 h-2 rounded-full bg-amber-700"></span> Technical Focus
              </h3>
              <p className="text-sm leading-relaxed">
                Aktif mendalami pengembangan aplikasi web modern melalui bootcamp intensif Full-Stack Development, menguasai ekosistem JavaScript (React.js, Node.js, Express.js) serta manajemen database relasional MySQL.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className={`py-20 border-t ${darkMode ? 'border-stone-800' : 'border-stone-200'}`}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[220px_1fr] gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">CAREER PATH</span>
            <h2 className="text-3xl font-serif mt-1">Experience & Training</h2>
          </div>
          <div className="space-y-8">
            <div className={`${darkMode ? 'bg-stone-900 border-stone-800 text-stone-300' : 'bg-white border-stone-200 text-stone-600'} p-8 rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider text-amber-700 ${darkMode ? 'bg-amber-950/50 border-amber-800' : 'bg-amber-50 border-amber-200'} px-2.5 py-1 rounded-full border`}>
                    Bootcamp Intensive
                  </span>
                  <h3 className={`font-serif text-2xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-black'}`}>Full-Stack Web Developer Trainee</h3>
                  <p className="font-medium text-sm">Harisenin Bootcamp (Batch 20)</p>
                </div>
                <span className={`text-xs font-mono ${darkMode ? 'bg-stone-800 text-stone-400' : 'bg-stone-100 text-stone-500'} px-3 py-1 rounded-lg self-start`}>
                  2026
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Menyelesaikan program pelatihan intensif pengembangan web end-to-end, membangun berbagai proyek nyata dari sisi antarmuka hingga backend server.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1.5 mb-6">
                <li>Merancang dan membangun antarmuka web responsif menggunakan React.js, Vite, dan Tailwind CSS.</li>
                <li>Mengembangkan RESTful API handal menggunakan Express.js, Node.js, dan MySQL.</li>
                <li>Menerapkan sistem keamanan autentikasi JWT, hashing password dengan bcrypt, serta integrasi layanan pihak ketiga (Nodemailer, Multer).</li>
              </ul>
              <div className={`flex flex-wrap gap-2 pt-2 border-t ${darkMode ? 'border-stone-800' : 'border-stone-100'}`}>
                {['React.js', 'Express.js', 'MySQL', 'REST API', 'JavaScript', 'Git'].map((item, idx) => (
                  <span key={idx} className={`${darkMode ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-700'} text-xs px-3 py-1 rounded-md font-medium`}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I CAN DO / SKILLS */}
      <section id="skills" className={`py-20 border-t ${darkMode ? 'border-stone-800 bg-stone-900' : 'border-stone-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[220px_1fr] gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">MY CAPABILITIES</span>
            <h2 className="text-3xl font-serif mt-1">Tech Stack</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${darkMode ? 'bg-stone-950 border-stone-800 text-stone-400' : 'bg-[#fcfbf9] border-stone-200 text-stone-600'} p-8 rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1`}>
              <div className="text-amber-700 text-2xl mb-4 font-mono">01</div>
              <h3 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Front-End Development</h3>
              <p className="text-sm mb-4 leading-relaxed">
                Membangun tampilan antarmuka web yang interaktif, dinamis, dan responsif menggunakan pustaka dan framework modern.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['React.js', 'Vite', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3'].map((item, idx) => (
                  <span key={idx} className={`${darkMode ? 'bg-stone-900 border-stone-800 text-stone-300' : 'bg-white border-stone-200 text-stone-700'} text-xs px-3 py-1 rounded-md font-medium border`}>{item}</span>
                ))}
              </div>
            </div>

            <div className={`${darkMode ? 'bg-stone-950 border-stone-800 text-stone-400' : 'bg-[#fcfbf9] border-stone-200 text-stone-600'} p-8 rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1`}>
              <div className="text-amber-700 text-2xl mb-4 font-mono">02</div>
              <h3 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Back-End & Database</h3>
              <p className="text-sm mb-4 leading-relaxed">
                Mengembangkan logika server, perancangan RESTful API, sistem autentikasi, serta pengelolaan database relasional.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Node.js', 'Express.js', 'MySQL', 'JWT', 'Postman', 'Git & GitHub'].map((item, idx) => (
                  <span key={idx} className={`${darkMode ? 'bg-stone-900 border-stone-800 text-stone-300' : 'bg-white border-stone-200 text-stone-700'} text-xs px-3 py-1 rounded-md font-medium border`}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className={`py-20 border-t ${darkMode ? 'border-stone-800' : 'border-stone-200'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400">PORTFOLIO</span>
              <h2 className="text-3xl font-serif mt-1">Featured Projects</h2>
            </div>
            <div className="flex gap-2">
              {['All Projects', 'Web & Apps'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === tab 
                      ? `${darkMode ? 'bg-white text-black' : 'bg-black text-white'}` 
                      : `${darkMode ? 'bg-stone-900 text-stone-400 hover:bg-stone-800' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className={`border ${darkMode ? 'border-stone-800 bg-stone-900 text-stone-300' : 'border-stone-200 bg-white text-stone-600'} rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider text-amber-700 ${darkMode ? 'bg-amber-950/50 border-amber-800' : 'bg-amber-50 border-amber-200'} px-2.5 py-1 rounded-full border`}>
                    {project.category}
                  </span>
                  <h3 className={`font-serif text-xl font-bold mt-4 mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{project.title}</h3>
                  <p className="text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={`text-[11px] ${darkMode ? 'bg-stone-800 border-stone-700 text-stone-300' : 'bg-stone-50 border-stone-200 text-stone-600'} border px-2 py-0.5 rounded`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-bold ${darkMode ? 'text-white' : 'text-black'} hover:text-amber-700 transition-colors duration-200`}
                  >
                    View Repository <FiExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={`py-24 border-t ${darkMode ? 'border-stone-800 bg-stone-900 text-stone-300' : 'border-stone-200 bg-white text-stone-600'} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-4xl md:text-5xl font-serif mb-6 leading-tight ${darkMode ? 'text-white' : 'text-black'}`}>Let's Work Together.</h2>
            <p className="text-sm md:text-base leading-relaxed mb-8">
              Terbuka untuk peluang kesempatan karier dan kolaborasi di bidang Software Engineering, Full-Stack Development, maupun Front-End/Back-End role.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:obetelaman@gmail.com"
                className={`${darkMode ? 'bg-white text-black hover:bg-stone-200' : 'bg-black text-white hover:bg-stone-800'} px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95`}
              >
                <FiMail /> Send Email
              </a>
              <a 
                href="https://wa.me/62895339361899" 
                target="_blank" 
                rel="noreferrer"
                className="bg-emerald-600 text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-emerald-700 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
              >
                <FaWhatsapp size={18} /> Chat via WhatsApp
              </a>
              <a 
                href="https://github.com/abdurrobielmansudri"
                target="_blank"
                rel="noreferrer"
                className={`border ${darkMode ? 'border-stone-700 bg-stone-900 text-white hover:bg-stone-800' : 'border-stone-300 bg-white text-black hover:bg-stone-50'} px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95`}
              >
                <FiGithub /> GitHub Profile
              </a>
              <a 
                href="https://www.linkedin.com/in/abdurrobi-elman-sudri-b71878398"
                target="_blank"
                rel="noreferrer"
                className="bg-[#0a66c2] text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-[#084e96] transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
              >
                <FiLinkedin /> LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className={`${darkMode ? 'bg-stone-950 border-stone-800 text-stone-300' : 'bg-[#fcfbf9] border-stone-200 text-stone-700'} p-5 rounded-xl border flex items-center justify-between shadow-xs`}>
              <div className="flex items-center gap-3">
                <FiMail className="text-amber-700" size={20} />
                <span className="text-sm font-medium">obetelman@gmail.com</span>
              </div>
              <span className="text-xs text-stone-400 font-mono">01</span>
            </div>
            <a 
              href="https://wa.me/62895339361899" 
              target="_blank" 
              rel="noreferrer"
              className={`${darkMode ? 'bg-stone-950 border-stone-800 text-stone-300' : 'bg-[#fcfbf9] border-stone-200 text-stone-700'} p-5 rounded-xl border flex items-center justify-between shadow-xs block cursor-pointer group`}
            >
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-emerald-600 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-sm font-medium group-hover:text-emerald-600 transition-colors">WhatsApp Me</span>
              </div>
              <span className="text-xs text-stone-400 font-mono">02</span>
            </a>
            <div className={`${darkMode ? 'bg-stone-950 border-stone-800 text-stone-300' : 'bg-[#fcfbf9] border-stone-200 text-stone-700'} p-5 rounded-xl border flex items-center justify-between shadow-xs`}>
              <div className="flex items-center gap-3">
                <FiGithub className="text-amber-700" size={20} />
                <span className="text-sm font-medium">github.com/abdurrobielmansudri</span>
              </div>
              <span className="text-xs text-stone-400 font-mono">03</span>
            </div>
            <a 
              href="https://www.linkedin.com/in/abdurrobi-elman-sudri-b71878398"
              target="_blank"
              rel="noreferrer"
              className={`${darkMode ? 'bg-stone-950 border-stone-800 text-stone-300' : 'bg-[#fcfbf9] border-stone-200 text-stone-700'} p-5 rounded-xl border flex items-center justify-between shadow-xs block cursor-pointer group`}
            >
              <div className="flex items-center gap-3">
                <FiLinkedin className="text-[#0a66c2]" size={20} />
                <span className="text-sm font-medium group-hover:text-[#0a66c2] transition-colors">linkedin.com/in/abdurrobi-elman-sudri-b71878398</span>
              </div>
              <span className="text-xs text-stone-400 font-mono">04</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-8 border-t ${darkMode ? 'border-stone-800 bg-stone-950 text-stone-500' : 'border-stone-200 bg-[#fcfbf9] text-stone-500'} text-center text-xs`}>
        <p>&copy; {new Date().getFullYear()} Abdurrobi Elman Sudri. Built with React & Tailwind CSS.</p>
      </footer>

    </div>
  );
}