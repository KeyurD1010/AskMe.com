import React, { useContext, useEffect, useState } from 'react'
import QandABox from './QandABox'
import './css/Feed.css'
import Post from './Post'
import axios from 'axios'

function Feed() {

 
  const [posts,setPosts] = useState([]);
  const [searchData,setSearchData] = useState([]);
  useEffect(() =>{
    axios.get('/api/questions').then((res) =>{
      console.log(res.data.reverse());
      setPosts(res.data);
    }).catch((e)=>{
      console.log(e);
    })
  },[])



  // useEffect(() => {
  //   axios.get('/api/searchs').then((res) =>{
  //     console.log("search get method",res.data);
  //   })
  // })

  return (
    <div className='feed'>
        <QandABox />
        {
          posts.map((post,index) =>(<Post key={index} post = {post}/>))
          // searchData.map((post,index) =>(<Post key={index} post={post} />))
        }
        {/* <Post/>
        <Post/>
        <Post/> */}
        
    </div>
  )
}

export default Feed;