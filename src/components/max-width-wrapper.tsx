import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div className={cn("mx-auto h-full w-full px-24", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
