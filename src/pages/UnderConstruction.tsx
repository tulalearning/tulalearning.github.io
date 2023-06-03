import { Box } from '@mui/system'
import constructionImage from '../assets/onDev.jpg'
import NavbarComponent from '../components/NavBarComponent'

const UnderConstruction = () => {
  return (
    <>
      <NavbarComponent />
      <Box>
        <img
          src={constructionImage}
          alt="Under Construction Page"
          style={{ width: '600px', maxWidth: '100%', objectFit: 'cover' }}
        />
      </Box>
    </>
  )
}

export default UnderConstruction
