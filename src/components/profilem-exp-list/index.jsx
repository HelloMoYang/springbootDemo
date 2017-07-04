import * as React from 'react';
import './style/index'
import * as Table from 'antd/lib/table'
import 'antd/lib/table/style'
import * as Select from 'antd/lib/select'
import 'antd/lib/select/style'
const Option = Select.Option;
import * as Input from 'antd/lib/input'
import 'antd/lib/input/style'
import * as Button from 'antd/lib/button'
import 'antd/lib/button/style'

import * as Upload from 'antd/lib/upload'
import 'antd/lib/upload/style'
import * as message from 'antd/lib/message'
import 'antd/lib/message/style'

class PfilemExpList extends React.Component {
    ChangeCity = (city) => {
        this.setState({ city: city })
    }

    render() {
        const props = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
                }
            },
        }
        const columns = [
            {
                title: 'ICCID',
                dataIndex: 'ICCId',
                key: 'ICCId',
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
            },
        ];
        const data = [
            {
                key: '1',
                ICCId: '1111111',
                result: 'good',
                description: 'wwwww555555',
            }, 
            {
                key: '2',
                ICCId: '1111111',
                result: 'bad4',
                description: 'eere55rtt55',
            }, 
            {
                key: '3',
                ICCId: '1111111',
                result: 'good44',
                description: 'tttttt',
            }
        ];
        return(
            <div className="export-table">
                <div className='panel'>
                    <div>
                        <div className="float-l">
                            <label>归属省：
                                <Select defaultValue="beijing" style={{ width: 120 }} onChange={this.ChangeCity} >
                                    <Option value="beijing">北京</Option>
                                    <Option value="shagnhai">上海</Option>
                                    <Option value="hangzhou">杭州</Option>
                                </Select>
                            </label> 
                            <label>请选择批量注销的ICCID文件：
                                <Input placeholder="file path" style={{ width: 120 }} />
                            </label>
                            <Upload {...props}>
                                <Button>选择文件</Button>
                            </Upload>&emsp; 
                        </div> 
                        <div className="float-l">
                            <label>文件记录数：<Input placeholder="20" disabled={true}/></label> 
                            <label>成功注销数：<Input placeholder="50" disabled={true}/></label> 
                            <label>失败数：<Input placeholder="50" disabled={true}/></label>
                        </div>  
                    </div>
                    <div className='firstTable clear'>
                        <Table size='small' dataSource={data} columns={columns} />
                    </div>
                </div>          
            </div>
        );
    }
}

export default PfilemExpList;