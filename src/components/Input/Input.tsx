export interface InputProps {
  className: string;
  placeholder: string;
  type: "text" | "email" | "password";
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function Input(props: InputProps) {
  return (
    <input
      autoComplete="off"
      className={props.className}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
