import React, { useState } from 'react';
import ModalForm from '../ModalForm';

import { Button, Layout, theme } from 'antd';
import ProductCard from '../ProductCard';
import Product from '../Product';
import MenuContainer from './MenuContainer';


const { Header, Content, Footer, Sider } = Layout;



const initialData:Product[] = [
  {
   name: "iPhone",
   model: "15 Pro",
   description: "Description",
   imageUrl:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913073944251820/231108150114973426.png@webp",
   price: 1300,
   quantity: 10
  },
  {
    name: "iPhone",
    model: "15 Pro",
    description: "Description",
    imageUrl:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913073944251820/231108150114973426.png@webp",
    price: 1300,
    quantity: 10
   }
]; 


const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardData, setCardData] = useState<Product[]>(initialData);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    
    setIsModalVisible(false);
   
  };

  const handleFormSubmit = ( CardProduct: Product) => {
    console.log("Handle submit")
    console.log(CardProduct)
    setCardData([...cardData, CardProduct]);
    console.log("final card data");
    console.log(cardData);

    setIsModalVisible(false);
  };

const emptyCard:Product = {
  name: "",
  description: "",
  model: "",
  quantity: 0,
  price: 0,
  imageUrl: ""

}

console.log(cardData);

  return (
    <Layout hasSider>
      <Sider
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
      <MenuContainer/>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} >
        <Button type="primary" onClick={showModal} style={{ marginBottom: 16, marginLeft:16}}>
            Add product
          </Button>
          <ModalForm visible={isModalVisible} onCancel={handleCancel} onSubmit={handleFormSubmit} card = {emptyCard} />
         
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
             <div style={{display:'flex',flexDirection:'row',gap:10 }}>{cardData.map((card , index) => (
        <ProductCard key={index} productModel={card} />
      ))}</div>


          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;