import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './CountryDetail.css'


const CountryDetail = (props) => {
    const { alpha3Code } = useParams();
    const [country, setCountry] = useState({});


    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (

        <div className="col-md-6 col-lg-4 col-sm-10 my-5">
            <Card className="box">
                <Card.Img variant="top" src={country.flag} />
                <Card.Body>
                    <Card.Title><h1>THIS IS DETAIL OF : </h1></Card.Title>
                    <Card.Text>
                        <h3>Country : {country.name}</h3>
                        <h3>Capital :{country.capital}</h3>
                        <h3>Area : {country.area}</h3>
                        <h3>Region : {country.region}</h3>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>


    );
};

export default CountryDetail;