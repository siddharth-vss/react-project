/*
|--------------------------------------------------------------------------------|
|   npm i @mui/material @emotion/react @emotion/styled @mui/icons-material |
|--------------------------------------------------------------------------------|
*/


import { Box, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useState } from "react";

const Carouser = ({ styles = " flex" }) => {
  const [Page, setPage] = useState(0);
  const images = [
    {
      role: "sdgsdgsdgsdgsdg",
      name: "Dhaval Trivedi",
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://space-mycohort-web.sgp1.cdn.digitaloceanspaces.com/2023/02/02/JLXWZN358CXT0TW0.png",
    },
    {
      role: "sdgsdgsdgsdgsdg",
      name: "Baljeet Kumar",
      label: "Bird",
      imgPath:
        "https://space-mycohort-web.sgp1.cdn.digitaloceanspaces.com/2023/02/11/I6W7FC2KDB00MGAW.jpeg",
    },
    {
      role: "sdgsdgsdgsdgsdg",
      name: "Sancheeta Kaushal",
      label: "Bali, Indonesia",
      imgPath:
        "https://space-mycohort-web.sgp1.cdn.digitaloceanspaces.com/2023/02/11/3X26NNQN9QN4KEU2.png",
    },
    {
      role: "sdgsdgsdgsdgsdg",
      name: "Pawan Panjwani",
      label: "Goč, Serbia",
      imgPath:
        "https://space-mycohort-web.sgp1.cdn.digitaloceanspaces.com/phoenix/Backend-Development/pawan.jpeg",
    },
    {
      role: "sdgsdgsdgsdgsdg",
      name: "Navneet Sharma",
      label: "Goč, Serbia",
      imgPath:
        "https://space-mycohort-web.sgp1.cdn.digitaloceanspaces.com/phoenix/Product-Management/navneet-2.jpg",
    },
  ];

  const Back = () => {
    let newPage = Page - 1;
    if (newPage < 1) {
      // newPage = 1
      // alternative
      newPage = images.length - 1;
    }
    setPage(newPage);

    // setPage(Page - 1 )
  };
  const Next = () => {
    let newPage = Page + 1;
    if (newPage > images.length - 1) {
      newPage = 0;
    }
    setPage(newPage);
    // setPage(Page + 1 )
  };
  const stylesp={
    width: "144px",
    height: "2px",
    margin: "1.5rem auto 1.25rem",
    background: "linear-gradient(90deg, #171421, #fff 50%, #171421)",
}

  

  return (
    <>
      <Box className="flex ">
        <Box className="flex ">
          <Button startIcon={<NavigateBeforeIcon />} onClick={Back}>
            PREVIOUS
          </Button>
          {0 < Page ? (
            <Box className="bg-[#171421] w-[328px] rounded-[25px] h-[490px] ">
              <img
                src={images[Page - 1].imgPath}
                className="w-[288px] h-[288px] ml-[20px] rounded-[25px] "
                alt={images[Page - 1].label}
              />

              <h1 className="text-center text-[20px] text-[#FFF] ">{images[Page - 1].name}</h1>
              <h1 className="text-center text-[#FFF] ">{images[Page - 1].role}</h1>
              <img
                src={images[Page - 1].imgPath}
                className="w-[150px] h-[32px] ml-[25%] mt-[8px]  "
                alt={images[Page - 1].label}
              />
              <Box  style={{...stylesp}} ></Box>
              <h1 className="text-center text-[#FFF] ">{images[Page - 1].label}</h1>
            </Box>
          ) : (
            <Box className="bg-[#171421] w-[328px] rounded-[25px] h-[490px] ">
              <img
                src={images[images.length - 1].imgPath}
                className="w-[288px] h-[288px] ml-[20px] rounded-[25px] "
                alt={images[images.length - 1].label}
              />

              <h1 className="text-center text-[20px] text-[#FFF] ">{images[images.length - 1].name}</h1>
              <h1 className="text-center text-[#FFF] ">{images[images.length - 1].role}</h1>
              <img
                src={images[images.length - 1].imgPath}
                className="w-[150px] h-[32px] ml-[25%] mt-[8px]  "
                alt={images[images.length - 1].label}
              />
              <Box  style={{...stylesp}} ></Box>
              <h1 className="text-center text-[#FFF] ">{images[images.length - 1].label}</h1>
            </Box>
          )}
          <Box className="bg-[#171421] w-[328px] rounded-[25px] h-[490px] ">
            <img
              src={images[Page].imgPath}
              className="w-[288px] h-[288px] ml-[20px] rounded-[25px] "
              alt={images[Page].label}
            />

            <h1 className="text-center text-[20px] text-[#FFF] ">{images[Page].name}</h1>
            <h1 className="text-center text-[#FFF] ">{images[Page].role}</h1>
            <img
              src={images[Page].imgPath}
              className="w-[150px] h-[32px] ml-[25%] mt-[8px]  "
              alt={images[Page].label}
            />
            <Box  style={{...stylesp}} ></Box>
            <h1 className="text-center text-[#FFF] ">{images[Page].label}</h1>
          </Box>

          {images.length - 1 > Page ? (
            <Box className="bg-[#171421] w-[328px] rounded-[25px] h-[490px] ">
              <img
                src={images[Page + 1].imgPath}
                className="w-[288px] h-[288px] ml-[20px] rounded-[25px] "
                alt={images[Page + 1].label}
              />

              <h1 className="text-center text-[20px] text-[#FFF] ">{images[Page + 1].name}</h1>
              <h1 className="text-center text-[#FFF] ">{images[Page + 1].role}</h1>
              <img
                src={images[Page + 1].imgPath}
                className="w-[150px] h-[32px] ml-[25%] mt-[8px]  "
                alt={images[Page + 1].label}
              />
              <Box  style={{...stylesp}} ></Box>
              <h1 className="text-center text-[#FFF] ">{images[Page + 1].label}</h1>
            </Box>
          ) : (
            <Box className="bg-[#171421] w-[328px] rounded-[25px] h-[490px] ">
              <img
                src={images[0].imgPath}
                className="w-[288px] h-[288px] ml-[20px] rounded-[25px] "
                alt={images[0].label}
              />

              <h1 className="text-center text-[20px] text-[#FFF] ">{images[0].name}</h1>
              <h1 className="text-center text-[#FFF] ">{images[0].role}</h1>
              <img
                src={images[0].imgPath}
                className="w-[150px] h-[32px] ml-[25%] mt-[8px]  "
                alt={images[0].label}
              />
              <Box  style={{...stylesp}} ></Box>
              <h1 className="text-center text-[#FFF] ">{images[0].label}</h1>
            </Box>
          )}
        </Box>

        <Button endIcon={<NavigateNextIcon />} onClick={Next}>
          NEXT
        </Button>
      </Box>
    </>
  );
};

export default Carouser;
