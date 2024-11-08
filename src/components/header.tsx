import { Box } from '@mui/material';
import spacing from './theme/spacing';

function Header() {
  return (
    <Box
      component="footer"
      sx={{
        height: spacing[20],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: spacing[0.5]
      }}
    >
      Jazz Hands
    </Box>
  );
}

export default Header;
