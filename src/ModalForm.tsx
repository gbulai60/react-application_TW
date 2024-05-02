import React from 'react';
import { observer } from 'mobx-react';
import { Form, Input, Modal, Button, InputNumber } from 'antd';
import Product from './models/Product';

const { TextArea } = Input;

interface ModalFormProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (product: Product) => void;
  card: Product; // Primim produsul ca prop
}

const ModalForm: React.FC<ModalFormProps> = ({ visible, onCancel, onSubmit, card }) => {
  const [form] = Form.useForm(); // Folosim formularul Ant Design

  // Setăm valorile inițiale ale formularului când produsul este furnizat
  React.useEffect(() => {
    form.setFieldsValue(card);
  }, [card, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        onSubmit(values);
        form.resetFields();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      title={card.name ? 'Edit Product' : 'Add Product'} 
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" name="modal_form">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input the name of the product!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          name="model"
          label="Model"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ type: 'number', min : 0, message: 'Please input a valid price!' }]}
        >
          <InputNumber  />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ type: 'number', min : 0, message: 'Please input a valid quantity!' }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="imageUrl"
          label="Image URL"
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default observer(ModalForm);
