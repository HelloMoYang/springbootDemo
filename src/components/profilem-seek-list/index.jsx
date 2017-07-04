import * as React from 'react';
import './style/index'
import * as classNames from 'classnames'

import * as Table from 'antd/lib/table'
import 'antd/lib/table/style'
import * as DatePicker from 'antd/lib/date-picker'
import 'antd/lib/date-picker/style'

import * as Select from 'antd/lib/select'
import 'antd/lib/select/style'
const Option = Select.Option;

import * as Button from 'antd/lib/button'
import 'antd/lib/button/style'

class PfilemSeekList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false,
            city: 'beijing',
        }
    }


    ChangeCity = (city) => {
        this.setState({ city: city })
    }

    onChange = (field, value) => {

        this.setState({
            [field]: value,
        });
    }

    onStartChange = (value, d) => {

        this.onChange('startValue', d)
    }

    onEndChange = (value, d) => {
        this.onChange('endValue', d)
    }

    useSearch() {
        let { startValue, endValue, endOpen, city } = this.state
        console.log(startValue, endValue, city, '--1');
    }

    render() {
        let { startValue, endValue, endOpen } = this.state
        const columns1 = [
            {
                title: '文件名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '订单号',
                dataIndex: 'orderNum',
                key: 'orderNum',
            },
            {
                title: '归属省',
                dataIndex: 'provinceId',
                key: 'provinceId',
            },
            {
                title: '读取状态',
                dataIndex: 'readState',
                key: 'readState',
            },
            {
                title: '导入成功数',
                dataIndex: 'impsucNum',
                key: 'impsucNum',
            },
            {
                title: '导入失败数',
                dataIndex: 'impfalNum',
                key: 'impfalNum',
            },
            {
                title: '操作员',
                dataIndex: 'adminName',
                key: 'adminName',
            },
            {
                title: '查看记录详细',
                dataIndex: 'info',
                key: 'info',
            }
        ];

        const columns2 = [
            {
                title: 'Profile-Type',
                dataIndex: 'type',
                key: 'type',
            },
            {
                title: 'ICCID',
                dataIndex: 'ICCId',
                key: 'ICCId',
            },
            {
                title: 'IMSI',
                dataIndex: 'IMSI',
                key: 'IMSI',
            },
            {
                title: '归属省ID',
                dataIndex: 'provinceId',
                key: 'provinceId',
            },
            {
                title: '结果',
                dataIndex: 'result',
                key: 'result',
            },
            {
                title: '描述',
                dataIndex: 'description',
                key: 'description',
            }
        ];

        const data = [
            {
                key: '1',
                name: 'base type',
                orderNum: '1111111',
                provinceId: '22222222',
                readState: '33333333',
                impsucNum: '44444444',
                impfalNum: '5555555555',
                adminName: 'xiaoming',
                info: 'wwwwwwwwww',
            }, 
            {
                key: '2',
                name: 'base type',
                orderNum: '1111111',
                provinceId: '22222222',
                readState: '33333333',
                impsucNum: '44444444',
                impfalNum: '5555555555',
                adminName: 'xiaoming',
                info: 'wwwwwwwwww',
            }, 
            {
                key: '3',
                name: 'base type',
                orderNum: '1111111',
                provinceId: '22222222',
                readState: '33333333',
                impsucNum: '44444444',
                impfalNum: '5555555555',
                adminName: 'xiaoming',
                info: 'wwwwwwwwww',
            }
        ];
        return(
            <div className="seek-table">
                <div className='panel'>
                    <div>
                        归属省：&emsp;
                        <Select defaultValue="beijing" style={{ width: 120 }} onChange={this.ChangeCity} >
                            <Option value="beijing">北京</Option>
                            <Option value="shagnhai">上海</Option>
                            <Option value="hangzhou">杭州</Option>

                        </Select>&emsp;&emsp;

                        时间 : <DatePicker
                            placeholder="开始时间"
                            onChange={this.onStartChange.bind(this)}
                            format="YYYY-MM-DD"

                        /> &nbsp;至&nbsp;

                        <DatePicker
                            placeholder="结束时间"
                            onChange={this.onEndChange.bind(this)}
                            format="YYYY-MM-DD"

                        /> &nbsp;&nbsp;
                        <Button type="primary" onClick={this.useSearch.bind(this)}>查询</Button>
                    </div>
                    <div className='firstTable border-b'>
                        <Table size='small' dataSource={data} columns={columns1} />
                    </div>
                </div>
                <div className='panel'>
                    <div className='firstTable'>
                        <Table size='small' dataSource={[]} columns={columns2} />
                    </div>
                </div>          
            </div>
        );
    }
}

export default PfilemSeekList;