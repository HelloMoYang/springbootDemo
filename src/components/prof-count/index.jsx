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
            city: 'beijing'
        }
    }
    searchData(value) {
        this.props.searchData && this.props.searchData(value, 'eid')
        //this.setState({ seaTxt: '' })
    }
    useSearch() {
        let { startValue, endValue, endOpen, city } = this.state
        console.log(startValue, endValue, city, '--');
    }

    disabledStartDate = (startValue) => {
        let endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    }

    disabledEndDate = (endValue) => {
        let startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
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

    handleStartOpenChange = (open) => {
        if (!open) {
            this.setState({ endOpen: true })
        }
    }

    handleEndOpenChange = (open) => {
        this.setState({ endOpen: open })
    }
    ChangeCity = (city) => {
        this.setState({ city: city })
    }


    render() {
        const columns1 = [
            {
                title: 'EID',
                dataIndex: 'a',
                key: 'a',
            }, {
                title: 'ICCID',
                dataIndex: 'b',
                key: 'b',
            }, {
                title: '归属省',
                dataIndex: 'c',
                key: 'c',
            }, {
                title: 'Profile-Type',
                dataIndex: 'd',
                key: 'd',
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
            }, {
                title: '绑定状态',
                dataIndex: 'h',
                key: 'h',
            }
        ]

        const columns2 = [
            {
                title: 'EID',
                dataIndex: 'a',
                key: 'a',
            }, {
                title: 'ICCID',
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
                            //disabledDate={this.disabledStartDate}
                            showTime
                            //format="YYYY-MM-DD"
                            value={startValue}
                            placeholder="开始时间"
                            onChange={this.onStartChange.bind(this)}
                        //onOpenChange={this.handleStartOpenChange}
                        />&nbsp;至&nbsp;
                         <DatePicker
                            //disabledDate={this.disabledEndDate}
                            showTime
                            //format="YYYY-MM-DD"
                            value={endValue}
                            placeholder="结束时间"
                            onChange={this.onEndChange.bind(this)}
                            open={endOpen}
                        //onOpenChange={this.handleEndOpenChange}
                        />
                        <Button type="primary" onClick={this.useSearch.bind(this)}>查询</Button>
                    </div>
                    <div className='firstTable'>
                        <Table size='small' dataSource={[]} columns={columns1} />
                    </div>
                </div>


                <div>
                    <Table size='small' dataSource={[]} columns={columns2} />
                </div>

            </div>
        );
    }
}


export default ProfCount;
