import * as React from 'react';
import SectionHeader from '../../../components/section-header/index'
import ProvinceTable from '../../../components/province-table/index'
import ProvinceForm from '../../../components/province-form/index'

class List extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <div className='module-wapper'>
                        <div className='module-wapper-inner'>
                            <SectionHeader title='省数据'></SectionHeader>
                            <section style={{ minHeight: `${window.innerHeight - 185}` }}>
                                <ProvinceTable />
                                <ProvinceForm />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
