import backIcon from '../../assets/icons/back-colored-icon.svg' 

interface BackButtonProps {
  onClick?: (e: any) => void;
}

export function BackButton(props: BackButtonProps) {
  return (
    <button className="flex flw-row items-center" onClick={props.onClick}>
      <img src={backIcon} alt="Voltar" />
      <p className="font-normal text-xl text-GL300 ml-5">Voltar</p>
    </button>
  );
}