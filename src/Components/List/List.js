import React from 'react';
import { StyledLi, LiIcon, LiContent, StyledUl } from './List.styled'
import { Caption, Copy } from '../Typography';

const ListItem = props => {
  return (
    <StyledLi>
      <LiIcon/>
      <LiContent>
      <Caption className='secondary'>{props.item.title}</Caption>
        <Copy className='secondary'>{props.item.description}</Copy>
      </LiContent>
    </StyledLi>
  );
};

const List = props => {
  return (
    <StyledUl>
      {props.listItems.map(one => {
        return <ListItem item={one} key={one.id} />;
      })}
    </StyledUl>
  );
};

export default List;

