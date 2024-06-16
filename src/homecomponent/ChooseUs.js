import React from 'react';
function ChooseUs(){
    const listItems = [{id:1,icon:'fa-solid fa-medal',title:"Supreme Quality",content:"Sunrise marine services and trading sets the bar high, as we perform our duties and work to the best of our ability, making sure we exceed the standards set forth by the clients."},
                    {id:2,icon:'fa-solid fa-hand-holding-hand',title:"Solid Support",content:"We cooperate with each other, trying our best in any circumstances. Using our individual skills and working collaboratively to achieve the goal."},
                    {id:3,icon:'fa-solid fa-thumbs-up',title:"Customer Satisfaction",content: "Our company is all about creating better connections with our clients and employees to provide a good environment to work with Sunrise."}
    ];
return(
    <div id="choose">
        <div className="choose-content">
    <h2 id="myh2">Why Choose Us ?</h2>
    <p>
    Sunrise marine services and trading is one of the leading companies, that specializes in the Marine Service Contractor that provides Marine Dredging and Construction. Obtaining and maintaining certification by the International Diving Contractors Association. Sunrises is committed to provide world-class services that meet or exceed safety and environmental requirements as well as, customers expectations, and to conduct its operations in a manner that upholds Safety, Health, Quality, and Environment; both to property and human alike. SUN RISE's commitment to providing its customers with the most reliable resources is reflected in its efforts to obtain the highest standards of independent assessment of its skills.
    </p>
    </div>
    <div className="choose-card">
        {listItems.map(item =>{
            return(
                <div className="c-card" key={item.id}>
                    <i class={item.icon}></i>
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
export default ChooseUs;