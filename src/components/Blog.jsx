// Blog.jsx
import React, { useState } from "react";

function Blog() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Updated blog posts
  const blogPosts = [
    {
      title: "Revolutionizing Data Analytics: The Power of LLMs and Generative AI",
      content: `
        <p>
          The data analytics landscape is undergoing a seismic shift, driven by the rapid evolution of Generative AI and Large Language Models (LLMs) such as OpenAI's GPT-4. 
          These advanced technologies are reshaping how analysts extract insights, streamline workflows, and unlock deeper, previously unattainable value from vast data sets.
        </p>
        
        <h4>Empowering Analysts through Natural Language</h4>
        <p>
          Traditional data analytics often required meticulous coding and intricate querying. Today, LLM-powered tools let analysts and stakeholders interact seamlessly 
          with complex databases using everyday language. For instance, an executive might ask, “Show me last quarter's sales compared to this quarter,” and an LLM 
          can instantly convert this query into precise SQL commands, retrieve the relevant data, and even generate easy-to-understand visuals.
        </p>
        
        <h4>Enhancing Productivity with Automated Analysis</h4>
        <p>
          Generative AI isn't limited to querying data—it also excels at interpreting and summarizing results. By leveraging retrieval-augmented generation (RAG), 
          an LLM can access contextual information, company-specific databases, or past analysis mistakes to deliver highly accurate, contextually aware insights. 
          This reduces analyst workloads, allowing them to focus more on strategic tasks rather than repetitive data extraction and interpretation.
        </p>
        
        <h4>Predictive Insights with Generative AI</h4>
        <p>
          Generative AI excels at pattern recognition, enabling advanced predictive analytics. By analyzing historical data, market trends, or consumer behaviors, 
          these models can suggest future outcomes, identify anomalies, or flag risks early. This capability helps businesses proactively respond to potential issues, 
          ensuring better strategic decision-making and improved risk management.
        </p>
        
        <h4>Democratizing Data Insights</h4>
        <p>
          Previously, sophisticated data analytics required specialized expertise, creating bottlenecks and limiting accessibility. Generative AI tools democratize data, 
          enabling users across all business areas—regardless of technical proficiency—to access, interpret, and utilize data-driven insights. This democratization fosters 
          a data-informed culture, improving collaboration and collective decision-making.
        </p>
        
        <h4>Real-World Applications</h4>
        <p>
          Organizations across industries, from healthcare and finance to marketing and logistics, are increasingly adopting LLM-driven analytics. 
          In healthcare, for example, analysts can quickly sift through extensive patient records to identify patterns in patient outcomes, optimizing treatments. 
          In finance, predictive insights help forecast market shifts, streamline risk management, and enhance customer experiences.
        </p>
        
        <h4>The Future: Smarter, Faster, More Insightful</h4>
        <p>
          As Generative AI continues advancing, data analytics will grow smarter, faster, and more intuitive. 
          The integration of LLMs into analytics platforms signals the beginning of a new era—one characterized by enhanced productivity, 
          richer insights, and broader accessibility.
        </p>

        <p>
          In conclusion, the use of Generative AI and LLMs in data analytics represents not just an evolution but a true revolution. 
          Businesses that harness these technologies early stand to gain substantial competitive advantages, 
          driving innovation and fueling future success.
        </p>
      `
    },
    {
      title: "From Legacy to Innovation: Transforming Business Data Infrastructure",
      content: `
        <p>
          In today's fast-paced digital economy, data infrastructure remains the lifeline of businesses. Yet, despite rapid advancements in technology, 
          many organizations continue to rely heavily on traditional, legacy data systems. While these systems have proven reliable in the past, 
          the limitations are becoming increasingly evident, compelling organizations to rethink and reshape their data strategies.
        </p>

        <h4>The Traditional Data Infrastructure: Robust but Rigid</h4>
        <p>
          Historically, businesses structured their data around relational database management systems (RDBMS), on-premises servers, 
          and rigid data warehouses. These systems, often siloed by department, require extensive manual management, 
          leading to bottlenecks, delays, and significant maintenance overhead.
        </p>
        <p>
          While traditional data infrastructure provides stability and predictability, it lacks the agility necessary to swiftly respond to today's dynamic market demands. 
          Complex integrations, high operational costs, limited scalability, and prolonged response times hinder business innovation and flexibility.
        </p>

        <h4>Challenges with Legacy Systems</h4>
        <ul>
          <li><strong>Data Silos:</strong> Data isolated in separate systems restricts holistic analysis and insights.</li>
          <li><strong>Scalability Issues:</strong> Legacy systems struggle to scale efficiently to handle increased data volume and velocity.</li>
          <li><strong>High Operational Costs:</strong> Maintaining and upgrading traditional infrastructures often demands significant resources and investments.</li>
          <li><strong>Slow Insights:</strong> Rigid architectures slow down data accessibility and analytics, delaying decision-making.</li>
        </ul>

        <h4>A New Era: Cloud-Based, Agile, and Intelligent Infrastructure</h4>
        <p>
          The future of business data infrastructure lies in flexibility, agility, and intelligence—achieved primarily through cloud computing, data lakes, 
          modern data warehouses, and AI-driven analytics.
        </p>
        <p>
          Cloud infrastructure, provided by platforms like Google Cloud Platform (GCP), Amazon Web Services (AWS), or Microsoft Azure, enables rapid scalability, 
          cost-effective management, and seamless integration across various data sources and formats.
        </p>

        <h4>Key Elements of Future-Proof Data Infrastructure</h4>
        <ul>
          <li><strong>Cloud-Based Data Lakes:</strong> Unlike traditional warehouses, data lakes can store vast volumes of structured and unstructured data, 
            facilitating versatile and rapid analytics.</li>
          <li><strong>Data Mesh and Decentralization:</strong> Moving away from centralized data teams towards domain-specific data ownership 
            improves data quality, governance, and responsiveness.</li>
          <li><strong>Real-Time Analytics:</strong> Modern infrastructure enables real-time data processing and analytics, 
            dramatically improving responsiveness to customer needs and market conditions.</li>
          <li><strong>AI Integration:</strong> Incorporating artificial intelligence and machine learning directly into the data infrastructure 
            streamlines analytics, enhances predictive capabilities, and automates decision-making processes.</li>
        </ul>

        <h4>Real-World Transition</h4>
        <p>
          Industries like retail, healthcare, and finance are already witnessing significant benefits from modernizing their data infrastructures. 
          Retailers leverage real-time data to optimize inventory management, while healthcare providers utilize cloud-based analytics 
          to accelerate patient insights and treatment outcomes.
        </p>

        <h4>The Way Forward</h4>
        <p>
          The path ahead involves embracing a hybrid or entirely cloud-based infrastructure, breaking down data silos, implementing automated analytics, 
          and adopting AI-driven processes. Businesses prepared to make this transition will experience enhanced agility, reduced costs, deeper insights, 
          and ultimately, sustained competitive advantage.
        </p>
        <p>
          In conclusion, transitioning from traditional to modern data infrastructure isn't merely beneficial—it's essential. 
          Organizations ready to adapt, evolve, and innovate their data strategies today are shaping the future of business intelligence.
        </p>
      `
    },
    {
      title: "Nexalytica Insights - Coming Soon!",
      content: ""
    }
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="blog"
      className="
        py-14
        px-5
        bg-gradient-to-r
        from-[#3B1C5A]
        to-[#0078FF]
        text-center
      "
    >
      <h2 className="text-2xl mb-4 text-[#FF2DB4]">Our Blog</h2>

      {/* Container for the vertical list of blog posts */}
      <div
        className="
          max-w-3xl
          mx-auto
          mt-8
          text-left
        "
      >
        {blogPosts.map((post, index) => {
          const hasContent = post.content.trim().length > 0;
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className="
                border-b
                border-[rgba(0,194,255,0.5)]
                py-4
                text-white
                relative
              "
            >
              {/* Title row (clickable if there's content) */}
              <div
                onClick={() => hasContent && handleToggle(index)}
                className={`
                  flex
                  justify-between
                  items-center
                  cursor-pointer
                  group
                  transition-all
                `}
              >
                <h3
                  className="
                    m-0
                    text-lg
                    text-[#FF2DB4]
                    transition-all
                  "
                >
                  {post.title}
                </h3>
                <span
                  className={`
                    arrow
                    text-[#FF2DB4]
                    text-lg
                    ml-2
                    transform
                    transition-transform
                    duration-300
                    ${isExpanded ? "rotate-90" : ""}
                    group-hover:[text-shadow:0_0_5px_rgba(0,244,255,0.7)]
                  `}
                >
                  &gt;
                </span>
              </div>

              {/* Hover glow on the title text itself */}
              <style>
                {`
                  .group:hover h3 {
                    text-shadow: 0 0 5px rgba(0, 244, 255, 0.7);
                  }
                `}
              </style>

              {/* Expand content if there's text and this item is expanded */}
              {hasContent ? (
                isExpanded && (
                  <div
                    className="
                      blog-content
                      mt-3
                      leading-relaxed
                    "
                    // Renders HTML from the content
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                )
              ) : (
                // Show "Yet to Post" if no content
                <p className="italic text-[rgba(195,232,255,0.75)] mt-2">
                  Yet to Post
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Blog;
