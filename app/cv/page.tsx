import Link from 'next/link';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 antialiased">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        
        {/* Back Button */}
        <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline mb-8 inline-block">
          &larr; Back to Portfolio
        </Link>

        {/* Header */}
        <header className="border-b border-gray-100 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Alex Developer</h1>
            <p className="text-lg text-blue-600 font-medium mt-1">Full-Stack Web Engineer</p>
          </div>
          <div className="text-sm text-gray-500 space-y-1 md:text-right">
            <p>hello@yourdomain.com</p>
            <p>+1 (555) 019-2834</p>
            <p>San Francisco, CA</p>
          </div>
        </header>

        {/* Experience Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-4 border-l-4 border-blue-600 pl-3">
            Work Experience
          </h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-800 text-lg">Senior Frontend Engineer</h3>
                <span className="text-sm text-gray-500">2024 — Present</span>
              </div>
              <p className="text-sm text-blue-600 font-medium mb-2">TechCorp Solutions</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Led a team of 4 developers to rebuild a legacy dashboard into a modern Next.js application, improving core web vitals by 40% and boosting user engagement.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-800 text-lg">Web Developer</h3>
                <span className="text-sm text-gray-500">2022 — 2024</span>
              </div>
              <p className="text-sm text-blue-600 font-medium mb-2">Pixel Perfect Agency</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Developed responsive, accessible, and high-performing client sites using React and Tailwind CSS. Integrated Stripe API for custom e-commerce stores.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-4 border-l-4 border-blue-600 pl-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Java Spring Boot" , "Tailwind CSS", "Git", "REST APIs"].map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-4 border-l-4 border-blue-600 pl-3">
            Education
          </h2>
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="font-bold text-gray-800">B.S. in Computer Science</h3>
              <p className="text-sm text-gray-600">University of Technology</p>
            </div>
            <span className="text-sm text-gray-500">2018 — 2022</span>
          </div>
        </section>

      </div>
    </div>
  );
}