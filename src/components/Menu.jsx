import React from "react";
import styled from "styled-components";
import {
  Home,
  Explore,
  Subscriptions,
  VideoLibrary,
  History,
  LibraryMusic,
  SportsBasketball,
  SportsEsports,
  MovieCreationOutlined,
  Newspaper,
  LiveTv,
  Settings,
  Report,
  HelpOutline,
  LightMode,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: fit-content;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  padding: 18px 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Span = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Button = styled.button`
  padding: 5px 10px;
  display: flex;
  gap: 5px;
  align-items: center;
  width: fit-content;
  border: 1px solid #3ea6ff;
  background-color: transparent;
  color: #3ea6ff;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
`;

export const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <Img src="https://th.bing.com/th/id/OIP.lbdxjJVhqmfMNqNANlYSJAHaHa?pid=ImgDet&w=512&h=512&rs=1" />
            <Span>YouTube</Span>
          </Logo>
        </Link>
        <Item>
          <Home />
          Home
        </Item>
        <Item>
          <Explore />
          Explore
        </Item>
        <Item>
          <Subscriptions />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibrary />
          Library
        </Item>
        <Item>
          <History />
          History
        </Item>

        <Hr />
        <Login>
          Sign in to like viseos, comment, and subscribe.
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlined />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Item>
          <LibraryMusic />
          Music
        </Item>
        <Item>
          <SportsBasketball />
          Sports
        </Item>
        <Item>
          <SportsEsports />
          Gaming
        </Item>
        <Item>
          <MovieCreationOutlined />
          Movies
        </Item>
        <Item>
          <Newspaper />
          News
        </Item>
        <Item>
          <LiveTv />
          Live
        </Item>
        <Hr />
        <Item>
          <Settings />
          Settings
        </Item>
        <Item>
          <Report />
          Report
        </Item>
        <Item>
          <HelpOutline />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <LightMode />
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Item>
      </Wrapper>
    </Container>
  );
};
