import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top section">
          <div className="footer-brand">
            <Link href="#" className="flex-center">
              <div>
                <Image
                  src="/logo.png"
                  alt="Aantara Steel Logo"
                  width={100}
                  height={100}
                  style={{ width: '10rem', height: 'auto' }}
                />
              </div>
              <div>
                <div className="logo">Aantara Steel</div>
              </div>
            </Link>

            <p className="footer-text">
              Aantara Steel: Exporting Excellence, Delivering Strength. 
              Leading the global steel export industry with unmatched quality and service.
            </p>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Quick Links</p>
            </li>
            <li>
              <Link href="#" className="footer-link">Home</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">About us</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Products</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Services</Link>
            </li>
            <li>
              <Link href="#contact" className="footer-link">Contact Us</Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Services</p>
            </li>
            <li>
              <Link href="#" className="footer-link">Timely Deliveries</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Easy Documents</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Premium and superior products</Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Info</p>
            </li>
            <li>
              <Link href="tel:+919834401574" className="footer-link">+91 9834401574</Link>
            </li>
            <li>
              <Link href="tel:+917028693829" className="footer-link">+91 7028693829</Link>
            </li>
            <li>
              <Link href="mailto:Aantarasteel@gmail.com" className="footer-link">aantarasteel@gmail.com</Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Products for exports</p>
            </li>
            <li>
              <Link href="/products" className="footer-link">Fencing wire</Link>
            </li>
            <li>
              <Link href="/products" className="footer-link">Rolling shutter spring</Link>
            </li>
            <li>
              <Link href="/products" className="footer-link">Binding wire</Link>
            </li>
            <li>
              <Link href="/products" className="footer-link">Rolling shutter guide</Link>
            </li>
            <li>
              <Link href="/products" className="footer-link">Rolling shutter L bracket</Link>
            </li>
            <li>
              <Link href="/products" className="footer-link">Galvanised steel strip</Link>
            </li>
            <li>
              <Link href="/products" className="footer-link">Rolling shutter</Link>
            </li>
            <li>
              <Link href="/products" className="footer-link">Rolling shutter Spring Wire</Link>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2026 Aantara Steel Pvt Ltd. All Rights Reserved by{' '}
            <Link href="#" className="copyright-link">Aantara steels</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}