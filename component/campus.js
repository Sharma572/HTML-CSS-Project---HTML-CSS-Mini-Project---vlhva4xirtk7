/*
--------------- Campus Html Component---------------------
*/

class campusSection extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <section class="campus">
        <h2>Our Global Campus</h2>
        <p>The University of Hartford's main campus is located on Bloomfield Avenue. Surrounded by green space, the main campus is divided into residential and academic buildings connected by a bridge that overlooks the north branch of the Park River, known to us as Hog River.</p>
        <!-- campus-Card -->
        <div class="campus-card grid-col-3">
            <div class="img camcard1">
                <img src="./Photos/london.png" alt="nt" >
                <div class="layer">
                    <h3>LONDON</h3>
                </div>
            </div>
            <div class="img camcard2" >
                <img src="./Photos/newyork.png" alt="">
                <div class="layer">
                    <h3>NEWYORK</h3>
                </div>
            </div>
            <div class="img camcard3">
                <img src="./Photos/washington.png" alt="">
                <div class="layer">
                    <h3>JAPAN</h3>
                </div>
            </div>
        </div>
     </section>
        `
    }
}
customElements.define("campus-section",campusSection);