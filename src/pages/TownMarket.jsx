import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext';


export default function TownMarket() {
  let kakao = window.kakao;

  const { userstate } = useContext(DataContext);

  const userAddress = userstate.user.userAddress;

  const [addressKeyword, setAddressKeyword] = useState();
  const [userLongitude, setUserLongitude] = useState();
  const [userLatitude, setUserLatitude] = useState();


  // 주소 => 좌표 변환 객체 생성 
  const getCoordinateAddr = (addr) => {
    const geocoder = new kakao.maps.services.Geocoder();
    const callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            console.log(`[주소=>좌표 변환] 경도(longitude) : ${result[0].x} | 위도(latitude) : ${result[0].y}`);
            const x = result[0].x
            const y = result[0].y
            setUserLongitude(x);
            setUserLatitude(y);
        }
    };
    geocoder.addressSearch(addr, callback);
  }


  // 좌표 => 주소 변환 객체를 생성합니다
  const getTextAddr = (lat,lng) => {
    // 진행 순서 : let geocoder > let coord > geocoder.coord2Address~ > callback
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(lat, lng);
    const callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            const arr  ={ ...result};
            const _gu = arr[0].address.region_2depth_name;
            const _dong = arr[0].address.region_3depth_name;
            console.log(`[좌표=>주소 변환] ${_gu} ${_dong}`);
            setAddressKeyword(_gu+" "+_dong);
        }
    }
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback); // >> 비동기 코드
    // >> set메소드로 addressKeyword값을 한 번 업데이트 한 후 값이 업데이트 되면 useEffect를 한 번 더 마운트 하도록 useEffect의 []에 addressKeyword를 넣어준다
}
  


  useEffect(() => {
    // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    const infowindow = new kakao.maps.InfoWindow({zIndex:1});
    
    // 주소 => 좌표 변환 메소드 사용
    getCoordinateAddr(userAddress); 

    // 좌표 => 주소 변환 메소드 사용
    getTextAddr(userLatitude,userLongitude); 

    const mapContainer = document.getElementById('mapMart'), // 지도를 표시할 div 
      mapOption = {
        center: new kakao.maps.LatLng(parseFloat(userLatitude), parseFloat(userLongitude)), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
      };  

    // 지도를 생성합니다    
    const map = new kakao.maps.Map(mapContainer, mapOption); 

    // 장소 검색 객체를 생성합니다
    const ps = new kakao.maps.services.Places(); 

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(`${addressKeyword} 시장`, placesSearchCB); 

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        for (let i=0; i<data.length; i++) {
            displayMarker(data[i]);    
        }       
      } 
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
      });
      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;width:170px">' 
          + '<p style="font-size:1rem;">'  + place.place_name + '</p>'
          + '<p style="font-size:0.6rem; padding-top:5px;">'  + place.road_address_name + '</p>'
          + '<p style="font-size:0.6rem; padding-top:5px;">'  + place.phone + '</p>'+
          '</div>'
        );
        infowindow.open(map, marker);
      });
    }
  }, [addressKeyword, userLongitude, userLatitude]);
  

  return (
    <div className='mapwrap'>
      <div id='mapMart'></div>
    </div>
  )
}
