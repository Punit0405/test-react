import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const StudioClientLoader = () => {
  return (
    <>
      <Skeleton variant="rectangular" sx={{ marginRight: 2, my: 1, marginBottom: 0.5, paddingBottom: 0.5 }} style={{ width: '100%', height: '4vw' }} />
      <Skeleton variant="rectangular" sx={{ marginRight: 2, my: 1, marginBottom: 0.5, paddingBottom: 0.5 }} style={{ width: '100%', height: '4vw' }} />
      <Skeleton variant="rectangular" sx={{ marginRight: 2, my: 1, marginBottom: 0.5, paddingBottom: 0.5 }} style={{ width: '100%', height: '4vw' }} />
      <Skeleton variant="rectangular" sx={{ marginRight: 2, my: 1, marginBottom: 0.5, paddingBottom: 0.5 }} style={{ width: '100%', height: '4vw' }} />

    </>
  )
}

export default StudioClientLoader