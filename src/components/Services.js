import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
    state={
        services:[
            {
             icon:<FaCocktail/>,
             title:"Free cocktails",
             info:"Unlimited cocktails on us during your stay ranging from many different flavors, delivered right to you!"
            },
            {
             icon:<FaHiking/>,
             title:"Endless Hiking",
             info:"Take a hike through the Beautiful Blue Mountains here in Jamaica! Have an expert tour guide show you the ins and outs of Jamaica's most famous mountain."
            },
            {
             icon:<FaShuttleVan/>,
             title:"Free Shuttle",
             info:"With the purchase of your villa, enjoy free shuttle rides from us around town!"
            },
            {
             icon:<FaBeer/>,
             title:"Strongest Beer",
             info:"Taste our tradition Red Stripe beer! The best pale lager you will be able to find and enjoy."
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="services" />
                 <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}