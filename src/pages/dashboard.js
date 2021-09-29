import React, { Component } from 'react'
import '../App.css'
import { Layout} from 'antd';
import styled from 'styled-components';
import Sider from "../pages/sider"
import Header from "../pages/header"
const Nonebackground = styled.div
    `
  .ant-layout {
    background: none;
  }
`;
const { Content } = Layout;
class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    render() {

        return (
            <div className="background">
                <Nonebackground>
                    <Layout>
                        <Sider />
                        <Layout>
                        <Header/>
                            <Content style={{ margin: '24px 16px 0' }}  >
                        <div className="site-layout-background " style={{ padding: 24, minHeight: 360 }}> 
                        </div>
                    </Content>
                        </Layout>
                    </Layout>
                </Nonebackground>
            </div>

        )
    }
}
export default Dashboard;
