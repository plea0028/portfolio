import './DesignPortfolio.css';
import { Link } from 'react-router-dom';
import { caseStudies } from './caseStudies';

function DesignPortfolio() {
  return (
    <main className="portfolio-page">
      <header className="portfolio-nav">
        <Link to="/" className="portfolio-logo-link" aria-label="Go to home page">
          <h1 className="portfolio-logo">James Pleau</h1>
        </Link>
        <Link className="header-resume-btn" to="/resume" aria-label="Open resume preview page">
          Resume
        </Link>
      </header>

      <section className="portfolio-hero">
        <p className="portfolio-greeting">Digital Product Designer</p>
        <p className="portfolio-description">
          Designing and prototyping the next generation of mobile experiences.
        </p>
      </section>

      <section className="portfolio-carousel" aria-label="Case studies">
        {caseStudies.map((item) => (
          <Link key={item.id} className="portfolio-card" to={`/case-study/${item.slug}`}>
            <img src={item.img} alt={item.title} className="portfolio-card-image" loading="lazy" />
            <div className="portfolio-card-overlay">
              <p className="portfolio-category">{item.category}</p>
              <h2 className="portfolio-title">{item.title}</h2>
            </div>
          </Link>
        ))}
      </section>

    </main>
  );
}

export default DesignPortfolio;
