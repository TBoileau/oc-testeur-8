import './Badge.css';

type BadgeProps = {
  label: string;
};

export function Badge({ label }: BadgeProps): JSX.Element {
  return <span className="badge">{label}</span>;
}
