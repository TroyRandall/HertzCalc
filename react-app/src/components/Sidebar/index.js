import react, { useState } from 'react';
import { useEffect, useSelector } from 'react-redux';
import '../Styles/styles.css'

function Sidebar() {
    return (
        <div className='calc-container'>
            <div className='calc-title'> My Calculators</div>
            <div className='calc-list'>
                <div className='calc'>the best calc there ever was </div>
                <div className='calc'> Calc name 2 </div>
                <div className='calc'> Calc that has a long name here and it is just too excessive to manage </div>
                <div className='calc'> Calc Name Here </div>
                <div className='add-calc-container'> <button className='add-calc-button'>➕</button></div>
            </div>
        </div>
    )
}

export default Sidebar;
