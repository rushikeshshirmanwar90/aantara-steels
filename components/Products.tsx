import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  const products = [
    {
      id: '01',
      name: 'Galvanised Steel Strip',
      description: 'Corrosion-resistant steel strips coated with zinc, offering enhanced durability and protection for industrial, construction, and manufacturing applications',
      image: '/assets/images/product imgs/6. Galvanised steel strip.jpg'
    },
    {
      id: '02',
      name: 'Rolling Shutter',
      description: 'Versatile and robust metal shutters designed for securing commercial, industrial, and residential spaces with reliable protection',
      image: '/assets/images/product imgs/7. Rolling shutter.jpg'
    },
    {
      id: '03',
      name: 'Shutter Steel Wire',
      description: 'High-quality spring wire specifically manufactured for rolling shutter mechanisms, providing optimal tension and smooth',
      image: '/assets/images/product imgs/8. Rolling shutter spring wire.jpg'
    }
  ];

  return (
    <section className="section" id="product" aria-label="product">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle">our Products</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
              <h2 className="h2 section-title">
                Provides the Best Quality Product
              </h2>
              <Link
                href="/Anatara-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '1.2rem 2.5rem',
                  backgroundColor: '#FF6B35',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.75rem',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.7rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E55A24';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF6B35';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 53, 0.3)';
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>📄</span>
                View Brochure
              </Link>
            </div>
          </div>

          <Link
            href="/products"
            style={{ margin: '2.5rem auto' }}
            className="btn"
          >
            See More Products
          </Link>
        </div>

        <ul className="grid-list" style={{ margin: '5rem 0' }}>
          {products.map((product) => (
            <li key={product.id}>
              <div className="service-card product-card-home">
                <div className="card-icon">
                  <Image
                    src={product.image}
                    width={250}
                    height={250}
                    loading="lazy"
                    className="img"
                    alt={product.name}
                  />
                </div>

                <h3 className="h3 card-title">
                  <span className="span">{product.id}</span>{product.name}
                </h3>

                <div className="card-text-container">
                  <p className="card-text">
                    {product.description}...
                  </p>
                  <Link href="/products" className="see-more-link">
                    See More
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}