"use client"
import React, { useEffect } from "react";

const experiences = [
  {
    title: "Web Developer",
    company: "ADP Hyderabad, India",
    date: "06/2022 – 12/2023",
    details: [
      "Led UI improvements, applied scripting for customizations, and enhanced performance.",
      "Implemented AI and ML solutions, reducing user clicks, enhancing automation, and improving overall system efficiency.",
      "Designed dashboards and charts for effective data visualization."
    ]
  },
  {
    title: "Intern",
    company: "Smart bridge Education Pvt. Ltd Hyderabad, India",
    date: "08/2020 – 11/2020",
    details: [
      "Developed CNN-based pneumonia prediction model showcasing AI proficiency.",
      "Proficient in TensorFlow/PyTorch, specializing in preprocessing and augmentation.",
      "Applied AI to enhance medical diagnosis, achieving accurate predictions."
    ]
  },
  {
    title: "Intern",
    company: "PepsiCo Sangareddy, India",
    date: "01/2019 – 06/2019",
    details: [
      "Contributed to PepsiCo cool drink production and machine maintenance.",
      "Applied problem-solving skills to address challenges in beverage manufacturing."
    ]
  }
];

const ExperienceSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.experience-card');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('animate-slide-in');
        } else {
          element.classList.remove('animate-slide-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-bold">
          Experience
          <hr className="w-16 h-1 mx-auto my-4 bg-teal-600 border-0 rounded" />
        </h1>
        
        <div className="relative mt-12">
          <div className="border-l-4 border-teal-600 absolute h-full left-1/2 transform -translate-x-1/2 flex flex-col justify-center">
            <div className="bg-teal-600 w-4 h-4 rounded-full mt-2"></div>

          </div>
          <div className="space-y-12">
            {experiences.map((experience, idx) => (
              <div key={idx} className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} items-center w-full text-white`}>
                <div className={`experience-card transform transition-transform duration-500 ${idx % 2 === 0 ? 'slide-left' : 'slide-right'} w-full md:w-1/2 px-4 py-6 bg-gray-800 shadow-lg rounded-lg`}>
                  <h2 className="text-3xl font-semibold mb-2 text-teal-600">{experience.title}</h2>
                  <p className="text-lg font-medium">{experience.company}</p>
                  <p className="text-sm font-light">{experience.date}</p>
                  <ul className="mt-4 list-disc list-inside text-white">
                    {experience.details.map((detail, detailIdx) => (
                      <li key={detailIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
