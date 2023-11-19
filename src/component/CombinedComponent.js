import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  margin-bottom: 20px;
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

const CombinedComponent = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [resourcesLink, setResources] = useState([
    {
      title: "Strivers SDE Sheet",
      url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
    },
    {
      title: "GeeksforGeeks SDE Intern",
      url: "https://www.geeksforgeeks.org/jobs/geeksforgeeks-sde-intern",
    },
    {
      title: "Amazon Interview Experience 1",
      url: "https://www.geeksforgeeks.org/amazon-interview-experience-for-sde-internship-on-campus-2022/",
    },
    {
      title: "Amazon Interview Experience 2",
      url: "https://www.geeksforgeeks.org/amazon-interview-experience-for-sde-internship-on-campus-2022/",
    },
    {
      title: "Amazon Interview Experience 3",
      url: "https://www.geeksforgeeks.org/amazon-interview-experience-for-sde-internship-on-campus-2022/",
    },
    {
      title: "Amazon Interview Experience 4",
      url: "https://www.geeksforgeeks.org/amazon-interview-experience-for-sde-internship-on-campus-2022/",
    },
    {
      title: "Amazon Interview Experience 5",
      url: "https://www.geeksforgeeks.org/amazon-interview-experience-for-sde-internship-on-campus-2022/",
    },
  ]);

  const handlePost = () => {
    const newResource = { title, url };
    setResources([...resourcesLink, newResource]);
    setTitle("");
    setUrl("");
  };

  return (
    <>
    <Header></Header>
      <Container>
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
          <UserPostButton onClick={handlePost}>Post</UserPostButton>
        </UserPostContainer>

        <h2>Interview Preparation Resources</h2>
        {resourcesLink.map((resource, index) => (
          <ResourceContainer key={index}>
            <ResourceTitle>{resource.title}</ResourceTitle>
            <ResourceLink
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resource.url}
            </ResourceLink>
          </ResourceContainer>
        ))}
      </Container>
      <Footer></Footer>
    </>
  );
};

export default CombinedComponent;
