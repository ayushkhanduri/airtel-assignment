import React, { FC } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

interface IProps {
    routes: Array<SharedTypes.Routes>
}
export const TopNavigationUIComponent: FC<IProps> = ( { routes } ) => (
    <Menu mode="horizontal" theme={"dark"} defaultOpenKeys={['0']}>
        {
            routes.map( ( route,index) => (
                <Menu.Item key={ index } >
                    <NavLink to={ route.url } >{ route.name } </NavLink>
                </Menu.Item>
            ))
        }

    </Menu>
);
