import * as React from 'react';
import * as Tabs from 'antd/lib/tabs'
import 'antd/lib/tabs/style'
const TabPane = Tabs.TabPane;

import ProfIccid from '../../../components/prof-iccid/index'
import ProfEid from '../../../components/prof-eid/index'
import ProfCount from '../../../components/prof-count/index'

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
                                <TabPane tab=" 查询 ICCID " key="1">
                                    <ProfIccid searchData={this.searchData} />

                                </TabPane>
                                <TabPane tab=" 查询 EID " key="2">
                                    <ProfEid searchData={this.searchData} />

                                </TabPane>
                                <TabPane tab=" Profile 统计 " key="3">
                                    <ProfCount />
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
