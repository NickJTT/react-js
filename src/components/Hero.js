import React from 'react';

const Hero = ({ heroName }) => {
    if (heroName === 'Joker') {
        throw new Error('Not a Hero!');
    }
    return <p>{ heroName }</p>;
}

export default Hero;