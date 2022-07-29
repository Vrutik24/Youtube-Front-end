import React from "react";
import styled from "styled-components";
import { SingleComment } from "./SingleComment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

export const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://www.bettertechtips.com/wp-content/uploads/2017/04/youtube-thumbnail.jpg" />
        <Input type="text" placeholder="Add a comment" />
      </NewComment>
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </Container>
  );
};
