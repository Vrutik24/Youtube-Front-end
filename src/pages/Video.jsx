import React from "react";
import styled from "styled-components";
import {
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
  ReplyOutlined,
  AddTaskOutlined,
} from "@mui/icons-material";
import { Comments } from "../components/Comments";
import { Card } from "../components/Card";

const Container = styled.div`
  display: flex;
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const VideoImg = styled.img`
  width: 100%;
  height: 460px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  align-item: center;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid color: ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChannelName = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
  gap: 10px;
`;

const ChannelCover = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Name = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.span`
  font-size: 14px;
`;
const Subscribe = styled.button`
  border: none;
  height: 30px;
  width: 100px;
  padding: 5px 10px;
  background-color: red;
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  cursor: pointer;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const RecommendationWrapper = styled.div`
  padding: 0px 15px;
`;

export const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoImg src="https://www.bettertechtips.com/wp-content/uploads/2017/04/youtube-thumbnail.jpg" />
        </VideoWrapper>
        <Title>Youtube is an excellent resource</Title>
        <Details>
          <Info>6.38,000 views * 1 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpAltOutlined /> 123
            </Button>
            <Button>
              <ThumbDownAltOutlined /> Dislike
            </Button>
            <Button>
              <ReplyOutlined /> Share
            </Button>
            <Button>
              <AddTaskOutlined /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelName>
            <ChannelCover src="https://www.bettertechtips.com/wp-content/uploads/2017/04/youtube-thumbnail.jpg" />{" "}
            <ChannelDetails>
              <Name>Vrutik Rana</Name>
              <ChannelCounter>5m Subscribers</ChannelCounter>
              <Description>
                This channel is for all the users who wants to be more efficient
                in Full Stack Web Development
              </Description>
            </ChannelDetails>
          </ChannelName>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <RecommendationWrapper>
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
        </RecommendationWrapper>
      </Recommendation>
    </Container>
  );
};
