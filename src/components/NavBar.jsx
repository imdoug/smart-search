import { Container, Link } from '@mui/material'
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material'
import { socials } from '../data/data'
import logo from '../logo.svg'
 
const NavBar = () => {
  return (
      <Container maxWidth="l" style={{ display: 'flex', alignItems: 'center', justifyContent:'end', margin: 5, marginBottom: 80}}>
            <Container style={{ width: 200, display: 'flex', justifyContent: 'space-between', margin: 0}}>
                  {socials.map((value)=>(
                        <Link key={value.id}  href={value.link} target="_blank">
                              {value.social === 'linkedin' && <LinkedIn style={{fontSize: 35, color: '#999'}}/> }
                              {value.social === 'github' && <GitHub style={{fontSize: 35, color: '#999'}}/> }
                              {value.social === 'instagram' && <Instagram style={{fontSize: 35, color: '#999'}}/> }
                        </Link>
                  ))}
            </Container>
            <img className='dv' style={{height: 40, width: 40, margin: 5, borderRadius: 50}}src={logo} alt={'darth vader'}/>
      </Container>
  )
}

export default NavBar