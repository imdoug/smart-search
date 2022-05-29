import { Container } from '@mui/material'
import logo from '../../assets/sw.svg'

const Banner = () => {
  return (
    <Container style={{display: 'flex', justifyContent: 'center', marginBottom: 30}}>
          <img src={logo} alt="star wars logo" style={{width: 400}}/>
    </Container>
  )
}

export default Banner