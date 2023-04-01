import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
} from "@chakra-ui/react";
import { fetchOrders } from "../../../api";
import { useQuery } from "react-query";

const Orders = () => {
  const { isLoading, isError, data, error } = useQuery(
    "admin:orders",
    fetchOrders
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (data) {
    return (
      <div>
        <Text fontSize="2xl" p={5}>
          Orders
        </Text>

        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th>Address</Th>
              <Th isNumeric>Items</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item._id}>
                <Td>{item.user.email}</Td>
                <Td>{item.adress}</Td>
                <Td isNumeric>{item.items.length}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    );
  }
};

export default Orders;
