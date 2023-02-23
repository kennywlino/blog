import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello! I'm <GradientText>Kenny</GradientText> 👋
        </>
      }
      description={
        <>
          <p>
            I'm a JavaScript developer with a passion for creating intuitive applications and tools that provide users with a memorable and positive experience. 
          </p>
          <br></br>
          <p>
             I am proficient with React, Express.js, Node.js, MongoDB, and PostgreSQL along with other popular JavaScript tools. With a background in linguistics and natural language processing, I bring analytical and communication skills that translate well into the tech space.
          </p>
        </>
      }
      avatar={
        <img
          className="h-80 w-80 rounded-full border-8"
          src="/assets/images/profile.jpeg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/kennywlino">
            <HeroSocial
              src="/assets/images/github-3.png"
              alt="Youtube icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/kennywlino/">
            <HeroSocial
              src="/assets/images/linkedin-2.png"
              alt="Linkedin icon"
            />
          </a>

        </>
      }
    />
  </Section>
);

export { Hero };
