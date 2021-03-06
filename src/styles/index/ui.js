import styled from 'styled-components';

export const IndexWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 120px;
    max-width: 500px;

    @media(min-width: 650px) {
      margin-top: 140px;
    }
  }
`;

export const Headline = styled.h1`
  margin-bottom: 40px;
`;

export const Hometext = styled.p`
  font-size: 24px;
  line-height: 1.5;
`;

export const LinkSpan = styled.span`
  color: ${({ theme }) => theme.primaryColorTwo};

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

export const Container = styled.div`
  justify-items: center;
  display: grid;
  gap: 20px;

  @media (min-width: 460px) {
    grid-template-columns: auto auto;
  }
`;

export const SkillsList = styled.ul`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin: 0;

  li {
    list-style-type: none;
  }

  button {
    background: none;
    margin: 0;
    padding: 14px;
    border: 2px dashed;
    cursor: pointer;
    &:hover {
      background-color: black;
      color: white;
      border: 2px solid black;
    }
  }
`;

export const ImgWrapper = styled.div`
  max-width: 300px;
  transition: all 0.4s linear;
  margin-bottom: 40px;

  &:hover {
    opacity: 0.7;
    transform: scale(1.03);
  }

  .gatsby-image-wrapper {
    width: 200px;
  }
`;

export const PageContent = styled.section`
  margin: 80px auto 0;
  max-width: 650px;

  p {
    font-size: 18px;
    line-height: 1.5;

    @media (min-width: 600px) {
      font-size: 20px;
      line-height: 1.7;
    }
  }
`;

export const BlogHeadline = styled.h2`
  border-bottom: 6px solid ${({ theme }) => theme.primaryColorTwo};
  display: inline-block;
`;

export const Newlinks = styled.span`
  display: inline-block;
    margin-bottom: 100px;
  }
`;

export const Article = styled.article`
  color: ${({ theme }) => theme.primaryColorOne};
  display: flex;
  flex-direction: column;
  min-height: 120px;
  padding: 20px;
  transition: box-shadow 0.2s linear;
  &:hover {
    box-shadow: 2px 2px 12px #d9d9d9;
    border-radius: 10px;
  }

  h4 {
    margin-bottom: 8px;
  }
`;

export const BlogArticle = styled.article`
  color: ${({ theme }) => theme.primaryColorOne};

  p {
    margin-bottom: 10px;
  }
`;

export const Readmore = styled.span`
  color: ${({ theme }) => theme.primaryColorTwo};
  &::before {
    content: '→ ';
    color: ${({ theme }) => theme.primaryColorOne};
    margin-right: 4px;
    transition: margin linear 0.2s;
  }
  &:hover {
    color: ${({ theme }) => theme.linkHover};
    &:before {
      margin-right: 0px;
      margin-left: 4px;
    }
  }
`;

export const TILCard = styled.article`
  color: ${({ theme }) => theme.primaryColorOne};
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: box-shadow 0.2s linear;
  &:hover {
    box-shadow: 2px 2px 12px #d9d9d9;
    border-radius: 10px;
  }
`;

export const BlogLink = styled.span`
  align-self: flex-start;
  color: ${({ theme }) => theme.primaryColorTwo};
  margin-top: auto;
  &::before {
    content: '→ ';
    color: ${({ theme }) => theme.primaryColorOne};
    margin-right: 4px;
    transition: margin linear 0.2s;
  }
  &:hover {
    color: ${({ theme }) => theme.linkHover};
    &:before {
      margin-right: 0px;
      margin-left: 4px;
    }
  }
`;

export const Time = styled.time`
  font-size: 16px;
`;

export const PostOuterWrapper = styled.section`
  width: 100%;
`;

export const BlogPostWrapper = styled.section`
  margin-bottom: 60px;
`;

export const PostInnerWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px;
`;

export const PageHeader = styled.h1`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
`;

export const WaveHand = styled.span`
  display: inline-block;
  transition: transform;
  transform: rotate(-20deg);
  animation: wave 0.7s linear 1;

  @keyframes wave {
    0% {
      transform: rotate(-20deg);
    }
    25% {
      transform: rotate(60deg) scale(2);
    }
    50% {
      transform: rotate(-20deg) scale(2);
    }
    75% {
      transform: rotate(60deg) scale(2);
    }
    100% {
      transform: rotate(-20deg) scale(1);
    }
  }
`;
