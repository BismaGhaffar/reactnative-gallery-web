import React from 'react'

import Paragraph from '../components/Paragraph'

const About = () => (
  <div
    style={{
      marginTop: 30,
      backgroundColor: 'rgba(255, 255, 255, 0.72)',
      padding: 30,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#BBB8A9',
      borderStyle: 'solid',
      color: '#444',
      boxShadow: '1px 1px 3px grey',
      textShadow: '0.2px 0.2px lightgrey'
    }}
  >
    <Paragraph>
      <strong>Reactnative.gallery</strong> is a website where you can visualize
      apps and open source components as videos.<br />
      <br />Created by a react-native developer who realized that a way to
      visually share applications and simple mobile developments was sorely
      lacking, in particular for animations, navigation transitions, navigation
      drawers or simply smooth, fluid applications.
    </Paragraph>
    <Paragraph>
      It is impossible to show these aspects with simple screenshots. And
      installing the app just to see it is too much hassle.
    </Paragraph>
    <Paragraph>
      <b>Reactnative.gallery</b> makes it possible to not only{' '}
      <strong>visualize apps at a glance</strong> using videos, but also to
      describe the app, categorize it, do a search and above all{' '}
      <strong>share it with the rest of the community</strong>.
    </Paragraph>
    <Paragraph>
      GitHub is loaded with react-native repositories containing one or more
      animated gifs of apps or components, which are unfortunately assimilated
      to any media type.
    </Paragraph>
    <Paragraph>
      For open-source developers, you can login with GitHub and your animated
      gifs will be <strong>automatically recognized and shared</strong>, and
      then can receive feedback from the community (comments and the number of
      views and likes are displayed).
    </Paragraph>
    <Paragraph>
      For those who are searching for a particular component, you can search by
      category or popularity, or simply do a full-text search to find what you
      are looking for.
    </Paragraph>
  </div>
)

export default About
