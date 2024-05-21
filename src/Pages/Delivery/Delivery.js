import './Delivery.css';
import React, { useState } from 'react';


function Delivery() {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь вы можете добавить логику для отправки данных о заказе на сервер
    console.log('Заказ отправлен:', { productName, quantity, deliveryAddress });
    // Дополнительные действия после отправки заказа, например, очистка формы
    setProductName('');
    setQuantity(1);
    setDeliveryAddress('');
  };

  return (
    <section className="order-section">
      <h2>Оформить заказ</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product-name">Наименование товара:</label>
        <input
          type="text"
          id="product-name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <label htmlFor="quantity">Количество:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          required
        />
        <label htmlFor="delivery-address">Адрес доставки:</label>
        <textarea
          id="delivery-address"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          rows="4"
          required
        ></textarea>
        <button type="submit">Заказать</button>
      </form>
    </section>
  );
}

export default Delivery;