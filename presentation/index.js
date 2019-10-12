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
  hero: require('../assets/hero.jpg'),
  gatsby: require('../assets/gatsby-logo.jpg'),
  cutting: require('../assets/cutting.png'),
  dataAg: require('../assets/data-ag.png'),
  deploy: require('../assets/deploy.png'),
  arch: require('../assets/arch.png'),
  goodWork: require('../assets/good-work.gif'),
  notExpert: require('../assets/not-expert.png'),
  devdas: require('../assets/devdas.gif'),
  console: require('../assets/console.gif'),
  brain: require('../assets/brain.gif'),
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

const PicCredit = ({ children }) => (
  <div
    style={{
      position: 'fixed',
      bottom: 40,
      left: 0,
      width: '100%',
      fontSize: '1rem',
      textAlign: 'center',
      color: 'rgba(255,255,255,0.3)',
    }}
  >
    {children}
  </div>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide>
          <Text textFont="monospace" textColor="#444" textSize="2rem">
            aravindballa.com/devfest
          </Text>
        </Slide>
        <Slide transitionIn={['zoom']} transitionOut={['fade']} bgColor="primary">
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
        {/* Dev jokes */}
        <Slide>
          <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
            What will be the name of the movie on a sad developer?
          </Heading>
          <Appear>
            <Text margin="20px">DEVdas</Text>
          </Appear>
          <Appear>
            <Image src={images.devdas} />
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
            Where did the parallel function wash its hands?
          </Heading>
          <Appear>
            <Text margin="20px">Async</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            Why do programmers get confused between Halloween and Christmas?
          </Heading>
          <Appear>
            <Text margin="20px">Because OCT 31 = DEC 25</Text>
          </Appear>
          <Appear>
            <Image src={images.brain} />
          </Appear>
        </Slide>
        <Slide bgColor="tertiary" transitionIn={['zoom']} transitionOut={['fade']}>
          <Heading size={2} caps lineHeight={1} textColor="primary">
            Build blazing fast portfolios 🚀
          </Heading>
        </Slide>
        <Slide>
          <Text>Every developer should have one*</Text>
          <Appear>
            <Text margin="30px 0 0 0" textColor="#444" textSize="1.5rem">
              *You too! 🤷🏻‍♂️
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary" caps>
            Why don't we do it?
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem>I'm not an expert</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Image src={images.notExpert} width="600" />
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary" caps>
            Why don't we do it?
          </Heading>
          <List>
            <ListItem>I'm not an expert</ListItem>
            <Appear fid="2">
              <ListItem>Someone already wrote about it</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Why write the same thing?</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary" caps>
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
          <Appear>
            <Text margin="20px 0 0 0">(But, where?)</Text>
          </Appear>
          <Appear>
            <Text margin="20px 0 0 0">(And, how?)</Text>
          </Appear>
        </Slide>
        <Slide>
          <Image src={images.gatsby} width={500} />
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Cutting edge stack
          </Heading>
          <Text margin="20px">JAMstack</Text>
          <Image src={images.cutting} />
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Data Agnostic
          </Heading>
          <Image src={images.dataAg} />
          <Appear>
            <Text>🚀</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Easy Deployment
          </Heading>
          <Image src={images.deploy} />
        </Slide>
        <Slide bgImage={images.arch} />
        <Slide>
          <Text>Lets get into action!</Text>
          <Image src={images.goodWork} />
        </Slide>
        <Slide>
          <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
            How do you comfort a JavaScript bug?
          </Heading>
          <Appear>
            <Text margin="20px">You console it!</Text>
          </Appear>
          <Appear>
            <Image src={images.console} />
          </Appear>
          <Appear>
            <Text textSize="1rem" margin="40px 0 0 0">
              https://github.com/shrutikapoor08/devjoke
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
            Thankyou
          </Heading>
          <Text>@aravindballa 🕺🏻</Text>
        </Slide>
      </Deck>
    );
  }
}
