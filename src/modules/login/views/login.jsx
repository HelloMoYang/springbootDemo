import * as React from 'react';
import '../style/index'

import * as Button from 'antd/lib/button'
import 'antd/lib/button/style'
import * as Icon from 'antd/lib/icon'
import 'antd/lib/icon/style'
import * as Form from 'antd/lib/form'
import 'antd/lib/form/style'
import * as Input from 'antd/lib/input'
import 'antd/lib/input/style'

import emitter from '../../common/emitter.js'

import * as notification from 'antd/lib/notification'
import 'antd/lib/notification/style'

const FormItem = Form.Item;

const openNotification = (message, description, type) => {
    const args = {
        type: type,
        message: message,
        description: description
    }
    notification.open(args)
}
notification.config({ top: 90 })
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let self = this
        this.props.form.validateFields((err, values) => {
            if (!err) {
                self.setState({
                    loading: true
                })
                self.props.actions.login(values, (err, data) => {
                    self.setState({
                        loading: false
                    })
                    if (data) {
                        emitter.emit('notification', '登录成功！', '', 'success')
                        setTimeout(() => {
                            global.hashHistory.push(self.getPath(self.props.user.permissions[0].route))
                        }, 1000)
                    }
                })
            }
        });
    }
    getPath(permissions) {
        let path = ''
        switch (permissions) {
        case 'users':
            path = '/users/users'
            break;
        case 'device':
            path = '/device/list'
            break;
        case 'resources':
            path = '/resources/app/list'
            break;
        case 'plan':
            path = '/plan/list'
            break;
        case 'publish':
            path = '/publish/list'
            break;
        case 'upgrade':
            path = '/upgrade/mext'
            break;
        }
        return path
    }
    componentWillMount() {
        emitter.addListener('notification', (message, description, type) => {
            notification.destroy()
            openNotification(message, description, type)
        })
    }
    renderForm() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input prefix={<Icon type="user" />} placeholder="用户名" disabled={this.state.loading} />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" />} placeholder="密码" type="password" disabled={this.state.loading} />
                        )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
                        登录
                    </Button>
                </FormItem>
            </Form>
        )
    }
    render() {
        let h = window.innerHeight
        return (
            <div className="login" style={{ height: h + 'px' }}>
                <div className="login-box">
                    <div className="form">
                        <h2>MEXT</h2>
                        {this.renderForm()}
                    </div>
                </div>

            </div>
        );
    }
}
const LoginForm = Form.create()(Login);
export default LoginForm;
