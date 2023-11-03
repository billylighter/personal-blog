import React, { useEffect, useRef } from "react";
import { styled } from "frontity";
import { connect } from "frontity";

const Page404 = ({ state }) => {

  const titleEl = useRef(null);
  const { focusOnChange } = state.theme;

  useEffect(() => {
    if(focusOnChange) {
      titleEl.current.focus();
    }
  }, []);


  return (
    <Container>
      <Title ref={titleEl} tabIndex="-1">Уупс! 404</Title>
      <Description>
        Оце так біда{" "}
        <span role="img" aria-label="confused face">
          😕
        </span>
      </Description>
    </Container>
    );
};

export default connect(Page404);

const Container = styled.div`
  --padding-top: 3;
  --padding-bottom: 1;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  margin: 24px 0;
`;
