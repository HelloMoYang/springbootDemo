import * as React from 'react';
import SectionHeader from '../../../components/section-header/index'
import OperatormanageForm from '../../../components/operatormanage-form/index'
import * as Button from 'antd/lib/button'
import 'antd/lib/button/style'

class Edit extends React.Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {

    }
    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <div className='module-wapper' style={{ padding: '15px' }}>
                        <div className='module-wapper-inner'>
                            <SectionHeader title='创建新用户'></SectionHeader>
                            <section style={{ minHeight: `${window.innerHeight - 245}` }}>
                                <OperatormanageForm />
                            </section>
                            <section className='actions'>
                                <Button type="primary">提交</Button>
                                <Button>取消</Button>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;
