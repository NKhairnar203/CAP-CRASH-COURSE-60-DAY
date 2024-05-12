import React from "react";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to My Website</h1>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <h2>About Us</h2>
            <p>Welcome to our website. We provide...</p>
          </section>
          <section>
            <h2>Our Services</h2>
            <p>We offer various services including...</p>
          </section>
          <section>
            <h2>Contact Us</h2>
            <p>Feel free to contact us at...</p>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default HomePage;
