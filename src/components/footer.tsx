import { Box } from '@mui/material';
import spacing from './theme/spacing';

function Footer() {
    return(
        <Box component="footer"
        sx={{
          height: spacing[40],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: spacing[0.5]
        }}>

        </Box>
    )
}

export default Footer;