import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  const products = [
    {
      id: '01',
      name: 'Rolling shutter guide',
      description: 'Sturdy metal guide rails designed to facilitate smooth and aligned movement of rolling shutters, ensuring consistent and reliable operation.',
      icon: '/assets/images/products icons/strip.png'
    },
    {
      id: '02',
      name: 'Rolling shutter',
      description: 'Versatile and robust metal shutters designed for securing commercial, industrial, and residential spaces with reliable protection and easy operation.',
      icon: '/assets/images/products icons/garage.png'
    },
    {
      id: '03',
      name: 'Binding wire',
      description: 'Strong, flexible steel wire used for reinforcement and securing purposes in construction, concrete work, and other industrial applications.',
      icon: '/assets/images/products icons/barbed-wire.png'
    }
  ];

  return (
    <section className="section" id="product" aria-label="product">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle">our Products</p>
            <h2 className="h2 section-title">
              Provides the Best Quality Product
            </h2>
          </div>

          <Link
            href="/products"
            style={{ margin: '2.5rem auto' }}
            className="btn"
          >
            See More Products
          </Link>
        </div>

        <ul className="service-list grid-list">
          {products.map((product) => (
            <li key={product.id}>
              <div className="service-card">
                <div className="card-icon">
                  <Image
                    src={product.icon}
                    width={80}
                    height={60}
                    loading="lazy"
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
  );
}