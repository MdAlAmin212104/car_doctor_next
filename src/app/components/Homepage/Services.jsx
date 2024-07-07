import React from 'react';
import {services} from '../../../lib/Services.js';
import ServicesCard from '../Card/ServicesCard';

const Services = () => {
    return (
        <div className='text-slate-800 min-h-screen'>
            <div className='text-center container mx-auto'>
                <h3 className='text-orange-600 text-2xl font-bold'>Our Service </h3>
                <h2 className='text-5xl'>Our Service Area</h2>
                <p className='w-[720px] mx-auto mt-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. </p>
                <div className='container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {
                        services.map((service) => (
                            <ServicesCard service={service} key={service._id}/>
                        ))
                    }
                </div>  

            </div>
            
        </div>
    );
};

export default Services;