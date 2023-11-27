import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <div className="container-001">
        {/* <div className="row-01">
          <div className="col-01">
            <h1>Welcome</h1>
            <p id="para01">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo odio
              maiores distinctio numquam esse fugiat inventore cum perferendis
              modi reiciendis repellat nemo, molestiae asperiores eveniet
              officia qui suscipit. Necessitatibus, modi?
            </p>
            <button to type="button">Explore</button>
          </div>
        </div> */}

        
      </div>
    </>
  );
};

export default Home;

// import React from "react";
// import { UncontrolledCarousel } from "reactstrap";

// // Import your local image files
// import slide1 from "../Media/images/image01.jpg";
// import slide2 from "../Media/images/image02.jpg";
// import slide3 from "../Media/images/image03.jpg";
// import slide4 from "../Media/images/image04.jpg";
// import slide5 from "../Media/images/image05.jpg";
// import slide6 from "../Media/images/image06.jpg";
// import slide7 from "../Media/images/image07.jpg";

// const Home = () => {
//   const customStyles = {
//     width: "100vw", // Set the width to 100vw (viewport width)
//     height: "100vh", // Set the height to 100vh (viewport height)
//     objectFit: "cover", // Ensure the image covers the specified dimensions
//   };

//   const items = [
//     {
//       altText: "Slide 1",
//       caption: "Slide 1",
//       key: 1,
//       // Use the imported image file as the src
//       src: slide1,
//       // Apply custom styles to the img element
//       imgStyle: customStyles,
//     },
//     {
//       altText: "Slide 2",
//       caption: "Slide 2",
//       key: 2,
//       // Use the imported image file as the src
//       src: slide2,
//       // Apply custom styles to the img element
//       imgStyle: customStyles,
//     },
//     {
//       altText: "Slide 3",
//       caption: "Slide 3",
//       key: 3,
//       // Use the imported image file as the src
//       src: slide3,
//       // Apply custom styles to the img element
//       imgStyle: customStyles,
//     },
//     {
//       altText: "Slide 4",
//       caption: "Slide 4",
//       key: 4,
//       // Use the imported image file as the src
//       src: slide4,
//       // Apply custom styles to the img element
//       imgStyle: customStyles,
//     },
//     {
//       altText: "Slide 5",
//       caption: "Slide 5",
//       key: 5,
//       // Use the imported image file as the src
//       src: slide5,
//       // Apply custom styles to the img element
//       imgStyle: customStyles,
//     },
//     {
//       altText: "Slide 6",
//       caption: "Slide 6",
//       key: 6,
//       // Use the imported image file as the src
//       src: slide6,
//       // Apply custom styles to the img element
//       imgStyle: customStyles,
//     },
//     {
//       altText: "Slide 7",
//       caption: "Slide 7",
//       key: 7,
//       // Use the imported image file as the src
//       src: slide7,
//       // Apply custom styles to the img element
//       imgStyle: customStyles,
//     },
//   ];

//   return (
//     <>
//       <UncontrolledCarousel pause={false} interval="1500" items={items} />
//     </>
//   );
// };

// export default Home;
