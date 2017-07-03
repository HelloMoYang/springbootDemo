import * as React from 'react';
import * as Form from 'antd/lib/form'
import 'antd/lib/form/style'
const FormItem = Form.Item
import * as Button from 'antd/lib/button'
import 'antd/lib/button/style'
import * as Input from 'antd/lib/input'
import 'antd/lib/input/style'
import * as Select from 'antd/lib/select'
import 'antd/lib/select/style'
const { Option } = Select

import './style/index'

const formItemLayout_long = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 }
}
const formItemLayout_short = {
    labelCol: { span: 12 },
    wrapperCol: { span: 12 }
}
class OperatormanageFormCls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            operation: '中国'
        }
    }
    changeOperation(value) {
        this.setState({
            operation: value
        })
    }
    getData() {
        let error = null, data = null
        this.props.form.validateFields((err, values) => {
            if (!err) {
                error = null
                data = values
            } else {
                error = 'error'
                data = null
            }
        });
        return { error: error, data: data }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        let { operation } = this.state
        let type = ''
        if (operation == '中国') {
            type = '可见'
        } else if (operation == '北京') {
            type = '不可见'
        }
        return (
            <Form className='operatormanage-form'>
                <div className="operatormanage-form-grid-three">
                    <FormItem
                        className="operatormanage-form-grid-three-column-one"
                        {...formItemLayout_short}
                        label="操作员ID"
                    >
                        {getFieldDecorator('ID', {
                            initialValue: '',
                            rules: [{
                                required: true, message: '操作员ID不能为空！',
                            }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem
                        className="operatormanage-form-grid-three-column-one"
                        {...formItemLayout_short}
                        label="状态"
                    >
                        {getFieldDecorator('state', {
                            initialValue: '',
                            rules: [{
                                required: true, message: '状态不能为空！',
                            }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <div className="operatormanage-form-grid-three-column-one">
                        <Button type="primary" className='btn-create-type'>密码重设</Button>
                    </div>
                </div>
                <div className="operatormanage-form-grid-three">
                    <FormItem
                        className="operatormanage-form-grid-three-column-one"
                        {...formItemLayout_short}
                        label="操作员Name"
                    >
                        {getFieldDecorator('name', {
                            initialValue: '',
                            rules: [{
                                required: true, message: '操作员Name不能为空！',
                            }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem
                        className="operatormanage-form-grid-three-column-one"
                        {...formItemLayout_short}
                        label="操作范围"
                    >
                        {getFieldDecorator('operation', {
                            initialValue: '中国',
                            rules: [{
                                required: true, message: '操作范围不能为空！',
                            }],
                        })(
                            <Select onChange={this.changeOperation.bind(this)}>
                                <Option value="中国">中国</Option>
                                <Option value="北京">北京</Option>
                            </Select>
                            )}
                    </FormItem>
                    <div className="operatormanage-form-grid-three-column-one">
                        <Button type="danger" className='btn-create-type'>删除</Button>
                    </div>
                </div>
                <FormItem
                    className="operatormanage-form-grid-three-column-one"
                    {...formItemLayout_long}
                    label="Profile查询模块权限"
                >
                    {getFieldDecorator('inquiry_authority', {
                        initialValue: '可见',
                        rules: [{
                            required: true, message: 'Profile查询模块权限不能为空！',
                        }],
                    })(
                        <Select>
                            <Option value="可见">可见</Option>
                            <Option value="不可见">不可见</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem
                    className="operatormanage-form-grid-three-column-one"
                    {...formItemLayout_long}
                    label="Profile管理模块权限"
                >
                    {getFieldDecorator('manage_authority', {
                        initialValue: type,
                        rules: [{
                            required: true, message: 'Profile管理模块权限不能为空！',
                        }],
                    })(
                        <Select>
                            <Option value="可见">可见</Option>
                            <Option value="不可见">不可见</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem
                    className="operatormanage-form-grid-three-column-one"
                    {...formItemLayout_long}
                    label="Profile-Type查询模块权限"
                >
                    {getFieldDecorator('type_manage_authority', {
                        initialValue: '可见',
                        rules: [{
                            required: true, message: 'Profile-Type查询模块权限不能为空！',
                        }],
                    })(
                        <Select>
                            <Option value="可见">可见</Option>
                            <Option value="不可见">不可见</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem
                    className="operatormanage-form-grid-three-column-one"
                    {...formItemLayout_long}
                    label="证书管理模块权限"
                >
                    {getFieldDecorator('type_manage_authority', {
                        initialValue: '可见',
                        rules: [{
                            required: true, message: '证书管理模块权限不能为空！',
                        }],
                    })(
                        <Select>
                            <Option value="可见">可见</Option>
                            <Option value="不可见">不可见</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem
                    className="operatormanage-form-grid-three-column-one"
                    {...formItemLayout_long}
                    label="密钥管理模块权限"
                >
                    {getFieldDecorator('type_manage_authority', {
                        initialValue: '可见',
                        rules: [{
                            required: true, message: '密钥管理模块权限不能为空！',
                        }],
                    })(
                        <Select>
                            <Option value="可见">可见</Option>
                            <Option value="不可见">不可见</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem
                    className="operatormanage-form-grid-three-column-one"
                    {...formItemLayout_long}
                    label="告警监控模块权限"
                >
                    {getFieldDecorator('type_manage_authority', {
                        initialValue: '可见',
                        rules: [{
                            required: true, message: '告警监控模块权限不能为空！',
                        }],
                    })(
                        <Select>
                            <Option value="可见">可见</Option>
                            <Option value="不可见">不可见</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem
                    className="operatormanage-form-grid-three-column-one"
                    {...formItemLayout_long}
                    label="系统配置模块权限"
                >
                    {getFieldDecorator('type_manage_authority', {
                        initialValue: '可见',
                        rules: [{
                            required: true, message: '系统配置模块权限不能为空！',
                        }],
                    })(
                        <Select>
                            <Option value="可见">可见</Option>
                            <Option value="不可见">不可见</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem
                    className="operatormanage-form-grid-three-column-one"
                    {...formItemLayout_long}
                    label="省数据配置模块权限"
                >
                    {getFieldDecorator('type_manage_authority', {
                        initialValue: '可见',
                        rules: [{
                            required: true, message: '省数据配置模块权限不能为空！',
                        }],
                    })(
                        <Select>
                            <Option value="可见">可见</Option>
                            <Option value="不可见">不可见</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem
                    className="operatormanage-form-grid-three-column-one"
                    {...formItemLayout_long}
                    label="系统报表模块权限"
                >
                    {getFieldDecorator('type_manage_authority', {
                        initialValue: '可见',
                        rules: [{
                            required: true, message: '系统报表模块权限不能为空！',
                        }],
                    })(
                        <Select>
                            <Option value="可见">可见</Option>
                            <Option value="不可见">不可见</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem
                    className="operatormanage-form-grid-three-column-one"
                    {...formItemLayout_long}
                    label="操作员管理模块权限"
                >
                    {getFieldDecorator('type_manage_authority', {
                        initialValue: '可见',
                        rules: [{
                            required: true, message: '操作员管理模块权限不能为空！',
                        }],
                    })(
                        <Select>
                            <Option value="可见">可见</Option>
                            <Option value="不可见">不可见</Option>
                        </Select>
                        )}
                </FormItem>
                <div className="operatormanage-form-grid-three">
                    <FormItem
                        className="operatormanage-form-grid-three-column-one"
                        {...formItemLayout_short}
                        label="默认权限配置选择参考"
                    >
                        {getFieldDecorator('name', {
                            initialValue: '系统管理员',
                            rules: [{
                                required: true, message: '默认权限配置选择参考不能为空！',
                            }],
                        })(
                            <Select>
                                <Option value="系统管理员">系统管理员</Option>
                                <Option value="省公司管理员">省公司管理员</Option>
                                <Option value="总公司管理员">总公司管理员</Option>
                            </Select>
                            )}
                    </FormItem>
                    <div className="operatormanage-form-grid-three-column-one">
                        <Button type="primary" className='btn-install'>设置</Button>
                        <Button type="primary" className='btn-install'>重设</Button>
                    </div>
                </div>
            </Form>
        );
    }
}

const OperatormanageForm = Form.create({ withRef: true })(OperatormanageFormCls);
export default OperatormanageForm;