import { Link, Navigate, useParams } from 'react-router-dom';
import { caseStudies } from './caseStudies';
import './DesignPortfolio.css';

function CaseStudyPage() {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return <Navigate replace to="/" />;
  }

  return (
    <main className="portfolio-page">
      <header className="portfolio-nav">
        <Link className="header-secondary-btn" to="/" aria-label="Back to portfolio home">
          Back
        </Link>
        <Link className="header-resume-btn" to="/resume" aria-label="Open resume preview page">
          Resume
        </Link>
      </header>

      <section className="case-study-hero">
        <img src={caseStudy.img} alt={caseStudy.title} className="case-study-image" loading="eager" />
      </section>

      <section className="case-study-content">
        <h1 className="case-study-title">{caseStudy.title}</h1>
        <p className="portfolio-category">{caseStudy.category}</p>
        <h2 className="case-study-heading">Project Overview</h2>
        <p className="case-study-summary">{caseStudy.summary}</p>
      </section>
    </main>
  );
}

export default CaseStudyPage;