import { FaStar } from "react-icons/fa";

export default function Rating() {
  const colors = {
    red: "#FF5A5F",
    grey: "lightgrey",
  };
  const stars = Array(5).fill("");
  return (
    <div>
      {stars.map((rating, index) => {
        return (
          <FaStar
            key={index}
            size={15}
            color={rating > index ? colors.red : colors.grey}
          />
        );
      })}
    </div>
  );
}
