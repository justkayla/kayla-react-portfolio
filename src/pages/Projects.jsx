// Projects page

import Project from "../components/Project";
import Subheader from "../components/Subheader";

const Projects = ({ title }) => {
  return (
    <>
      <Subheader title={"Projects"} />      
      <Project />   
    </>
  );
};

export default Projects;
