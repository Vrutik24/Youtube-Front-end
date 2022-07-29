import React from "react";
import styled from "styled-components";
import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material";
import { color } from "@mui/system";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0px;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 70%;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  padding: 5px 10px;
  display: flex;
  gap: 5px;
  align-items: center;
  width: fit-content;
  border: 1px solid #3ea6ff;
  background-color: ${({ theme }) => theme.soft};
  color: #3ea6ff;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlined />
        </Search>
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlined />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};
