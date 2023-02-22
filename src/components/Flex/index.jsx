import React from "react";

const Flex = () => {
  return (
    <div className="Container">
      <div className="header">
        <h1> componente Header</h1>
      </div>
      <div className="content">
        <div className="sidebar">
          <h1>Componente sidebar</h1>
        </div>
        <div className="right-content">
          <div className="page">
            <h1>Componente da tela</h1>
          </div>
          <div className="footer">
            <h1>Componente de footer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flex;
