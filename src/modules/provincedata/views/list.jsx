import * as React from 'react';
import SectionHeader from '../../../components/section-header/index'
import ProvinceTable from '../../../components/province-table/index'



import '../style/index'

class List extends React.Component {
    render() {
        return (
            <div className="page"> 
                <SectionHeader title="省数据配置"> </SectionHeader>            
                <ProvinceTable/>              
            </div>
        );
    }
}

export default List;
