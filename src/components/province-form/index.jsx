import * as React from 'react';
import * as Form from 'antd/lib/form'
import 'antd/lib/form/style'
import * as Input from 'antd/lib/input'
import 'antd/lib/input/style'
import './style/index'
const FormItem = Form.Item;

const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      cardId: {
        ...props.cardId,
        value: props.cardId.value
      },
      netId: {
        ...props.netId,
        value: props.netId.value
      },
      name: {
        ...props.name,
        value: props.name.value
      },
      address: {
        ...props.address,
        value: props.address.value
      },
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})((props) => {
  const { getFieldDecorator } = props.form;
  return (
    <Form layout="inline">
      <FormItem label="省份卡平台ID">
        {getFieldDecorator('cardId', {
          rules: [{ required: true, message: 'CardId is required!' }],
        })(<Input />)}
      </FormItem>
      <FormItem label="省份网状网ID">
        {getFieldDecorator('netId', {
          rules: [{ required: true, message: 'NetId is required!' }],
        })(<Input />)}
      </FormItem>
      <FormItem label="省份名称">
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Name is required!' }],
        })(<Input />)}
      </FormItem>
      <FormItem label="推送消息地址">
        {getFieldDecorator('address', {
          rules: [{ required: true, message: 'Address is required!' }],
        })(<Input />)}
      </FormItem>
    </Form>
  );
});

class ProvinceForm extends React.Component {
  state = {
    fields: {
      cardId: {
        value: '01',
      },
      netId: {
        value: '11',
      },
      name: {
        value: '北京',
      },
      address: {
        value: 'https://ant.design/index-cn',
      },
    },
  };
  handleFormChange = (changedFields) => {
    this.setState({
      fields: { ...this.state.fields, ...changedFields },
    });
  }
  render() {
    const fields = this.state.fields;
    return (
      <div>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
      </div>
    );
  }
}
export default ProvinceForm;