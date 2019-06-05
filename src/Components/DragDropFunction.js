import React, { Component } from 'react';
import styled from 'styled-components';
import Draggable from './Draggable';
import Droppable from './Droppable';

const Wrapper = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  padding: 8px;
  color: #555;
  background-color: white;
  border-radius:3px;
`;

const droppablestyle = {
    backgroundColor: '#555',
    width: '250px',
    height: '400px',
    margin: '32px'
};

export default class DragDropFunction extends Component{
render(){
    return(
        <Wrapper>       
       <Droppable id="dr1" style={droppablestyle}>
          <Draggable id="item1" style={{ margin: '8px' }}><Item>Tiger Nixon</Item></Draggable>
          <Draggable id="item2" style={{ margin: '8px' }}><Item>Garrett Winters</Item></Draggable>
          <Draggable id="item3" style={{ margin: '8px' }}><Item>Garrett Winters</Item></Draggable>
          <Draggable id="item4" style={{ margin: '8px' }}><Item>Ashton Cox</Item></Draggable>
          <Draggable id="item5" style={{ margin: '8px' }}><Item>Cedric Kelly</Item></Draggable>
       </Droppable>
       <Droppable id="dr2" style={droppablestyle}>
           
       </Droppable>
       </Wrapper>
    );
}
}
