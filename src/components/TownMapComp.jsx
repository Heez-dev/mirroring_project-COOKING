import React, { useEffect, useState } from 'react'
import TownMapMenuBar from './TownMapMenuBar';

export default function TownMapComp() {
  const kakao = window.kakao;

  const [isActiveMart, setIsActiveMart] = useState(true);
  const [isActiveMarket, setIsActiveMarket] = useState(false);
  const [isActiveShop, setIsActiveShop] = useState(false);
  const [isActiveClass, setIsActiveClass] = useState(false);

  const onMart = () => {
    setIsActiveMart(true);
    setIsActiveMarket(false);
    setIsActiveShop(false);
    setIsActiveClass(false);
    const container = document.getElementById('mapMart');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);
  };

  const onMarket = () => {
    setIsActiveMart(false);
    setIsActiveMarket(true);
    setIsActiveShop(false);
    setIsActiveClass(false);
    const container = document.getElementById('mapMarket');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);
  };

  const onShop = () => {
    setIsActiveMart(false);
    setIsActiveMarket(false);
    setIsActiveShop(true);
    setIsActiveClass(false);
    const container = document.getElementById('mapShop');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);
  };

  const onClass = () => {
    setIsActiveMart(false);
    setIsActiveMarket(false);
    setIsActiveShop(false);
    setIsActiveClass(true);
    const container = document.getElementById('mapClass');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);
  };

  useEffect(() => {
      const container = document.getElementById('mapMart');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);
  
  }, []);

  return (
    <div className="town_map">
      <TownMapMenuBar/>
      <div id="mapMart" style={{ display: isActiveMart ? 'block' : 'none' }}></div>
      <div id="mapMarket" style={{ display: isActiveMarket ? 'block' : 'none' }}></div>
      <div id="mapShop" style={{ display: isActiveShop ? 'block' : 'none' }}></div>
      <div id="mapClass" style={{ display: isActiveClass ? 'block' : 'none' }}></div>
    </div>
  );
}