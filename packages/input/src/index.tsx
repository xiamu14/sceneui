import "./index.scoped.scss";

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  placeholder?: string;
}

export default function Input(props: Props) {
  return <input className="sceneui-input" {...props} />;
}
