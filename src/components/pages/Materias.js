import React from 'react';
import { useLocation } from 'react-router-dom';

import ContainerMaterias from '../ContainerMaterias';

export default function Materias() {
  const location = useLocation();
  // console.log(location.state.);
  if (location.state.materias) {
    return <ContainerMaterias materiaProp={location.state.materias} />;
  } else return <ContainerMaterias></ContainerMaterias>;
}
