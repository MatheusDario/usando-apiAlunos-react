import React from 'react';
import PropTyopes from 'prop-types';

import { Container, Span } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <> </>;
  return (
    <Container>
      <div />
      <Span>Carregando...</Span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTyopes.bool,
};
