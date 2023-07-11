import React, {useEffect, useState} from 'react';
import { videoApi } from './api';


const Video = () => {
    const [videoData, setVideoData] = useState({});
    const [showLable, setshowLable] = useState(false);
    useEffect(()=>{
        const fetchVideos = async ()=>{
            const response = await videoApi('https://example.com/api/getvideo')
            try{
                const data = response.data.videos;
                setVideoData(data)
            }
            catch(error){
                console.log("error: ", error.message)
            }
        }
        fetchVideos();
    },[])
    const lableHandeler=()=>setshowLable(true)
  return (
    <div>
        <img src={videoData.thumbnail} alt="image" />
        <h4>{videoData.title}</h4>
        <p>Likes:{videoData.likes}</p>
        <p>Views: {videoData.views}</p>
        <p style={{display: showLable? "block" : "none"}}>Lable: Self Motivational</p>
        <button onClick={lableHandeler}>Show Lable</button>
    </div>
  )
}

export default Video
