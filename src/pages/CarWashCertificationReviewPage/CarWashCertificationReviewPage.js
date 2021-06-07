import {
  Button,
  Container,
  DivisionLine,
  Form,
  Input,
  Span,
  SVGIcon,
} from "components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import deleteCertificationComment from "utils/post/deleteCertificationComment";
import getCertificationComment from "utils/post/getCertificationComment";
import setCertificationComment from "utils/post/setCertificationComment";

const CommentList = styled.ul`
  margin: 20px 0 0 0;
  font-size: 1.5rem;
`;

const Comment = styled.li`
  margin: 10px 0;
`;

const CommentInput = styled(Input)`
  width: 100%;
  border: 0px;
  border-bottom: 1px solid black;
  padding: 0 0 10px 10px;
  &:focus {
    outline: none;
  }
`;

const CommentInputDisable = styled(Input)`
  width: 100%;
  border: 0px;
  border-bottom: 1px solid black;
  padding: 0 0 10px 10px;
  &:hover {
    cursor: not-allowed;
  }
`;

const CarWashCertificationReviewPage = ({ location }) => {
  const postid = location.state.postid;
  const loginUser = useSelector((state) => state);
  const [commentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState([]);

  const onCommentInputHandler = (e) => {
    setCommentValue(e.target.value);
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();
    if (commentValue.length > 0) {
      const loginUserName = loginUser.auth.currentUser.name;
      const loginUserUid = loginUser.auth.currentUser.uid;
      setCertificationComment(
        postid,
        loginUserName,
        commentValue,
        setComments,
        loginUserUid
      );
      setCommentValue("");
    }
  };

  useEffect(() => {
    getCertificationComment(postid, setComments);
  }, [postid]);

  return (
    <>
      <CommentList>
        {comments &&
          comments.map((comment, index) => {
            return (
              <Comment key={index}>
                {/* <Container $margin="0 0 10px 0"> */}
                <Span $float="left">{comment.name}&nbsp;:&nbsp;</Span>
                <Span
                  $display="inline-block"
                  $maxWidth="300px"
                  $margin="0 0 0 5px"
                >
                  {comment.comment}
                  {loginUser.auth.currentUser &&
                    loginUser.auth.currentUser.uid === comment.uid && (
                      <Button
                        $width="8px"
                        $height="8px"
                        $margin="0 0 0 5px"
                        onClick={() =>
                          deleteCertificationComment(
                            postid,
                            comment.index,
                            setComments
                          )
                        }
                      >
                        <SVGIcon
                          type="CloseButtonBlack"
                          $width="8px"
                          $height="8px"
                        />
                      </Button>
                    )}
                </Span>
                {/* </Container> */}
              </Comment>
            );
          })}
      </CommentList>
      <>
        <DivisionLine $margin="0 0 10px 0" />
        <Form onSubmit={onsubmitHandler}>
          {loginUser.auth.currentUser ? (
            <CommentInput
              onChange={onCommentInputHandler}
              value={commentValue}
              placeholder="댓글을 입력하세요."
            />
          ) : (
            <CommentInputDisable
              value={commentValue}
              placeholder="로그인이 필요합니다."
              disabled
            />
          )}
        </Form>
      </>
    </>
  );
};

export default CarWashCertificationReviewPage;
