import { Link } from 'react-router-dom';
import resume from './assets/documents/James_Pleau_Front_End_Resume.pdf';
import './DesignPortfolio.css';

function ResumePreview() {
  return (
    <main className="portfolio-page">
      <header className="portfolio-nav">
        <Link className="header-secondary-btn" to="/" aria-label="Back to portfolio home">
          Back
        </Link>
        <a className="header-resume-btn" href={resume} download="James_Pleau_Front_End_Resume.pdf" aria-label="Download resume">
          Download
        </a>
      </header>

      <section className="resume-preview-shell" aria-label="Resume preview">
        <iframe
          className="resume-preview-frame"
          src={`${resume}#view=FitH`}
          title="James Pleau resume preview"
          loading="lazy"
        />
        <p className="resume-preview-fallback">
          If the preview does not load on your device, use the Download button above.
        </p>
      </section>
    </main>
  );
}

export default ResumePreview;
