import './Home.css'
import StoreProducts from '../StoreProducts/StoreProducts'

export default function Home( {products} ) {
  return (
    <div id="home" className="Home">
      <div className="shop-intro">
        {/* <div className="college-name">College of Codepath</div> */}
        <div className="intro">
          <h1>Welcome</h1>
          <p>
            Welcome to Ashani University's Student Student! We hope you find our products as exciting as we do.
          </p>
        </div>
      </div>

      <div id="about">
        <h1>About</h1>
        <div className="about">
          <div className="text">
            <p>Our offers a wide variety snacks and gear that any student would want.</p>
            <p>Show your school pride and/or just pick up a quick snack before class.</p>
            <p>All proceeds go towards the betterment of our lovely campus!</p>
          </div>
        </div>
      </div>

      <div id="store">
        <h1>All Products</h1>
        <StoreProducts products={products}/>
      </div>
      
      <div id="contact">
        <h1>Contact Us</h1>
        <div className="contact">
          <div className="summary">
            <ul className="info">
              <li><span>Email:</span> jdoe123@auni.edu</li>
              <li><span>Phone:</span> 248-SNACKSS</li>
              <li><span>Address:</span> 123 Sesame St., Make Believe, KI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      
  )
}
  
  