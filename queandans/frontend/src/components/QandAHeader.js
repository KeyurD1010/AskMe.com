import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  ExpandMore,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
} from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import { Avatar, Button, Input } from "@material-ui/core";
import "./css/QandAHeader.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { async } from "@firebase/util";
import Post from "./Post";

function QandAHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const Close = <CloseIcon />;
  const [question, setQuestion] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [cate, setCate] = useState();
  const [search, setSearch] = useState("");

  var searchCollection = [];



  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          console.log("Logged out");
        })
        .catch((err) => {
          console.log("error in logout", err);
        });
    }
  };

  const handleSubmit = async () => {
    console.log("handle call");
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        questionName: question,
        questionUrl: inputUrl,
        questionCategory: cate,
        user: user,
      };

      await axios
        .post("./api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding in question");
        });
    }
  };

  const handleSearch = async (e) => {
   

    if(search !== null){
      try{

        const config = {
          headers: {
                    "Content-Type": "application/json",
                  }
        }

        const body = {
          search:search,
        }

        await axios.post("/api/searchs",body,config).then((res) => {
          console.log(res.data);
          searchCollection = res.data.collection;
          console.log(searchCollection[0].questionName);
          console.log("searched",searchCollection.length);
        }).catch((e) =>{
          console.log(e);
        })

      }catch(err) {
        console.log(err);
      }
    }
    // if (search !== null) {
    //   try {
    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json",
    //       }
    //     };
    //     const body = {
    //       search: search
    //     }
    //     await axios.post("./api/searchs", body, config).then((res)=>{
    //       console.log("resss",res.data.collection[0]);
    //     })
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
  };

  return (
    <div className="qandaHeader">
      <div className="qandaHeader-content">
        <div className="qandaHeader_logo">
          <img src="https://play-lh.googleusercontent.com/5AF-J4kZa39G5q0I_DWFV3zRB5NuMauBPgk0bgIzzVYk71wI1w-dfslWJXWjD0qwlYtr" alt="logo" />
        </div>
        <div className="qandaHeader_icons">
          <div className="qandaHeader_icon">
            <HomeIcon />
          </div>
          <div className="qandaHeader_input">
          <Search  />
          <input type="text" name="search" placeholder="Search questions" />
          <Button >Search</Button>
        </div>
          
        </div>
       
        <div className="qandaHeader_Rem">
          <span onClick={handleLogout}>
            <Avatar src={user?.photo} />
          </span>
          <h5>{user?.userName}</h5>
          <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
           {/* <Modal
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
            <div className="modal">
            <div className="modal-title">
              <h1>Add Question</h1>
              </div>
            <div className="modal_info">
              <h4 > Information Related Question</h4>
              <Avatar className="avatar" src={user?.photo}/>
              <span><h5>{user?.userName}</h5></span>
              <div className="que-box">
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                type="text"
                placeholder="Enter your question"
              />
              </div>
              <div className="link">
              <input
                  value={inputUrl}
                  onChange={(e) => {
                    setInputUrl(e.target.value);
                  }}
                  type="text"
                  placeholder="Optional Include a link that give context"
                />

                {inputUrl !== "" && (
                  <img
                    style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                    src={inputUrl}
                    alt="IMG"
                  />

                )} 
                </div>

                <div className="cat">
                <p>Choose Catogories in which your can be placed</p>
                <select value={cate} onChange={(e) => setCate(e.target.value)} name="list" className="select">
                  <option value="history">history</option>
                  <option value="Business">Business</option>
                  <option value="Psychology">Psychology</option>
                  <option value="Cooking">Cooking</option>
                  <option value="Music">Music</option>
                  <option value="Science">Science</option>
                  <option value="Health">Health</option>
                  <option value="Movies">Movies</option>
                  <option value="Technology">Technology</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>

            </div>
            <div className="modal-btn">
             <button className="add" onClick={handleSubmit}  type="submit">
                Add Question
              </button>
             <button className="cancel" onClick={()=> setIsModalOpen(false)}>close</button>
              </div>
            
            </div>            
         </Modal>  */}


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
            <div className="modal_title">
              <h5>Add Qustion</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal_info">
              <Avatar className="avatar" src={user?.photo}/>
              <div className="modal_scop">
                <PeopleAltOutlined />
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className="modal_field">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                type="text"
                placeholder="Enter your question"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  value={inputUrl}
                  onChange={(e) => {
                    setInputUrl(e.target.value);
                  }}
                  type="text"
                  placeholder="Optional Include a link that give context"
                />

                {inputUrl !== "" && (
                  <img
                    style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                    src={inputUrl}
                    alt="IMG"
                  />
                )}
              </div>
            </div> 
            {/* //extra */}
             <p>Choose Catogories in which your can be placed</p>
                <select value={cate} onChange={(e) => setCate(e.target.value)} name="list" id="">
                  <option value="histry">histry</option>
                  <option value="Business">Business</option>
                  <option value="Psychology">Psychology</option>
                  <option value="Cooking">Cooking</option>
                  <option value="Music">Music</option>
                  <option value="Health">Health</option>
                  <option value="Movies">Movies</option>
                  <option value="Technology">Technology</option>
                  <option value="Education"></option>
                </select>
            
            
            
            <div className="modal_buttons">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="add" onClick={handleSubmit}  type="submit">
                Add Question
              </button>
            </div>
          </Modal> 
          <div className="logout">
            <img 
            onClick={handleLogout}
             src="https://iconarchive.com/download/i91934/icons8/windows-8/User-Interface-Logout.ico" alt="Logout" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QandAHeader;
