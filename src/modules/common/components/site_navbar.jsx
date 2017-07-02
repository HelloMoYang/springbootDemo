import * as React from "react";


const LogoImage = require('../../../img/logo.png');
const Face = require('../../../img/face.png')

// import SiteMenuBar from './site_menubar'



class SiteNavBar extends React.Component {
    render() {
        return (
            <nav className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega navbar-inverse"
                role="navigation">
                <div className="navbar-header">
                    <div className="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
                        {/*<img className="navbar-brand-logo" src={LogoImage} title="Juice" />*/}
                        <span className="navbar-brand-text hidden-xs-down">MEXT</span>
                    </div>
                </div>
                <div className="navbar-container container-fluid">
                    <div className='collapse navbar-collapse navbar-collapse-toolbar'>


                        {/*<SiteMenuBar isActive={this.props.isActive} />*/}

                        <ul className="nav navbar-toolbar navbar-right navbar-toolbar-right">
                            <li className="nav-item dropdown">
                                <a className="nav-link navbar-avatar" data-toggle="dropdown" href="#" aria-expanded="false"
                                    data-animation="scale-up" role="button">
                                    <span className="avatar avatar-online">
                                        <img src={Face} alt="..." />
                                        <i></i>
                                    </span>
                                </a>
                                <div className="dropdown-menu" role="menu">
                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><i className="icon md-account" aria-hidden="true"></i> 账号资料</a>
                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><i className="icon md-settings" aria-hidden="true"></i> 系统设置</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><i className="icon md-power" aria-hidden="true"></i> 安全退出</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SiteNavBar;