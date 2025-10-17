import { CartItem } from '@/app/page'

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  cart: CartItem[]
  onRemove: (productId: number) => void
  onUpdateQuantity: (productId: number, quantity: number) => void
  onCheckout: () => void
  totalPrice: number
}

export default function CartModal({
  isOpen,
  onClose,
  cart,
  onRemove,
  onUpdateQuantity,
  onCheckout,
  totalPrice
}: CartModalProps) {
  if (!isOpen) return null

  return (
    <div className="cart-modal" onClick={onClose}>
      <div className="cart-content" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <p style={{ fontSize: '3rem', marginTop: '1rem' }}>🛒</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.emoji} {item.name}</div>
                    <div className="cart-item-price">${item.price.toFixed(2)} each</div>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => onRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="checkout-btn" onClick={onCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

