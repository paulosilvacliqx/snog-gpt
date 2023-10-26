export interface ButtonProps {
  title?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  className?: string;
  onClick?: (e: any) => void;
}

export function Button(props: ButtonProps) {
  return (
    <button className={props.className} disabled={props.disabled} onClick={props.onClick}>
      {props.icon}
      {props.title}
    </button>
  );
}