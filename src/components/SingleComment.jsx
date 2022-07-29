import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const CommentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.textSoft};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  margin-left: 5px;
  color: ${({ theme }) => theme.textSoft};
`;
const Text = styled.span`
  font-size: 14px;
`;

export const SingleComment = () => {
  return (
    <Container>
      <Avatar src="https://www.bettertechtips.com/wp-content/uploads/2017/04/youtube-thumbnail.jpg" />
      <CommentText>
        <Name>
          Vrutik Rana <Date>1 day ago.</Date>
        </Name>
        <Text>It's by far the best video I have ever seen on education.</Text>
      </CommentText>
    </Container>
  );
};
