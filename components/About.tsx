import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner img-holder" style={{ maxWidth: '100%' }}>
          <Image
            src="/assets/images/about us.jpg"
            width={400}
            height={720}
            loading="lazy"
            alt="About us"
            className="img-cover"
            style={{ borderRadius: '1rem' }}
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">Why Choose Us</p>

          <h2 className="h2 section-title">About us</h2>

          <p className="section-text" style={{ fontSize: '2rem' }}>
            Aantara Steels is a leading name in the global steel export
            industry, dedicated to delivering unmatched quality and service.
            With a strong focus on excellence, reliability, and customer
            satisfaction, we specialize in exporting premium steel products
            to clients worldwide. Our expertise spans a diverse range of
            markets, ensuring seamless international trade operations.
            Backed by a skilled team and a deep understanding of global
            markets, Aantara Steels is committed to navigating the
            complexities of the steel export industry with precision and
            professionalism, making us a trusted partner for all your steel
            export needs.
          </p>

          <div className="company-details">
            <div className="details-grid">
              <div className="detail-item">
                <h4 className="detail-title">Year of Establishment</h4>
                <p className="detail-value">2010</p>
              </div>
              <div className="detail-item">
                <h4 className="detail-title">Number of Staff</h4>
                <p className="detail-value">10</p>
              </div>
              <div className="detail-item">
                <h4 className="detail-title">Annual Turnover</h4>
                <p className="detail-value">₹7.5 Cr</p>
              </div>
              <div className="detail-item">
                <h4 className="detail-title">IE Code</h4>
                <p className="detail-value">ABBCA8405G</p>
              </div>
            </div>
          </div>

          <Link href="#contact" className="btn">Learn More</Link>
        </div>
      </div>
    </section>
  );
}