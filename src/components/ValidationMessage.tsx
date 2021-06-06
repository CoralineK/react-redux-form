type Props = {
  text: string;
};

export default function ValidationMessage({ text }: Props) {
  return <div className="message">{text}</div>;
}
