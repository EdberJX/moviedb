import React from "react";
import TitleSection from "./TitleSection";
import Actor from "./Actor";
import Styled from 'styled-components'

const Container = Styled.div`
    display:flex;
    overflow: scroll;
`;
export default ({ cast }) => {
  if (cast) {
    return (
      <React.Fragment>
        <TitleSection>Cast</TitleSection>
        <Container>
          {cast.map(actor => (
            <Actor actor={actor} />
          ))}
        </Container>
      </React.Fragment>
    );
  } else {
    return <div>cargando</div>;
  }
};
