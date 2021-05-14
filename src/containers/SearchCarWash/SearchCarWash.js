import { Container, Form, Input, KaKaoMap } from "components";
import { MainHeading } from "containers";
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
    <Container $flexFlow="column">
      <MainHeading>세차장 검색</MainHeading>
      <Form onSubmit={submitHandler}>
        <Input
          placeholder="세차장을 검색하세요..."
          $margin="0 0 6px 0"
          $padding="10px"
          $borderRadius="5px"
          onChange={onChangeHandler}
          value={inputText}
        />
        <KaKaoMap $width="100%" $height="300px" searchValue={searchValue} />
      </Form>
    </Container>
  );
};

export default SearchCarWash;
