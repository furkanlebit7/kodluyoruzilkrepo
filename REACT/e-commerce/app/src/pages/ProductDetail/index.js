import React from "react";
import { useQuery } from "react-query";
import { Box, Text, Button } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";

import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";

const ProductDetail = () => {
  const { product_id } = useParams();

  const { isLoadiong, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoadiong) {
    return <div>loading</div>;
  }
  if (isError) {
    return <div>error</div>;
  }

  //   const findBasketItem = items.find((item) => item._id === product_id);
  const images = data?.photos.map((url) => ({ original: url }));
  if (data) {
    return (
      <div>
        <Button
          colorScheme="pink"
          // onClick={() => addToBasket(data, findBasketItem)}
        >
          Add to Basket
        </Button>

        <Text as="h2" fontSize="2xl">
          {data.title}
        </Text>
        <Text>08/11/1998</Text>

        <p>{data.description}</p>

        <Box margin="10">
          <ImageGallery items={images} showThumbnails={false} />
        </Box>
      </div>
    );
  }
};

export default ProductDetail;
