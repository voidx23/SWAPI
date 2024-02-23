import React, { useState, useEffect } from 'react'
import axios from 'axios';

import './planetCards.css'

function PlanetCard(props) {
    const { planet } = props;
    const [residentDetails, setResidentDetails] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetResidentDetails = async () => {
            try {
                const details = await Promise.all(planet.residents.map(residentUrl => axios.get(residentUrl)));
                setResidentDetails(details.map(res => res.data));

            } catch (error) {
                console.error('Error fetching resident details:', error);
            } finally {
                setLoading(false);
            }

        };

        fetResidentDetails();
    }, [planet.residents]);

    if (residentDetails) {
        console.log(residentDetails, "this is nihal")
    }
    return (
        <div className="card flex w-[450px] h-[650px] ">
            <div className="card-image">
                <img src="../../../images/6284.gif" alt="Planet"></img>
            </div>
            <div className="card-content text-white">
                <h1 className='text-2xl'>{planet.name}</h1>
                <div className='p-5'>
                    <p className='text-xs'>Diameter: {planet.diameter} Kms</p>
                    <p className='text-xs'>Climate: {planet.climate}</p>
                    <p className='text-xs'>Gravity: {planet.gravity}</p>
                    <p className='text-xs'>Rotation Period: {planet.rotation_period} Hrs</p>
                    <p className='text-xs'>Orbital Period: {planet.orbital_period} Days</p>
                    <p className='text-xs'>Surface Water: {planet.surface_water} mi3</p>
                    <p className='text-xs'>Population: {planet.population} pax</p>
                    <p className='text-xs'>Terrain: {planet.terrain}</p>
                </div>
                <h1 className='text-2xl'>Residence:</h1>
                <div className='parent-card grid grid-cols-2 w-72'>

                    {loading ? (
                        <p className='mt-2 text-[14px]'>Loading residents data...</p>
                    ) : residentDetails.length === 0 ? (
                        <p className='mt-2 text-[14px]'>⚠️ Nothing to display</p>
                    ) : (
                        residentDetails.slice(0, 4).map(resident => (
                            <div className='child-card py-1' key={resident.name}>
                                <h1 className='text-lg pb-2'>{resident.name}</h1>
                                <p className='text-xs'>Height: {resident.height}</p>
                                <p className='text-xs'>Mass: {resident.mass}</p>
                                <p className='text-xs'>Gender: {resident.gender}</p>
                                <p className='text-xs'>Birth Year: {resident.birth_year}</p>
                            </div>
                        ))
                    )}
                </div>



            </div>
        </div>
    )
}

export default PlanetCard