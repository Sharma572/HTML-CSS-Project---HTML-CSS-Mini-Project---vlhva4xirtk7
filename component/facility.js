/*
------------- Facility section-------------------
*/

class facilitySection extends HTMLElement{
    connectedCallback(){
    this.innerHTML = `
    <section class="facility">
       <h2>Our Facilities</h2>
       <p>We commit to meet the financial need of every admitted undergraduate student. We don't consider your ability to pay when we review your application, and we don't base our decision on whether you can cover the cost. If you're accepted here, you belong here.</p>
       <div class="facility-card-container grid-col-3">
        <div class="facility-card">
            <figure>
                <img src="./Photos/library.png">
                <figcaption>
                    <h3>World Class Library</h3>
            <p>Pursue research at Eduford's libraries, which include more than 3.5 million holdings. Whether your focus is on a specific discipline, interdisciplinary areas or emerging fields, our libraries offer academic resources, a maker hub, collaborative spaces and more.</p>
                </figcaption>
              </figure>
        
        </div>
        <div class="facility-card ">
            <figure>
                <img src="./Photos/basketball.png">
                <figcaption>
                    <h3>Largest Play Ground </h3>
                    <p>The College introduces students to philosophy and theology and challenges them to delve deeply into the arts, humanities, languages, social sciences and sciences.</p>
                </figcaption>
              </figure>
        </div>
        
        
        <div class="facility-card ">
            <figure>
                <img src="./Photos/cafeteria.png">
                <figcaption>
                    <h3>Tasty and Healthy Food.</h3>
                <p> Whether students pursue studies in Arabic, chemistry, government or one of hundreds of other opportunities, they are part of a rich legacy of academic excellence designed to serve them well in an ever-changing world.</p>
                </figcaption>
              </figure>
        </div>
        
       </div>
     </section>
    `
   }
}
customElements.define("facility-section",facilitySection);