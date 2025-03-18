"use client";
import "./style.scss";
import useRegister from "src/hooks/register/useRegister";

export default function RegisterPage() {
    const {
        selectedFile,
        previewUrl,
        formData,
        handleInputChange,
        handleFileChange,
        handleDrop,
        handleSubmit,
    } = useRegister();

    return (
        <div className="register-page">
            <div className="container">
                <div className="input-container">
                    <p>상품 등록하기</p>
                    <div className="inputs">
                        <div className="input-area">
                            <p className="input-title">제목</p>
                            <input
                                name="title"
                                className="register-input"
                                placeholder="제목을 입력해주세요."
                                value={formData.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex-inputs">
                            <div className="input-area">
                                <p className="input-title">수량</p>
                                <input
                                    name="quantity"
                                    className="register-input"
                                    placeholder="수량을 입력해주세요."
                                    value={formData.quantity}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-area">
                                <p className="input-title">단가</p>
                                <input
                                    name="price"
                                    className="register-input"
                                    placeholder="단가를 입력해주세요."
                                    value={formData.price}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="input-area">
                            <p className="input-title">설명</p>
                            <input
                                name="description"
                                className="register-input"
                                placeholder="제품에 대한 설명을 입력해주세요."
                                value={formData.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-area">
                            <p className="input-title">지역</p>
                            <input
                                name="location"
                                className="register-input"
                                placeholder="지역을 선택해주세요."
                                value={formData.location}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-area">
                            <p className="input-title">취급 상품</p>
                            <div className="radio-group">
                                {["어류", "패류", "두족류", "갑각류", "해조류", "기타"].map((type) => (
                                    <div className="radio-group-item" key={type}>
                                        <input
                                            type="radio"
                                            name="productType"
                                            value={type}
                                            checked={formData.category === type}
                                            onChange={handleInputChange}
                                        />
                                        <label>{type}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="register-container">
                    <div
                        className={`drop-area ${previewUrl ? "has-image" : ""}`}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                        onClick={() => !previewUrl && document.getElementById("fileInput")?.click()}
                        style={{ backgroundImage: previewUrl ? `url(${previewUrl})` : "none" }}
                    >
                        {!previewUrl && (
                            <>
                                <p className="drop-text">
                                    사진을 드래그하거나 <span className="file-select-text">파일을 선택</span>해주세요.
                                </p>
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    style={{ display: "none" }}
                                />
                            </>
                        )}
                    </div>
                    <button className="submit-button" onClick={handleSubmit}>등록하기</button>
                </div>
            </div>
        </div>
    );
}
