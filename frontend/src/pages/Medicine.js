import React, { useState } from 'react';
import './Medicine.css';

const Medicine = () => {
    const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const addToCart = () => {
    const newItem = 'Medicine Name - $10.99';
    setCartItems([...cartItems, newItem]);
  };

  const buyNow = () => {
    alert('Redirecting to checkout page...');
  };

  const checkout = () => {
    alert('Redirecting to checkout page...');
  };


    return (
        <div>
            <section className="home" id="home">
        <div className="content">
        <h3 style={{ color: '#16a085'}}>Medicines</h3>
        </div>
    </section>

    {/* <!--cart symbol --> */}
    <div className="cart-symbol" onclick="toggleCart()">🛒</div>


    {/* <!-- Product listing --> */}
    <div className="product-container">
        <div className="product">
            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/25/full/1669400288-0753.jpg"
                alt="Medicine"/>
            <h4>Medicine Name</h4>
            <p>Price: $10.99</p>
            <button onClick={addToCart}>Add to Cart</button>
            &nbsp;&nbsp;
 <button onClick={buyNow}>Buy Now</button>
        </div>
        <div className="product">
            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/25/full/1669400288-0753.jpg"
                alt="Medicine"/>
            <h4>Medicine Name</h4>
            <p>Price: $10.99</p>
            <button onClick={addToCart}>Add to Cart</button>
            &nbsp;&nbsp;
 <button onClick={buyNow}>Buy Now</button>
        </div>
        <div className="product">
            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/25/full/1669400288-0753.jpg"
                alt="Medicine"/>
            <h4>Medicine Name</h4>
            <p>Price: $10.99</p>
            <button onClick={addToCart}>Add to Cart</button>
            &nbsp;&nbsp;
 <button onClick={buyNow}>Buy Now</button>
        </div>
        <div className="product">
            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/25/full/1669400288-0753.jpg"
                alt="Medicine"/>
            <h4>Medicine Name</h4>
            <p>Price: $10.99</p>
            <button onClick={addToCart}>Add to Cart</button>
            &nbsp;&nbsp;
 <button onClick={buyNow}>Buy Now</button>
        </div>
        <div className="product">
            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/25/full/1669400288-0753.jpg"
                alt="Medicine"/>
            <h4>Medicine Name</h4>
            <p>Price: $10.99</p>
            <button onClick={addToCart}>Add to Cart</button>
            &nbsp;&nbsp;
 <button onClick={buyNow}>Buy Now</button>
        </div>
        <div className="product">
            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/25/full/1669400288-0753.jpg"
                alt="Medicine"/>
            <h4>Medicine Name</h4>
            <p>Price: $10.99</p>
            <button onClick={addToCart}>Add to Cart</button>
            &nbsp;&nbsp;
 <button onClick={buyNow}>Buy Now</button>
        </div>
        <div className="product">
            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/25/full/1669400288-0753.jpg"
                alt="Medicine"/>
            <h4>Medicine Name</h4>
            <p>Price: $10.99</p>
            <button onClick={addToCart}>Add to Cart</button>
            &nbsp;&nbsp;
 <button onClick={buyNow}>Buy Now</button>
        </div>
        <div className="product">
            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/25/full/1669400288-0753.jpg"
                alt="Medicine"/>
            <h4>Medicine Name</h4>
            <p>Price: $10.99</p>
            <button onClick={addToCart}>Add to Cart</button>
            &nbsp;&nbsp;
 <button onClick={buyNow}>Buy Now</button>
        </div>
        <div className="product">
            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/25/full/1669400288-0753.jpg"
                alt="Medicine"/>
            <h4>Medicine Name</h4>
            <p>Price: $10.99</p>
            <button onClick={addToCart}>Add to Cart</button>
            &nbsp;&nbsp;
 <button onClick={buyNow}>Buy Now</button>
        </div>
        <div className="product">
            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/25/full/1669400288-0753.jpg"
                alt="Medicine"/>
            <h4>Medicine Name</h4>
            <p>Price: $10.99</p>
            <button onClick={addToCart}>Add to Cart</button>
            &nbsp;&nbsp;
 <button onClick={buyNow}>Buy Now</button>
        </div>
        <div className="product">
            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/25/full/1669400288-0753.jpg"
                alt="Medicine"/>
            <h4>Medicine Name</h4>
            <p>Price: $10.99</p>
            <button type="button" onclick="addToCart()">Add to Cart</button>
            <button type="button" onclick="buyNow()">Buy Now</button>
        </div>
    </div>
    <div className="cart-symbol" onClick={toggleCart}>
        🛒
      </div>

      {/* Cart section */}
      {cartVisible && (
        <div className="cart">
          <h2>Shopping Cart</h2>
          <ul id="cart-items">
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={checkout}>Checkout</button>
        </div>
      )}
    <section className="footer">
        <div className="box-container">
            <div className="box">
                <h3>quick links</h3>
                <a href="#"> <i className="fas fa-chevron-right"></i> Home</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> Stored Files</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> About</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> Doctors</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> Book appointment</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> Review</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> Blogs</a>
            </div>
            <div className="box">
                <h3>Our services</h3>
                <a href="#"> <i className="fas fa-chevron-right"></i> Storage</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> Consultation</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> Massage therapy</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> Cardioloty</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> Diagnosis</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> Ambulance service</a>
            </div>
            <div className="box">
                <h3>Contact info</h3>
                <a href="#"> <i className="fas fa-phone"></i> +91-9967814533</a>
                <a href="#"> <i className="fas fa-phone"></i> 080-35648102</a>
                <a href="#"> <i className="fas fa-envelope"></i> healthrek09.info.com</a>
                <a href="#"> <i className="fas fa-envelope"></i> healthrek09@gmail.com</a>
                <a href="#"> <i className="fas fa-map-marker-alt"></i> Bangalore, Karnataka-98.</a>
            </div>
            <div className="box">
                <h3>follow us</h3>

                <a href="#"> <i className="fab fa-facebook-f"></i> facebook</a>
                <a href="#"> <i className="fab fa-twitter"></i> twitter</a>
                <a href="#"> <i className="fab fa-linkedin"></i> linkedin</a>
                <a href="#"> <i className="fab fa-instagram"></i> instagram</a>
                <a href="#"> <i className="fab fa-youtube"></i> youtube</a>
                <a href="#"> <i className="fab fa-pinterest"></i> pinterest</a>
            </div>
        </div>
        <div className="credit">Created by <span> Healthrek Associates </span> | all right reserved</div>
    </section>

        </div>
    );
}

export default Medicine;
