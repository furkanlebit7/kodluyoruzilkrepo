import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={`/product/${item._id}`}>
        <Image src={item.photos[0]} alt="product" loading="lazy" />
        <Box p="6">
          <Box d="plex" alignItems="baseline">
            08/11/1998
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {item.title}
          </Box>
          <Box>{item.price} TL</Box>
        </Box>
      </Link>
      <Button colorScheme="green" variant="solid">
        Add to basket
      </Button>
    </Box>
  );
};

export default Card;
