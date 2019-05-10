import { DATASET, PROJECT_ID } from "@/store/sanity";
import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  & div > figure > img {
    max-width: 100%;
  }

  & div > figure {
    margin: 0;
  }

  p {
    min-height: 1em;
  }
`;

const SanityBlockContent = ({ blocks }) => (
  <Wrapper>
    {blocks && (
      <BlockContent
        blocks={blocks}
        projectId={PROJECT_ID}
        dataset={DATASET}
        imageOptions={{ w: 1000, fit: "max" }}
      />
    )}
  </Wrapper>
);

export default SanityBlockContent;
