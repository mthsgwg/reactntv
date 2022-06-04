import React from 'react';

import { ContainerMateria, WrapperMateria, WrapperOldMaterias } from './styled';

import api from '../../services/api';

export default function Guy() {
  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await api.get(
        'https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyDaHQDAUz1WeUVFgxhYdbEUA-0eb2Am4Ig&part=snippet&playlistId=PLSmdHC4HiQ9LDj1vAWqOFd0brss63rGO3&maxResults=5',
      );
      setVideo(response.data);
    }
    getData();
  }, []);

  return (
    <>
      <div className="spacing" />
      <ContainerMateria>
        <WrapperMateria>
          <div className="container">
            {video.items?.slice(0, 1).map((item) => {
              const { id, snippet = {} } = item;
              const { title, resourceId = {}, description } = snippet;
              const { videoId = {} } = resourceId;
              const urlYoutube = `https://www.youtube.com/embed/${videoId}`;

              return (
                <div className="grid-programa" key={id}>
                  <div className="player">
                    <iframe
                      width="100%"
                      height="100%"
                      src={urlYoutube}
                      title="YouTube video player"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                  <div>
                    <h1 className="text-center text-dark fw-bold">{title}</h1>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </WrapperMateria>
        <WrapperOldMaterias>
          {video.items?.slice(1, 5).map((item) => {
            const { id, snippet = {} } = item;
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium = {} } = thumbnails;
            const { videoId = {} } = resourceId;
            const urlYoutube = `https://www.youtube.com/embed/${videoId}`;

            return (
              <div className="container-materia" key={id}>
                <div className="">
                  <img
                    width={medium.width}
                    height={medium.height}
                    src={medium.url}
                    alt=""
                    className="api-img"
                  />
                </div>
                <a
                  className="text-center text-dark fw-bold pt-2 link-older-content"
                  href={urlYoutube}
                >
                  {title}
                </a>
              </div>
            );
          })}
        </WrapperOldMaterias>
      </ContainerMateria>
    </>
  );
}

/*
 CASO NAO FOR UTILIZAR A API

<div className="">
                <div className="player">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/39O4EQq83aM"
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div>
                <h1 className="text-center text-dark fw-bold">
                  30 MINUTOS 08 02 2022
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam feugiat tellus eu elit eleifend aliquet ac a felis.
                  Donec in ipsum egestas, suscipit ligula eu, rhoncus metus.
                  Nulla bibendum tellus ut bibendum faucibus. Aenean dictum erat
                  dolor, eu ultrices dui consectetur nec. Quisque blandit eget
                  ex id maximus. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Sed laoreet urna
                  leo, eget suscipit ligula imperdiet vel. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Fusce quis nibh vitae magna euismod vulputate.
                  Maecenas vehicula laoreet volutpat. Nullam mattis auctor lorem
                  a venenatis. Donec magna nunc, volutpat eu ligula a, mollis
                </p>
              </div>

          <div className="container-materia">
            <div className="player">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0og3GXtfOzc"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p>30 MINUTOS 07 02 2022</p>
          </div>
          <div className="container-materia">
            <div className="player">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0og3GXtfOzc"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p>30 MINUTOS 07 02 2022</p>
          </div>
          <div className="container-materia">
            <div className="player">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0og3GXtfOzc"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p>30 MINUTOS 07 02 2022</p>
          </div>
          <div className="container-materia">
            <div className="player">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0og3GXtfOzc"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p>30 MINUTOS 07 02 2022</p>
          </div>

          */
