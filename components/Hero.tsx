import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="section hero"
      aria-label="home"
      id="home"
      style={{ backgroundImage: "url('/assets/images/bg-img.jpg')" }}
    >
      <div className="container">
        <div className="hero-content">
          <h2 className="h1 hero-title">
            <span className="span">Aantara Steel</span>
            <span className="def">Pvt Ltd <sup>TM</sup></span>
          </h2>

          <p className="hero-text">
            Aantara Steel: Exporting Excellence, Delivering Strength.
          </p>

          <Link href="#product" className="btn-outline">View Product</Link>

          <Image
            src="/assets/images/hero-shape.png"
            width={116}
            height={116}
            loading="lazy"
            className="hero-shape shape-1"
            alt="Hero shape"
          />

          <Image
            src="/assets/images/hero-shape.png"
            width={116}
            height={116}
            loading="lazy"
            className="hero-shape shape-2"
            alt="Hero shape"
          />
        </div>
      </div>
    </section>
  );
}