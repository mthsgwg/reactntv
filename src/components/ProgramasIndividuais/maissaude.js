/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { ContainerMateria, WrapperMateria } from './styled';
import Pagination from '../Pagination/Pagination';
import api from '../../services/api';

export default function Trinta() {
  const [currentVideo, setCurrentVideo] = useState([]);
  const [video, setVideo] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(24);
  const [token, setToken] = useState('');

  function toggleCurrentVideo(item, index) {
    const videos = video;
    // videos.items.push(currentVideo);
    // videos.items = videos.items.filter((videoItem) => videoItem.id != item.id);
    setVideo(videos);
    setCurrentVideo(item);
    window.scrollTo(0, 0);
  }

  // Make the request on the components mount
  useEffect(() => {
    (async () => {
      const response = await api.get(
        `/youtube/v3/playlistItems?key=AIzaSyDaHQDAUz1WeUVFgxhYdbEUA-0eb2Am4Ig&part=snippet&playlistId=PLSmdHC4HiQ9Lm-zXsng_pmXgnvqtILDhQ&&maxResults=500`,
      );

      setVideo(response.data);
      setCurrentVideo(response.data.items[0]);
      setPosts(response.data.items);
      setLoading(false);
      setToken(response.data.nextPageToken);
    })();
  }, []);

  // Make new api fetch after the button is clicked
  async function MakeNewRequest(posts) {
    setLoading(true);
    const response = await api.get(
      `/youtube/v3/playlistItems?key=${process.env.REACT_APP_API_KEY}&part=snippet&playlistId=PLSmdHC4HiQ9Lm-zXsng_pmXgnvqtILDhQ&&maxResults=500&pageToken=${token}`,
    );
    const addPosts = [...posts, ...response.data.items];
    setPosts(addPosts);

    const newToken = response.data.nextPageToken;
    setToken(newToken);
    setLoading(false);
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
          <section className="top-materia">
            <div className="grid-programa">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${currentVideo?.snippet?.resourceId?.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                className="player"
              />
              <div className="description-container">
                <h1 className="titulo-programa">
                  {currentVideo?.snippet?.title.toLowerCase()}
                </h1>
                <p className="description">
                  {currentVideo?.snippet?.description}
                </p>
              </div>
            </div>
          </section>
        </WrapperMateria>

        <div className="container-second-api">
          <div className="materias-antigas">
            {currentPosts.map((post) => (
              <div
                key={post?.id}
                className="placeholder-programas"
                onClick={() => toggleCurrentVideo(post)}
              >
                <img
                  src={post?.snippet?.thumbnails?.medium?.url}
                  width={'100%'}
                />
                <p className="old-programas-titulo">
                  {post?.snippet?.title.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            className=""
          />
          <div className="">
            {loading ? null : (
              <button
                onClick={() => MakeNewRequest(posts)}
                className="pagination-button"
              >
                Carregar vídeos anteriores
              </button>
            )}
          </div>
        </div>
      </ContainerMateria>
    </div>
  );
}
