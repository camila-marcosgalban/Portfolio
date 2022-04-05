import React from 'react'
//css
import './Portfolio.css'
//videos
import mangaka from '../../assets/mangaka_showreel.mp4'
import foods from '../../assets/Foods.mp4'
import doberdan from '../../assets/DoberDan.mp4'
import weatherApp from '../../assets/weather-app.mp4'

const Portfolio = () => {
    return (
        <div id='portfolio'>
            <div id='containerPortfolio'>
                <h2>Portfolio</h2>
                <div id="containerVideos">
                    <div>
                        <a href="https://github.com/camila-marcosgalban/weatherApp" target="_blank">
                            <figure>
                                <video width="320" height="240" controls>
                                    <source src={weatherApp} type="video/mp4" />
                                    Your browser does not support the video.
                                </video>
                                <figcaption>Weather App</figcaption>
                            </figure>
                        </a>
                        <a href="https://github.com/camila-marcosgalban/DoberDan" target="_blank">
                            <figure>
                                <video width="320" height="240" controls>
                                    <source src={doberdan} type="video/mp4" />
                                    Your browser does not support the video.
                                </video>
                                <figcaption>DoberDan</figcaption>
                            </figure>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/camila-marcosgalban/PI-food" target="_blank">
                            <figure>
                                <video width="320" height="240" controls>
                                    <source src={foods} type="video/mp4" />
                                    Your browser does not support the video.
                                </video>
                                <figcaption>Foods API Project</figcaption>
                            </figure>
                        </a>
                        <a href="https://github.com/camila-marcosgalban/deploy_client" target="_blank">
                            <figure>
                                <iframe width="320" height="240" src="https://www.youtube.com/embed/e8a20rLTTBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <figcaption>Mangaka</figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio