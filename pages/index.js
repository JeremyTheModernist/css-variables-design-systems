import Head from 'next/head';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Button from '../components/Button';
import Flex from '../components/Flex';
import { useEffect } from 'react';

export default function Home() {
  // useEffect(() => {
  //   document.body.classList.add('dark');
  // })
  return (
    <>
      <main>
        <h1>CSS Variables Rock!</h1>
        <Grid>
          <Card>
            <p>
              Each color portrays a different feeling or emotion, and
              by understanding the{' '}
              <a href="google.com">psychology of color</a>, you can
              choose a color that will resonate with your target
              audience and give off the vibe & emotion you want.
            </p>
            <Button>Visit Article</Button>
          </Card>
          <Card>
            <p>
              Each color portrays a different feeling or emotion, and
              by understanding the psychology of color, you can choose
              a color that will resonate with your target audience and
              give off the vibe & emotion you want.
            </p>
            <Button disabled>Visit Article</Button>
          </Card>
        </Grid>
        <h3>Currently Trending</h3>
        <Grid cols={3}>
          <Card>
            <p>
              Each color portrays a different feeling or emotion, and
              by understanding the psychology of color, you can choose
              a color that will resonate with your target audience and
              give off the vibe & emotion you want.
            </p>
            <Button>Visit Article</Button>
          </Card>
          <Card>
            <p>
              Each color portrays a different feeling or emotion, and
              by understanding the psychology of color, you can choose
              a color that will resonate with your target audience and
              give off the vibe & emotion you want.
            </p>
            <Button disabled>Visit Article</Button>
          </Card>
          <Card>
            <p>
              Each color portrays a different feeling or emotion, and
              by understanding the psychology of color, you can choose
              a color that will resonate with your target audience and
              give off the vibe & emotion you want.
            </p>
            <Button>Visit Article</Button>
          </Card>
        </Grid>
        <hr />
        <Grid >
          <div style={{marginTop: "var(--space-md)"}}>
            <img src="https://www.jeremysbarnes.com/static/908fc0cc1894ce6292003e8dd29e83e8/47311/03_profile.jpg"></img>
            <span className="text-preset-6">Text Preset 6</span>
          </div>

          <div>
            <h3>Who's behind CSS Variables Rock?</h3>
            <p>
              Hi, I’m Jeremy. I’m a product designer, code tinkerer,
              and creative experimenter living the PNW life in
              Seattle. Currently, I'm leading design systems at
              Splunk. Before that, I lead design over at{' '}
              <a href="https://www.gatsbyjs.com/">Gatsby JS</a>, a web
              framework for building blazing fast sites (and much
              more). Before Gatsby, I worked on{' '}
              <a href="https://www.microsoft.com/design/fluent/#/">
                large-scale design systems
              </a>
              , enterprise and data analytics software, and voice
              assistants at Microsoft.
            </p>
          </div>
        </Grid>
        <hr />
        <blockquote>
        At the heart of it, I love to <a href="https://www.jeremysbarnes.com/about">create and bring visions to life</a>, overseeing and enhancing the end to end process of design to development
        </blockquote>
        <hr />
        <h3>Your Info</h3>
        <Flex flexFlow="column">
          <div>
            <label htmlFor="firstname">firstname</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Firstname"
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
            />
          </div>
          <div>
            <label for="books">Choose a Book: </label>
            <select name="books" id="books">
              <option value="design systems">design systems</option>
              <option value="typographie">typographie</option>
            </select>
          </div>
          <div>
            <Button type="submit">Submit</Button>
            <Button className="cancel" type="submit">
              Cancel
            </Button>
          </div>
        </Flex>
        <hr/>
        <h3>Tips and Tricks</h3>
        <div className="grid">
          <Card>
            <p>
              Each color portrays a different feeling or emotion, and
              by understanding the{' '}
              <a href="google.com">psychology of color</a>, you can
              choose a color that will resonate with your target
              audience and give off the vibe & emotion you want.
            </p>
            <Button>Visit Article</Button>
          </Card>
          <Card>
            <p>
              Each color portrays a different feeling or emotion, and
              by understanding the psychology of color, you can choose
              a color that will resonate with your target audience and
              give off the vibe & emotion you want.
            </p>
            <Button>Visit Article</Button>
          </Card>
        </div>
      </main>
    </>
  );
}
