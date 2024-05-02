import React from 'react';
import { Card, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'; // Importăm butoanele din Ant Design
import Product from '../models/Product';

const { Meta } = Card;

interface ProductCardProps {
  product: Product;
  onEdit: () => void; 
  onDelete: () => void; 
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onEdit, onDelete }) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt={product.name} src={product.imageUrl} width='240px' height='240px'/>}
    actions={[ // Folosim actions pentru a afișa butoanele în partea de jos a cardului
      <Button type="primary" icon={<EditOutlined />} onClick={onEdit}>Edit</Button>,
      <Button style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }} icon={<DeleteOutlined />} onClick={onDelete}>Delete</Button>
    ]}
  >
    <Meta title={product.name} description={product.description} />
    <div>
      <p>Model: {product.model}</p>
      <p>Price: {product.price}</p>
      <p>Stock: {product.quantity}</p>
    </div>
  </Card>
);

export default ProductCard;
