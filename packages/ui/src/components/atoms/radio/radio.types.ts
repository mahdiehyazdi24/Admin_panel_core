export type RadioSize = "sm" | "md" | "lg";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  id?: string;
  label?: string;
  size?: RadioSize;
  className?: string;
}
