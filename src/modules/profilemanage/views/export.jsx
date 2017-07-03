import * as React from 'react';
import '../style/index'
import Tabbar from '../../../components/tabbar/index'
import * as Select from 'antd/lib/select'
import 'antd/lib/select/style'
const Option = Select.Option;
import * as Input from 'antd/lib/input'
import 'antd/lib/input/style'
import * as Button from 'antd/lib/button'
import 'antd/lib/button/style'
import PfilemExpList from '../../../components/profilem-exp-list/index'

class Export extends React.Component {
    doImport() {

    }

    tabClickHandler(key) {
        if(key=='import') {
            global.hashHistory.push(`/profilemanage/list`)
        } else {
            global.hashHistory.push(`/profilemanage/${key}/list`)
        }  
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    render() {
        let tab_data = [
            {
                name: '批量导入',
                active: false,
                key: 'import'
            },
            {
                name: '批量注销',
                active: true,
                key: 'export'
            },{
                name: '日志查询',
                active: false,
                key: 'seek'
            }
        ]
        return (
            <div className="page profilemanage">
                <div className="page-content">
                    <div className='module-wapper' style={{ minHeight: `${window.innerHeight - 200}` }}>
                        <div className='module-wapper-inner edit-wapper-inner'>
                            <section>
                                <Tabbar tabClick={this.tabClickHandler.bind(this)} data={tab_data} />
                                <div className="filter">
                                    归属省：
                                    <Select defaultValue="北京" style={{ width: 200 }} onChange={this.handleChange.bind(this)}>
                                        <Option value="北京">北京</Option>
                                        <Option value="河北">河北</Option>
                                        <Option value="天津">天津</Option>
                                    </Select>
                                    <Button>查询</Button>
                                </div>
                            </section>
                            <section>
                                <PfilemExpList />
                            </section>
                            <section className=''>
                                <Button onClick={this.doImport.bind(this)}>结果导出</Button>
                            </section>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Export;





