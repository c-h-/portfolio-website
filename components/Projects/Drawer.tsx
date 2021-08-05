import {
  Drawer as BlueprintDrawer,
  Card,
  Position,
  Tag,
} from "@blueprintjs/core";
import Image from "next/image";
import styled from "styled-components";

import loader from "../../utils/img-loader";
import { TProject } from "./projects";

const StyledDrawer = styled(BlueprintDrawer)`
  &.bp3-position-right {
    transition: width ease-in-out 200ms;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;

const StyledCard = styled(Card)`
  margin: 1rem;
`;

const Tags = styled.div`
  display: flex;
  margin-bottom: 1rem;
  & > span {
    margin-right: 0.5rem;
  }
`;

type TDrawerProps = {
  currentProject: TProject | undefined;
  setSelectedProjectTitle: (arg: null | string) => void;
};

const Drawer = ({ setSelectedProjectTitle, currentProject }: TDrawerProps) => {
  return (
    <StyledDrawer
      isOpen={typeof currentProject !== "undefined"}
      title={currentProject?.title}
      onClose={() => setSelectedProjectTitle(null)}
      position={Position.RIGHT}
      canOutsideClickClose
      canEscapeKeyClose
    >
      {currentProject?.feature.type === "video" &&
        currentProject?.feature.videoSrc && (
          <video muted autoPlay loop src={currentProject?.feature.videoSrc} />
        )}
      {currentProject?.feature.type === "image" &&
        currentProject?.feature.imgSrc && (
          <Image
            src={currentProject?.feature.imgSrc}
            alt={currentProject?.feature.alt}
            loader={loader}
            unoptimized
          />
        )}
      <StyledCard elevation={2}>
        <Tags>
          <Tag intent="success" large minimal key="year">
            {currentProject?.year}
          </Tag>
          {(currentProject?.tags || []).map((tag: string) => (
            <Tag intent="none" large minimal key={tag}>
              {tag}
            </Tag>
          ))}
        </Tags>
        {currentProject?.description}
      </StyledCard>
    </StyledDrawer>
  );
};

export default Drawer;
