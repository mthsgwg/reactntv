import React from 'react';

import { ContainerMateria, WrapperMateria } from './styled';

export default function Trinta() {
  return (
    <>
      <div className="spacing" />
      <ContainerMateria>
        <WrapperMateria>
          <div className="container">
            <div className="grid-programa">
              <div className="col">
                <div className="player">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/0og3GXtfOzc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                  consequat arcu. Fusce id nibh ultricies, tempor urna ut,
                  pulvinar elit. Pellentesque ultrices aliquet nisl at
                  vulputate. Sed purus est, egestas vitae eros at, ullamcorper
                  lobortis quam.
                </p>
              </div>
            </div>
          </div>
        </WrapperMateria>
      </ContainerMateria>
    </>
  );
}
