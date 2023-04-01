import React, { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteProduct, fetchProductList } from "../../../api";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";

const Products = () => {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(
    "admin:products",
    fetchProductList
  );

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        dataIndex: "action",
        render: (text, record) => (
          <>
            <Link to={`products/${record._id}`}>Edit</Link>
            <Popconfirm
              title="Are You Sure"
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log("Success");
                  },
                });
              }}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <span style={{ marginLeft: 10, cursor: "pointer", color: "red" }}>
                Delete
              </span>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [deleteMutation]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center" m={5}>
        <Text fontSize="2xl">Products</Text>
        <Link to="products/new">
          <Button colorScheme="green">Add Product</Button>
        </Link>
      </Flex>
      <Table dataSource={data} columns={columns} rowKey="_id" />
    </div>
  );
};

export default Products;
