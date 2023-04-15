import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const SpecialMenu = () => (
    <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
            <SubHeading title="Menu that fits you palatte" />
            <h1 className="headtext__cormorant">Today's Special</h1>
        </div>

        <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu_wine flex__center">
                <p className="app__specialMenu-menu_heading">Wine & Beer</p>
            </div>

            <div className="app__specialMenu-menu_img">
                <img src={images.menu} alt="menu_img" />
            </div>

            <div className="app__specialMenu-menu_coctails flex__center">
                <p className="app__specialMenu-menu_heading">Cocktails</p>
            </div>

        </div>
        <div style={{ marginTop: '15px' }}>
            <button type="button" className='custom__button'>View More</button>
        </div>
    </div>
);

export default SpecialMenu;
