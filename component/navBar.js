/*
=========== NavBar ===========
*/

class navSection extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        `
        <nav>
        <div class="container-ham">
          <div id="brand" class="logo"><img src="./Photos/logo.png" alt="Logo"></div>
          <div class="nav-links" id="hide-links">
           <ul class="links">
               <li><a href="index.html">Home</a></li>
               <li><a href="about-us.html">About us</a></li>
               <li><a href="course.html">Course</a></li>
               <li><a href="contact-us.html">Contact</a></li>
           </ul>
        </div>  
        <span id="menu-open" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
      </div>
      
      <!-- The overlay -->
      
      <div id="myNav" class="overlay">
      
      <!-- Button to close the overlay navigation -->
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      
      <!-- Overlay content -->
      <div class="overlay-content">
       <div class="logo"><img src="./Photos/logo.png" alt="Logo"></div>
       <div class="nav-links">
          <ul class="links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about-us.html">About us</a></li>
              <li><a href="course.html">Course</a></li>
              <li><a href="contact-us.html">Contact</a></li>
          </ul>
       </div>  
      </div>
      </div>
      </nav>
        `
    }
}

customElements.define("nav-section",navSection);