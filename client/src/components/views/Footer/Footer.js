import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '20px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'0.5rem'
        }}>
           <p> Hire my broke ass  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
