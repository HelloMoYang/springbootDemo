import * as React from 'react';
import './style/index'
import * as Table from 'antd/lib/table'
import 'antd/lib/table/style'

class PfilemSeekList extends React.Component {
    
    render() {
        const columns = [
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
            <div className="seek-list">
                <div className="seek-filter">
                    <Table calssName="" columns={columns} dataSource={data} />
                </div>            
            </div>
        );
    }
}

export default PfilemSeekList;