import React from 'react';
import { Spin, Space } from 'antd';
import { red } from '@material-ui/core/colors';


export const Loading = () => {
    return (
        <div className="col-12" style={{ paddingTop: '20%' }}>
            <Spin size="large" />
        </div>
    );
};