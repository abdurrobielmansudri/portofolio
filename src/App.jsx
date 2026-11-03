import React, { useState } from 'react';
import { 
  FiGithub, FiLinkedin, FiMail, FiExternalLink, 
  FiDownload, FiCode, FiLayers, FiTerminal, FiSend, FiBriefcase 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa'; // Diimpor untuk ikon WhatsApp

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All Projects');

  const projects = [
    {
      title: "Videobelajar - React Front-End",
      category: "Web & Apps",
      desc: "Platform kursus online interaktif lengkap dengan sistem autentikasi, pemilihan kelas, hingga alur checkout pembayaran.",
      tags: ["React.js", "Vite", "Tailwind CSS", "Axios"],
      link: "https://github.com/abdurrobielmansudri/videobelajar-react"
    },
    {
      title: "Edu-Course API Advance",
      category: "Web & Apps",
      desc: "REST API tingkat lanjut menggunakan Express.js dan MySQL, dilengkapi JWT Authentication, Nodemailer, dan Multer upload.",
      tags: ["Node.js", "Express.js", "MySQL", "JWT"],
      link: "https://github.com/abdurrobielmansudri/edu-course-api-advance"
    },
    {
      title: "Edu-Course API Basic",
      category: "Web & Apps",
      desc: "Sistem backend dasar untuk pengelolaan data kursus dengan operasi CRUD penuh yang terhubung ke database relasional.",
      tags: ["Express.js", "MySQL", "Postman", "JavaScript"],
      link: "https://github.com/abdurrobielmansudri/edu-course-api"
    }
  ];

  const filteredProjects = activeTab === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="bg-[#fcfbf9] text-[#14213a] font-sans min-h-screen selection:bg-amber-100 selection:text-amber-900 scroll-smooth">
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#fcfbf9]/80 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-serif text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            Abdurrobi<span className="text-amber-700">.</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#about" className="hover:text-black transition-colors duration-200">About</a>
            <a href="#experience" className="hover:text-black transition-colors duration-200">Experience</a>
            <a href="#skills" className="hover:text-black transition-colors duration-200">What I Can Do</a>
            <a href="#projects" className="hover:text-black transition-colors duration-200">Projects</a>
          </nav>

          <a 
            href="#contact" 
            className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
          >
            HIRE ME 
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-stone-200/60 rounded-full text-xs font-semibold tracking-wide uppercase text-stone-700 mb-6">
            Full Stack Web Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-normal leading-[1.05] mb-6">
            Hi, I'm <br /><span className="text-amber-700 italic">Abdurrobi.</span>
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-xl">
            Lulusan Teknik Informatika Universitas Pamulang yang memadukan kedisiplinan profesional perbankan dengan keahlian pengembangan aplikasi web modern.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="bg-black text-white px-6 py-3 rounded-xl font-medium text-sm flex items-center gap-2 hover:bg-stone-800 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
            >
              Explore Work &rarr;
            </a>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="border border-stone-300 bg-white px-6 py-3 rounded-xl font-medium text-sm flex items-center gap-2 hover:bg-stone-50 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <FiDownload /> Download CV
            </a>
          </div>
        </div>

        {/* Hero Visual Card / Photo */}
        <div className="relative flex justify-center">
          <div className="w-72 h-80 md:w-80 md:h-96 rounded-[2.5rem] overflow-hidden border-2 border-stone-300 shadow-xl bg-stone-200 relative transition-transform duration-500 hover:scale-[1.02]">
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
      <section id="about" className="py-20 border-t border-stone-200 bg-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[220px_1fr] gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">DISCOVER</span>
            <h2 className="text-3xl font-serif mt-1">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-stone-600">
            <div>
              <h3 className="text-black font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-700"></span> Who Am I
              </h3>
              <p className="text-sm leading-relaxed">
                Aku lulusan Teknik Informatika Universitas Pamulang, berasal dari Tasikmalaya, dan berpengalaman bekerja sebagai satpam perbankan di BNI BSD selama 3 tahun sambil merampungkan studi. Pengalaman ini membentuk mental kerja keras, ketelitian, dan integritas tinggi.
              </p>
            </div>
            <div>
              <h3 className="text-black font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-700"></span> My Approach
              </h3>
              <p className="text-sm leading-relaxed">
                Melalui bootcamp Full-Stack Development Harisenin, aku mengombinasikan latar belakang profesional dan keterampilan teknis modern (React.js, Node.js, Express.js, MySQL) untuk membangun solusi web yang aman, terstruktur, dan solutif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[220px_1fr] gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">CAREER PATH</span>
            <h2 className="text-3xl font-serif mt-1">Work Experience</h2>
          </div>
          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    Professional Experience
                  </span>
                  <h3 className="font-serif text-2xl font-bold mt-2">Security Guard / Satpam</h3>
                  <p className="text-stone-600 font-medium text-sm">PT Bank Negara Indonesia (Persero) Tbk — Branch BSD</p>
                </div>
                <span className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1 rounded-lg self-start">
                  3 Tahun Pengabdian
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Bertanggung jawab penuh atas keamanan area operasional perbankan, ketertiban fasilitas, serta memberikan pelayanan prima kepada nasabah dengan standar operasional prosedur (SOP) perbankan yang ketat.
              </p>
              <ul className="list-disc list-inside text-sm text-stone-600 space-y-1.5 mb-6">
                <li>Menjaga keamanan dan ketertiban area kantor cabang serta memastikan kenyamanan nasabah.</li>
                <li>Menerapkan kedisiplinan tingkat tinggi, kewaspadaan, dan komunikasi efektif dalam pelayanan publik.</li>
                <li>Menjalankan manajemen waktu yang disiplin dalam menyeimbangkan jam kerja operasional bank dengan perkuliahan S1 Teknik Informatika.</li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-100">
                {['Security Operations', 'Customer Service', 'Discipline & Responsibility', 'SOP Compliance'].map((item, idx) => (
                  <span key={idx} className="bg-stone-100 text-stone-700 text-xs px-3 py-1 rounded-md font-medium">{item}</span>
                ))}
              </div>
            </div>

            {/* Experience 2 / Bootcamp */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    Bootcamp & Training
                  </span>
                  <h3 className="font-serif text-2xl font-bold mt-2">Full-Stack Web Development Student</h3>
                  <p className="text-stone-600 font-medium text-sm">Harisenin Bootcamp (Batch 20)</p>
                </div>
                <span className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1 rounded-lg self-start">
                  Intensive Program
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Menyelesaikan program pelatihan intensif pengembangan web penuh dari sisi antarmuka pengguna hingga sistem peladen dan database.
              </p>
              <ul className="list-disc list-inside text-sm text-stone-600 space-y-1.5 mb-6">
                <li>Membangun aplikasi web interaktif menggunakan React.js, Vite, dan Tailwind CSS.</li>
                <li>Mengembangkan REST API handal dengan Node.js, Express.js, dan database MySQL.</li>
                <li>Mengimplementasikan fitur keamanan seperti JWT Authentication, hashing password bcrypt, Nodemailer, dan Multer.</li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-100">
                {['React.js', 'Express.js', 'MySQL', 'REST API', 'Git & GitHub'].map((item, idx) => (
                  <span key={idx} className="bg-stone-100 text-stone-700 text-xs px-3 py-1 rounded-md font-medium">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I CAN DO / SKILLS */}
      <section id="skills" className="py-20 border-t border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[220px_1fr] gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">MY CAPABILITIES</span>
            <h2 className="text-3xl font-serif mt-1">What I Can Do</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#fcfbf9] p-8 rounded-2xl border border-stone-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="text-amber-700 text-2xl mb-4 font-mono">01</div>
              <h3 className="font-bold text-lg mb-2">Web Development & Engineering</h3>
              <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                Membangun dan menguji sistem aplikasi digital fungsional, dari arsitektur basis data relasional hingga platform web interaktif berbasis React.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['React.js', 'Node.js', 'Express.js', 'MySQL', 'JavaScript', 'Tailwind'].map((item, idx) => (
                  <span key={idx} className="bg-white text-stone-700 text-xs px-3 py-1 rounded-md font-medium border border-stone-200">{item}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#fcfbf9] p-8 rounded-2xl border border-stone-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="text-amber-700 text-2xl mb-4 font-mono">02</div>
              <h3 className="font-bold text-lg mb-2">Digital Operations & Support</h3>
              <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                Mendukung efisiensi operasional harian melalui pengelolaan data terstruktur, ketelitian administratif, kedisiplinan kerja, dan komunikasi profesional.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['System Testing', 'Data Management', 'Professional Ethics', 'Git & GitHub'].map((item, idx) => (
                  <span key={idx} className="bg-white text-stone-700 text-xs px-3 py-1 rounded-md font-medium border border-stone-200">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-20 border-t border-stone-200">
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
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeTab === tab ? 'bg-black text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className="border border-stone-200 rounded-2xl p-6 flex flex-col justify-between bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold mt-4 mb-2">{project.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] bg-stone-50 border border-stone-200 text-stone-600 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-amber-700 transition-colors duration-200"
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
      <section id="contact" className="py-24 border-t border-stone-200 bg-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Let's Work Together.</h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-8">
              Terbuka untuk peluang kolaborasi dan kesempatan karier di bidang Full Stack Development, Software Engineering, maupun operasional digital profesional.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:obetelman@gmail.com"
                className="bg-black text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-stone-800 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
              >
                <FiMail /> Send Email
              </a>
              {/* Tombol WhatsApp Interaktif */}
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
                className="border border-stone-300 bg-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-stone-50 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <FiGithub /> GitHub Profile
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#fcfbf9] p-5 rounded-xl border border-stone-200 flex items-center justify-between shadow-xs transition-transform duration-200 hover:translate-x-1">
              <div className="flex items-center gap-3">
                <FiMail className="text-amber-700" size={20} />
                <span className="text-sm font-medium text-stone-700">obetelman@gmail.com</span>
              </div>
              <span className="text-xs text-stone-400 font-mono">01</span>
            </div>
            {/* Kartu Informasi WhatsApp */}
            <a 
              href="https://wa.me/62895339361899" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#fcfbf9] p-5 rounded-xl border border-stone-200 flex items-center justify-between shadow-xs transition-transform duration-200 hover:translate-x-1 block cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-emerald-600 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-sm font-medium text-stone-700 group-hover:text-emerald-700 transition-colors">WhatsApp Me</span>
              </div>
              <span className="text-xs text-stone-400 font-mono">02</span>
            </a>
            <div className="bg-[#fcfbf9] p-5 rounded-xl border border-stone-200 flex items-center justify-between shadow-xs transition-transform duration-200 hover:translate-x-1">
              <div className="flex items-center gap-3">
                <FiGithub className="text-amber-700" size={20} />
                <span className="text-sm font-medium text-stone-700">github.com/abdurrobielmansudri</span>
              </div>
              <span className="text-xs text-stone-400 font-mono">03</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-stone-200 text-center text-xs text-stone-500 bg-[#fcfbf9]">
        <p>&copy; {new Date().getFullYear()} Abdurrobi Elman Sudri. Built with React & Tailwind CSS.</p>
      </footer>

    </div>
  );
}