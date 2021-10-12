import React, { useEffect } from "react";
import "./map.scss";

const Map = (props) => {
  const { kakao } = window;

  useEffect(() => {
    handleCompanyMap();
    handleTsmap();
    handleLfMap();
  }, []);

  const handleCompanyMap = () => {
    const container = document.getElementById("companyMap");

    const options = {
      center: new kakao.maps.LatLng(37.512222968891976, 127.1223602760612),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(
      37.512222968891976,
      127.1223602760612
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  };

  const handleTsmap = () => {
    const container = document.getElementById("tsMap");

    const options = {
      center: new kakao.maps.LatLng(37.24174009248416, 126.97686778915413),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(
      37.24174009248416,
      126.97686778915413
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  };
  const handleLfMap = () => {
    const container = document.getElementById("lfMap");

    const options = {
      center: new kakao.maps.LatLng(37.47480035977688, 127.125981895243),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(
      37.47480035977688,
      127.125981895243
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  };

  return (
    <main>
      <div className="map-img">
        <h2>오시는 길</h2>
      </div>

      <section className="map-container">
        <div className="location">
          <h3>본사</h3>
          <div id="companyMap" className="map"></div>
          <span>서울특별시 송파구 위례성대로 12길 15-1</span>
        </div>

        <div className="location">
          <h3>TS</h3>
          <div id="tsMap" className="map"></div>
          <span>경기도 수원시 권선구 오목천로 132번길 55, 한솔냉장 3F, B1</span>
        </div>
        <div className="location">
          <h3>LF</h3>
          <div id="lfMap" className="map"></div>
          <span>서울특별시 송파구 송파대로55 복합물류단지 F동 309호</span>
        </div>
      </section>
    </main>
  );
};

export default Map;
