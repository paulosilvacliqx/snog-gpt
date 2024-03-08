import { FC, ReactNode } from "react";

import * as Styles from "./ItineraryResume.styles";

type Props = {
  label?: string;
  idx: number;
  day: string;
  onClose?: () => void;
  children: ReactNode;
  text: string;
};

export const Modal: FC<Props> = ({
  label,
  idx,
  onClose,
  day,
  children,
  text,
}) => {
  return (
    <Styles.WrapperModal idx={idx}>
      {children}

      <Styles.ModalHeaderWrapper>
        <Styles.ModalHeaderText>{day}</Styles.ModalHeaderText>
      </Styles.ModalHeaderWrapper>
      <Styles.ModalText>{text}</Styles.ModalText>
      <Styles.Footer>
        <span>{label}</span>
        <button onClick={onClose}>Fechar</button>
      </Styles.Footer>
      <Styles.BackgroundModal />
    </Styles.WrapperModal>
  );
};
