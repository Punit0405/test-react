import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

interface MediaProps {
    loading?: boolean;
}

function Media(props: MediaProps) {
    const { loading = false } = props;

    return (
        <Grid container wrap="nowrap">
            <Box
                style={{ width: '50vh' }}
                sx={{ width: 210, marginRight: 0.5, my: 5 }}
            >
                <Skeleton variant="rectangular" style={{ width: '45vh', height: '20vh' }} />
                <Box
                    style={{ width: '50vh' }}
                    sx={{ pt: 0.5 }}
                >
                    <Skeleton width="90%" />
                    <Skeleton width="90%" />
                </Box>
            </Box>
            <Box
                style={{ width: '50vh' }}
                sx={{ width: 210, marginRight: 0.5, my: 5 }}
            >
                <Skeleton variant="rectangular" style={{ width: '45vh', height: '20vh' }} />
                <Box
                    style={{ width: '50vh' }}
                    sx={{ pt: 0.5 }}
                >
                    <Skeleton width="90%" />
                    <Skeleton width="90%" />
                </Box>
            </Box>
            <Box
                style={{ width: '50vh' }}
                sx={{ width: 210, marginRight: 0.5, my: 5 }}
            >
                <Skeleton variant="rectangular" style={{ width: '45vh', height: '20vh' }} />
                <Box
                    style={{ width: '50vh' }}
                    sx={{ pt: 0.5 }}
                >
                    <Skeleton width="90%" />
                    <Skeleton width="90%" />
                </Box>
            </Box>
            <Box
                style={{ width: '50vh' }}
                sx={{ width: 210, marginRight: 0.5, my: 5 }}
            >
                <Skeleton variant="rectangular" style={{ width: '45vh', height: '20vh' }} />
                <Box
                    style={{ width: '50vh' }}
                    sx={{ pt: 0.5 }}
                >
                    <Skeleton width="90%" />
                    <Skeleton width="90%" />
                </Box>
            </Box>
        </Grid>
    );
}

export default function CollectionLoader() {
    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Media loading />
            <Media loading />
        </Box>
    );
}
