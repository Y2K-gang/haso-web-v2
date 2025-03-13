export interface TextFieldProps {
    name: string;
    value?: string;
    placeholder: string;
    type: 'text' | 'password';
    icon?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}