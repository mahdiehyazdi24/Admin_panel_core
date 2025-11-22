export type LabelVariant = "default" | "muted" | "error";
export type LabelSize = "sm" | "md" | "lg";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  variant?: LabelVariant;
  size?: LabelSize;
}
