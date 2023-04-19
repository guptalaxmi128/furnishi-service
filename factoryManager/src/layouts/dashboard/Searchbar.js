// import { useState } from 'react';
// // material
// import { styled, alpha } from '@mui/material/styles';
// import { Input, Slide, Button, IconButton, InputAdornment, ClickAwayListener } from '@mui/material';
// // component
// import Iconify from '../../components/Iconify';

// // ----------------------------------------------------------------------

// const APPBAR_MOBILE = 64;
// const APPBAR_DESKTOP = 92;

// const SearchbarStyle = styled('div')(({ theme }) => ({
//   top: 0,
//   left: 0,
//   zIndex: 99,
//   width: '100%',
//   display: 'flex',
//   position: 'absolute',
//   alignItems: 'center',
//   height: APPBAR_MOBILE,
//   backdropFilter: 'blur(6px)',
//   WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
//   padding: theme.spacing(0, 3),
//   boxShadow: theme.customShadows.z8,
//   backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
//   [theme.breakpoints.up('md')]: {
//     height: APPBAR_DESKTOP,
//     padding: theme.spacing(0, 5),
//   },
// }));

// // ----------------------------------------------------------------------

// export default function Searchbar() {
//   const [isOpen, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen((prev) => !prev);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <ClickAwayListener onClickAway={handleClose}>
//       <div>
//         {!isOpen && (
//           <IconButton onClick={handleOpen}>
//             <Iconify icon="eva:search-fill" width={20} height={20} />
//           </IconButton>
//         )}

//         <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
//           <SearchbarStyle>
//             <Input
//               autoFocus
//               fullWidth
//               disableUnderline
//               placeholder="Search…"
//               startAdornment={
//                 <InputAdornment position="start">
//                   <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
//                 </InputAdornment>
//               }
//               sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
//             />
//             <Button variant="contained" onClick={handleClose}>
//               Search
//             </Button>
//           </SearchbarStyle>
//         </Slide>
//       </div>
//     </ClickAwayListener>
//   );
// }


import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment } from '@mui/material';
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));

// ----------------------------------------------------------------------

Searchbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

export default function Searchbar({ numSelected, filterName, onFilterName }) {
  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <SearchStyle
          value={filterName}
          onChange={onFilterName}
          sx={{fontSize:12}}
          placeholder="Search user..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
        />
      )}

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Iconify icon="eva:trash-2-fill" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Tooltip>
      )} */}
    </RootStyle>
  );
}
