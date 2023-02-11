import React from 'react';
import Sampledata from "../sample.json"

const AboutUs = () => {
    return (
        <div>
            <table className="table">
                <thead >
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Sampledata && Sampledata.map((record) => {
                            // console.log(record)
                            let id = record.id;
                            let city = record.name;
                            let la = record.lati;
                            let lo = record.lon;
                            return (<tr key={id}><td>{id}</td><td>{city}</td><td>{la}</td><td>{lo}</td></tr>);
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AboutUs;