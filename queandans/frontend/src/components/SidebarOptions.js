import React, { useState } from 'react'
import "./css/SidebarOptions.css"
import { Add } from "@material-ui/icons";
import { async } from '@firebase/util';
import axios from 'axios';



function SidebarOptions() {

  // const [option ,setOption] = useState("");

  // const handleSidebar = (e) => {
  //   console.log(e.target);
    // setOption(e.target.value);
    // console.log(option);
  // }

  const handleHistory = async () => {
    const history = "histry";
    
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const body = {
      history:history
    }
    console.log(body.history);
    await axios.post("/api/sidebarOption",body,config).then((res) => {

      console.log(res);
    })
  }

  return (<div className="sidebarOptions">
  <div className="sidebarOption">
    <img
      src="https://thumbs.dreamstime.com/b/history-magnifying-glass-focused-word-36388781.jpg"
      alt="IMG"
    />
    <p>History</p>
  </div>

  <div className="sidebarOption">
    <img
      src="https://wallpaperaccess.com/full/656683.jpg"
      alt="IMG"
    />

    <p>Business</p>
  </div>
  <div className="sidebarOption">
    <img
      src="https://image.shutterstock.com/image-vector/psychology-word-cloud-collage-social-260nw-1664429731.jpg"
      alt="IMG"
    />
    <p>Psychology</p>
  </div>

  <div className="sidebarOption">
    <img
      src="https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg"
      alt="IMG"
    />
    <p>Cooking</p>
  </div>

  <div className="sidebarOption">
    <img
      src="https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg"
      alt="IMG"
    />
    <p>Music</p>
  </div>

  <div className="sidebarOption">
    <img
      src="https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg"
      alt="IMG"
    />
    <p>Science</p>
  </div>

  <div className="sidebarOption">
    <img
      src="https://ak.picdn.net/shutterstock/videos/2640977/thumb/1.jpg?i10c=img.resize(height:240)"
      alt="IMG"
    />
    <p>Health</p>
  </div>

  <div className="sidebarOption">
    <img
      src="https://www.highreshdwallpapers.com/wp-content/uploads/2014/03/The-Movies-Wallpaper.jpg"
      alt="IMG"
    />
    <p>Movies</p>
  </div>

  <div className="sidebarOption">
    <img
      src="https://swall.teahub.io/photos/small/176-1764351_technology-backgrounds-compatible.jpg"
      alt="IMG"
    />
    <p>Technology</p>
  </div>

  <div className="sidebarOption">
    <img
      src="https://thumbs.dreamstime.com/b/back-to-school-education-supplies-books-pens-black-board-background-good-copy-space-back-to-school-education-supplies-103134071.jpg"
      alt="IMG"
    />
    <p>Education</p>
  </div>
  <div className="sidebarOption">
    <img
      src="https://logos.flamingtext.com/Word-Logos/others-design-sketch-name.png"
      alt="IMG"
    />
    <p>Others</p>
  </div>

</div>
  )
}

export default SidebarOptions