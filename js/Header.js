import React from 'react'
const { object } = React.PropTypes
const style = {
  header: {
    paddingLeft: 0
  },
  logoContainer: {
    display: 'inline-block'
  },
  logoBox: {
    backgroundColor: '#0046AD',
    border: '2px solid #ffffff'
  },
  schoolLogoContainer: {
    backgroundColor: '#ffffff',
    float: 'left',
    padding: 10
  },
  schoolLogoContainerImg: {
    height: 40,
    width: 'auto'
  },
  ceLogoContainer: {
    float: 'left'
  },
  ceLogoContainerImg: {
    height: 60,
    width: 'auto'
  },
  cccLogoContainer: {
    color: '#ffffff',
    fontFamily: 'Times, "Times New Roman", serif',
    fontSize: 11.8,
    marginTop: 8,
    textTransform: 'uppercase'
  },
  portalNav: {
    padding: '10px 0'
  },
  navbar: {
    background: 'rgba(0, 0, 0, 0) none repeat scroll 0 0',
    border: 'medium none',
    borderRadius: 0,
    marginBottom: 0,
    padding: 0
  },
  clear: {
    clear: 'both'
  }
}

const Header = React.createClass({
  contextTypes: {
    router: object
  },
  goToHomePage () {
    this.context.router.transitionTo('/')
  },
  render () {
    return (
      <header className='portal-header animated fadeIn' style={style.header}>
        <div className='container'>
          <div className='portal-nav' style={style.portalNav}>
            <nav className='navbar navbar-default' style={style.navbar}>
              <a href='' onClick={() => this.goToHomePage()}>
                <div id='logoContainer' style={style.logoContainer}>
                  <div id='logoBox' style={style.logoBox}>
                    <div id='schoolLogoContainer'
                      style={style.schoolLogoContainer}><img
                        alt='Online Course Exchange'
                        src='/public/img/ccc-logomark.png'
                        style={style.schoolLogoContainerImg} /></div>
                    <div id='ceLogoContainer'
                      style={style.ceLogoContainer}><img alt='Online Course Exchange'
                        src='./public/img/online-course-exchange-logo-horizontal.png'
                        srcSet='./public/img/online-course-exchange-logo-horizontal.png 1x,
                                                   ./public/img/online-course-exchange-logo-horizontal-2x.png 2x,
                                                   ./public/img/online-course-exchange-logo-horizontal-3x.png 3x,
                                                   ./public/img/online-course-exchange-logo-horizontal-4x.png 4x'
                        style={style.ceLogoContainerImg} /></div>
                    <div style={style.clear} />
                  </div>
                  <div id='cccLogoContainer' style={style.cccLogoContainer}>California Community Colleges</div>
                </div>
              </a>
            </nav>
          </div>
        </div>
      </header>
    )
  }
})

export default Header
