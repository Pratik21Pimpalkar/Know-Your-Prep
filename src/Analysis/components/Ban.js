import React from "react";
import Man from "../Assets/Man.png";
import "./Ban.css";
import CourseCard from "./CourseCard";
import { Container, Typography } from "@mui/material";
import { CourseData } from "./CourseData";
import Card1img from "../Assets/card1.jpg";
import Card2img from "../Assets/card2.jpg";
import Card3img from "../Assets/card3.jpg";
const Ban = ({ weak, name }) => {
  // console.log(weak);
  let sde = weak?.sde_bootcamp;
  let aptitude = weak?.apti;
  // console.log(aptitude);
  let core = weak?.core;
  let cardImg = [Card1img, Card2img, Card3img];

  return (
    <Container maxWidth={"xl"}>
      <div className="banner-container-1">
        <Typography
          variant="h3"
          style={{
            fontFamily: "Poppins",
            fontSize: "3.1rem",
            textAlign: "center",
            marginBottom: "1rem",
            marginTop: "1rem",
            color: "white",
          }}
        >
          Featured Courses
        </Typography>
        <div className="banner-1">
          <div className="content">
            <div style={{ width: "75%" }}>
              {(aptitude || core || sde) && (
                <Typography
                  variant="body2"
                  style={{ fontWeight: "100", fontSize: "1.3rem" }}
                >
                  Hey {name}, Based on your performance, Your weak topics is/are
                  as follows:
                  <br />
                  <span
                    style={{
                      fontSize: "inherit",
                      fontWeight: "600",
                      color: "#ffbe37",
                      textAlign: "left",
                      textTransform: "capitalize",
                    }}
                  >
                    {sde && <li>{sde}</li>}
                    {aptitude && <li>{aptitude}</li>}
                    {core && <li>{core}</li>}
                  </span>
                </Typography>
              )}
              <Typography
                variant="h6"
                style={{
                  textAlign: "left",
                  color: "#f4f4ff",
                  marginBottom: "1rem",
                  textTransform: "capitalize",
                }}
              >
                Recommended for {name}
              </Typography>
            </div>

            {/* {sde &&
              <CourseCard courseName={"Complete SDE Bootcamp "} />
            }{
              aptitude && <CourseCard courseName={"Aptitude Series - Self Pace"} />
            }
            {core &&
              <CourseCard courseName={"Core Subjects - Crash Course"} />
            } */}
            {!sde && !aptitude && !core && (
              <div>
                <CourseCard courseName={"Complete SDE Bootcamp "} />
                <CourseCard courseName={"Aptitude Series - Self Pace"} />
                <CourseCard courseName={"Core Subjects - Crash Course"} />
              </div>
            )}

            {CourseData.map((data, id) => {
              let cardimg = [Card1img, Card2img, Card3img];
              return (
                (sde || aptitude) && (
                  <CourseCard
                    key={id}
                    courseName={data.name}
                    coursePrice={data.price}
                    courseMRP={data.mrp}
                    courseImg={cardimg[id]}
                  />
                )
              );
            })}
          </div>

          <div className="women">
            <img src={Man} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Ban;
