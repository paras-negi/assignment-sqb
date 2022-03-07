import React, {Component} from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MainSlider({customArrows, ref,  children, breakPoints, slidesToShow = 1, params, scrollMultiSlides }) {
  let extraParameters = {
    speed: 500,
    initialSlide: 0,
    slidesToShow,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    dots: false,
    className: '',
    centerMode: false,
    slide: 'div'
  };

  if(customArrows){
    extraParameters["nextArrow"] = <RightArrow/>
    extraParameters["prevArrow"] = <LeftArrow/>
  }else{
    delete extraParameters["nextArrow"];
    delete extraParameters["prevArrow"];
  }

  const para = {
    ...extraParameters,
    ...params,
  };


  // console.log(para, "para")

  function showSlidesCount(object) {
    if (!object) return null;

    return (
      Object.entries(object) &&
      Object.entries(object)?.map(([brk, number]) => {
        return {
          breakpoint: Number(brk),
          settings: {
            slidesToShow: Number(number),
            slidesToScroll: scrollMultiSlides ? Number(number) : 1,
            // infinite: params?.infinite,
            // dots: params?.dots ? true : false
            // ...para
          },
        };
      })
    );
  }

  const responsive = { responsive: showSlidesCount(breakPoints) };
  // ?.sort((a,b)=> a.breakPoints - b.breakPoints) 

  // console.log({ responsive });
  const settings = {
    ...para,
    ...responsive
  }
  // console.log({ settings });
  return <Slider {...settings} ref={ref}>{children}</Slider>;
}


const LeftArrow=(props)=>{
  // console.log(props);
  const {className, onClick, currentSlide, style} = props;
  // console.log(props);

  return (<button className={!onClick ? "display-none" : "custom-btn-l"} onClick={onClick}>Dark Sugar</button>)
}

const RightArrow=(props)=>{
  // console.log("i'm working");
  // console.log(props);
  const {className, onClick, currentSlide, style} = props;
  return (<button className={!onClick ? "display-none" : "custom-btn-r"} onClick={onClick}>Dark Sugar-1</button>)
}





// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// class Slider extends Component {
//     state = { additionalTransfrom: 0 };
//     // console.log({children});

//   render() {
//     const { children, itemsToShow } = this.props;
//     // const responsive = {
//     //     doesntmatter: {
//     //       breakpoint: { max: 3000, min: 0 },
//     //       items: 1
//     //     }
//     //   };
//     const responsive = {
//       superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 3000 },
//         items: itemsToShow["superLargeDesktop"],
//         partialVisibilityGutter: 10,
//       },

//       desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: itemsToShow["desktop"],
//         partialVisibilityGutter: 10,
//       },

//       tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: itemsToShow["tablet"],
//       },

//       mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: itemsToShow["mobile"],
//       },
//     };
//     console.log(responsive,'responsive===');
//     return (
//       <Carousel
//         responsive={responsive}
//         ref={el => (this.Carousel = el)}
//         swipeable={false}
//         draggable={false}
//         showDots={false}
//         ssr={false} // means to render carousel on server-side.
//         infinite={false}
//         partialVisbile={false}
//         // autoPlay={this.props.deviceType !== "mobile" ? true : false}
//         autoPlay={false}
//         play="true"
//         autoPlaySpeed={1000}
//         additionalTransfrom={-this.state.additionalTransfrom}
//         // keyBoardControl={true}
//         customTransition="all .5"
//         transitionDuration={500}
//         containerClass="carousel-container"
//         removeArrowOnDeviceType={["tablet", "mobile"]}
//         // deviceType={this.props.deviceType}
//         dotListClass="custom-dot-list-style"
//         itemClass="carousel-item-padding-40-px"
//       >
//         {children}
//       </Carousel>
//     );
//   }
// }

// export default Slider;

// import React from "react";
// import Slider from "react-slick";

// export default function MainSlider(props) {
//   const { children } = props;

//   const settings = {
//     dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return <Slider {...settings}>{children}</Slider>;
