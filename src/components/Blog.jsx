import React, { useState } from "react";

function Blog() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const blogPosts = [
    {
      title: "Revolutionizing Data Analytics: The Power of LLMs and Generative AI",
      date: "December 15, 2024",
      author: "Nexalytica Team",
      readTime: "8 min read",
      category: "AI & Analytics",
      excerpt: "Discover how Large Language Models are reshaping the data analytics landscape, enabling natural language queries and democratizing data insights.",
      content: `
        <p>
          The data analytics landscape is undergoing a seismic shift, driven by the rapid evolution of Generative AI and Large Language Models (LLMs) such as OpenAI's GPT-4. 
          These advanced technologies are reshaping how analysts extract insights, streamline workflows, and unlock deeper, previously unattainable value from vast data sets.
        </p>
        
        <h4>Empowering Analysts through Natural Language</h4>
        <p>
          Traditional data analytics often required meticulous coding and intricate querying. Today, LLM-powered tools let analysts and stakeholders interact seamlessly 
          with complex databases using everyday language. For instance, an executive might ask, "Show me last quarter's sales compared to this quarter," and an LLM 
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
      date: "December 8, 2024",
      author: "Nexalytica Team",
      readTime: "10 min read",
      category: "Data Infrastructure",
      excerpt: "Learn how modern businesses are transitioning from rigid legacy systems to agile, cloud-based data infrastructures.",
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
      date: "Coming Soon",
      author: "Nexalytica Team",
      readTime: "",
      category: "Announcement",
      excerpt: "Stay tuned for more exciting insights and updates from the Nexalytica team.",
      content: ""
    }
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getCategoryColor = (category) => {
    const colors = {
      "AI & Analytics": "from-purple-400 to-pink-400",
      "Data Infrastructure": "from-cyan-400 to-blue-400",
      "Announcement": "from-gray-400 to-gray-500",
    };
    return colors[category] || "from-gray-400 to-gray-500";
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
            Our Blog
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Insights, trends, and innovations in data analytics and AI
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post, index) => {
            const hasContent = post.content.trim().length > 0;
            const isExpanded = expandedIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <article
                key={index}
                className={`
                  bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden
                  border transition-all duration-500 cursor-pointer
                  ${isExpanded || isHovered
                    ? 'border-pink-500/50 shadow-lg shadow-pink-500/10' 
                    : 'border-gray-700/50 hover:border-gray-600/50'
                  }
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => hasContent && handleToggle(index)}
              >
                {/* Blog Post Header */}
                <div className="p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      {/* Category Badge */}
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`
                          px-3 py-1 text-xs font-medium rounded-full
                          bg-gradient-to-r ${getCategoryColor(post.category)} text-gray-900
                        `}>
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.date}</span>
                        {post.readTime && (
                          <span className="text-gray-500 text-sm">• {post.readTime}</span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className={`
                        text-2xl font-bold mb-3 transition-all duration-300
                        ${isExpanded || isHovered
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400'
                          : 'text-white'
                        }
                      `}>
                        {post.title}
                      </h3>

                      {/* Author */}
                      <p className="text-gray-400 text-sm mb-4">
                        By {post.author}
                      </p>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-gray-300 leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                    </div>

                    {/* Read More Indicator */}
                    {hasContent && (
                      <div className={`
                        flex-shrink-0 w-10 h-10 rounded-full
                        bg-gradient-to-r ${getCategoryColor(post.category)}
                        flex items-center justify-center
                        transform transition-all duration-300
                        ${isExpanded ? 'rotate-180' : 'group-hover:scale-110'}
                      `}>
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Coming Soon Badge */}
                  {!hasContent && (
                    <div className="mt-4 inline-flex items-center px-4 py-2 bg-gray-700/50 rounded-full">
                      <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-sm font-medium">Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Expanded Content */}
                {hasContent && isExpanded && (
                  <div className="border-t border-gray-700/50 bg-black/40">
                    <div 
                      className="p-8 text-white"
                      style={{ fontSize: '16px', lineHeight: '1.8' }}
                    >
                      <div dangerouslySetInnerHTML={{ 
                        __html: post.content.replace(
                          /<h4>/g, '<h4 style="color: #00E6FF; font-size: 20px; font-weight: bold; margin-top: 24px; margin-bottom: 16px;">'
                        ).replace(
                          /<p>/g, '<p style="color: #ffffff; margin-bottom: 16px;">'
                        ).replace(
                          /<li>/g, '<li style="color: #ffffff; margin-bottom: 8px; margin-left: 20px;">'
                        ).replace(
                          /<strong>/g, '<strong style="color: #00E6FF; font-weight: 600;">'
                        )
                      }} />
                    </div>
                    
                    {/* Share Section */}
                    <div className="px-8 pb-8">
                      <div className="pt-6 border-t border-gray-700/50">
                        <p className="text-gray-400 text-sm mb-4">Share this article:</p>
                        <div className="flex gap-3">
                          {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                            <button
                              key={platform}
                              className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 text-sm font-medium transition-colors duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {platform}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Nexalytica Insights
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss our latest articles on data analytics, AI innovations, and industry trends.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Blog;