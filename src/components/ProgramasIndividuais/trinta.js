import React from 'react';

import { ContainerMateria, WrapperMateria } from './styled';

export default function Trinta() {
  return (
    <>
      <div className="spacing" />
      <ContainerMateria>
        <WrapperMateria>
          <div className="container">
            <div className="row">
              <div className="col-xl">Column</div>
              <div className="col">Column</div>
            </div>
          </div>
        </WrapperMateria>
      </ContainerMateria>
    </>
  );
}
