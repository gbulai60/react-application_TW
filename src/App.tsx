import React, { useState } from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu, theme } from 'antd';
import CardModel from './Model';
import ModalForm from './ModalForm';
import CardComponent from './CardComponent';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const initialData:CardModel[] = [
  {
    data: {
      
      name: "iPhone 15",
      description: "Future in your hands",
      quantity: 5,
      imageUrl: "https://extratel.md/image/catalog/Phones/4/ro-resize-media-catalog-product-a-p-2bd48d28d1c32adea0e55139a4e6434a-apple_iphone_15_black_1_7416a980.jpg"
    }
  },
  {
    data: {
    
      name: "Samsung S24",
      description: "Beautifull and smart phone",
      quantity: 7,
      imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/ru/2401/gallery/ru-galaxy-s24-s928-sm-s928bzkgcau-539333457?$650_519_PNG$"
    }
  }
]; 
const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardData, setCardData] = useState<CardModel[]>(initialData);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    
    setIsModalVisible(false);
   
  };

  const handleFormSubmit = (data: CardModel) => {
    console.log("Handle submit")
    console.log(data)
    setCardData([...cardData, data]);
    console.log("final card data");
    console.log(cardData);

    setIsModalVisible(false);
  };

  const CardObj:CardModel = {
        data:{

          name: "string",
          description: "string",
          imageUrl: "string",
          quantity: 2
        }
  } 


  const emptyCard:CardModel = {
    data:{
      name: "",
      description: "",
      imageUrl: "",
      quantity: 0
    }

  }
   

  console.log(cardData);

  return (
    <Layout hasSider>
      <Sider
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
            Add Card
          </Button>
          <ModalForm visible={isModalVisible} onCancel={handleCancel} onSubmit={handleFormSubmit} card = {emptyCard} />
         <div style={{display:'flex',flexDirection:'row',gap:10 }}>{cardData.map((card , index) => (
        <CardComponent key={index} value={card} />
      ))}</div>
          </Content> 
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;