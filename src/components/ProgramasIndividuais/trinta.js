/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { ContainerMateria, WrapperMateria, WrapperOldMaterias } from './styled';

import Posts from '../Pagination/Posts';
import Pagination from '../Pagination/Pagination';

import api from '../../services/api';

export default function Trinta() {
  const [currentVideo, setCurrentVideo] = useState([]);
  const [video, setVideo] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [token, setToken] = useState('');

  function toggleCurrentVideo(item, index) {
    const videos = video;
    videos.items.push(currentVideo);
    // videos.items = videos.items.filter((videoItem) => videoItem.id != item.id);
    setVideo(videos);
    setCurrentVideo(item);
  }

  useEffect(() => {
    (async () => {
      const response = await api.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyDaHQDAUz1WeUVFgxhYdbEUA-0eb2Am4Ig&part=snippet&playlistId=PLSmdHC4HiQ9JIuzCjmm0MirA6FvHzAztl&maxResults=500&pageToken=${token}`,
      );

      setVideo(response.data);
      setCurrentVideo(response.data.items[0]);
      setPosts(response.data.items);
      setLoading(false);
      setToken(response.data.nextPageToken);
    })();
  }, []);

  async function MakeNewRequest(posts) {
    const response = await api.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyDaHQDAUz1WeUVFgxhYdbEUA-0eb2Am4Ig&part=snippet&playlistId=PLSmdHC4HiQ9JIuzCjmm0MirA6FvHzAztl&maxResults=500&pageToken=${token}`,
    );
    const addPosts = [...posts, ...response.data.items];
    setPosts(addPosts);
    const newToken = response.data.nextPageToken;
    setToken(newToken);
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="spacing" />
      <ContainerMateria>
        <WrapperMateria>
          <div className="container">
            <div className="grid-programa">
              <div className="player">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${currentVideo?.snippet?.resourceId?.videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="description-container">
                <h1 className="text-center text-dark fw-bold">
                  {currentVideo?.snippet?.title}
                </h1>
                <p className="description">
                  {currentVideo?.snippet?.description}
                </p>
              </div>
            </div>
          </div>
        </WrapperMateria>
        <WrapperOldMaterias>
          {video.items?.slice(0, 5).map((item, index) => {
            const { id, snippet = {} } = item;
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium = {} } = thumbnails;
            const { videoId = {} } = resourceId;
            const urlYoutube = `https://www.youtube.com/embed/${videoId}`;

            return (
              <div
                className="container-materia list-group-item-box"
                key={id}
                onClick={() => toggleCurrentVideo(item, index)}
              >
                <div className="">
                  <img
                    width={medium.width}
                    height={medium.height}
                    src={medium.url}
                    alt=""
                    className="api-img"
                  />
                </div>
                <p
                  className="text-center text-dark fw-bold pt-2 link-older-content"
                  href={urlYoutube}
                >
                  {title}
                </p>
              </div>
            );
          })}
        </WrapperOldMaterias>
        <div className="container mt-5 ">
          <ul className="list-group mb-4">
            {currentPosts.map((post) => (
              <li
                key={post?.id}
                className="list-group-item"
                onClick={() => toggleCurrentVideo(post)}
              >
                {post?.snippet?.title}
              </li>
            ))}
          </ul>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            className=""
          />
          <div className="d-flex align-items-center justify-content-center overflow-auto ">
            <button onClick={() => MakeNewRequest(posts)} className="mb-3">
              Carregar vídeos anteriores
            </button>
          </div>
        </div>
      </ContainerMateria>
    </div>
  );
}
