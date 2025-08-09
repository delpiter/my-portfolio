import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { Grid, Stack } from "@mui/material";
import './Landing.css';
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import Link from '@mui/material/Link';

const darkImg = import.meta.env.BASE_URL.concat("DarkLandingImage.avif")
const lightImg = import.meta.env.BASE_URL.concat("LightLandingImage.avif")
const avatar = import.meta.env.BASE_URL.concat("Avatar.jpg")

export default function LandingPage() {
    const theme = useTheme();
    const [backgroundImage, setBackgroundImage] = useState(
        theme.palette.mode === 'dark' ? darkImg : lightImg
    );
    const [fade, setFade] = useState(true);

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
                    justifyContent: 'flex-start',
                    height: '100%',
                    zIndex: 1,
                    ml: '10%'
                }}>
                <Paper
                    elevation={4}
                    sx={{
                        background: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(7.5px)',
                        WebkitBackdropFilter: 'blur(7.5px)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.18)',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        padding: '2rem',
                        width: {
                            xs: '90%',  // Small screens
                            sm: '70%',
                            md: '50%',
                            lg: '40%'   // Large screens
                        },
                        maxWidth: '600px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            flexDirection: {
                                xs: 'column',
                                sm: 'row'
                            }
                        }}
                    >
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Box
                                sx={{
                                    width: {
                                        xs: '120px',
                                        sm: '100%',
                                    },
                                    aspectRatio: '1',
                                    borderRadius: '50%',
                                    backgroundImage: `url(${avatar})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    margin: 'auto',
                                    border: '2px solid rgba(255,255,255,0.3)',
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 8 }}>
                            <Stack spacing={1} alignItems="flex-start" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                                    <Link
                                        href="https://github.com/delpiter"
                                        rel="noopener noreferrer"
                                        underline="none"
                                        component="a"
                                        sx={{ color: 'inherit', display: 'inline-flex', alignItems: 'center' }}
                                    >
                                        <FaGithub size={32} />
                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/in/gioele-foschi"
                                        rel="noopener noreferrer"
                                        underline="none"
                                        component="a"
                                        sx={{ color: 'inherit', display: 'inline-flex', alignItems: 'center' }}
                                    >
                                        <FaLinkedin size={32} />
                                    </Link>
                                </Box>
                                <Box component="p" sx={{ m: 0 }}>
                                    {"Gioele Foschi".split("").map((letter, i) => {
                                        const isColored = i === 0 || i === 7;
                                        return (
                                            <span
                                                key={`l_${i}`}
                                                style={{
                                                    fontSize: 48,
                                                    fontWeight: 'bolder',
                                                    color: isColored
                                                        ? theme.palette.secondary.main
                                                        : theme.palette.text.primary,
                                                }}
                                            >
                                                {letter}
                                            </span>
                                        );
                                    })}
                                </Box>
                                <Box component="p" sx={{ m: 0 }}>
                                    <i color="theme.palette.secondary.main" >Aspiring</i> Software Engineer
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Box>
    );
}