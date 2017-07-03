import * as React from 'react';
import SectionHeader from '../../../components/section-header/index'
import OperatormanageList from '../../../components/operatormanage-list/index'

class List extends React.Component {
    constructor(props) {
        super(props);

    }
    goCreate() {
        global.hashHistory.push(`operatormanage/create`)
    }
    componentWillMount() {

    }
    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <div className='module-wapper'>
                        <div className='module-wapper-inner'>
                            <SectionHeader title='操作员管理'></SectionHeader>
                            <section style={{ minHeight: `${window.innerHeight - 185}` }}>
                                <OperatormanageList goCreate={this.goCreate} />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
