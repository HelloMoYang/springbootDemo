import * as React from 'react';
import * as Table from 'antd/lib/table'
import 'antd/lib/table/style'
import * as Button from 'antd/lib/button'
import 'antd/lib/button/style'
import * as Icon from 'antd/lib/icon'
import 'antd/lib/icon/style'
import * as Input from 'antd/lib/input'
import 'antd/lib/input/style'
import * as Popconfirm from 'antd/lib/popconfirm'
import 'antd/lib/popconfirm/style'
import './style/index'
import * as Modal from 'antd/lib/modal'
import 'antd/lib/modal/style'
import ProvinceForm from '../province-form/index'
const confirm = Modal.confirm;
class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: this.props.editable || false,
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.editable !== this.state.editable) {
      this.setState({ editable: nextProps.editable });
      if (nextProps.editable) {
        this.cacheValue = this.state.value;
      }
    }
    if (nextProps.status && nextProps.status !== this.props.status) {
      if (nextProps.status === 'save') {
        this.props.onChange(this.state.value);
      } else if (nextProps.status === 'cancel') {
        this.setState({ value: this.cacheValue });
        this.props.onChange(this.cacheValue);
      }
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.editable !== this.state.editable ||
      nextState.value !== this.state.value;
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({ value });
  }
  render() {
    const { value, editable } = this.state;
    return (
      <div>
        {
          editable ?
            <div>
              <Input
                value={value}
                onChange={e => this.handleChange(e)}
              />
            </div>
            :
            <div className="editable-row-text">
              {value.toString() || ' '}
            </div>
        }
      </div>
    );
  }
}
class ProvinceTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '省份卡平台ID',
      dataIndex: 'cardId',
      width: '15%',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'cardId', text),
    }, {
      title: '省份网状网ID',
      dataIndex: 'netId',
      width: '15%',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'netId', text),
    }, {
      title: '省份名称',
      dataIndex: 'name',
      width: '15%',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),
    }, {
      title: '推送消息地址',
      dataIndex: 'address',
      width: '30%',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'address', text),
    }, {
      title: '编辑',
      dataIndex: 'edit',
      render: (text, record, index) => {
        const { editable } = this.state.data[index].name;
        return (
          <div className="editable-row-dels">
            {
              editable ?
                <span>
                  <a onClick={() => this.editDone(index, 'save')}>Save</a>
                  <Popconfirm title="Sure to cancel?" onConfirm={() => this.editDone(index, 'cancel')}>
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
                :
                <span>
                  <a onClick={() => this.edit(index)}>Edit</a>
                </span>
            }
          </div>
        );
      }
    }, {
      title: '删除',
      dataIndex: 'del',
      render: (text, record, index) => {
        return (
          this.state.data.length > 1 ?
            (
              <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                <a href="#">Delete</a>
              </Popconfirm>
            ) : null
        );
      },
    }];
    this.state = {
      data: [{
        key: '0',
        cardId: {
          editable: false,
          value: '32',
        },
        netId: {
          editable: false,
          value: '10',
        },
        name: {
          editable: false,
          value: 'Edward King 0',
        },
        address: {
          editable: false,
          value: 'http://211.149.154.87/poc/smdp.git',
        },
      }, {
        key: '1',
        cardId: {
          editable: false,
          value: '32',
        },
        netId: {
          editable: false,
          value: '10',
        },
        name: {
          editable: false,
          value: 'Edward King 0',
        },
        address: {
          editable: false,
          value: 'http://211.149.154.87/poc/smdp.git',
        },
      }],
      count: 2,
    };
  }
  renderColumns(data, index, key, text) {
    const { editable, status } = data[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (<EditableCell
      editable={editable}
      value={text}
      onChange={value => this.handleChange(key, index, value)}
      status={status}

    />);
  }
  handleChange(key, index, value) {
    const { data } = this.state;
    data[index][key].value = value;
    this.setState({ data });
  }
  edit(index) {
    const { data } = this.state;
    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = true;
      }
    });
    this.setState({ data });
  }
  editDone(index, type) {
    const { data } = this.state;
    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = false;
        data[index][item].status = type;
      }
    });
    this.setState({ data }, () => {
      Object.keys(data[index]).forEach((item) => {
        if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
          delete data[index][item].status;
        }
      });
    });
  }
  onDelete = (index) => {
    const data = [...this.state.data];
    data.splice(index, 1);
    this.setState({ data }, () => {
      if (Object.keys(data[index]).length >= 2) {
        Object.keys(data[index]).forEach((item) => {
          if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
            delete data[index][item].status;
          }
        });
      }
    });
  }
  // state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  hideModal = () => {
    this.setState({
      visible: false,
    });
  }
  handleAdd = () => {
    // const { count, data} = this.state;
    // const newData = {
    //     key: count,
    //     cardId: ` `,
    //     netId:` `,
    //     name:``,
    //     address: `11111 ${count}`,
    // };
    // this.setState({
    //     data: [...data, newData],
    //     count: count + 1,
    // });

  }
  render() {
    const { data } = this.state;
    const dataSource = data.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });
    const columns = this.columns;
    // return <Table bordered dataSource={dataSource} columns={columns} />;
    return (
      <div>
        <Table bordered dataSource={dataSource} columns={columns} pagination={false} />
        <div className='data-btn'>
          <Button className="editable-add-btn" onClick={this.showModal}>新增省数据</Button>
          <Button className="editable-add-btn" >刷新省数据</Button>
        </div>
        <Modal
          title="新增"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          cancelText="取消"
          okText="提交"

        >
          <ProvinceForm />
        </Modal>

      </div>
    );
  }
}

export default ProvinceTable;