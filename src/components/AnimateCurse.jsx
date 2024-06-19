import React from 'react';
import AnimatedCursor from "react-animated-cursor"
const AnimateCurse = () => {
    return (
        <AnimatedCursor
        innerSize={12}
      outerSize={15}
      color='190, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        'ul',
        'li'
      ]}
        />
    );
};

export default AnimateCurse;