import Image from "next/image";
import  { SubmitButtonProps } from '@/types';
import { Button } from '@/components/ui/button';

const SubmitButton = ({ isLoading, className, children, type }: SubmitButtonProps) => {
  return (
    <Button
      type={type ?? "submit"}
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;