/*
---------- Courses Html Component  -----------------
*/
class courseSection extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <section class="course">
       <h2>Courses we offer</h2>
       <p>Explore the intersection of technology and society. Learn about environmental justice. Take the famous Problem of God course. Our innovative courses inspire and invite you to help solve some of today's most pressing local, national and global issues.</p>
       <!-- course-Card -->
       <div class="course-card grid-col-3">
        <div class="card">
            <h3>Graduate Programs</h3>
            <p>Building on our strong roots in leadership, health care and education, Eduford is proud to offer an array of coed graduate programs for women and men who are ready to advance their careers and grow as leaders. The Eduford College Community Psychology Master's program will help you to meet your goals of becoming a Licensed Professional Counselor.</p>
        </div>
        <div class="card">
            <h3>Undergraduate Programs</h3>
            <p>For decades, Eduford College has improved the health of our communities, one graduate at a time. The JoAnn McGrath School of Nursing and Health Professions, as one of the largest nursing schools in Wisconsin, offers a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education.</p>
        </div>
        <div class="card">
            <h3>Post graduate Programs</h3>
            <p>The Eduford, as one of the largest nursing schools in Wisconsin, offers a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education. The Eduford College Community Psychology Master's program will help you to meet your goals of becoming a Licensed Professional Counselor.</p>
        </div>
       </div>
    </section>
        `
    }
}
customElements.define("course-section",courseSection)