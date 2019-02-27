import Sheet from "@/components/Sheet";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  @media (min-width: 1000px) {
    width: 1000px;
  }
`;

const Program = () => (
  <Sheet>
    <Wrapper>
      <h1>Program 2019</h1>
      <p>Programmet for 2019 kommer snart.</p>
    </Wrapper>
  </Sheet>
);

export default Program;
