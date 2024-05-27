import React from 'react';
import "../css/About.css";
function About(){

return(
    <>
    <div className="about-container" id="about">
        <h1 className="about-h1">OUR STORY</h1>
        <img className="about-img" alt="/"></img>
        <input type="checkbox" hidden class="read-more-state" id="read-more"/>
        <div className="read-more-wrap">
        <p className="about-content">Seaworks Co was founded in Kuwait in 1991 as Mubarakia Marine Service Co., as a marine services contractor. We have expanded our activities to include Marine Construction, Ship Management, Heavy Equipment Rentals, and Earthworks.</p>
<p className={(window.innerWidth>=750)? "about-content" :"read-more-target"}>
{/* <p className="read-more-target"> */}
With the technology transfer scheme that the government of Kuwait had opted for; we initiated a long-term business plan to develop strong alliances with international companies for streamlining future projects in Kuwait. Our most notable relationship was established in 1996, with ITOCHU Corporation, a Japanese trading house, and this relationship developed into a very close strategic alliance for mutual business interests in Kuwait. This was further enhanced by establishing a long-term association with Tekfen Construction & Installation Company, and an agency agreement was signed in 2005 with Tekfen in Kuwait.
Our parent company, Khalil Mahmoud Trading & Contracting Est. (KME) was established in 1953, primarily as a civil engineering and construction company, and has been classified as a Grade II contractor by the Central Tenders Committee since 1971 for civil construction and electrical works, which is the highest category given to local contractors working in Kuwait as category I is for international contractors. KME is best known for developing the State of Kuwait’s tenth district (Cities of Fahaheel, Ahmadi, Sabahiya, Mangaf, AbuHalifa, Fintas) by the construction of housing & commercial projects as well as relevant municipal infrastructure. In addition, KME pioneered the development of farming and mass agricultural production in Kuwait by implementing horticultural farming in the Wafra area.
</p>
</div>
<label for="read-more" class="read-more-trigger_closed">Read More</label>
<label for="read-more" class="read-more-trigger_opened">Read Less</label>
    </div>
    </>
);
}
export default About;