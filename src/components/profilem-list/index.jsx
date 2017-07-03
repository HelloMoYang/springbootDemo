import * as React from 'react';
import './style/index'
import * as Table from 'antd/lib/table'
import 'antd/lib/table/style'

class PfilemImpList extends React.Component {
    
    render() {
        const columns = [
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
            },
        ];
        const data = [
            {
                key: '1',
                type: 'base type',
                ICCId: '1111111',
                IMSI: '22222222',
                provinceId: '33333333',
                result: '44444444',
                description: '5555555555',
            }, 
            {
                key: '2',
                type: 'base type',
                ICCId: '1111111',
                IMSI: '22222222',
                provinceId: '33333333',
                result: '44444444',
                description: '5555555555',
            }, 
            {
                key: '3',
                type: 'base type',
                ICCId: '1111111',
                IMSI: '22222222',
                provinceId: '33333333',
                result: '44444444',
                description: '5555555555',
            }
        ];
        return(
            <div className="import-list">
                <div className="import-filter">
                    <Table calssName="" columns={columns} dataSource={data} />
                </div>            
            </div>
        );
    }
}

export default PfilemImpList;