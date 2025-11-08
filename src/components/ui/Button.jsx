import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn'; // 

// La lógica de variantes (cva) está perfecta. No se cambia nada.
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        success: 'bg-success text-success-foreground hover:bg-success/90',
        warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
        danger: 'bg-error text-error-foreground hover:bg-error/90',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        xs: 'h-8 rounded-md px-2 text-xs',
        xl: 'h-12 rounded-md px-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// --- LÓGICA DE PROPS ACTUALIZADA ---
const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      loading = false,
      icon = null, // <-- CAMBIADO: Aceptamos un ReactNode (el componente)
      iconPosition = 'left', // <-- MANTENIDO: Todavía útil
      fullWidth = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    // El spinner de carga está bien
    const LoadingSpinner = () => (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );

    // --- LÓGICA DE RENDERIZADO SIMPLIFICADA ---
    // Ya no necesitamos 'renderIcon()', 'iconSizeMap', etc.
    // El componente de icono (ej. <Home />) ya viene con su clase.
    const renderIconWithMargin = () => {
      if (!icon) return null;

      // Añadimos el margen apropiado
      const marginClass =
        children && iconPosition === 'left' ? 'mr-2' :
        children && iconPosition === 'right' ? 'ml-2' :
        '';
      
      // Clonamos el icono para añadirle el margen
      return React.cloneElement(icon, {
        className: cn(icon.props.className, marginClass),
      });
    };
    
    // --- LÓGICA 'asChild' ACTUALIZADA ---
    if (asChild) {
      if (
        !children ||
        React.Children.count(children) !== 1 ||
        !React.isValidElement(children)
      ) {
        // Fallback si 'asChild' se usa incorrectamente
        console.warn('Button: "asChild" prop is true but "children" are not valid.');
        return <Comp>{children}</Comp>;
      }

      const child = React.Children.only(children);
      const content = (
        <>
          {loading && <LoadingSpinner />}
          {icon && iconPosition === 'left' && renderIconWithMargin()}
          {child.props.children}
          {icon && iconPosition === 'right' && renderIconWithMargin()}
        </>
      );

      return (
        <Slot
          ref={ref}
          {...props}
          {...child.props}
          className={cn(
            buttonVariants({ variant, size, className }),
            fullWidth && 'w-full',
            child.props.className
          )}
          disabled={disabled || loading || child.props.disabled}
        >
          {content}
        </Slot>
      );
    }

    // --- BOTÓN ESTÁNDAR ACTUALIZADO ---
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          fullWidth && 'w-full'
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <LoadingSpinner />}
        {icon && iconPosition === 'left' && renderIconWithMargin()}
        {children}
        {icon && iconPosition === 'right' && renderIconWithMargin()}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
export default Button;