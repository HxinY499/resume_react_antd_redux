import React, { memo, useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import moment from "moment"

import {MyDrawerWrapper} from './style'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import {getAddExpAction} from '../../store/actionCreators'

export default memo(function MyDrawer(props) {
  const {btnText, data, edit} = props
  const type = data&&data.type
  const title = data&&data.title
  const content = data&&data.content
  const place = data&&data.place
  const time = data&&[moment(data.time[0]),moment(data.time[1])]

  const { Option } = Select;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({
      type,
      title,
      content,
      place,
      time
    })
  },[type, title, content, place, time])

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onFinish = (value) => {
    const expObj = {
      type: value.type,
      title: value.title,
      content: value.content,
      time: [value.time[0].valueOf(), value.time[1].valueOf()],
      place: value.place
    }
    setVisible(false)
    dispatch(getAddExpAction(expObj, edit))
    form.resetFields()
  }
  return (
    <MyDrawerWrapper className="drawer-format">
      <Button type="primary" onClick={showDrawer}>
        {btnText}
      </Button>
      <Drawer
        title={edit?"编辑":"添加"}
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form layout="vertical" hideRequiredMark onFinish={onFinish} form={form} initialValues={{}}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="type"
                label="经历类型"
                rules={[{ required: true, message: '请选择经历类型' }]}
              >
                <Select placeholder="请选择经历类型" disabled={edit}>
                  <Option value="eduExp">教育经历</Option>
                  <Option value="schoolExp">校园经历</Option>
                  <Option value="proExp">项目经历</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="title"
                label="标题"
                rules={[{ required: true, message: '请输入标题' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="place"
                label="地点"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="time"
                label="时间"
                rules={[{ required: true, message: '请选择时间' }]}
              >
                <DatePicker.RangePicker
                  getPopupContainer={trigger => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="content"
                label="简介"
              >
                <Input.TextArea rows={3} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </MyDrawerWrapper>
  )
})
