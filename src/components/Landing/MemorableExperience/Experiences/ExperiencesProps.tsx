import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { MemorableExperiencesContext } from "../../../../contexts/ContextsFiles/MemorableExperience";
import clsx from "clsx";

interface ExperienceProps {
  title: string;
  subTitle: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
  textButton: string;
  imgExperience: JSX.Element;
  show: boolean;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`;

const Container = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  visibility: hidden;
  animation: 1s ${fadeIn};
  user-select: none;
  animation-fill-mode: forwards;
  margin-top: 80px;
  justify-content: center;
  width: 100%;
`;

const GridTangram = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  justify-content: space-between;
  max-width: 1220px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  flex: 1;
  justify-content: space-between;
  img {
    width: 400px;
  }
`;

export function ExperiencesProps(props: ExperienceProps) {
  const { artistic, mistic, unknow, senses, newExperience } = useContext(
    MemorableExperiencesContext
  );

  return (
    <Container show={props.show}>
      <GridTangram>
        <Column style={{ marginRight: 130 }}>
          <div>
            <h1 className="font-normal text-4xl leading-tight text-P300">
              {props.title}
            </h1>
            <h1 className="font-bold text-4xl text-P300">{props.subTitle}</h1>

            <p className="font-normal text-xl leading-7 text-B10 pt-12">
              {props.firstParagraph}
            </p>

            <p className="font-normal text-xl leading-7 text-B10 pt-4">
              {props.secondParagraph}
            </p>

            <p className="font-normal text-xl leading-7 text-B10 pt-4">
              {props.thirdParagraph}
            </p>
          </div>
          <button
            className={clsx(
              "w-105 h-12 mt-36 font-normal text-xl leading-6 text-white rounded-full",
              {
                "bg-R300": artistic,
                "bg-O300": mistic,
                "bg-G300": unknow,
                "bg-O350": senses,
                "bg-BL300": newExperience,
              }
            )}
          >
            {props.textButton}
          </button>
        </Column>

        <Column>
          <div className="flex">{props.imgExperience}</div>
        </Column>
      </GridTangram>
    </Container>
  );
}
