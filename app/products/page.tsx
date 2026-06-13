import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProductsPage() {
  const products = [
    {
      id: '01',
      name: 'Fencing wire',
      description: 'High-tensile steel wire designed for constructing secure and durable fencing solutions, ideal for agricultural, industrial, and residential boundary demarcations.',
      image: '/assets/images/product imgs/1. fencing wire.jpg'
    },
    {
      id: '02',
      name: 'Rolling shutter spring',
      description: 'Precision-engineered steel springs specifically designed for rolling shutter mechanisms, ensuring smooth operation, durability, and consistent performance.',
      image: '/assets/images/product imgs/2. Rolling shutter spring wire.jpg'
    },
    {
      id: '03',
      name: 'Binding wire',
      description: 'Strong, flexible steel wire used for reinforcement and securing purposes in construction, concrete work, and other industrial applications.',
      image: '/assets/images/product imgs/3. Binding wire.jpg'
    },
    {
      id: '04',
      name: 'Rolling shutter guide',
      description: 'Sturdy metal guide rails designed to facilitate smooth and aligned movement of rolling shutters, ensuring consistent and reliable operation.',
      image: '/assets/images/product imgs/4. Rolling shutter guide.jpg'
    },
    {
      id: '05',
      name: 'Rolling shutter L bracket',
      description: 'Robust L-shaped metal brackets that provide structural support and secure mounting for rolling shutter systems in various architectural configurations.',
      image: '/assets/images/product imgs/5. Rolling shutter L bracket.jpg'
    },
    {
      id: '06',
      name: 'Galvanised steel strip',
      description: 'Corrosion-resistant steel strips coated with zinc, offering enhanced durability and protection for industrial, construction, and manufacturing applications.',
      image: '/assets/images/product imgs/6. Galvanised steel strip.jpg'
    },
    {
      id: '07',
      name: 'Rolling shutter',
      description: 'Versatile and robust metal shutters designed for securing commercial, industrial, and residential spaces with reliable protection and easy operation.',
      image: '/assets/images/product imgs/7. Rolling shutter.jpg'
    },
    {
      id: '08',
      name: 'Rolling shutter Spring Wire',
      description: 'High-quality spring wire specifically manufactured for rolling shutter mechanisms, providing optimal tension and smooth mechanical performance.',
      image: '/assets/images/product imgs/8. Rolling shutter spring wire.jpg'
    }
  ];

  return (
    <div>
      <Header forceActive={true} />
      
      <div style={{ height: '15rem' }}></div>

      <main>
        <section>
          <div className="container">
            <div className="title-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%' }}>
                <p className="section-subtitle" style={{ textAlign: 'center' }}>
                  our Products
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                  <h2 className="h2 section-title" style={{ textAlign: 'center', margin: 0 }}>
                    Provides the Best Quality Product
                  </h2>

                  <a
                    href="/Anatara-Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '1.5rem 3.5rem',
                      backgroundColor: '#D84315',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '0.75rem',
                      fontWeight: 'bold',
                      fontSize: '1.3rem',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(216, 67, 21, 0.4)',
                      border: 'none',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#BF360C';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(216, 67, 21, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#D84315';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(216, 67, 21, 0.4)';
                    }}
                  >
                    <span style={{ fontSize: '1.6rem' }}>📄</span>
                    View Brochure
                  </a>
                </div>
              </div>
            </div>

            <ul className="grid-list" style={{ margin: '5rem 0' }}>
              {products.map((product) => (
                <li key={product.id}>
                  <div className="service-card">
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

                    <p className="card-text">
                      {product.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}