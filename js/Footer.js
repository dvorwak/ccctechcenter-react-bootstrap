import React from 'react'
const style = {
  footer: {
    marginTop: 36
  },
  copyright: {
    color: 'rgba(255, 255, 255, 0.88)',
    padding: '40px 0 10px',
    textAlign: 'center'
  },
  a: {
    color: '#ffffff'
  }
}

const Footer = () => (
  <footer className='footer navbar-fixed-bottom' style={style.footer}>
    <div className='container'>
      <a href='http://www.cccco.edu/'><img src='./public/img/ccc-logo-gray.png' alt="California Community Colleges Chancellor's Office" /></a>
      <div className='copyright' style={style.copyright}>
        &copy; California Community Colleges Chancellor's Office. All rights reserved.
        &bull; <a href='' tabIndex='0' style={style.a}>Privacy Policy</a>
        &nbsp;&bull; <a href='' tabIndex='0' style={style.a}>Terms of Use</a>
        &nbsp;&bull; <a href='' tabIndex='0' style={style.a}>Help</a>
      </div>
    </div>
  </footer>
)

export default Footer
