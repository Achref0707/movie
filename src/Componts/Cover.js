import React from "react";
import vd from "../test.mp4"
import vd2 from "../test2.mp4"
import vd3 from "../test3.mp4"
import Carousel from "react-bootstrap/Carousel";
function Cover() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
        <video src={vd} autoPlay loop muted style={{width:"100%",height:"80vh"}}/>
          <Carousel.Caption>
            <h3>Devil's Mile</h3>
            <p>A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
           <video src={vd2} autoPlay loop muted style={{width:"100%",height:"80vh"}}/>

          <Carousel.Caption>
            <h3>Once Upon A Time In The west</h3>
            <p>A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
           <video src={vd3} autoPlay loop muted style={{width:"100%",height:"80vh"}}/>
          <Carousel.Caption>
            <h3>Taxi Driver</h3>
            <p>
            A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Cover;
