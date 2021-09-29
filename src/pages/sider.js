import React, { Component } from 'react'
// import '../css/sider.css'
import { Layout, Menu, Row, Col, } from 'antd';
import { PieChartOutlined, FileTextOutlined, ExceptionOutlined, PhoneOutlined, } from '@ant-design/icons';

import '../css/pare.css'
import Logo from '../img/Logo.svg';
import one from '../img/icon/1.svg';
import { Link } from "react-router-dom";
import styled from 'styled-components';
const NoneBackground = styled.div
    `
  .ant-layout {
    background: none;
  }
`;

const { Sider } = Layout;

class Sidebar extends Component {
    render() {
        return (
            <Sider className="sidetab">
                <div className="image">
                    <img src={Logo}
                    />
                </div>
                <Row>
                    <Link to="/dashboard">
                    <Col className="boxmenu">
                        <div>
                        <img className="iconmenu" src={one} />
                        </div>
                        <div className="textone font"
                        >แดชบอร์ด</div>
                    </Col>
                    </Link>
                    <Link to="/Achievement">
                    <Col className="boxmenu">
                        <div>
                        <img className="iconmenu" src={one} />
                        </div>
                        <div className="textone font"
                        >แดชบอร์ด</div>
                    </Col>
                    </Link>
                    <Col className="boxmenu">
                        <div>
                        <img className="iconmenu" src={one} />
                        </div>
                        <div className="textone font"
                        >แดชบอร์ด</div>
                    </Col>
                </Row>

            </Sider>

        )
    }
}
export default Sidebar;