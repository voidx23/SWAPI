import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './planetDirectory.css'
import PlanetCard from '../../components/planetCards/PlanetCard'


function PlanetDirectoy() {

    const [data, setData] = useState(null)
    const [nextPageUrl, setNextPageUrl] = useState(null)
    const [previousPageUrl, setPreviousPageUrl] = useState(null)
    const [apiPoint, setApiPoint] = useState('https://swapi.dev/api/planets/?page=1&format=json')

    const goToPreviousPage = () => {
        const targetElement = document.querySelector('.card-main');
        const targetElementPosition = targetElement.getBoundingClientRect().top;
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        window.scrollTo({
            top: currentScrollPosition + targetElementPosition,
            behavior: 'smooth'
        });

        setApiPoint(previousPageUrl);
    };

    const goToNextPage = () => {
        const targetElement = document.querySelector('.card-main');
        const targetElementPosition = targetElement.getBoundingClientRect().top;
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        window.scrollTo({
            top: currentScrollPosition + targetElementPosition,
            behavior: 'smooth'
        });

        setApiPoint(nextPageUrl);
    };

    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const response = await axios.get(apiPoint);
                // console.log(response.data);
                setData(response.data)
                console.log(response.data)
                setNextPageUrl(response.data.next)
                setPreviousPageUrl(response.data.previous)
            } catch (error) {
                console.error('Error fetching planets:', error);
            }
        };


        fetchPlanets();
    }, [apiPoint]);






    return (
        <div className='planet-directoy flex justify-center items-center flex-col'>
            <h1 className='planet-heading text-white mb-[10vw]'>PLANETS</h1>
            <div className="card-main grid grid-cols-1 gap-10 xs:grid-cols-1 md:grid-cols-2 ">



                {data && data.results.map(planet => (
                    <div className="card m-8" key={planet.name}>

                        <PlanetCard planet={planet} />
                    </div>
                ))}



            </div>

            <div className="pagination text-3xl m-10">
                <button className={`mx-10 ${!previousPageUrl && 'disabled'}`} onClick={goToPreviousPage} disabled={!previousPageUrl}>
                    <i className={`fas fa-chevron-left ${previousPageUrl ? '' : 'disabled-icon'}`}></i>
                </button>
                <button className={`mx-10 ${!nextPageUrl && 'disabled'}`} onClick={goToNextPage} disabled={!nextPageUrl}>
                    <i className={`fas fa-chevron-right ${nextPageUrl ? '' : 'disabled-icon'}`}></i>
                </button>
            </div>


        </div>

    )
}

export default PlanetDirectoy