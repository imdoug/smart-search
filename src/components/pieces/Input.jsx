import { Paper, InputBase, IconButton, Container } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Input = () => {
  return (
        <>
        <Container style={{padding: '0px 10px', marginBottom: 300, padding: '0px 10px'}}>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: 500,margin: '0 auto', borderRadius: 30, padding: '5px 10px'}}>
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
      </Container>
        </>
  )
}

export default Input