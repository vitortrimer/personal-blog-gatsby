import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

export default function Avatar() {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-pic2.png"}) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  
  return (
    <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed}/>
  );
}
