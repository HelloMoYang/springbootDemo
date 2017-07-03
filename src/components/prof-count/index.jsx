import * as React from 'react';
import * as classNames from 'classnames'

import * as Input from 'antd/lib/input'
import 'antd/lib/input/style'
const Search = Input.Search;
import * as Table from 'antd/lib/table'
import 'antd/lib/table/style'
import * as DatePicker from 'antd/lib/date-picker'
import 'antd/lib/date-picker/style'

import * as Select from 'antd/lib/select'
import 'antd/lib/select/style'
const Option = Select.Option;

import * as Button from 'antd/lib/button'
import 'antd/lib/button/style'


import './style/index'

class ProfCount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false,
            city: 'beijing',
            city2: 'beijing'
        }
    }
    searchData(value) {
        this.props.searchData && this.props.searchData(value, 'eid')
        //this.setState({ seaTxt: '' })
    }
    useSearch() {
        let { startValue, endValue, endOpen, city } = this.state
        console.log(startValue, endValue, city, '--1');
    }

    countSearch() {
        let { city2 } = this.state
        console.log(city2, '--2');
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

    ChangeCity = (city) => {
        this.setState({ city: city })
    }
    ChangeCity2 = (city) => {
        this.setState({ city2: city })
    }


    render() {
        const columns1 = [
            {
                title: '归属省',
                dataIndex: 'a',
                key: 'a',
            }, {
                title: '操作命令',
                dataIndex: 'b',
                key: 'b',
            }, {
                title: 'Profile-Type',
                dataIndex: 'c',
                key: 'c',
            }, {
                title: '操作时间',
                dataIndex: 'd',
                key: 'd',
            }, {
                title: '成功',
                dataIndex: 'd',
                key: 'd',
            }, {
                title: '失败',
                dataIndex: 'e',
                key: 'e',
            }
        ]

        const columns2 = [
            {
                title: '归属省',
                dataIndex: 'a',
                key: 'a',
            }, {
                title: '未使用Profile',
                dataIndex: 'b',
                key: 'b',
            }, {
                title: '已使用Profile',
                dataIndex: 'c',
                key: 'c',
            }, {
                title: '操作命令',
                dataIndex: 'd',
                key: 'd',
            }
        ]

        let { startValue, endValue, endOpen } = this.state

        return (
            <div className='tab-count'>
                <p className='title'>Profile使用统计</p>
                <div className='panel'>
                    <div>
                        请输入查询省份 : &emsp;
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
                    <div className='firstTable'>
                        <Table size='small' dataSource={[]} columns={columns1} />
                    </div>
                </div>

                <p className='title'>Profile库存统计</p>
                <div className='panel'>
                    <div>
                        请输入查询省份 : &emsp;
                        <Select defaultValue="beijing" style={{ width: 120 }} onChange={this.ChangeCity2} >
                            <Option value="beijing">北京</Option>
                            <Option value="shagnhai">上海</Option>
                            <Option value="hangzhou">杭州</Option>
                        </Select>&emsp;&emsp;

                        <Button type="primary" onClick={this.countSearch.bind(this)}>查询</Button>
                    </div>
                    <div className='firstTable'>
                        <Table size='small' dataSource={[]} columns={columns2} />
                    </div>
                </div>

            </div>
        );
    }
}


export default ProfCount;
