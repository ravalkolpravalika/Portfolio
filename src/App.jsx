export default function Portfolio() {
  const projects = [
    {
      title: "Marketing Funnel & Conversion Analysis",
      tools: "Tableau, Excel, Python",
      description:
        "Analyzed customer journey and identified funnel drop-offs using interactive KPI dashboards.",
      link: "https://github.com/ravalkolpravalika/FUTURE_DS_03",
    },
    {
      title: "Customer Retention & Churn Analysis",
      tools: "Tableau, SQL, Excel",
      description:
        "Analyzed customer behavior to identify churn patterns and improve retention strategies.",
    link: "https://github.com/ravalkolpravalika/FUTURE_DS_02",
      },
    {
      title: "Business Sales Performance Analysis",
      tools: "Power BI, Excel",
      description:
        "Built a sales dashboard to track revenue, profit, top products, and regional performance.",
    link: "https://github.com/ravalkolpravalika/FUTURE_DS_01",
      },
  ];

  const skills = [
    "Python",
    "SQL",
    "Excel",
    "Tableau",
    "Power BI",
    "Data Visualization",
    "Dashboard Design",
    "EDA",
    "Statistical Analysis",
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800 sticky top-0 bg-gray-950 z-50">
        <h1 className="text-2xl font-bold tracking-wide">Pravalika Ravalkol</h1>
        <div className="flex gap-6 text-sm md:text-base">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 md:px-20 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Aspiring Data Analyst
          </p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Turning Data into <span className="text-cyan-400">Business Insights</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            MSc Computer Science student passionate about Data Analytics,
            Visualization, and Dashboard Development. Skilled in Python,
            SQL, Tableau, Excel, and Power BI.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/ravalkolpravalika"
              target="_blank"
              className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl font-semibold text-black"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pravalika-ravalkol-286aa627b/"
              target="_blank"
              className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition px-6 py-3 rounded-2xl font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-800 w-full md:w-[400px]">
          <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
            Quick Profile
          </h3>

          <div className="space-y-4 text-gray-300">
            <p>
              <span className="font-semibold text-white">Education:</span>{" "}
              MSc Computer Science
            </p>
            <p>
              <span className="font-semibold text-white">Experience:</span>{" "}
              Data Analytics & Reporting Internship
            </p>
            <p>
              <span className="font-semibold text-white">Interests:</span>{" "}
              Data Analytics, Visualization, Dashboarding
            </p>
            <p>
              <span className="font-semibold text-white">Goal:</span>{" "}
              Build impactful data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 md:px-20 py-20 bg-gray-900">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
I am an aspiring Data Analyst with a strong interest in business intelligence, dashboard development, and data storytelling. I enjoy working with data to identify patterns, generate meaningful insights, and support data-driven decision-making. Skilled in tools such as Python, SQL, Excel, Tableau, and Power BI, I am passionate about transforming raw data into clear and interactive visualizations. Through internships and academic projects, I have developed experience in data analysis, data visualization, and exploratory data analysis (EDA), while continuously improving my analytical and problem-solving skills.            </p>
          </div>

          <div className="bg-gray-950 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Highlights
            </h3>

            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li>Experience in Excel reporting and visualization</li>
              <li>Knowledge of Python and SQL for analytics</li>
              <li>Created dashboards using Tableau and Power BI</li>
              <li>Worked on data analysis projects and presentations</li>
              <li>Strong interest in business analytics and insights</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 md:px-20 py-20">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 px-5 py-3 rounded-2xl hover:border-cyan-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 md:px-20 py-20 bg-gray-900">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-gray-800 rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                {project.tools}
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <a
  href={project.link}
  target="_blank"
  className="bg-cyan-500 hover:bg-cyan-400 transition text-black px-5 py-2 rounded-xl font-semibold inline-block"
>
  View Project
</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 md:px-20 py-20">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

          <p className="text-gray-300 text-lg mb-8">
Open to opportunities and professional connections.          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:pravalikagoudr@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-400 transition text-black px-6 py-3 rounded-2xl font-semibold"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/pravalika-ravalkol-286aa627b/"
              target="_blank"
              className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition px-6 py-3 rounded-2xl font-semibold"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-500 text-sm">
        © 2026 Pravalika | Data Analyst Portfolio
      </footer>
    </div>
  );
}
