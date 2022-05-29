import { Container, Link } from '@mui/material'
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material'
import { socials } from '../data/socials'
 
const NavBar = () => {
  return (
      <Container style={{width: '100%', height: 50, display: 'flex', alignItems: 'center', justifyContent:'end'}}>
            <Container style={{ width: 200, display: 'flex', justifyContent: 'space-between', margin : 0}}>
                  {socials.map((value)=>(
                        <Link key={value.id}  href={value.link}>
                              {value.social === 'linkedin' && <LinkedIn style={{fontSize: 35, color: '#999'}}/> }
                              {value.social === 'github' && <GitHub style={{fontSize: 35, color: '#999'}}/> }
                              {value.social === 'instagram' && <Instagram style={{fontSize: 35, color: '#999'}}/> }
                        </Link>
                  ))}
            </Container>
            <img style={{height: 40, width: 40, margin: 5, borderRadius: 50 , backgroundColor: '#FFF'}}src={'https://i.pinimg.com/originals/10/b7/f5/10b7f5c9d257a8e7569a04dc596fc5ca.jpg'} alt={'darth vader'}/>
      </Container>
  )
}

export default NavBar