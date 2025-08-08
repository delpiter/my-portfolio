import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from "react";
import './Landing.css'

const darkImg = import.meta.env.BASE_URL.concat("DarkLandingImage.avif")
const lightImg = import.meta.env.BASE_URL.concat("LightLandingImage.avif")


export default function LandingPage() {
    const theme = useTheme();
    const [backgroundImage, setBackgroundImage] = useState(
        theme.palette.mode === 'dark' ? darkImg : lightImg
    );
    const [fade, setFade] = useState(true);

    // Handle background change with fade
    useEffect(() => {
        setFade(false);

        const timeout = setTimeout(() => {
            setBackgroundImage(theme.palette.mode === 'dark' ? darkImg : lightImg);
            setFade(true);
        }, 300);

        return () => clearTimeout(timeout);
    }, [theme.palette.mode]);

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: fade ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out',
                    zIndex: 0,
                }}
            />

            {/* Glass Effect */}
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    zIndex: 1,
                }}
            >
                <Paper elevation={4}
                    sx={{
                        background: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(7.5px)',
                        WebkitBackdropFilter: 'blur(7.5px)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.18)',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        padding: '4rem',
                    }}>
                    <Box component="span" sx={{ display: 'inline-block', mx: '8rem', my: '5rem' }}>This is blurred glass</Box>
                </Paper>


            </Box>
        </Box>
    );
}