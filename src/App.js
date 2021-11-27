import React, {useState} from "react";
import GlobalStyle from "./GlobalStyles";
import Theme from './Theme';
import Checkbox from "./components/Checkbox";
import {AiOutlineAppstoreAdd} from "react-icons/ai"
import { BiNetworkChart } from "react-icons/bi"
import{ IoMdBody } from "react-icons/io";
import styled, {css} from "styled-components";
import Item from "./components/Item";

const Container = styled.div`
  display: grid;
  grid-template-columns: 10% repeat(2, 1fr) 10%;
  grid-template-rows: auto;
`;

const MenuContiner = styled.div`
  grid-column: 2/4;
  grid-row: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  border-bottom: ${({theme}) => `${theme.colors.secondry} solid 1px`};
  padding: 0.2em 0;
`;

const base_style = css`
  margin: 0 .2em;
  color: ${({theme}) => theme.colors.secondry};
`;

const Add = styled(AiOutlineAppstoreAdd)`
  ${base_style}
`;

const Chart = styled(BiNetworkChart)`
  ${base_style}
`;

const Body = styled(IoMdBody)`
  ${base_style}
`;

const App = () => {
  const [add_state, set_add_state] = useState(false);
  const [chart_state, set_chart_state] = useState(false);
  const [body_state, set_body_state] = useState(false);
  const data_for_add = [{id:'1', value:'16'}, {id:'2', value:'33'}];
  const data_for_chart = [{id:'1', value: '88'}]
  const data_for_body = [{id:'1', value:'19'}, {id:'2', value:'92'}];
  return(
    <>
    <GlobalStyle/>
    <Theme>
      <Container>
        <MenuContiner>
          <Checkbox Icon={Add} state={add_state} set_state={set_add_state}/>
          <Checkbox Icon={Body} state={body_state} set_state={set_body_state}/>
          <Checkbox Icon={Chart} state={chart_state} set_state={set_chart_state}/>
        </MenuContiner>
        {add_state && data_for_add.map(item => <Item key={item.id} Icon={Add} text="box_corners" value={item.value}/>)}
        {chart_state && data_for_chart.map(item => <Item key={item.id} Icon={Chart} text="bounding_corners" value={item.value}/>)}
        {body_state && data_for_body.map(item => <Item key={item.id} Icon={Body} text="body_corners" value={item.value}/> )}
      </Container>
    </Theme>
    </>
  )
}

export default App;
