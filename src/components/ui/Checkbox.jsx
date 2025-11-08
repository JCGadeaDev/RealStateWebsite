import React from "react";
import { Check, Minus } from "lucide-react";
import { cn } from "../../utils/cn";

const Checkbox = React.forwardRef(({
    className,
    id,
    checked,
    indeterminate = false,
    disabled = false,
    required = false,
    label,
    description,
    error,
    size = "default",
    ...props
}, ref) => {
    // Generate unique ID if not provided
    const checkboxId = id || `checkbox-${Math.random()?.toString(36)?.substr(2, 9)}`;

    // Size variants
    const sizeClasses = {
        sm: "h-3 w-3", // Ligeramente más pequeño para que el icono 'Check' encaje
        default: "h-4 w-4",
        lg: "h-5 w-5"
    };
    
    // Clases del icono (para que encajen dentro del 'size')
     const iconSizeClasses = {
        sm: "h-2 w-2",
        default: "h-3 w-3",
        lg: "h-4 w-4"
    };

    return (
        <div className={cn("flex items-start space-x-3", className)}>
            <div className="relative flex items-center h-5"> {/* Contenedor de altura fija para alinear */}
                <input
                    type="checkbox"
                    ref={ref}
                    id={checkboxId}
                    checked={checked}
                    disabled={disabled}
                    required={required}
                    className="sr-only peer" // 'peer' es importante aquí
                    {...props}
                />

                {/* El 'label' visual que actúa como el checkbox */}
                <label
                    htmlFor={checkboxId}
                    className={cn(
                        "peer shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        "cursor-pointer transition-colors",
                        "flex items-center justify-center", // Centramos el icono
                        sizeClasses?.[size],
                        // Estilos basados en el estado del 'peer' (el input)
                        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                        "peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary",
                        indeterminate && "bg-primary text-primary-foreground border-primary",
                        error && "border-destructive"
                    )}
                >
                    {checked && !indeterminate && (
                        <Check className={cn(iconSizeClasses[size], "text-current")} />
                    )}
                    {indeterminate && (
                        <Minus className={cn(iconSizeClasses[size], "text-current")} />
                    )}
                </label>
            </div>
            
            {(label || description || error) && (
                <div className="flex-1 space-y-1">
                    {label && (
                        <label
                            htmlFor={checkboxId}
                            className={cn(
                                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer",
                                error ? "text-destructive" : "text-foreground"
                            )}
                        >
                            {label}
                            {required && <span className="text-destructive ml-1">*</span>}
                        </label>
                    )}

                    {description && !error && (
                        <p className="text-sm text-muted-foreground">
                            {description}
                        </p>
                    )}

                    {error && (
                        <p className="text-sm text-destructive">
                            {error}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
});

Checkbox.displayName = "Checkbox";

// Checkbox Group component
const CheckboxGroup = React.forwardRef(({
    className,
    children,
    label,
    description,
    error,
    required = false,
    disabled = false,
    ...props
}, ref) => {
    return (
        <fieldset
            ref={ref}
            disabled={disabled}
            className={cn("space-y-3", className)}
            {...props}
        >
            {label && (
                <legend className={cn(
                    "text-sm font-medium",
                    error ? "text-destructive" : "text-primary" // Actualizado a text-primary
                )}>
                    {label}
                    {required && <span className="text-destructive ml-1">*</span>}
                </legend>
            )}

            {description && !error && (
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            )}

            <div className="space-y-2">
                {children}
            </div>

            {error && (
                <p className="text-sm text-destructive">
                    {error}
                </p>
            )}
        </fieldset>
    );
});

CheckboxGroup.displayName = "CheckboxGroup";

export { Checkbox, CheckboxGroup };