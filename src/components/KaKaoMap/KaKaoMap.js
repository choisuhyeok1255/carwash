import React, { useEffect } from "react";
import styled from "styled-components";

const StyledMap = styled.div`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

const { kakao } = window;

const KaKaoMap = ({ $width, $height, searchValue, ...restProps }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function success(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      const container = document.getElementById("map");

      const options = {
        center: new kakao.maps.LatLng(lat, lon),
        level: 3,
      };

      const map = new kakao.maps.Map(container, options);
      const ps = new kakao.maps.services.Places();

      //badRequest 때문에 input 값이 빈 값일 때 return 시킴
      if (!searchValue) return;
      ps.keywordSearch(searchValue, placesSearchCB);

      function placesSearchCB(data, status, pagination) {
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
      }

      function displayMarker(place) {
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
      }
    });
  }, [searchValue]);

  return (
    <StyledMap
      id="map"
      $width={$width}
      $height={$height}
      {...restProps}
    ></StyledMap>
  );
};

export default KaKaoMap;
