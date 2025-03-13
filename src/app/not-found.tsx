import Link from "next/link";
import UnKnow from "src/assets/image/notfound/NotFound";
import "./style.scss"
import Paths from "src/constants/paths/paths.constants";
import ArrowLeft from "src/assets/icons/arrow/left";

const NotFound = () => {
    return (
        <main className="main">
            <div className="container">
                <UnKnow/>
                <p id="cantFind">페이지를 찾을 수 없습니다.</p>
                <div id="description">
                    <p>존재하지 않은 주소를 입력하셨거나 <br/> 요청하신 페이지가 삭제/수정되어 찾을 수 없습니다.</p>
                </div>
                <Link href={Paths.main} passHref>
                    <div id="main">
                        <ArrowLeft />
                        <span>메인으로 돌아가기</span>
                    </div>
                </Link>
            </div>
        </main>
    )
}

export default NotFound;