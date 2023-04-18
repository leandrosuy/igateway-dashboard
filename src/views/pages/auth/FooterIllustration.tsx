// ** React Imports
import { Fragment } from 'react'

// ** MUI Components
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

const FooterWhite = styled('div')(() => ({
  left: 0,
  bottom: 0,
  position: 'absolute',
  backgroundColor: '#ffffff',
  display: 'flex',
  width: '100vw',
  height: '30vh',
  zIndex: -99
}))

const BackgroundImg = styled('div')(() => ({
  backgroundColor: '#3A4F6F',
  height: '100vh',
  width: '100vw',
  zIndex: -99,
  position: 'absolute'
}))

const MaskImg = styled('img')(() => ({
  bottom: 274,
  zIndex: -1,
  width: '100%',
  position: 'absolute'
}))

const FooterIllustrationsV1 = () => {
  // ** Hook
  const theme = useTheme()

  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  if (!hidden) {
    return (
      <Fragment>
        <BackgroundImg />
        <MaskImg alt='Back Login' src={`/images/pages/backLogin.png`} />
        <FooterWhite />
      </Fragment>
    )
  } else {
    return null
  }
}

export default FooterIllustrationsV1
