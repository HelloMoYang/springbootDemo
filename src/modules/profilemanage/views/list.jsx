import * as React from 'react';
import '../style/index'
import * as Tabs from 'antd/lib/tabs'
import 'antd/lib/tabs/style'
const TabPane = Tabs.TabPane;

import PfilemImpList from '../../../components/profilem-list/index'
import PfilemExpList from '../../../components/profilem-exp-list/index'
import PfilemSeekList from '../../../components/profilem-seek-list/index'

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    searchData(value, param) {
        console.log(value, param);
        // if (param == 'iccid') {
        //     console.log(value, '---iccid');
        // }

    }

    changeTab(key) {
        console.log(key);
    }

    render() {
        return (
            <div className="page profilequery">
                <div className="page-content">
                    <div className='module-wapper'>
                        <div className='module-wapper-inner' style={{ minHeight: `${window.innerHeight - 88}` }}>
                            <Tabs onChange={this.changeTab.bind(this)} >
                                <TabPane tab="批量导入" key="1">
                                    <PfilemImpList  />

                                </TabPane>
                                <TabPane tab="批量注销" key="2">
                                    <PfilemExpList  />
                                
                                </TabPane>
                                <TabPane tab="日志查询" key="3">
                                    <PfilemSeekList />
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
