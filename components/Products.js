import React from 'react';

function Products() {
  return (
    <section id="product-section">
      <h1>PURCHASE FROM US</h1>
      <div className="underline"></div>
      <p>Lorem Ipsum is not simply random text...</p>

      <div className="product-container">
        <div className="product-card">
          <img src="/photos/purchase1.jpg" alt="Kettlebell" />
          <h3>Kettlebell / 5kg</h3>
          <p>89,99$ / 59,99$</p>
          <button className="add-to-cart-btn">Add To Cart</button>
        </div>
        <div className="product-card">
          <img src="/photos/purchase2.jpg" alt="Treadmill" />
          <h3>Treadmill</h3>
          <p>899,99$ / 599,99$</p>
          <button className="add-to-cart-btn">Add To Cart</button>
        </div>
        {/* Diğer ürünler de buraya eklenebilir */}
      </div>
    </section>
  );
}

export default Products;
