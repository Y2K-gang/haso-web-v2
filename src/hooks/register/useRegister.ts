import { useState } from "react";
import { CategoryEnum } from "src/types/category/category.enum";
import { RegisterProps } from "src/types/register/register.type"

export default function useRegisterProduct() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [formData, setFormData] = useState<RegisterProps>({
        title: "",
        quantity: 0,
        price: 0,
        description: "",
        location: "",
        category: CategoryEnum.어류,
    });

    // 텍스트 입력
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // 이미지 파일 업로드
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
            previewImage(file);
        }
    };

    // 이미지 파일 드래그 앤 드롭
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            const file = event.dataTransfer.files[0];
            setSelectedFile(file);
            previewImage(file);
        }
    };

    // 이미지 미리보기
    const previewImage = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    // 폼 제출
    const handleSubmit = () => {
        if (!formData.title || !formData.quantity || !formData.price || !formData.description || !formData.location || !formData.category || !selectedFile) {
            alert("모든 필수 항목을 입력해주세요.");
            return;
        }
        alert("상품이 등록되었습니다.");
    };

    return {
        selectedFile,
        previewUrl,
        formData,
        handleInputChange,
        handleFileChange,
        handleDrop,
        handleSubmit,
    };
}
