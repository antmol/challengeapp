import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';

import axios from "axios";


const Selects = (props) => {
    const [pais, setPais] = useState([]);
    // const [pais, setPais] = useState([
    //     'US', 'AU', 'BR', 'CA', 'CN', 'FR', 'DE', 'IN', 'IT', 'MX',
    //     'NL', 'SG', 'ES', 'TR', 'AE', 'GB', 'JP'
    // ])

    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];
    console.log('var ent ', process.env.REACT_APP_URL)
    useEffect(() => {
        console.log('DidMount')
        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_URL}/category`,
            params: {country: 'US'},
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

    });
    const listItems = pais.map(nombre => <option key={nombre.id}>{nombre}</option>);

    return (
        <div className="p-grid p-justify-center">
            <form>
                <div className="p-field p-col-12 p-md-4 p-mt-6">
                    <label htmlFor="dropdown">Selecciona país</label>
                    <span className="p-float-label p-mb-4">
                        <Dropdown inputId="dropdown" value={pais} options={countries} onChange={(e) => setPais(e.value)} optionLabel="name" />
                    </span>
                </div>
                <div className="p-field p-col-12 p-md-4 p-mt-6">
                    <label htmlFor="dropdown">Selecciona categoría</label>
                    <span className="p-float-label">
                        <Dropdown inputId="dropdown" value={pais} options={countries} onChange={(e) => setPais(e.value)} optionLabel="name" />
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Selects;