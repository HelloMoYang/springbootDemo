import * as React from 'react';
import './style/index'
import * as Button from 'antd/lib/button'
import 'antd/lib/button/style'
import * as Table from 'antd/lib/table'
import 'antd/lib/table/style'
import * as Input from 'antd/lib/input'
import 'antd/lib/input/style'
const Search = Input.Search;

class OperatormanageList extends React.Component {
    renderTable() {
        const columns = [{
            title: '操作员ID',
            dataIndex: 'ID',
            key: 'ID',
        }, {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
        }, {
            title: '创建时间',
            dataIndex: 'craete_at',
            key: 'craete_at',
        }, {
            title: '变更时间',
            dataIndex: 'updata_at',
            key: 'updata_at',
        }, {
            title: '操作范围',
            dataIndex: 'operation',
            key: 'operation',
        }, {
            title: '操作',
            key: 'operate',
            render: () => (
                <span>
                    <a href="javascript:;">变更</a>
                </span>
            ),
        }];
        const data = [{
            key: '1',
            ID: 'Admin',
            name: '后台管理',
            state: '有效',
            craete_at: '2017-06-01',
            updata_at: '2017-06-01',
            operation: '全国',
        }, {
            key: '2',
            ID: 'Admin',
            name: '后台管理',
            state: '有效',
            craete_at: '2017-06-01',
            updata_at: '2017-06-01',
            operation: '全国',
        }];
        return (
            <div className='operatormanage-cont' style={{ padding: '0 20px' }}>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
    goCreate() {
        if (this.props.goCreate) {
            this.props.goCreate()
        }
    }
    render() {
        return (
            <div className='operatormanage-list'>
                <div className='operatormanage-sort'>
                    <Button type="primary" className='btn-create-type' onClick={this.goCreate.bind(this)}>创建新用户</Button>
                    <Button type="primary" className='btn-create-type' >显示全部</Button>
                    <Button type="primary" className='btn-create-type' >查询</Button>
                    <Search
                        placeholder="请输入关键字"
                        style={{ width: 200, float: 'right' }}
                    />
                    <span className='title'>操作员ID：</span>
                </div>
                {this.renderTable()}
            </div>
        );
    }
}

export default OperatormanageList;
