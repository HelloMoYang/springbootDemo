import * as React from 'react';
import SectionHeader from '../../../components/section-header/index'
import OperatormanageList from '../../../components/operatormanage-list/index'

class List extends React.Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {

    }
    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <div className='module-wapper-inner' style={{ padding: '15px' }}>
                        <SectionHeader title='操作员管理'></SectionHeader>
                        <section style={{ minHeight: `${window.innerHeight - 245}` }}>
                            <OperatormanageList />
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
