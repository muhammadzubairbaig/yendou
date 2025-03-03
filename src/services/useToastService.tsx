import { useToast } from "@chakra-ui/react";

export const useToastService = () => {
    const toast = useToast();

    const getIcon = (status: string) => {
        switch (status) {
            case "success":
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#74C898" strokeWidth="2" />
                        <path d="M9 12L11 14L15 10" stroke="#74C898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                );
            case "error":
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#E53E3E" strokeWidth="2" />
                        <path d="M9 9L15 15M9 15L15 9" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                );
            case "info":
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#3182CE" strokeWidth="2" />
                        <path d="M12 9v4" stroke="#3182CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15h0" stroke="#3182CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                );
            case "warning":
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#D69E2E" strokeWidth="2" />
                        <path d="M12 8v4" stroke="#D69E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 16h0" stroke="#D69E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                );
            default:
                return null;
        }
    };

    const showToast = (
        title: string,
        description: string,
        status: "success" | "error" | "info" | "warning" = "success",
        duration: number = 2000
    ) => {
        toast.closeAll();
        const toaster = (
            <div className="toast-container">
                <div className="toast-icon">{getIcon(status)}</div>
                <div className="toast-content">
                    <p className="toast-title">{title}</p>
                    <p className="toast-description">{description}</p>
                </div>
            </div>
        );

        toast({
            title,
            description,
            status,
            duration,
            isClosable: true,
            position: "bottom-right",
            render: () => toaster,
        });
    };

    return { showToast };
};
