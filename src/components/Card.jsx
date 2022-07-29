import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  display: ${(props) => props.type === "sm" && "flex"};
  align-items: ${(props) => props.type === "sm" && "center"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "102px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  flex: 1;
`;

const ChannelImg = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: ${(props) => (props.type === "sm" ? "none" : "block")};
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
`;
const Info = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
`;

export const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://www.bettertechtips.com/wp-content/uploads/2017/04/youtube-thumbnail.jpg"
        />
        <Details type={type}>
          <ChannelImg
            type={type}
            src="https://www.bettertechtips.com/wp-content/uploads/2017/04/youtube-thumbnail.jpg"
          />
          <Description>
            <Title>Youtube is a useful resource</Title>
            <ChannelName>Vrutik Rana</ChannelName>
            <Info>
              <span>6,57,000 views</span>
              <span>1 day ago</span>
            </Info>
          </Description>
        </Details>
      </Container>
    </Link>
  );
};
