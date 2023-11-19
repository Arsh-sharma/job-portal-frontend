import React from "react";
import styled from "styled-components";

const ResourceContainer = styled.div`
  margin-bottom: 20px;
  font-style: italic;
  /* Add any other inline styles you want here */
`;

const Resource = ({ title, url }) => {
  return (
    
    <ResourceContainer style={{ color: "blue" }}>
      <h3>{title}</h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "green", textDecoration: "none" }}
      >
        {url}
      </a>
    </ResourceContainer>
  );
};

export default Resource;
