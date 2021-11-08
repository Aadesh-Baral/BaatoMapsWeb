import React from 'react';
import Map from './Map/Map';
import Search from './Search/Search'


const mainContainer = (props) => {
    return (
        <div className='home_content'>
            <Search />
            <div>
                <Map sidebarStatus={props.sidebarStatus} markerPosition={[85.3175, 27.7109]}/>
            </div>
      </div>
    )
}

export default mainContainer;