import React from 'react';
import "../css/ServiceStyles.css";
import service1 from "../assert/service1.webp";
import service2 from "../assert/service2.webp";
import service3 from "../assert/service3.webp";
import service4 from "../assert/service4.webp";
import { Link } from "react-scroll";
import ad1 from "../assert/service-1.webp";

function Service(){
    const listItems = [{id:1,i:service1,title:"MARINE CONSTRUCTION",content:"Sunrise marine services and trading  is a leading marine civil engineering firm and renowned foreshore specialist in Kuwait and Qatar. Our services range from revetment, seawall, breakwater, rock  bund  construction  and  maintenance  to  reclamation,  dredging  and diving services."},
                    {id:2,i:service2,title:"SHIP MANAGEMENT",content:"Sunrise marine services and trading  is an independent marine-services provider offering a broad scope of high quality ship management and consultancy services for all types of vessels and offshore units."},
                    {id:3,i:service3,title:"HEAVY EQUIPMENT RENTAL",content: "Our steady growth and expansion has transformed the company to be one of the major marine construction companies. "},
                    {id:4,i:service4,title:"EARTHWORKS",content: "With our extensive service experience in the Marine Industry, combined with the ability to handle the local market demand, providing engineering solutions that make us a reliable partner and option to our clients."}
    ];
    return(
        <div className="mydiv" id="service">
            <div>
            <Link to="home" spy={true} smooth={true} 
      offset={50} 
      duration={500}><img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9ElEQVR4nO2TPwrCMBTGXxxr3R0dCoUXeEsP0CkRpHglL+HmYRyK53DoQRSigg02vDZJO5gfZAr0+5N+AImED1jn5iwCqbVAdRWoblAeN8uIS/0wZ1YTWOdC6vYt3JnzMtLGfw76So6qA9QFlPudkOoevwn6If4huglyiEc3gf0374nbM0RdhP0nyJF8aIbBmiCG+NAMvU2gu3bWDCc/BzGTc2Y4uomqybjJ+3eOtPZd1WQuC0JIfWYlt+E0gfoCcFq5WwAQgIctK7mNswnzTQGjIEZym1lmGN0EeYh7m6AA4lFmOJUgM/TFa4ahmDTDROIfeAJfaOqz+K2UMgAAAABJRU5ErkJggg==" alt="/"/></Link>
            <h1 className="myh1">Comprehensive Service</h1>
            <hr/>
            <p className="service-p">From strategy to execution, our winning combination of innovative thinking,
scientific design, sophisticated development, and ongoing ensure we're delivering value to help you grow.</p>
            </div>
<div className="service-card">
        {listItems.map(item =>{
            return(
                <div className="s-card" key={item.id}>
                    <img src={item.i} alt="service"></img>
                    <h5>0{item.id}</h5>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
            );
        })}
    </div>
    <div className='ad-service'>
        <div className='ad-img-1'><img alt='/' src={ad1}/></div>
        <div className='ad-content'>
            <h2>Infrastructure Project</h2>
            <p>Sunrise Marine is renowned for its specialization in infrastructure development, particularly in road project execution. Our mission is to seize the vast potential in infrastructure development projects, establishing ourselves as a prominent name in this field.</p>
        </div>
    </div>
    <div className='ad-service'>
        <div className='ad-content'>
            <h2>Diving Works</h2>
            <p>We utilize the latest underwater marine technology and sub-sea equipment to deliver specialized diving services. Our dynamic and skilled teams ensure competitive, cost-effective, and successful outcomes for a broad range of underwater services, including: 
            <li>Underwater construction Inspection survey and sampling</li>
            <li>Underwater video and photography Construction divers</li> 
            <li>Commercial divers</li></p>
        </div>
        <div className='ad-img-1'><img alt='/' src={ad1}/></div>
    </div>
    <div className='ad-service'>
    <div className='ad-img-1'><img alt='/' src={ad1}/></div>
        <div className='ad-content'>
            <h2>Vessel Chartering & Brokering Services</h2>
            <p>Understanding the critical role of crew boats, speed boats, and tug & barge chartering in offshore or civil marine construction projects, Sunrise Marine has developed a comprehensive network of reliable partners and barge owners. We work diligently to match the requirements and needs of our clients, ensuring appropriate marine solutions for their projects.</p>
        </div>
    </div>
    <div className='ad-service'>
        <div className='ad-content'>
            <h2>Manpower Supply</h2>
            <p>Sunrise Marine assures reliable manpower supply for all marine sectors, including captains, engineers, seamen, divers, and laborers. Our goal is to provide quality manpower services to our clients, offering professional, skilled, and unskilled personnel from over 16 countries.</p>
        </div>
        <div className='ad-img-1'><img alt='/' src={ad1}/></div>
    </div>
    <div className='ad-service'>
    <div className='ad-img-1'><img alt='/' src={ad1}/></div>
        <div className='ad-content'>
            <h2>Silt Curtain Supplier</h2>
            <p>With a strong contracting background, we understand on-site requirements and perform rigorous calculations to ensure our Silt Curtains meet and exceed performance specifications. Manufactured in the USA, Turkey, and China, our Silt Curtains are designed to suit various marine conditions, acting as barriers to reduce sand and debris migration while allowing water to pass through. They are ideal for dredging, marine construction, environmental protection, and more. Our curtains are customizable to meet unique challenges and requirements.</p>
        </div>
    </div>
    <div className='ad-service'>
        <div className='ad-content'>
            <h2>Ship Maintenance</h2>
            <p>Sunrise Marine offers a wide range of ship maintenance services, including repair, conversion, and refurbishment of all types of ships. Our services also encompass: 
            <li>Deck and Superstructure Maintenance</li>
            <li>Interior Maintenance</li>
            <li>Antifouling</li>
            <li>Propeller and Shaft Work.</li></p>
        </div>
        <div className='ad-img-1'><img alt='/' src={ad1}/></div>
    </div>
        </div>
    );
}
export default Service;