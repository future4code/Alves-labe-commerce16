import React from "react";
import styled from "styled-components";
import Picture from "../../img/ReverbNation.png"

const Cabecalho = styled.header`
    border:black solid 1px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    background-color:red;
`
const LeftSide = styled.div`
    display:flex;
    border:black solid 1px;
    height:10vh;
`
const Center = styled.div`
    border:black solid 1px;
`
const RightSide = styled.div`
    border:black solid 1px;
`

function Filtro() {
    return (
      <Cabecalho>
        <LeftSide>
            <img src={Picture}/>
            <p>Filtro</p>
        </LeftSide>
        <Center>
            <input/>
        </Center>
        <RightSide>
            <p>Menu</p>
        </RightSide>
      </Cabecalho>
    );
  }
  
  export default Filtro;
