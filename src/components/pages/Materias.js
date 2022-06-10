import React from 'react';
import { useLocation } from 'react-router-dom';

import ContainerMaterias from '../ContainerMaterias';

export default function Materias() {
  const location = useLocation();
  if (location.state) {
    return <ContainerMaterias materiaProp={location.state.materias} />;
  } else return <ContainerMaterias></ContainerMaterias>;
}
