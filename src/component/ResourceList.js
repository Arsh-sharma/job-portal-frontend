import React from "react";
import Resource from "./Resource";
import { UserPost } from "./UserPost";

const ResourceList = ({ resources }) => {
  return (

      <div>
        <h2>Interview Preparation Resources</h2>
        {resources.map((resource, index) => (
          <Resource key={index} title={resource.title} url={resource.url} />
        ))}
      </div>

  );
};

export default ResourceList;
