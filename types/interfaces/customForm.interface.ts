import { Control } from "react-hook-form";
import { FormFieldType } from "../enum";

export interface CustomFormProps {
  control: Control<any>;
  type: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  className?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

export interface SubmitButtonProps {
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};