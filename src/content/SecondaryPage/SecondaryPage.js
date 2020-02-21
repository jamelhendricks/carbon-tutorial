import React from 'react';
import {
  Button,
  Accordion,
  AccordionItem,
  UnorderedList,
  ListItem,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from 'carbon-components-react';

const SecondaryPage = () => {
  return (
    <>
      <p id="accordion__objective">
        Jamel Hendricks -{' '}
        <span class="emphasize__text">Frontend Web Intern</span>
        <br />
        <a
          class="profile__btn"
          href="https://www.linkedin.com/in/jamel-hendricks-a08766172/"
          rel="noopener noreferrer"
          target="_blank">
          <Button size="small">LinkedIn</Button>
        </a>
        <a
          class="profile__btn"
          href="https://github.com/jamelhendricks"
          rel="noopener noreferrer"
          target="_blank">
          <Button size="small">GitHub</Button>
        </a>
        <br />
        <br />A junior computer science student looking to{' '}
        <span class="emphasize__text">grow</span> at IBM this summer.
      </p>
      <br />
      <br />
      <Accordion id="secondary-page__accordion">
        <AccordionItem
          title={<p class="accordion__item">Education</p>}
          class="accordion__item">
          <UnorderedList class="general__container">
            <ListItem class="general__header">
              Virginia Commonwealth University{' '}
              <span class="accent__text">c/o 2021</span>
            </ListItem>
            <UnorderedList nested>
              <ListItem>Bachelor of Science in Computer Science</ListItem>
              <ListItem>Concentration in Software Engineering</ListItem>
              <ListItem>GPA: 3.28</ListItem>
            </UnorderedList>
          </UnorderedList>
        </AccordionItem>

        <br />

        <AccordionItem
          title={<p class="accordion__item">Personal Projects</p>}
          class="accordion__item">
          <UnorderedList class="general__container">
            <ListItem class="project__header">
              IBM React Carbon-Component Project (2020)
            </ListItem>
            <UnorderedList nested>
              <ListItem>Web project modeling an active IBM webpage</ListItem>
              <ListItem>
                Built upon React.js and IBM Carbon Component Framework
              </ListItem>
              <ListItem>
                Styled using SCSS and IBM Carbon's custom classes
              </ListItem>
            </UnorderedList>

            <hr />

            <ListItem class="project__header">
              Lift Coffee Website Redesign (2020)
            </ListItem>
            <UnorderedList nested>
              <ListItem>
                Remade a local coffee shop's website to reflect modern design
              </ListItem>
              <ListItem>
                Drastic visual overhaul using Materialize.css and dynamically
                created/styled elements
              </ListItem>
              <ListItem>
                Designed around the experience of a consumer/customer
              </ListItem>
            </UnorderedList>
            <Button size="small">
              <a
                href="http://github.com/jamelhendricks/LiftCoffeeShop"
                rel="noopener noreferrer"
                target="_blank">
                GitHub Repo
              </a>
            </Button>

            <hr />

            <ListItem class="project__header">
              Vimeo Front End Challenge (2019)
            </ListItem>
            <UnorderedList nested>
              <ListItem>
                Modeled a responsive webpage to demonstrate frontend ability
              </ListItem>
              <ListItem>Rendered Bootstrap components using React.js</ListItem>
            </UnorderedList>

            <Button size="small">
              <a
                href="https://github.com/jamelhendricks/vimeo-frontend-challenge"
                rel="noopener noreferrer"
                target="_blank">
                GitHub Repo
              </a>
            </Button>
          </UnorderedList>
        </AccordionItem>

        <br />

        <AccordionItem
          title={<p class="accordion__item">Employment</p>}
          class="accordion__item">
          <UnorderedList class="general__container">
            <ListItem class="general__header">
              IT Technician{' '}
              <span class="accent__text">@ VCU ResNet (6/19 - Present)</span>
            </ListItem>
            <UnorderedList nested>
              <ListItem>
                Resolve and troubleshoot sfotware hardware issues for customers
              </ListItem>
              <ListItem>
                Provide support for customers with varying lvels of computer
                literacy
              </ListItem>
              <ListItem>
                Advise technical solutions to customers to prevent a recurrence
                of any issues
              </ListItem>
            </UnorderedList>
          </UnorderedList>
        </AccordionItem>

        <br />

        <AccordionItem
          title={<p class="accordion__item">Topics Studied / Skills</p>}
          class="accordion__item">
          <UnorderedList class="general__container">
            <ListItem class="general__header">Coursework</ListItem>
            <hr />
            <ListItem>
              <div>
                <button class="bx--tag bx--tag--blue">
                  <span class="bx--tag__label">
                    Object Oriented Programming
                  </span>
                </button>
                <button class="bx--tag bx--tag--blue">
                  <span class="bx--tag__label">Frontend Web Design</span>
                </button>
                <button class="bx--tag bx--tag--blue">
                  <span class="bx--tag__label">Advanced Data Structures</span>
                </button>
                <button class="bx--tag bx--tag--blue">
                  <span class="bx--tag__label">Theory of Computation</span>
                </button>
                <button class="bx--tag bx--tag--blue">
                  <span class="bx--tag__label">Computer Systems/Design</span>
                </button>
                <button class="bx--tag bx--tag--blue">
                  <span class="bx--tag__label">
                    Software Design/Specification
                  </span>
                </button>
                <button class="bx--tag bx--tag--blue">
                  <span class="bx--tag__label">UML Notation</span>
                </button>
                <button class="bx--tag bx--tag--blue">
                  <span class="bx--tag__label">Algorithm Analysis</span>
                </button>
                <button class="bx--tag bx--tag--blue">
                  <span class="bx--tag__label">Version Control</span>
                </button>
              </div>
            </ListItem>
            <ListItem class="general__header">Skills</ListItem>
            <hr />
            <div>
              <button class="bx--tag bx--tag--red">
                <span class="bx--tag--red">Java</span>
              </button>
              <button class="bx--tag bx--tag--red">
                <span class="bx--tag--red">HTML</span>
              </button>
              <button class="bx--tag bx--tag--red">
                <span class="bx--tag--red">CSS/SCSS</span>
              </button>
              <button class="bx--tag bx--tag--red">
                <span class="bx--tag--red">jQuery</span>
              </button>
              <button class="bx--tag bx--tag--red">
                <span class="bx--tag--red">JavaScript</span>
              </button>
              <button class="bx--tag bx--tag--red">
                <span class="bx--tag--red">Materialize.css</span>
              </button>
              <button class="bx--tag bx--tag--red">
                <span class="bx--tag--red">Boostrap</span>
              </button>
              <button class="bx--tag bx--tag--red">
                <span class="bx--tag--red">React.js</span>
              </button>
              <button class="bx--tag bx--tag--red">
                <span class="bx--tag--red">IBM Carbon Component</span>
              </button>
              <button class="bx--tag bx--tag--red">
                <span class="bx--tag--red">Git</span>
              </button>
              <button class="bx--tag bx--tag--red">
                <span class="bx--tag--red">VIM</span>
              </button>
              <button class="bx--tag bx--tag--red">
                <span class="bx--tag--red">Adboe Creative Suite</span>
              </button>
            </div>
          </UnorderedList>
        </AccordionItem>

        <br />

        <AccordionItem
          title={<p class="accordion__item">Activities / Extracurriculars</p>}
          class="accordion__item">
          <UnorderedList class="general__container">
            <ListItem class="general__header">
              Member of the National Society of Black Engineers (NSBE)
            </ListItem>
            <UnorderedList nested>
              <ListItem>
                Participate in community events and volunteering
              </ListItem>
              <ListItem>
                Mentor and provide insight to younger VCU engineering students
              </ListItem>
            </UnorderedList>
            <hr />
            <ListItem class="general__header">
              Assembly and maintenance of custom built desktop computers
            </ListItem>
          </UnorderedList>
        </AccordionItem>
      </Accordion>
      <br />
      <br />
      <br />
      <br />

      <div id="about__tile" class="bx--tile">
        <br />
        <span class="general__header">
          This project was created with{' '}
          <span class="accent__text">IBM Carbon Components</span>:
        </span>

        <StructuredListWrapper id="about__list">
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>Carbon Component</StructuredListCell>
              <StructuredListCell head>Usage</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>

          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell>Button</StructuredListCell>
              <StructuredListCell>
                Used to link to external page, e.g. GitHub profile and repos,
                LinkedIn Profile
              </StructuredListCell>
            </StructuredListRow>

            <StructuredListRow>
              <StructuredListCell>
                Accordion / Accordion Item
              </StructuredListCell>
              <StructuredListCell>
                Used to section off headers in for a minified resume component
              </StructuredListCell>
            </StructuredListRow>

            <StructuredListRow>
              <StructuredListCell>Structured List</StructuredListCell>
              <StructuredListCell>
                Used in this Tile component to display a large amount of
                information in a pleasant, readable fashion
              </StructuredListCell>
            </StructuredListRow>

            <StructuredListRow>
              <StructuredListCell>Tag</StructuredListCell>
              <StructuredListCell>
                Used to display keyword-like information in an attractive
                fashion
              </StructuredListCell>
            </StructuredListRow>

            <StructuredListRow>
              <StructuredListCell>Tile</StructuredListCell>
              <StructuredListCell>
                Used to section off a block of content containing other
                components
              </StructuredListCell>
            </StructuredListRow>

            <StructuredListRow>
              <StructuredListCell>Unordered List / ListItem</StructuredListCell>
              <StructuredListCell>
                Used to specify detailed and structured content in a minified
                resume component
              </StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
        </StructuredListWrapper>
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default SecondaryPage;
