import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/utils/cn';
import { Spinner } from '../spinner';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'primary-btn', // Apply your custom primary button class
        outline:
          'counter-button decrement', // Outline variant
        secondary:
          'counter-button increment', // Secondary button
        link: 'text-primary underline-offset-4 hover:underline', // Link-style button
      },
      size: {
        default: 'h-9 px-2 py-1', // Standard size for buttons
        sm: 'h-8 rounded-md px-3 text-xs', // Small button
        lg: 'h-10 rounded-md px-8', // Large button
        icon: 'size-9', // Icon button
      },
    },
    defaultVariants: {
      variant: 'default', // Default to primary button style
      size: 'default',
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    icon?: React.ReactNode;
    showToast?: (message: string) => void; // For triggering the toast
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      isLoading,
      icon,
      showToast, // Destructure showToast function
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    const handleClick = () => {
      if (showToast) {
        showToast('Counter updated!');
      }
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && icon && <span className="mr-2">{icon}</span>}
        <span className="mx-2">{children}</span>
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
