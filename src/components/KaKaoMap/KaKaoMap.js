import { Form, Input } from "components";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledMap = styled.div`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

const KaKaoMap = ({ $width, $height, ...restProps }) => {
  const [inputText, setInputText] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [userLat, setUserLat] = useState("");
  const [userLon, setUserLon] = useState("");
  const [map, setMap] = useState(null);

  const { kakao } = window;

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchValue(inputText);
    setInputText("");
  };

  const placesSearchCB = (data, status, pagination) => {
    if (status === kakao.maps.services.Status.OK) {
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      const bounds = new kakao.maps.LatLngBounds();
      for (let i = 0; i < data.length; i++) {
        displayMarker(data[i]);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    }
  };

  const displayMarker = (place) => {
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    // 마커를 생성하고 지도에 표시합니다
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });
    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent(
        '<div style="padding:5px;font-size:12px;">' +
          place.place_name +
          "</div>"
      );
      infowindow.open(map, marker);
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(lat, lon),
        level: 3,
      };
      const userMarkerImgUrl =
        "https://image.flaticon.com/icons/png/512/1397/1397898.png";
      const userMarkerSize = new kakao.maps.Size(32, 34);
      const userMarkerOption = { offset: new kakao.maps.Point(13, 34) };
      const userMarkerImg = new kakao.maps.MarkerImage(
        userMarkerImgUrl,
        userMarkerSize,
        userMarkerOption
      );
      const userMarkerPosition = new kakao.maps.LatLng(lat, lon);
      const marker = new kakao.maps.Marker({
        position: userMarkerPosition,
        image: userMarkerImg,
      });
      const map = new kakao.maps.Map(container, options);
      marker.setMap(map);

      setUserLat(lat);
      setUserLon(lon);
      setMap(map);
    });
  }, []);

  useEffect(() => {
    if (!searchValue) return;

    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchValue, placesSearchCB, {
      location: new kakao.maps.LatLng(userLat, userLon),
    });
  }, [searchValue]);

  return (
    <Form onSubmit={submitHandler}>
      <Input
        $display="block"
        placeholder="세차장을 검색하세요..."
        $margin="20px auto 6px auto"
        $padding="5px"
        $border="1px solid black"
        $borderRadius="5px"
        $width="92%"
        $height="30px"
        onChange={onChangeHandler}
        value={inputText}
      />
      <StyledMap id="map" $width="100%" $height="300px" {...restProps} />
    </Form>
  );
};

export default KaKaoMap;
