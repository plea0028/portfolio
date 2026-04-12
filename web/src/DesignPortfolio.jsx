import './DesignPortfolio.css';

const caseStudies = [
  {
    id: '1',
    title: 'Aura UI Kit',
    category: 'Product Design',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200',
  },
  {
    id: '2',
    title: 'NeoBank App',
    category: 'Fintech UX',
    img: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1200',
  },
  {
    id: '3',
    title: 'Flow Planner',
    category: 'Interaction',
    img: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=1200',
  },
];

function downloadResume() {

    // TODO: need to create this
//   const link = document.createElement('a');
//   link.href = '/resume.pdf';
//   link.download = 'James_Pleau_Resume.pdf';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
}

function clickHandler(event) {
  event.preventDefault();
  alert('Resume download coming soon!');
//   downloadResume();
}

function DesignPortfolio() {
  return (
    <main className="portfolio-page">
      <header className="portfolio-nav">
        <h1 className="portfolio-logo">James Pleau</h1>
        <span className="menu-dot" aria-hidden="true" />
      </header>

      <section className="portfolio-hero">
        <p className="portfolio-greeting">Digital Product Designer</p>
        <p className="portfolio-description">
          Crafting intuitive interfaces and delightful experiences for mobile-first startups.
        </p>
      </section>

      <section className="portfolio-carousel" aria-label="Case studies">
        {caseStudies.map((item) => (
          <article key={item.id} className="portfolio-card">
            <img src={item.img} alt={item.title} className="portfolio-card-image" loading="lazy" />
            <div className="portfolio-card-overlay">
              <p className="portfolio-category">{item.category}</p>
              <h2 className="portfolio-title">{item.title}</h2>
            </div>
          </article>
        ))}
      </section>

      <footer className="portfolio-footer">
        <a className="portfolio-contact-btn" href="#" onClick={clickHandler}>
          View My Resume
        </a>
      </footer>
    </main>
  );
}

export default DesignPortfolio;
