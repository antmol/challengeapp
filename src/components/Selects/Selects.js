import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';

import axios from "axios";


const Selects = (props) => {
    const [pais, setPais] = useState([null]);
    const [categorias, setCategorias] = useState([null]);

    //     'US', 'AU', 'BR', 'CA', 'CN', 'FR', 'DE', 'IN', 'IT', 'MX',
    //     'NL', 'SG', 'ES', 'TR', 'AE', 'GB', 'JP'
    const countries = [
        { name: 'Alemania', code: 'DE' },
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'Canada', code: 'CA' },
        { name: 'China', code: 'CN' },
        { name: 'Emiratos Arabes', code: 'AE' },
        { name: 'España', code: 'ES' },
        { name: 'Estados Unidos', code: 'US' },
        { name: 'Fracia', code: 'FR' },
        { name: 'India', code: 'IN' },
        { name: 'Italia', code: 'IT' },
        { name: 'Japón', code: 'JP' },
        { name: 'México', code: 'MX' },
        { name: 'Países Bajos', code: 'NL' },
        { name: 'Reino Unido', code: 'GB' },
        { name: 'Singapur', code: 'SG' },
        { name: 'Turquía', code: 'TR' }
    ];

    const categories = [
        {
            "name": "All Departments",
            "id": "aps"
        },
        {
            "name": "Audible Books & Originals",
            "id": "audible"
        },
        {
            "name": "Alexa Skills",
            "id": "alexa-skills"
        },
        {
            "name": "Amazon Devices",
            "id": "amazon-devices"
        },
        {
            "name": "Amazon Pharmacy",
            "id": "amazon-pharmacy"
        },
        {
            "name": "Amazon Warehouse",
            "id": "warehouse-deals"
        },
        {
            "name": "Appliances",
            "id": "appliances"
        },
        {
            "name": "Apps & Games",
            "id": "mobile-apps"
        },
        {
            "name": "Arts, Crafts & Sewing",
            "id": "arts-crafts"
        },
        {
            "name": "Automotive Parts & Accessories",
            "id": "automotive"
        },
        {
            "name": "Baby",
            "id": "baby-products"
        },
        {
            "name": "Beauty & Personal Care",
            "id": "beauty"
        },
        {
            "name": "Books",
            "id": "stripbooks"
        },
        {
            "name": "CDs & Vinyl",
            "id": "popular"
        },
        {
            "name": "Cell Phones & Accessories",
            "id": "mobile"
        },
        {
            "name": "Clothing, Shoes & Jewelry",
            "id": "fashion"
        },
        {
            "name": "   Women",
            "id": "fashion-womens"
        },
        {
            "name": "   Men",
            "id": "fashion-mens"
        },
        {
            "name": "   Girls",
            "id": "fashion-girls"
        },
        {
            "name": "   Boys",
            "id": "fashion-boys"
        },
        {
            "name": "   Baby",
            "id": "fashion-baby"
        },
        {
            "name": "Amazon Explore",
            "id": "live-explorations"
        },
        {
            "name": "Collectibles & Fine Art",
            "id": "collectibles"
        },
        {
            "name": "Computers",
            "id": "computers"
        },
        {
            "name": "Courses",
            "id": "courses"
        },
        {
            "name": "Credit and Payment Cards",
            "id": "financial"
        },
        {
            "name": "Digital Educational Resources",
            "id": "edu-alt-content"
        },
        {
            "name": "Digital Music",
            "id": "digital-music"
        },
        {
            "name": "Electronics",
            "id": "electronics"
        },
        {
            "name": "Garden & Outdoor",
            "id": "lawngarden"
        },
        {
            "name": "Gift Cards",
            "id": "gift-cards"
        },
        {
            "name": "Grocery & Gourmet Food",
            "id": "grocery"
        },
        {
            "name": "Handmade",
            "id": "handmade"
        },
        {
            "name": "Health, Household & Baby Care",
            "id": "hpc"
        },
        {
            "name": "Home & Business Services",
            "id": "local-services"
        },
        {
            "name": "Home & Kitchen",
            "id": "garden"
        },
        {
            "name": "Industrial & Scientific",
            "id": "industrial"
        },
        {
            "name": "Just for Prime",
            "id": "prime-exclusive"
        },
        {
            "name": "Kindle Store",
            "id": "digital-text"
        },
        {
            "name": "Luggage & Travel Gear",
            "id": "fashion-luggage"
        },
        {
            "name": "Luxury Stores",
            "id": "luxury"
        },
        {
            "name": "Magazine Subscriptions",
            "id": "magazines"
        },
        {
            "name": "Movies & TV",
            "id": "movies-tv"
        },
        {
            "name": "Musical Instruments",
            "id": "mi"
        },
        {
            "name": "Office Products",
            "id": "office-products"
        },
        {
            "name": "Pet Supplies",
            "id": "pets"
        },
        {
            "name": "Premium Beauty",
            "id": "luxury-beauty"
        },
        {
            "name": "Prime Video",
            "id": "instant-video"
        },
        {
            "name": "Smart Home",
            "id": "smart-home"
        },
        {
            "name": "Software",
            "id": "software"
        },
        {
            "name": "Sports & Outdoors",
            "id": "sporting"
        },
        {
            "name": "Subscribe & Save",
            "id": "specialty-aps-sns"
        },
        {
            "name": "Subscription Boxes",
            "id": "subscribe-with-amazon"
        },
        {
            "name": "Tools & Home Improvement",
            "id": "tools"
        },
        {
            "name": "Toys & Games",
            "id": "toys-and-games"
        },
        {
            "name": "Under $10",
            "id": "under-ten-dollars"
        },
        {
            "name": "Vehicles",
            "id": "vehicles"
        },
        {
            "name": "Video Games",
            "id": "videogames"
        },
        {
            "name": "Whole Foods Market",
            "id": "wholefoods"
        }
    ]

    useEffect(() => {
        console.log('DidMount')
        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_URL}/category`,
            params: { country: 'US' },
            headers: {
                'x-rapidapi-key': `${process.env.REACT_APP_KEY}`,
                'x-rapidapi-host': `${process.env.REACT_APP_HOST}`
            }
        };

        axios.request(options).then(function (response) {
            console.log('llamado en useEffect', response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }, []);
    // const listItems = pais.map(nombre => <option key={nombre.id}>{nombre}</option>);

    return (
        <div className="p-grid p-justify-center">
            <form>
                <div className="p-field p-col-12 p-md-6 p-mt-6">
                    <span className="p-float-label">
                        <Dropdown
                            placeholder="Select a Country"
                            id="pais"
                            value={pais}
                            options={countries}
                            onChange={(e) => setPais(e.value)}
                            optionLabel="name"
                            style={{ width: '300px' }}
                        />
                        <label htmlFor="pais">Selecciona país</label>
                    </span>
                </div>
                <div className="p-field p-col-12 p-md-6 p-mt-6">
                    <span className="p-float-label">
                        <Dropdown
                            id="categoria"
                            value={categorias}
                            options={categories}
                            onChange={(e) => setCategorias(e.value)}
                            optionLabel="name"
                            placeholder="Select a Category"
                            style={{ width: '300px' }}
                        />
                        <label htmlFor="categoria">Selecciona categoría</label>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Selects;