import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./css/Post.css";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlined,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
  ThumbDown,
} from "@material-ui/icons";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@material-ui/icons/Close";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactTimeAgo from "react-time-ago";
import axios from "axios";
import ReactHtmlParser from "html-react-parser";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

function Post({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  var [like, setLike] = useState(0);
  const user = useSelector(selectUser);
  const Close = <CloseIcon />;

  // useEffect(() => {
  //   axios.get(`/api/like/:${post._id}`).then((res) => {
  //     setLikes(res.data.likes);
  //   }).catch(err =>
  //     console.log(err)
  //   )
  // },[]);

  const handleQuill = (value) => {
    setAnswer(value);
  };

  const handleSubmit = async () => {
    if (post?._id && answer !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        answer: answer,
        questionId: post?._id,
        user: user,
      };
      await axios
        .post("/api/answers", body, config)
        .then((res) => {
          // console.log(res.data);
          alert("Answer added succesfully");
          setIsModalOpen(false);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handleLike = () => {
    setLike(like + 1);
  };

  return (
    <div className="post">
      <div className="post_info">
        <Avatar src={post?.user?.photo} />
        <h4>{post?.user?.userName}</h4>
        <h4>{post?.questionCategory}</h4>
        <small>
          <LastSeen date={post?.createdAt} />
        </small>
      </div>
      <div className="post_body">
        <div className="post_question">
          <p>{post?.questionName}</p>
          <button
            className="post_btnAnswer"
            onClick={() => setIsModalOpen(true)}
          >
            Answer
          </button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal_question">
              <h1>{post?.questionName}</h1>
              <p>
                asked by <span className="name">{post?.user?.userName}</span>on{" "}
                <span className="name">
                  {new Date(post?.createdAt).toLocaleString()}
                </span>{" "}
              </p>
            </div>
            <div className="modal_answer">
              <ReactQuill
                value={answer}
                onChange={handleQuill}
                placeholder="Enter your answer"
              />
            </div>
            <div className="modal_button">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} className="add" type="submit">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        {post.questionUrl !== "" && <img src={post?.questionUrl} alt="URL" />}
      </div>
      {/* <div className="post_footer">
        <div className="post_footerAction">
          {/* <button onClick={handleLike}>Like : {likes}</button> */}
      {/* </div> */}

      {/* <ChatBubbleOutlined />
        <div className="post_footerLeft">
         
          
        </div> */}
      {/* </div> */}
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0px",
        }}
      >
        {post?.allAnswers.length} Answer(s)
      </p>
      <div
        className="post_answer"
        style={{
          margin: "5px 0px 0px 0px",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
      >
        {post?.allAnswers?.map((_a) => (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "10px 5px",
                borderTop: "1px solid lightgray",
              }}
              className="post-answer-container"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#888",
                }}
                className="post-answered"
              >
                <Avatar src={_a?.user?.photo} />
                <div
                  style={{
                    margin: "0px 10px",
                  }}
                  className="post-info"
                >
                  <p>{_a?.user?.userName}</p>
                  <span>
                    <LastSeen date={_a?.createdAt} />
                  </span>
                </div>
              </div>
              <div className="Answer_section">
                <div className="post-answer">
                  {ReactHtmlParser(_a?.answer)}
                  <div className="like_btn">
                    <ThumbUpIcon onClick={handleLike} />{' '}<span>{like}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Post;
