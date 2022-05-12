import React from 'react';
import { useSelector } from 'react-redux';
// @ts-ignore
import AppRoutes from './routes/AppRoutes.tsx' 


const Index = () =>
{
    //const states =  useSelector((state) => state );
    //console.log(states['Auth']);
    return (
        <div>
            <AppRoutes />
        </div>
    );
}

export default Index;
