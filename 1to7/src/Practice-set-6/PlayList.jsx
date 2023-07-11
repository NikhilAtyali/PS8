import React, { useState, useEffect } from "react";
import { playListapi } from "./api";

const PlayList = () => {
  const [playListData, setPlayListData] = useState([]);
  useEffect(() => {
    const fetchPlayList = async () => {
      try {
        const response = await playListapi("https://example.com/api/videos");
        const data = response.data.videos;
        setPlayListData(data);
      } catch (error) {
        console.error("error: " + error);
      }
    };
    fetchPlayList();
  }, []);

  const deleteHandeler = (id) => {
    const filteredData = playListData.filter((video) => {
      return video.title !== id;
    });
    console.log({ filteredData });
    setPlayListData(filteredData);
  };

  return (
    <div>
      <h4>Play List</h4>
      <ul>
        {playListData.map((video) => {
          return (
            <li>
              <img src={video.thumbnail} alt="video" />
              <h4>Title: {video.title}</h4>
              <p>Views: {video.views}</p>
              <p>Likes: {video.likes}</p>,
              <button onClick={() => deleteHandeler(video.title)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlayList;
