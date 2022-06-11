import { useState } from "react";
import { Button, Form, Input, Modal, Radio } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useCreateCandidate from "../../hooks/useCreateCandidate";

const CandidateCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create Candidate"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: "Please input the first name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: "Please input the last name of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="zipCode" label="Zip Code">
          <Input />
        </Form.Item>

        <Form.Item name="sex"  rules={[
            {
              required: true,
              message: "Please select an option!",
            },
          ]}>
          <Radio.Group>
            <Radio value="female">Female</Radio>
            <Radio value="male">Male</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CandidateCreateFormModal = () => {
  const [visible, setVisible] = useState(false);
  const createCandidate = useCreateCandidate();

  const onCreate = (values) => {
    createCandidate(values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
        icon={<PlusOutlined />}
      >
        Add Candidate
      </Button>
      <CandidateCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default CandidateCreateFormModal;
