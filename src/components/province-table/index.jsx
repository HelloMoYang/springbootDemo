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
    editable: false,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }

  render() {
    const { value, editable } = this.state;
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
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
      render: (text, record, index) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(index, 'cardId')}
        />
      ),
    }, {
      title: '省份网状网ID',
      dataIndex: 'netId',
      width: '15%',
    }, {
      title: '省份名称',
      dataIndex: 'name',
      width: '15%',
    }, {
      title: '推送消息地址',
      dataIndex: 'address',
      width: '40%',
    }, {
      title: '操作',
      dataIndex: 'update',
      render: () => {
        return (
          <span>
            <a href="javascript:;" onClick={this.showModal}>编辑</a>
          </span>
        )

      }
    }, {
      title: '操作',
      dataIndex: 'del',
      render: (text, record, index) => {
        return (
          this.state.dataSource.length > 1 ?
            (
              <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                <a href="#">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        cardId: '01',
        netId: '11',
        name: '河北',
        address: 'https://ant.design/components/table-cn/',
      }, {
        key: '1',
        cardId: '02',
        netId: '22',
        name: '山西',
        address: 'https://ant.design/',
      }],
      count: 2,
    };
  }
  onCellChange = (index, key) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      dataSource[index][key] = value;
      this.setState({ dataSource });
    };
  }
  onDelete = (index) => {
    const dataSource = [...this.state.dataSource];
    dataSource.splice(index, 1);
    this.setState({ dataSource });
  }
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
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div className='province-table'>
        <Table bordered dataSource={dataSource} columns={columns} />
        <Modal
          title="数据更新"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          cancelText="取消"
          okText="提交"

        >
          <ProvinceForm />
        </Modal>
        <div className='data-btn'>
          <Button className="editable-add-btn" onClick={this.showModal}>新增省数据</Button>
          <Button className="editable-refresh-btn" >刷新省数据</Button>
        </div>
      </div>
    );
  }

}

export default ProvinceTable;