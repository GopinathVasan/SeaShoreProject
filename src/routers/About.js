// import React, { useState, useEffect } from 'react'; 
import "../css/About.css";
import { Link } from "react-scroll";

function About({maxLength = 100 }){
    // const [isExpanded, setIsExpanded] = useState(false);
    // const [isMobile, setIsMobile] = useState(window.innerWidth < 650);
    // const longText = `With the technology transfer scheme that the government of Kuwait had opted for; we initiated a long-term business plan to develop strong alliances with international companies for streamlining future projects in Kuwait. Our most notable relationship was established in 1996, with ITOCHU Corporation, a Japanese trading house, and this relationship developed into a very close strategic alliance for mutual business interests in Kuwait. This was further enhanced by establishing a long-term association with Tekfen Construction & Installation Company, and an agency agreement was signed in 2005 with Tekfen in Kuwait.
    //  Our parent company, Khalil Mahmoud Trading & Contracting Est. (KME) was established in 1953, primarily as a civil engineering and construction company, and has been classified as a Grade II contractor by the Central Tenders Committee since 1971 for civil construction and electrical works, which is the highest category given to local contractors working in Kuwait as category I is for international contractors. KME is best known for developing the State of Kuwait’s tenth district (Cities of Fahaheel, Ahmadi, Sabahiya, Mangaf, AbuHalifa, Fintas) by the construction of housing & commercial projects as well as relevant municipal infrastructure. In addition, KME pioneered the development of farming and mass agricultural production in Kuwait by implementing horticultural farming in the Wafra area.`;
    // useEffect(() => {
    //   const handleResize = () => {
    //     setIsMobile(window.innerWidth < 950);
    //   };
  
    //   window.addEventListener('resize', handleResize);
    //   return () => window.removeEventListener('resize', handleResize);
    // }, []);
  
    // const toggleExpand = () => {
    //   setIsExpanded(!isExpanded);
    // };
  
    // const displayText = isExpanded || !isMobile ? longText : `${longText.slice(0, maxLength)}...`;

    const listItems = [
      {
          id: 1,
          name: "about-card-1",
          title: "VISION",
          content: `The company’s vision is to be a leader in the Marine Construction, Ship Management, and Heavy Equipment fields, by promoting its safety culture and utilizing new technologies, consistent with its strategic goals and by realizing maximum efficiency through superior management.<br><br>The Company aims to reach these long-term aspirations and goals through continual improvement.`
      },
      {
          id: 2,
          name: "about-card-2",
          title: "SAFETY MISSION",
          content: `To Develop and Promote a Culture of Compliance and Responsibility in Workplace Safety to all our Employees and Clients.<br><br>The Company has set the following long-term aspirations and goals :
<li>Zero incidents / accidents
<li>Zero detentions`
      },
//       {
//           id: 3,
//           name: "about-card-3",
//           title: "SAFETY MISSION",
//           content: `To Develop and Promote a Culture of Compliance and Responsibility in Workplace Safety to all our Employees and Clients.<br><br>The Company has set the following long-term aspirations and goals :
// <li>Zero incidents / accidents
// <li>Zero detentions`
//       }
  ];
  
    return (
             <div className="about-container" id="about">
                <div className='about-content'>
             <Link to="home" spy={true} smooth={true} 
               offset={50} 
               duration={500}><img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9ElEQVR4nO2TPwrCMBTGXxxr3R0dCoUXeEsP0CkRpHglL+HmYRyK53DoQRSigg02vDZJO5gfZAr0+5N+AImED1jn5iwCqbVAdRWoblAeN8uIS/0wZ1YTWOdC6vYt3JnzMtLGfw76So6qA9QFlPudkOoevwn6If4huglyiEc3gf0374nbM0RdhP0nyJF8aIbBmiCG+NAMvU2gu3bWDCc/BzGTc2Y4uomqybjJ+3eOtPZd1WQuC0JIfWYlt+E0gfoCcFq5WwAQgIctK7mNswnzTQGjIEZym1lmGN0EeYh7m6AA4lFmOJUgM/TFa4ahmDTDROIfeAJfaOqz+K2UMgAAAABJRU5ErkJggg==" alt="/"/></Link>
             <h1 className="about-h1">About Us</h1>
             <hr className='hr1'/>
                 {/* <img className="about-img" src={aimage} alt="/"></img> */}
        {/* <div className='para-content'>
          <div className='about-para1'>
            <h1>About Us</h1>
          </div>
          <div className='about-para2'>
            <p id='p1'>Sunrises Co was founded in Kuwait in 1991 as Mubarakia Marine Service Co., as a marine services contractor. We have expanded our activities to include Marine Construction, Ship Management, Heavy Equipment Rentals, and Earthworks.</p>
            <p id='p2'>{displayText}</p>
            {isMobile && (
          <button onClick={toggleExpand} className="read-more">
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
          </div>
        </div> */}
        <div>
          {listItems.map(item => {
            return (
              <div className={item.name} key={item.id}>
                <div className="a-card-2">
                  <h3>{item.title}</h3>
                  <hr />
                  <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    );
  };
  export default About;