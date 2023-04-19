import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';


// ----------------------------------------------------------------------

const DRAWER_WIDTH = 250;
const APPBAR_MOBILE = 54;
const APPBAR_DESKTOP = 62;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ onOpenSidebar }) {
  const changeTitle = () => {
    switch (window.location.pathname) {
      case '/dashboard/enquiry':
        return 'Enquiry';
      case '/dashboard/master':
        return 'Master';
      case '/dashboard/orderlist':
        return 'Order List';
      case '/dashboard/myOrders':
        return 'Order List';
      case '/dashboard/panelManager':
        return 'Access Manager';
      case '/dashboard/snaglist':
        return 'Snaglist';
      case '/dashboard/settings':
        return 'User Settings';
      default:
        return 'Hi, Welcome Back';
    }
  };
  const title = changeTitle();
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
        <Typography variant="h4" sx={{ color: 'black', marginRight: 1 }}>
          {title}
        </Typography>
       
        
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
        <Searchbar />
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
