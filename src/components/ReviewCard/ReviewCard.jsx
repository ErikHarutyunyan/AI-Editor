import React from "react";
// Styles
import { Wrapper } from "./ReviewCard.styles";
import { ImgWrapper } from "../Image/Image.styles";
import { reviewImg } from "../Image/Image";
import Icon from "../Icon";
const ReviewCard = ({ name, stars, message }) => {
  return (
    <Wrapper>
      <div className="reviewBox">
        <div className="reviewHeader">
          <ImgWrapper src={reviewImg} load="lazy" objectFit="cover" />
          <div className="name">
            <h3>Noah S.</h3>
          </div>
        </div>
        <div className="reviewBody">
          <div className="message">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="reviewFooter">
          <Icon name="fullStar" />
        </div>
      </div>
    </Wrapper>
  );
};

export default ReviewCard;
