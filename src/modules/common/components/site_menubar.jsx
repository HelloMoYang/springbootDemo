import * as React from 'react';
import '../Plugin/menu'

class SiteMenuBar extends React.Component {
    render() {
        return (
            <div className="site-menubar">
                <div className="site-menubar-body">
                    <div>
                        <div>
                            <ul className="site-menu" data-plugin="menu">
                                <li className={this.props.isActive('/organization') ? 'site-menu-item active' : 'site-menu-item'} data-href="/organization">
                                    <a className="animsition-link">
                                        <i className="site-menu-icon md-city-alt" aria-hidden="true"></i>
                                        <span className="site-menu-title">机构</span>
                                    </a>
                                </li>

                                <li className={this.props.isActive('/resources') ? 'site-menu-item active' : 'site-menu-item'} data-href="/resources">
                                    <a className="animsition-link">
                                        <i className="site-menu-icon md-drink" aria-hidden="true"></i>
                                        <span className="site-menu-title">资源</span>
                                    </a>
                                </li>

                                <li className={this.props.isActive('/device') ? 'site-menu-item active' : 'site-menu-item'} data-href="/device">
                                    <a className="animsition-link">
                                        <i className="site-menu-icon md-dns" aria-hidden="true"></i>
                                        <span className="site-menu-title">设备</span>
                                    </a>
                                </li>

                                <li className={this.props.isActive('/users') ? 'site-menu-item active' : 'site-menu-item'} data-href="/users">
                                    <a className="animsition-link">
                                        <i className="site-menu-icon md-accounts-list" aria-hidden="true"></i>
                                        <span className="site-menu-title">用户</span>
                                    </a>
                                </li>

                                <li className={this.props.isActive('/plan') ? 'site-menu-item active' : 'site-menu-item'} data-href="/plan">
                                    <a className="animsition-link">
                                        <i className="site-menu-icon md-view-quilt" aria-hidden="true"></i>
                                        <span className="site-menu-title">方案</span>
                                    </a>
                                </li>

                                <li className={this.props.isActive('/publish') ? 'site-menu-item active' : 'site-menu-item'} data-href="/publish">
                                    <a className="animsition-link">
                                        <i className="site-menu-icon md-share" aria-hidden="true"></i>
                                        <span className="site-menu-title">发布</span>
                                    </a>
                                </li>

                                {/*<li className="site-menu-item">
                                    <a className="animsition-link" href="/tasks">
                                        <i className="site-menu-icon md-apps" aria-hidden="true"></i>
                                        <span className="site-menu-title">应用</span>
                                    </a>
                                </li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SiteMenuBar;