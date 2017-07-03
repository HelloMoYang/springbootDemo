import * as React from 'react';
import './style/index'
import * as Table from 'antd/lib/table'
import 'antd/lib/table/style'

class PfilemExpList extends React.Component {
    
    render() {
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
            <div className="export-list">
                <div className="export-filter">
                    <Table calssName="" columns={columns} dataSource={data} />
                </div>            
            </div>
        );
    }
}

export default PfilemExpList;