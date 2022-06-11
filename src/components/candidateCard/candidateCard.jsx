import { HomeOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { Card } from "antd";
import PropTypes from "prop-types";

import "./candidateCard.scss";

const { Meta } = Card;

const images = {
  male: "/images/male.svg",
  female: "/images/female.svg",
};

const CandidateCard = ({
  firstName,
  lastName,
  email,
  phone,
  zipCode = "----",
  sex,
}) => {
  return (
    <Card
      className="candidate-card"
      cover={<img alt="candidate" src={images[sex] || images.male} />}
    >
      <Meta title={`${firstName} ${lastName}`} />
      <div className="detail">
        <MailOutlined />
        {email}
      </div>
      <div className="detail">
        <PhoneOutlined />
        {phone}
      </div>
      <div className="detail">
        <HomeOutlined />
        {zipCode}
      </div>
    </Card>
  );
};

CandidateCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  sex: PropTypes.string,
  phone: PropTypes.number,
  zipCode: PropTypes.string,
}

export default CandidateCard;
