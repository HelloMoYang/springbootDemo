import * as React from 'react';
import * as classNames from 'classnames'

import * as Input from 'antd/lib/input'
import 'antd/lib/input/style'
const Search = Input.Search;
import * as Table from 'antd/lib/table'
import 'antd/lib/table/style'

import './style/index'

class ProfIccid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seaTxt: ''
        }
    }
    searchData(value) {
        this.props.searchData && this.props.searchData(value, 'iccid')
        //this.setState({ seaTxt: '' })
    }
    onChangeTxt(e) {
        this.setState({ seaTxt: e.target.value })
    }

    render() {
        const columns1 = [{
            title: 'ICCID',
            dataIndex: 'a',
            key: 'a',
        }, {
            title: '归属省',
            dataIndex: 'b',
            key: 'b',
        }, {
            title: 'Profile-Type',
            dataIndex: 'c',
            key: 'c',
        }, {
            title: 'Profile状态',
            dataIndex: 'd',
            key: 'd',
        }, {
            title: '创建时间',
            dataIndex: 'e',
            key: 'e',
        }, {
            title: 'IMSI',
            dataIndex: 'f',
            key: 'f',
        }, {
            title: 'Matching-ID',
            dataIndex: 'g',
            key: 'g',
        },
        {
            title: '绑定状态',
            dataIndex: 'h',
            key: 'h',
        }, {
            title: 'EID',
            dataIndex: 'i',
            key: 'i',
        }]

        const columns2 = [{
            title: 'ICCID',
            dataIndex: 'a',
            key: 'a',
        }, {
            title: 'EID',
            dataIndex: 'b',
            key: 'b',
        }, {
            title: '操作时间',
            dataIndex: 'c',
            key: 'c',
        }, {
            title: '操作命令',
            dataIndex: 'd',
            key: 'd',
        }, {
            title: '操作结果',
            dataIndex: 'e',
            key: 'e',
        }, {
            title: '当前状态',
            dataIndex: 'f',
            key: 'f',
        }, {
            title: '完成时间',
            dataIndex: 'g',
            key: 'g',
        }]

        let { seaTxt } = this.state
        return (
            <div className='tab-iccid'>
                <div>
                    请输入ICCID :&emsp;
                    <Search
                        ref='iccid'
                        value={seaTxt}
                        style={{ width: 200 }}
                        onChange={this.onChangeTxt.bind(this)}
                        onSearch={value => this.searchData(value)}
                    />
                </div>
                <div className='firstTable'>
                    <Table size='small' dataSource={[]} columns={columns1} />
                </div>

                <div>
                    <Table size='small' dataSource={[]} columns={columns2} />
                </div>

            </div>
        );
    }
}


export default ProfIccid;
