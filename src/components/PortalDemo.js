import React from 'react';
import ReactDOM from 'react-dom';

const PortalDemo = () => {
    return ReactDOM.createPortal(<p>Portals Demo</p>, document.getElementById('portal-root'));
}

export default PortalDemo;