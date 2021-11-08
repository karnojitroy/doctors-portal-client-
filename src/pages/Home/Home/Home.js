import React from 'react';
import Contact from '../../Contact/Contact';
import ExceptionalDentalCare from '../../ExceptionalDentalCare/ExceptionalDentalCare';
import OurBlog from '../../OurBlog/OurBlog';
import Navigation from '../../Shared/Navigation/Navigation';
import Testimonial from '../../Testimonial/Testimonial';
import AppointBanner from '../AppointmentBanner/AppointBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ExceptionalDentalCare></ExceptionalDentalCare>
            <AppointBanner></AppointBanner>
            <Testimonial></Testimonial>
            <OurBlog></OurBlog>
            <Contact></Contact>
        </div>
    );
};

export default Home;