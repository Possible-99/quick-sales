import { Layout, Menu } from 'antd';
import {HomeOutlined,BarcodeOutlined, UserOutlined,SettingOutlined } from '@ant-design/icons';
import "./MainLayout.styles.css";
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;


const MainLayout= ({children , menuKey}) => {

    return(
        <Layout style={{minHeight : "100vh"}}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[menuKey]}>
        <Menu.Item key="1" icon={<HomeOutlined/>}>
          <Link to = "/">
            Venta
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to = "/client">
            Cliente
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<BarcodeOutlined />}>
          Inventario
        </Menu.Item>
        <Menu.Item key="4" icon={<SettingOutlined />}>
          Ajustes
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>BD Team ©2021 </Footer>
    </Layout>
  </Layout>
    )
}

export default MainLayout;