import React from 'react'
import staffImg from '../../images/staff.webp'
import './About.css'

const About = () => {
    return (
        <div>
            <h4 className='p-4 fst-italic'>Enjoy Shopping With Out High Quality Staff To Make You Have An Amazing Experiment !</h4>
            <div className='text-center '>
                <img src={staffImg} alt="Staff" className='img' />
            </div>
        </div>

    )
}

export default About