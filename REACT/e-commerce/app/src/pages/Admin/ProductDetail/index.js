import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct, updateProduct } from "../../../api";
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { FieldArray, Formik } from "formik";
import validationSchema from "./validations";
import { message } from "antd";

const ProductDetail = () => {
  const { product_id } = useParams();

  const { isLoading, isError, error, data } = useQuery(
    ["admin:product", product_id],
    () => fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  const handleSubmit = async (values, bag) => {
    console.log("submitted");
    message.loading({ content: "Loading...", key: "product_update" });

    try {
      await updateProduct(values, product_id);
      message.success({
        content: "Product succesfully updated",
        key: "product_update",
        duration: 2,
      });
    } catch (e) {
      message.error("Something went wrong");
    }
  };

  return (
    <div>
      <Text fontSize="2xl">Edit</Text>
      <Formik
        initialValues={{
          title: data.title,
          description: data.description,
          price: data.price,
          photos: data.photos,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          errors,
          handleChange,
          touched,
          handleBlur,
          isSubmitting,
          values,
        }) => (
          <>
            <Box>
              <Box m={5} textAlign="left">
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      disabled={isSubmitting}
                      isInvalid={touched.title && errors.title}
                    />
                    {touched.title && errors.title && (
                      <Text color="red.600">{errors.title}</Text>
                    )}
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      disabled={isSubmitting}
                    />
                    {touched.description && errors.description && (
                      <Text color="red.600">{errors.description}</Text>
                    )}
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Price</FormLabel>
                    <Input
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      disabled={isSubmitting}
                    />
                    {touched.price && errors.price && (
                      <Text color="red.600">{errors.price}</Text>
                    )}
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Photos</FormLabel>
                    <FieldArray
                      name="photos"
                      render={(arrayHelpers) => (
                        <div>
                          {values.photos &&
                            values.photos.map((photo, index) => (
                              <div
                                key={index}
                                style={{
                                  marginTop: "5px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Input
                                  name={`photos.${index}`}
                                  value={photo}
                                  disabled={isSubmitting}
                                  onChange={handleChange}
                                />
                                <Button
                                  ml={3}
                                  type="button"
                                  colorScheme="red"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          <Button
                            mt={3}
                            type="button"
                            onClick={() => arrayHelpers.push("")}
                          >
                            Add Image
                          </Button>
                        </div>
                      )}
                    />
                  </FormControl>
                  <Button
                    mt={3}
                    width="full"
                    type="submit"
                    colorScheme="green"
                    isLoading={isSubmitting}
                  >
                    Update
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
};

export default ProductDetail;
