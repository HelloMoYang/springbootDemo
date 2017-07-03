import * as React from 'react';
import SectionHeader from '../../../components/section-header/index'
import ProvinceTable from '../../../components/province-table/index'
import ProvinceForm from'../../../components/province-form/index'


import '../style/index'

class List extends React.Component {
    render() {
        return (
            <div className="page"> 
                <SectionHeader title="省数据配置"> </SectionHeader>            
                <ProvinceTable/>
                <ProvinceForm/>
            </div>
        );
    }
}

export default List;
