import { Product } from '@/app/page'

interface ProductsGridProps {
  onAddToCart: (product: Product) => void
}

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-quality noise-cancelling wireless headphones with 30-hour battery life',
    price: 89.99,
    emoji: '🎧'
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor and GPS functionality',
    price: 199.99,
    emoji: '⌚'
  },
  {
    id: 3,
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand for better posture and cooling',
    price: 39.99,
    emoji: '💻'
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    description: 'RGB backlit mechanical keyboard with cherry MX switches',
    price: 79.99,
    emoji: '⌨️'
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with 12,000 DPI sensor',
    price: 29.99,
    emoji: '🖱️'
  },
  {
    id: 6,
    name: 'USB-C Hub',
    description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader',
    price: 49.99,
    emoji: '🔌'
  },
  {
    id: 7,
    name: 'Webcam HD',
    description: '1080p HD webcam with built-in microphone and privacy shutter',
    price: 59.99,
    emoji: '📹'
  },
  {
    id: 8,
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and color temperature',
    price: 34.99,
    emoji: '💡'
  }
]

export default function ProductsGrid({ onAddToCart }: ProductsGridProps) {
  return (
    <section className="products-section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                {product.emoji}
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => onAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

