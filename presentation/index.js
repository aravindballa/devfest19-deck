// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  MarkdownSlides,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  gitBlame: require('../assets/git-blame.png'),
  goodWork: require('../assets/good-work.gif'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#639',
    quaternary: '#CECECE',
  },
  {
    primary: 'Avenir Next',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Text>Hi, I'm</Text>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Aravind Balla
          </Heading>
          <Text>👨🏻‍💻JS Engineer at Paperpile</Text>
          <Text
            textFont="monospace"
            margin="30px 0 0 0"
            textColor="#444"
            textSize="1.5rem"
          >{`{twitter|github}.com/aravindballa`}</Text>
        </Slide>
        <Slide>
          <Image src={images.gitBlame} width={500} />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Build blazing fast portfolios
          </Heading>
        </Slide>
        <Slide transition={['fade']}>
          <Text>Every developer* should have one</Text>
          <Text margin="30px 0 0 0" textColor="#444" textSize="1.5rem">
            *You too! 🤷🏻‍♂️
          </Text>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textColor="secondary" caps>
            Why don't we do it?
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem>I'm not an expert</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Someone already wrote about it</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Why write the same thing?</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textColor="secondary" caps>
            Why should you <span style={{ fontStyle: 'italic' }}>actually</span> do it?
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem>When you try explaining concepts, you learn it better.</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Document your learnings</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>
                If someone looks at your blog/portfolio, they know you are familiar with things.
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Text>Not just tech, write everything 💁🏻‍♂️</Text>
        </Slide>
      </Deck>
    );
  }
}
