import React, {Component} from 'react';
import { Layout } from 'antd';
import {Route} from "react-router";
import {TopNavigationComponent} from "../shared/components/TopNavigation.component";
import OrderContainer from "../pages/order/Order.Container";

const { Header, Content, Footer, Sider } = Layout;
export default class ContainerComponent extends Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                    <TopNavigationComponent></TopNavigationComponent>
                </Header>
                <Route exact path='/' component={OrderContainer}/>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>

        )
    }
}
