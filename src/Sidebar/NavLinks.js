import React from 'react';

const navLinks = (props) => {
    return (
        <li>
            <a href={props.url}>
            <i className={props.logo}></i>
            <span className='links_name'>{props.name}</span>
            </a>
            <span className='tooltip'>{props.name}</span>
      </li>
    )
}

export default navLinks;