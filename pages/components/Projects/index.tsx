import { Button, Text } from "@blueprintjs/core";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import StyledCard from "../Card";
import Drawer from "./Drawer";
import projects from "./projects";

const ProjectsContainer = styled.div`
  margin-top: auto;
  position: relative;
  max-width: 100%;

  button h2 {
      margin: 0;
    }
  }
`;

const Card = styled(StyledCard)`
  & > h2 {
    margin-top: 0;
  }
`;

const ProjectSlider = styled.div`
  margin-top: 1rem;
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
`;

const ProjectWrapper = styled.a`
  display: block;
  flex-shrink: 0;
  height: 200px;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }

  & > video,
  & > img {
    height: 100%;
    transform: scale(1);
    transition: transform ease-in-out 50ms;
  }
  &:hover > video,
  &:hover > img {
    transform: scale(1.1);
  }

  & > h3 {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 1rem;
    color: white;
    display: block;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:hover > h3 {
    text-decoration: underline;
  }
`;

type TDrawerState = null | string;

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProjectTitle, setSelectedProjectTitle] =
    useState<TDrawerState>(null);

  const currentProject = projects.find((p) => p.title === selectedProjectTitle);

  return (
    <ProjectsContainer>
      <Card>
        {showProjects ? (
          <>
            <Button
              icon="caret-down"
              minimal
              intent="none"
              onClick={() => setShowProjects(false)}
            >
              <h2>Side Projects</h2>
            </Button>
            <ProjectSlider>
              {projects.map((project) => (
                <ProjectWrapper
                  key={project.title}
                  onClick={() => setSelectedProjectTitle(project.title)}
                >
                  {project.feature.type === "video" &&
                    project.feature.videoSrc && (
                      <video
                        muted
                        autoPlay
                        loop
                        src={project.feature.videoSrc}
                      />
                    )}
                  {project.feature.type === "image" &&
                    project.feature.imgSrc && (
                      <Image
                        src={project.feature.imgSrc}
                        alt={project.feature.alt}
                      />
                    )}
                  <Text tagName="h3" ellipsize>
                    {project.title}
                  </Text>
                </ProjectWrapper>
              ))}
            </ProjectSlider>
            <Drawer
              setSelectedProjectTitle={setSelectedProjectTitle}
              currentProject={currentProject}
            />
          </>
        ) : (
          <Button
            icon="caret-up"
            large
            intent="none"
            minimal
            onClick={() => setShowProjects(true)}
          >
            Side Projects
          </Button>
        )}
      </Card>
    </ProjectsContainer>
  );
};

export default Projects;
