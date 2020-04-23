import React from 'react';

import links from './content'

import * as S from './styles'

export default function MenuLinks() {
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <S.MenuLinksItem key={i}>
            <S.MenuLinksLink activeClassName="active" to={link.url}>
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        ))

        }
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  );
}
