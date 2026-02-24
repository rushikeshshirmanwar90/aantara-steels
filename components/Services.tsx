import Image from 'next/image';
import Link from 'next/link';
import IonIcon from './IonIcon';

export default function Services() {
  const services = [
    {
      id: '01',
      title: 'Timely Deliveries',
      description: 'Never miss a beat. Speed meets deadlines. Streamlined logistics ensure seamless arrivals. Guaranteed on-time arrival, every time. Speed meets your deadlines, no sweat.',
      icon: '/assets/images/services/delivery-truck.png'
    },
    {
      id: '02',
      title: 'Easy Documentations',
      description: 'Export made simple. Clear & efficient processing. No red tape, just results. Exporting simplified. We handle paperwork, you focus on business. Stress-free, efficient exports.',
      icon: '/assets/images/services/documents.webp'
    },
    {
      id: '03',
      title: 'Premium and superior products',
      description: 'Quality your customers trust. Uncompromising standards elevate your brand. Exceed expectations. Unmatched quality you can trust. Elevate your brand with excellence. Stand out with exclusivity.',
      icon: '/assets/images/services/quality.png'
    }
  ];

  return (
    <section className="section feature" id="service" aria-label="service">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle">our Services</p>
            <h2 className="h2 section-title">
              What we provide which other doesn&apos;t
            </h2>
            <p className="section-text">
              Go beyond &quot;reliable&quot;. We turbocharge your exports with
              lightning-fast deliveries and streamlined logistics, ensuring
              timely arrivals that keep your business ahead of the curve.
              Don&apos;t settle for the ordinary, experience export at its
              fastest.
            </p>
          </div>

          <Link href="tel:9579896842" className="btn">Contact us now</Link>
        </div>

        <ul className="feature-list grid-list">
          {services.map((service) => (
            <li key={service.id}>
              <div className="feature-card" style={{ '--card-number': `'${service.id}'` } as React.CSSProperties}>
                <div className="card-icon">
                  <Image
                    src={service.icon}
                    width={72}
                    height={91}
                    alt={service.title}
                  />
                </div>

                <h3 className="h3 card-title">{service.title}</h3>

                <p className="card-text">
                  {service.description}
                </p>

                <Link
                  href="tel:9579896842"
                  className="card-btn"
                  aria-label="Read more"
                >
                  <IonIcon name="arrow-forward" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}