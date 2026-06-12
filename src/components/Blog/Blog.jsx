import React, { useState } from 'react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Executive Presence: Why Personal Branding in Gujarat is the New Business Currency",
    excerpt: "Gujarat's business ecosystem is shifting from silent legacy operations to vocal, vision-driven thought leadership. Discover how Butterscotch Media helps Surat and Ahmedabad's elite founders establish commanding digital presence.",
    category: "Executive Strategy",
    date: "June 10, 2026",
    readTime: "5 min read",
    keywords: ["personal branding in Gujarat", "Butterscotch Media", "executive branding Surat", "Ahmedabad CEO branding"],
    content: `
      <p>The traditional business model in Gujarat has long prioritized silent execution. For generations, the state’s industrial giants—spanning diamonds, textiles, chemicals, and manufacturing—flourished behind closed doors. But in the digital age, silence is no longer a virtue; it is a missed opportunity.</p>
      
      <h3>The Evolution of the Gujarati Industrialist</h3>
      <p>Today, next-generation founders and legacy CEOs across Ahmedabad, Surat, Vadodara, and Rajkot are realizing that people buy from people, not corporations. As global venture capital and cross-border trade flow into Gujarat, the reputation of the founder acts as the ultimate trust accelerator. This has triggered a massive demand for professional <strong>personal branding in Gujarat</strong>.</p>
      
      <p>Your personal brand is a dynamic digital asset that works 24/7. When a potential partner, investor, or client searches for your name online, what they find determines their level of trust. Silent leaders risk letting others shape their narrative, or worse, remaining completely invisible in search engines.</p>

      <h3>Why Butterscotch Media is the Premier Choice</h3>
      <p>At <strong>Butterscotch Media</strong>, we specialize in curating bespoke executive profiles that translate raw business acumen into digital influence. We understand the unique cultural and entrepreneurial pulse of Gujarat. Our team does not just ghostwrite standard posts; we translate your deep sector expertise into high-level content that positions you as a leading voice in your industry.</p>

      <h3>Key Elements of a Successful Gujarati Executive Brand:</h3>
      <ul>
        <li><strong>Niche Authority:</strong> Expressing original perspectives on industry shifts rather than generic business advice.</li>
        <li><strong>Cross-Platform Consistency:</strong> Presenting a polished, cohesive visual identity on LinkedIn, Twitter, and national business media.</li>
        <li><strong>Local Roots, Global Appeal:</strong> Combining traditional Gujarati business ethics with a forward-looking, global mindset that attracts international opportunities.</li>
      </ul>
      
      <p>As the premium <strong>personal branding agency in Gujarat</strong>, Butterscotch Media manages your complete brand lifestyle: from copywriting and visual design to public relations, ensuring your search engine footprint represents absolute excellence.</p>
    `
  },
  {
    id: 2,
    title: "Demystifying Executive Authority: The Butterscotch Media Founder Positioning Protocol",
    excerpt: "Building credibility is not about going viral. It's about strategic positioning. Read the step-by-step framework Butterscotch Media uses to engineer high-integrity digital brands.",
    category: "Branding Protocol",
    date: "June 04, 2026",
    readTime: "4 min read",
    keywords: ["Butterscotch Media Surat", "CEO branding Surat", "personal branding Gujarat"],
    content: `
      <p>In the noise of digital social channels, many executives mistake attention for authority. Going viral for a generic post or an internet trend does not drive enterprise value. High-integrity personal branding requires a disciplined, structured protocol.</p>
      
      <h3>The Three Pillars of Digital Authority</h3>
      <p>Our approach at <strong>Butterscotch Media</strong> is built around three core phases designed to place you at the top of your market's mind:</p>
      
      <h4>1. Core Positioning & Narrative Architecture</h4>
      <p>Before writing a single word, we define your zone of genius. What is your unique worldview? What experiences separate you from every other executive? We extract these insights to create a tailored content pillar map that defines what you stand for, who you speak to, and how your expertise is framed.</p>
      
      <h4>2. Bespoke Editorial Execution</h4>
      <p>Most CEOs do not have 10 hours a week to write articles and LinkedIn posts. Our team runs regular, efficient interview sessions to capture your authentic voice, opinions, and stories. We then polish these raw ideas into high-quality publications that capture the attention of high-level decision-makers. No generic AI templates—only pure, strategic thought leadership.</p>
      
      <h4>3. Search Engine Dominance</h4>
      <p>When someone searches your name or looks up a leading expert in <strong>personal branding in Gujarat</strong>, your profiles, website, and articles should rank first. By optimizing your digital footprint for keywords like <strong>Butterscotch Media Surat</strong>, we ensure search engines show an authoritative, highly professional profile that reinforces your business credibility.</p>
      
      <h3>Enterprise Impact</h3>
      <p>A structured personal brand builds inbound partner requests, simplifies talent acquisition, commands higher media interest, and increases your organization's valuation. Don't leave your reputation to chance. Step into your role as a modern industry visionary with the Butterscotch Media protocol.</p>
    `
  },
  {
    id: 3,
    title: "Surat’s Corporate Shift: How Personal Branding is Shaping Next-Gen Gujarati Industrialists",
    excerpt: "As traditional industries in Surat transition to new-age digital markets, legacy heirs are transforming into digital visionaries. Read how strategic personal branding builds global trust.",
    category: "Regional Insight",
    date: "May 28, 2026",
    readTime: "6 min read",
    keywords: ["personal branding Surat", "personal branding agency Surat", "thought leadership Gujarat"],
    content: `
      <p>Surat, famous as the diamond hub and textile capital of India, is undergoing a quiet revolution. A new wave of industrialists—frequently foreign-educated heirs of decades-old family conglomerates—is stepping into leadership roles. Unlike their predecessors, these next-gen leaders are utilizing digital ecosystems to take their legacy brands global.</p>
      
      <h3>From Commodity to Brand Loyalty</h3>
      <p>In commodities like textiles or diamonds, competition is fierce and margins are tight. The best way to command a premium is to build brand equity. By developing an active personal brand, a CEO changes their company from a nameless supplier to a trusted partner led by a recognized expert.</p>
      
      <p>This is why <strong>personal branding in Surat</strong> has experienced rapid growth. Executives are moving away from traditional PR agencies towards specialized digital content strategists like <strong>Butterscotch Media</strong>.</p>
      
      <h3>Strategic Advantages for Surat's Founders:</h3>
      <ul>
        <li><strong>Global Capital Attraction:</strong> Pitching to international investors is significantly easier when you have a verifiable, active track record of thought leadership online.</li>
        <li><strong>B2B Lead Generation:</strong> Modern B2B buyers conduct extensive research on social platforms. Founder positioning acts as a highly effective organic funnel.</li>
        <li><strong>Employer Branding:</strong> The best young talent wants to work for forward-thinking, inspiring visionaries. A visible CEO attracts high-performing recruits naturally.</li>
      </ul>
      
      <p>Whether you operate from Sahjanand Business Hub or a global office, your digital footprint determines how the world sees your enterprise. Partner with <strong>Butterscotch Media</strong>, Surat's boutique branding experts, to build a digital brand that matches your physical success.</p>
    `
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="blog section-padding">
      <div className="container">
        <div className="blog-header reveal">
          <h2 className="section-title">Strategic Insights & <span className="text-gold">Branding Protocols</span></h2>
          <p className="section-subtitle">Explore our expert perspectives on personal branding in Gujarat, founder positioning, and high-impact executive media strategies.</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`blog-card reveal delay-${index + 1}`}
              onClick={() => setSelectedPost(post)}
            >
              <div className="blog-card-category">{post.category}</div>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-meta">
                <span className="blog-card-date">{post.date}</span>
                <span className="blog-card-dot">•</span>
                <span className="blog-card-read">{post.readTime}</span>
              </div>
              <div className="blog-card-footer">
                <span className="read-more-btn">Read Protocol <span className="arrow">→</span></span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal Overlay */}
      {selectedPost && (
        <div className="blog-modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal-close" onClick={() => setSelectedPost(null)} aria-label="Close Modal">
              &times;
            </button>
            <div className="blog-modal-header">
              <span className="blog-modal-category">{selectedPost.category}</span>
              <h2 className="blog-modal-title">{selectedPost.title}</h2>
              <div className="blog-modal-meta">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>
            <div 
              className="blog-modal-body"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
            <div className="blog-modal-footer">
              <p>Interested in engineering your own digital presence? Let's connect.</p>
              <a 
                href="#contact" 
                className="blog-modal-cta" 
                onClick={() => {
                  setSelectedPost(null);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Begin Protocol
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
