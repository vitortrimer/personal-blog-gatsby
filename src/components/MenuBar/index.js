import React from 'react';

import { Home } from '@styled-icons/entypo/Home'
import { ArrowheadUpOutline as ArrowUp } from '@styled-icons/evaicons-outline/ArrowheadUpOutline'
import { LightBulb as Light } from '@styled-icons/entypo/LightBulb'
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'
import { GridAlt } from '@styled-icons/boxicons-regular/GridAlt'

import * as S from './styles';

export default function MenuBar() {
  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to='/' title='Ir para a página inicial'>
          <S.MenuBarItem><Home /></S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to='/search/' title='Pesquisar'>
          <S.MenuBarItem><SearchAlt /></S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
          <S.MenuBarItem title='Alterar tema'><Light /></S.MenuBarItem>
          <S.MenuBarItem title='Alterar visualização'><GridAlt /></S.MenuBarItem>
          <S.MenuBarItem title='Ir para o topo'><ArrowUp /></S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
}
