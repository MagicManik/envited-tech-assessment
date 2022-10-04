import React from 'react';
import bannerImage from '../../assets/Images/Landing-Page-Image.svg';
import './Home.css';

const Home = () => {
    return (
        <section className='home-section'>
            <div className='home-container'>
                <div>
                    <img className='block mx-auto banner-img' src={bannerImage} alt="" />
                    <button className='create-event-btn-II'>🎉 Create my event</button>
                </div>
                <div className='banner-text-content'>
                    <h1 className='banner-heading-text'>Imagine if
                        <br />
                        <span className='gradient-text-I'>Snapchat</span>
                        <br />
                        had events.
                    </h1>
                    <p className='banner-paragraph'>Easily host and share events with your friends across any social media.</p>
                    <button className='create-event-btn'>🎉 Create my event</button>
                </div>
            </div>
        </section>
    );
};

export default Home;