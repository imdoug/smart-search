import { Paper, InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Input = () => {
  return (
        <>
      <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
            {/* input */}
            <InputBase 
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Star Wars Movies"
                  inputProps={{ 'aria-label': 'search start wars' }}
            />
            {/* search btn */}
            <IconButton 
                  type="submit" 
                  sx={{ p: '10px' }} 
                  aria-label="search">
                  <SearchIcon />
            </IconButton>
            {/*  */}
      </Paper>
        </>
  )
}

export default Input