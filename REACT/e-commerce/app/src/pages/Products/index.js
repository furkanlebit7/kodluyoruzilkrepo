import { Grid, Box, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { useInfiniteQuery } from "react-query";
import { fetchProductList } from "../../api";
import Card from "../../components/Card";

const Products = () => {
  //when scroll bottom loads new products
  const {
    error,
    data,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery("products", fetchProductList, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePageExist = lastGroup?.length === 12;

      if (!morePageExist) {
        return;
      }
      return allGroups.length + 1;
    },
  });

  if (status === "loading") return "Loading...";

  if (status === "error") return "Error : " + error.message;

  return (
    <div>
      <Grid templateColumns="repeat(5,1fr)" gap={6}>
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((item) => (
              <Box w="100%" key={item._id}>
                <Card item={item} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <Flex mt="10" justifyContent="center">
        <Button
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </Flex>
    </div>
  );
};

export default Products;
