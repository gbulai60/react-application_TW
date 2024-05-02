import React from 'react';
import { observer } from 'mobx-react';
import { Layout, Button, theme, Spin } from 'antd'; 
import ProductCard from '../cards/ProductCard';
import MenuContainer from './MenuContainer';
import ModalForm from '../ModalForm';
import productStore from '../stores/ProductStore'; 
import Product from '../models/Product';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = observer(() => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFormSubmit = (cardProduct: Product) => {
    productStore.addProduct(cardProduct); 
  };
  const emptyCard:Product = {
    name: "",
    description: "",
    model: "",
    quantity: 0,
    price: 0,
    imageUrl: ""
  }

  return (
    <Layout hasSider>
      <Sider
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
        <MenuContainer />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button type="primary" onClick={showModal} style={{ marginBottom: 16, marginLeft: 16 }}>
            Add product
          </Button>
          <ModalForm visible={isModalVisible} onCancel={handleCancel} onSubmit={handleFormSubmit} card={emptyCard} />
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
           
            {productStore.loading ? (
              <Spin size="large" />
            ) : (
              <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                {productStore.products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
});

export default App;
