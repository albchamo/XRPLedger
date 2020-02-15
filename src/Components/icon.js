import React from 'react';
import styled from 'styled-components';


const IconStyle = styled.img` width: 30px; `;

const Icon = (props) => {
    return (
        <IconStyle src = {props.src}/>
    );
};



export default Icon;
