/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { ContainerMateria, WrapperMateria, WrapperOldMaterias } from './styled';
import Pagination from '../Pagination/Pagination';
import api from '../../services/api';

export default function Nossa() {
  const [currentVideo, setCurrentVideo] = useState([]);
  const [video, setVideo] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [token, setToken] = useState('');

  function toggleCurrentVideo(item, index) {
    const videos = video;
    // videos.items.push(currentVideo);
    // videos.items = videos.items.filter((videoItem) => videoItem.id != item.id);
    setVideo(videos);
    setCurrentVideo(item);
  }

  // Make the request on the components mount
  useEffect(() => {
    (async () => {
      const response = await api.get(
        `/youtube/v3/playlistItems?key=AIzaSyDaHQDAUz1WeUVFgxhYdbEUA-0eb2Am4Ig&part=snippet&playlistId=PLSmdHC4HiQ9KzeRXG9VAVJzIW9jgJcc_GmaxResults=500`,
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
      `/youtube/v3/playlistItems?key=${process.env.REACT_APP_API_KEY}&part=snippet&playlistId=PLSmdHC4HiQ9KzeRXG9VAVJzIW9jgJcc_GmaxResults=500&pageToken=${token}`,
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
              <h1 className="text-center text-dark fw-bold">
                {currentVideo?.snippet?.title}
              </h1>
              <p className="description">
                {currentVideo?.snippet?.description}
              </p>
            </div>
          </div>
        </WrapperMateria>
        {
          // <WrapperOldMaterias>
          //   {video.items?.slice(0, 4).map((item, index) => {
          //     const { id, snippet = {} } = item;
          //     const { title, thumbnails = {}, resourceId = {} } = snippet;
          //     const { medium = {} } = thumbnails;
          //     const { videoId = {} } = resourceId;
          //     const urlYoutube = `https://www.youtube.com/embed/${videoId}`;
          //     return (
          //       <div
          //         className="container-materia list-group-item-box"
          //         key={id}
          //         onClick={() => toggleCurrentVideo(item, index)}
          //       >
          //         <div className="">
          //           <img
          //             width={medium.width}
          //             height={medium.height}
          //             src={medium.url}
          //             alt=""
          //             className="api-img"
          //           />
          //         </div>
          //         <p
          //           className="text-center text-dark fw-bold pt-2 link-older-content"
          //           href={urlYoutube}
          //         >
          //           {title}
          //         </p>
          //       </div>
          //     );
          //   })}
          // </WrapperOldMaterias>
        }

        <div className="container-second-api mt-5">
          <div className=" mb-4 d-flex flex-wrap justify-content-around background-color-right">
            {currentPosts.map((post) => (
              <div
                key={post?.id}
                className=" bg-light m-2 list-group-item-box "
                onClick={() => toggleCurrentVideo(post)}
              >
                <img src={post?.snippet?.thumbnails?.medium?.url} />
                <p className="text-center fw-bold pt-2">
                  {post?.snippet?.title}
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
              <button onClick={() => MakeNewRequest(posts)} className="mb-3">
                Carregar vídeos anteriores
              </button>
            )}
          </div>
        </div>
      </ContainerMateria>
    </div>
  );
}
