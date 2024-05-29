import React from 'react';
import "../css/ServiceStyles.css";
import service1 from "../assert/service1.webp";
import service2 from "../assert/service2.webp";
import service3 from "../assert/service3.webp";
import service4 from "../assert/service4.webp";
import { Link } from "react-scroll";
function Service(){
    const listItems = [{id:1,i:service1,title:"MARINE CONSTRUCTION",content:"Seaworks is a leading marine civil engineering firm and renowned foreshore specialist in Kuwait and Qatar. Our services range from revetment, seawall, breakwater, rock  bund  construction  and  maintenance  to  reclamation,  dredging  and diving services."},
                    {id:2,i:service2,title:"SHIP MANAGEMENT",content:"Seaworks is an independent marine-services provider offering a broad scope of high quality ship management and consultancy services for all types of vessels and offshore units."},
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
        </div>
    );
}
export default Service;