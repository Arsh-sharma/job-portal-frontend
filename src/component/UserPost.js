import React from "react";
import styled from "styled-components";

const ResourceContainer = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ResourceTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ResourceLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const UserPostContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UserPostTitle = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const UserPostInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const UserPostButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #218838;
  }
`;

const UserPost = ({ onPost }) => {
  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");

  const handlePost = () => {
    onPost({ title, url });
    setTitle("");
    setUrl("");
  };

  return (
    <UserPostContainer>
      <UserPostTitle>Add Your Resource</UserPostTitle>
      <UserPostInput
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <UserPostInput
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <UserPostButton onClick={handlePost} >Post</UserPostButton>
    </UserPostContainer>
  );
};

export {
  ResourceContainer,
  ResourceTitle,
  ResourceLink,
  UserPostContainer,
  UserPostTitle,
  UserPostInput,
  UserPostButton,
  UserPost,
};
