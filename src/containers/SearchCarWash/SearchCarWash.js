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
    <Container $flexFlow="column" $margin="40px 0 0 0">
      <MainHeading $fontSize="2rem" toPage="/" toEdit="/">
        세차장 검색
      </MainHeading>
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
