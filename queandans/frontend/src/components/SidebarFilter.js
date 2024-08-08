import React from 'react'

function SidebarFilter() {

    const [posts,setPosts] = useState([]);
    // const [searchData,setSearchData] = useState([]);
    useEffect(() =>{
      axios.get('/api/sidebarOption').then((res) =>{
        console.log(res.data.reverse());
        setPosts(res.data);
      }).catch((e)=>{
        console.log(e);
      })
    },[])


  return (
    <div className='qanda'>
        <QandAHeader />
        <div className="qanda_contents">
          <div className="qanda_content">
            {/* <Sidebar /> */}

            {/* <Widget /> */}
          </div>
        </div>
    </div>
  )
}

export default SidebarFilter