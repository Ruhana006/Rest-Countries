import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Country.css';
import { useHistory } from 'react-router-dom';

const Country = (props) => {
    const { name, capital, region, flag, alpha3Code } = props.country;
    const history = useHistory();
    const handleBtn = (alpha3Code) => {
        const url = `/country/${alpha3Code}`;
        history.push(url)
    }
    return (
        
            <div className="col-md-6 col-sm-12 col-lg-4  mt-5 mb-5" >
                <Card style={{ width: '300px',height:'400px' }}>
                <Card.Img variant="top" src={flag} />
                <Card.Body >
                    <Card.Title>Country Name : {name}</Card.Title>
                    <Card.Text>
                        <h3>Capital : {capital}</h3>
                        <h4>Region : {region}</h4>
                    </Card.Text>
                </Card.Body>
                <Button onClick={() => handleBtn(alpha3Code)} variant="primary">Go somewhere</Button>
            </Card>
        
            </div>




    );

};

export default Country;