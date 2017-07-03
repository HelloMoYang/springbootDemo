import * as React from 'react';
import * as Form from 'antd/lib/form'
import 'antd/lib/form/style'
import * as Row from 'antd/lib/row'
import 'antd/lib/row/style'
import * as Col from 'antd/lib/col'
import 'antd/lib/col/style'
import * as Button from 'antd/lib/button'
import 'antd/lib/button/style'
import * as Input from 'antd/lib/input'
import 'antd/lib/input/style'
import './style/index'
const FormItem = Form.Item;


class ProvinceForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }
  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }
  render() {
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 6},
      wrapperCol: { span: 16 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 20, offset: 4 },
    } : null;
    return (
      <div>
        <Form layout={formLayout}>
          <FormItem
            label="省份卡平台ID"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem
            label="省份网状网ID"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem
            label="省份名称"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem
            label="推送消息地址"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default ProvinceForm;