import * as React from 'react';
import SectionHeader from '../../../components/section-header/index'
import ProvinceTable from '../../../components/province-table/index'

class List extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <div className='module-wapper'>
                        <div className='module-wapper-inner'>
                            <SectionHeader title='省数据配置'></SectionHeader>
                            <section style={{ minHeight: `${window.innerHeight - 185}` }}>
                                <ProvinceTable />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
