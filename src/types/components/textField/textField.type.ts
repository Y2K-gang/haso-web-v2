export interface TextFieldProps {
    name: string;
    value?: string;
    placeholder: string;
    type: 'text' | 'password' | 'number';
    icon?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}