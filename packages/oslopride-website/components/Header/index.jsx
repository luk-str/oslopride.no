import Button from "@/components/Button";
import theme from "@/utils/theme";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "./navigation";

const Container = styled.header`
  background-color: white;
  border-bottom: 3px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    max-width: 1200px;
  }
`;

const TopHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 120px;
`;

const PrideDate = styled.div`
  color: ${theme.gray.regular};
  text-align: center;

  font-size: 12px;

  @media (min-width: 450px) {
    font-size: initial;
  }
`;

const MenuButton = styled(Button)`
  margin: 0 10px;
`;

const MenuText = styled.span`
  margin-right: 8px;
  font-weight: bold;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <Container>
      <TopHeader>
        <Link href="/">
          <a>
            <Logo
              src="/static/oslopride.svg"
              alt="Oslo Pride Logo"
              onClick={close}
            />
          </a>
        </Link>
        <PrideDate>14. juni – 23. juni 2019</PrideDate>
        <MenuButton onClick={() => setOpen(!isOpen)}>
          <MenuText>Meny</MenuText>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </MenuButton>
      </TopHeader>
      <Navigation visible={isOpen} callback={close} />
    </Container>
  );
};

export default Header;
