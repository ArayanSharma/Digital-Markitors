
import React, { useState } from "react";
import "../../Styles/faq.css";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "Will I have a dedicated point of contact or account manager?",
    answer:
      "Of course, you will! At Digicore Inc., we assign a dedicated account manager to every client to ensure seamless communication, personalized support and a smooth execution of all campaigns. He/she will be your primary point of contact for all communication and strategic discussions.",
  },
  {
    question:
      "Does your team have experience in my specific industry (e.g., healthcare, e-commerce, SaaS)?",
    answer:
      "Yes! Our team includes seasoned digital marketing experts with extensive experience across a wide range of industries, including yours. We take care of everything from crafting data-driven SEO strategies to executing full-scale digital campaigns. To know how we have helped clients achieve measurable growth and outstanding results across sectors, please explore our portfolio of detailed case studies on the Case Studies page.",
  },
  {
    question:
      "Is your team in-house, or do you outsource any work?",
    answer:
      "We have a team of in-house experts. All core strategies, executions and reporting are handled by our in-house experts to maintain quality control. However, for highly specialized tasks, we do outsource to trusted experts.",
  },
  {
    question:
      "How does your team stay updated with the latest digital marketing trends and algorithm changes?",
    answer:
      "We do conduct regular trainings and workshops for our team. Aside from that, our team members also attend industry conferences and seminars to stay abreast about the latest digital marketing trends and algorithm changes.",
  },
  {
    question:
      "How do you measure the success of a campaign?",
    answer:
      "We begin by defining Key Performance Indicators (KPIs) relevant to your goals, such as ROI, cost per acquisition, conversion rate, organic traffic and so on. In addition to that, we utilize cutting-edge tools, such as Google Analytics and marketing automation platforms for tracking performance and ensure every campaign stays aligned with your goal.",
  },
  {
    question:
      "Can you guarantee specific rankings or results?",
    answer:
      "We don’t guarantee anything, we put in our best efforts, strategic expertise and experience into action to deliver sure shot results. We focus on delivering measurable, long-term results rather than promising something unrealistic.",
  },
  {
    question:
      "Do you have experience working within my specific industry?",
    answer:
      "Yes, we do have experience of working in your industry. We have partnered with businesses across various sectors, including healthcare, education, travel, retail and so on. Some of our success stories are already there on our Case Studies page. Please visit the same to know how we can help you grow and sustain in this overly crowded digital realm.",
    },
    {
    question:
      "What is your process for creating a customized digital marketing strategy?",
    answer:
      "At Digicore Inc., the process of creating a customized digital marketing strategy begins with understanding your business, current challenges and your digital marketing goals. The insights gained from primary consultation are then used to curate a bespoke strategy tailored specifically to your brand, which are then shared with you for inputs and approval.",
  },  
  {
    question:
      "How often will we communicate, and what methods do you use?",
    answer:
      "It depends on the intricacy of the project and the specific goals you want to achieve. Usually, we provide detailed reports and schedule video conferences on bi-monthly basis; however, we can tailor the frequency (if needed).",
  }
    
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2>FAQ</h2>
        <div className="faq-line"></div>
      </div>

      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              {activeIndex === index ? (
                <Minus size={28} />
              ) : (
                <Plus size={28} />
              )}
            </button>

            <div
              className={`faq-answer ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;