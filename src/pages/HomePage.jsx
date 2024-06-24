import About from '@/components/ui/About';
import Contact from '@/components/ui/Contact';
import Hero from '@/components/ui/Hero';
import Project from '@/components/ui/Project';
import Skills from '@/components/ui/Skills';
import React from 'react';

const HomePage = () => {
    return (
        <section>
            <Hero/>
            <Skills/>
            <Project/>
            {/* <About/> */}
            {/* <Contact/> */}
        </section>
    );
};

export default HomePage;