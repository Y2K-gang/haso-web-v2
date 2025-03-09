import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.scss";

const Slide = () => {
  const settings = {
    dots: true, // 슬라이드 하단의 페이지네이션 활성화
    infinite: true, // 슬라이드가 끝나면 처음으로 돌아가도록 설정
    speed: 500, // 슬라이드 전환 애니메이션 속도 (단위 : ms)
    slidesToShow: 1, // 한 번에 보여줄 슬라이드의 수
    slidesToScroll: 1, // 한 번에 몇 개씩 스크롤될지 설정
    fade: true, // 전환 애니메이션 fade
    waitForAnimate: true, // 애니메이션이 끝날 때까지 다른 작업 실행 불가
    autoplay: true, // 자동 전환 활성화
    autoplaySpeed: 3000, // 자동 전환 간격 (단위 : ms)
  };

  return (
      <div className="slide-container">
        <Slider {...settings}>
          <div>
            {/*<img src={Image1.src} alt="Slide 1" />*/}
          </div>
          <div>
            {/*<img src={Image2.src} alt="Slide 2" />*/}
          </div>
          <div>
            {/*<img src={Image3.src} alt="Slide 3" />*/}
          </div>
        </Slider>
      </div>
  );
};

export default Slide;