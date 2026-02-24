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
              <Link href="#" className="footer-link">Contact Us</Link>
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
              <p className="footer-list-title">Products for exports</p>
            </li>
            <li>
              <Link href="#" className="footer-link">Rolling shutter guide</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Rolling shutter</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Binding wire</Link>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2025 Aantara Steel Pvt Ltd. All Rights Reserved by{' '}
            <Link href="#" className="copyright-link">Aantara steels</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}