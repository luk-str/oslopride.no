import Link from "@/components/Link";
import React from "react";
import styled from "styled-components";

const yellow = "rgba(255, 190, 0, 1)";
const red = "rgba(211, 0, 33, 0.6)";
const green = "rgba(48, 163, 121, 0.8)";
const blue = "rgba(167, 195, 245, 1)";
const purple = "rgba(63, 16, 128, 0.5)";

const Container = styled.nav`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
`;

const NavigationGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    margin-right: 10px;
  }
`;

const NavigationLink = styled(Link)`
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  margin: 5px 8px;
`;

const Navigation = ({ className, visible, callback }) => (
  <Container className={className} visible={visible}>
    <NavigationGroup>
      <NavigationLink href="/program" onClick={callback} color={yellow}>
        Program 2019
      </NavigationLink>
    </NavigationGroup>

    <NavigationGroup>
      <NavigationLink href="/pride-parade" onClick={callback} color={red}>
        Pride Parade
      </NavigationLink>
      <NavigationLink href="/pride-park" onClick={callback} color={green}>
        Pride Park
      </NavigationLink>
      <NavigationLink href="/pride-house" onClick={callback} color={blue}>
        Pride House
      </NavigationLink>
      <NavigationLink href="/pride-art" onClick={callback} color={purple}>
        Pride Art
      </NavigationLink>
    </NavigationGroup>

    <NavigationGroup>
      <NavigationLink href="/pride-store" onClick={callback}>
        Pridebutikken
      </NavigationLink>
    </NavigationGroup>

    <NavigationGroup>
      <NavigationLink href="/contact" onClick={callback}>
        Kontakt
      </NavigationLink>
      <NavigationLink href="/about" onClick={callback}>
        Om Oss
      </NavigationLink>
      <NavigationLink href="/partners" onClick={callback}>
        Partnere
      </NavigationLink>
      <NavigationLink href="/become-partner" onClick={callback}>
        Bli Partner
      </NavigationLink>
    </NavigationGroup>
  </Container>
);

export default Navigation;
