import React from 'react';
import { useSelector } from 'react-redux';
// @ts-ignore
import AppRoutes from './routes/AppRoutes.tsx' 
import { ThemeProvider } from "@mui/material";
// @ts-ignore
import { theme } from "./style/style.ts";
const Index = () =>
{
     
    return (
        <ThemeProvider theme={theme}>
            <AppRoutes />
        </ThemeProvider>
    );
}

export default Index;
