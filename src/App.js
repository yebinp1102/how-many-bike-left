import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';


function App() {
  const [data, setData] = useState([]);
  const url = 'http://spartacodingclub.shop/sparta_api/seoulbike';

  const click = () => {
    setData([]);
    axios.get(url)
      .then((response)=>{
        setData(response.data.getStationList.row);
    })
  }

  const list = data.map((list, index)=>{
    let name = list.stationName;
    let bike = list.parkingBikeTotCnt;

    if(bike <= 5){
      return (
        <li className='red' key={index}>{name} 남은 따릉이 수 : {bike}</li>
      )
    }else{
      return(
        <li key={index}>{name} 남은 따릉이 수 : {bike}</li>
      )
    }
  })

  return (
    <Container>
      <div className='info'>
        <h1>실시간 따릉이 현황 (서울시 OPEN API)</h1>
        <p>모든 위치의 따릉이 실시간 현황을 보여줍니다. <span className='small'>(단, 따릉이가 5대 미만인 경우 빨간 색으로 표시 됩니다.)</span></p>
        <p>업데이트 버튼을 누를 때마다 정보가 업데이트 됩니다!</p>
        <button onClick={click}>업데이트</button>
      </div>
      <ul>
        {data.length !==0 ? list : <p className='center'>버튼을 클릭 해주세요!</p> }
      </ul>
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 40px;

  .info{
    text-align: center;
  }
  .small{
    font-size: 14px;
    color: gray;
  }
  .red{
    color: red;
  }
  p{
    margin: 40px 0;
    font-size: 20px;
  }
  button{
    margin-bottom: 20px;
    border: none;
    background-color: lightblue;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all .2s ease-in;
  }
  button:hover{
    transform: scale(1.05);
  }
  ul{
    border-top: 1px solid lightgray;
    padding-top: 40px;
  }
  .center{
    text-align: center;
  }
  li{
    margin-bottom: 15px;
    letter-spacing: 1px;
    border-bottom: 1px solid lightgray;
    padding: 5px;
  }
  li:hover{
    background-color: gray;
    color: #fff;
  }
`;