




/*
  =====  Footer =====
*/

class footerSecion extends HTMLElement{
    connectedCallback(){
      this.innerHTML =`
      <section class="contact">
      <div class="text-box">
        <h1>Enroll For Our Various Online Courses
          <br>  Anywhere from the World</h1>
            <button class="btn"><a class="white"> Visit us to know more</a></button>
      </div>
    </section>
      <section class="about">
      <h2>About Us</h2>
      <p>We're a leading research university with a heart. Founded in the decade that the U.S. Constitution was signed, we're the nation's oldest Catholic and Jesuit university.
          We're a community of people who bridge our disparate experiences and identities. Meet the people and places that make Eduford home.</p>
      
          <h2>Contact Me</h2>
          <div class="social-icons">
          
          <a href="https://www.linkedin.com/in/raunak-sharma-72202822b"><img class="social-icon" src="./Photos/social-img/icons8-linkedin-2.gif" alt=""></a>
          
          <a href="https://github.com/Sharma572"><img class="social-icon"  src="./Photos/social-img/icons8-github.gif" alt=""></a>
          
          <a href="www.facebook.com"><img class="social-icon" src="./Photos/social-img/icons8-facebook-64.png" alt=""></a>
  
          <a href="www.gmail.com"><img class="social-icon" class="social-icon"  src="./Photos/social-img/icons8-gmail-48.png"alt=""></a>
  
          <a href="www.instagram.com"><img class="social-icon"  src="./Photos/social-img/icons8-instagram.gif"></a>
  
      </div>
      <h4 class="rights">All Rigths are Reserved By ❤️ R.K1999</h4>
  </section>
      `
    }
  }
//   customElements.define('my-header', MyHeader);
  customElements.define("footer-section",footerSecion);
  
