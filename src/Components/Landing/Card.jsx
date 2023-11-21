import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartRed,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import downloadIcon from "../../icons/download.svg";
import RightIcon from "../../icons/icon-right.svg";
import faCart from "../../icons/shopping-cart.png";

const ProductCard = ({ item }) => {
  const [isRed, setIsRed] = React.useState(false);

  const toggleHeart = () => {
    setIsRed((prevState) => !prevState);
  };

  return (
    <Card className="card-container">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item?.imageUrls[0]}
          alt="shop 2"
          style={{
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />
        <CardContent>
          <Typography variant="h6" component="h6" style={{ fontSize: "16px" }}>
            {item?.selectedCategory}
          </Typography>
          <Typography variant="h5" component="h5">
            {item?.productName}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            style={{ color: "gray" }}
          >
            {item?.description.slice(0, 110)}...
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body2" component="p" style={{ color: "gray" }}>
              <img src={downloadIcon} alt="download icon" /> 0 Sales
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              style={{
                color: "rgb(97, 151, 97)",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              R{item?.price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <IconButton
          aria-label="add to favorites"
          onClick={toggleHeart}
          style={{ marginRight: "10px" }}
        >
          <FontAwesomeIcon
            icon={isRed ? faHeartRed : faHeart}
            style={{ color: isRed ? "red" : "black" }}
          />
        </IconButton>
        <Button
          variant="outlined"
          color="primary"
          style={{ border: "2px solid black", color: "rgb(43, 40, 40)" }}
          onClick={() => console.log("View Button Clicked!!!")}
        >
          VIEW
          <img
            src={RightIcon}
            className="right-icon"
            alt="right icon"
            style={{ marginLeft: "10px" }}
          />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
