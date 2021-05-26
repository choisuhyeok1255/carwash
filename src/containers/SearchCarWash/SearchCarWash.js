import { Container, Form, Heading, Input, KaKaoMap } from "components";
import React, { useState } from "react";

const SearchCarWash = () => {
  const [inputText, setInputText] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchValue(inputText);
    setInputText("");
  };

  return (
    <Container $flexFlow="column" $margin="22px 0 0 0">
      <Heading $margin="0 0 0 10px">세차장 검색</Heading>
      <Form onSubmit={submitHandler}>
        <Input
          placeholder="세차장을 검색하세요..."
          $margin="20px 0 6px 0"
          $padding="5px"
          $border="1px solid black"
          $borderRadius="5px"
          $width="100%"
          $height="30px"
          onChange={onChangeHandler}
          value={inputText}
        />
        <KaKaoMap $width="100%" $height="300px" searchValue={searchValue} />
      </Form>
    </Container>
  );
};

export default SearchCarWash;
