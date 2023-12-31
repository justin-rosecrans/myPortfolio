'use client';

import { Accordion } from 'flowbite-react';

export default function CollapseAll() {
  return (
    <section className='bg-white'>
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className='text-white bg-blue-600 hover:bg-blue-200'>
          Project One
        </Accordion.Title>
        <Accordion.Content>
        <ul className="mb-2 text-gray-500 dark:text-gray-400">
            <li className="mb-1">
              <b>Projects Showcase:</b>
              <p className='py-2'>
                This project was a complete redesign of the Schwab Education Center. The goal was to create a more modern and responsive
                design that would work on mobile and desktop. The project was built on a legacy framework of Angular1 and was a challenge to
                make it work responsively.
              </p>
            </li>
            <li className="mb-1">
              <b>Case Studies:</b> 
              <p className='py-2'>
                The challenging part of this project was to create a carousel that would work responsively for mobile on a
                legacy framework of Angular1. Not many javascript libraries support Angular1 anymore and the ones that do
                are not very well maintained. So most of the work was done with vanilla javascript.
              </p>
              <p className='py-2'>
                The solution was to use Slick.js and create a custom directive to make it work 
                with Angular1. I then added some custom animations and transitions with CSS to make it look more appealing.
              </p>
              <p className='py-2'>
                I was the sole developer for the front end and UI of this project and worked with a team of 3 other developers who did
                the back end and API work.
              </p>
            </li>
            <li className="py-2">
              <b>Technologies Used:</b>
              <p>
                AngularJS, SASS/CSS, HTML5, JavaScript, Grunt, CSS Animation, Slick.js, and Maven
              </p>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-white bg-blue-600 hover:bg-blue-200'>
          Project Two
        </Accordion.Title>
        <Accordion.Content>
        <ul className="mb-2 text-gray-500 dark:text-gray-400">
            <li className="mb-1">
              <b>Projects Showcase:</b>
              <p className='py-2'>
                This project was to have clients upload files to the server and then have the server process the files and send them
                to a database. These include w8ben forms, w8ben-e forms, and w9 forms. The goal was to create a responsive upload form
                that would work on mobile and desktop.
              </p>
            </li>
            <li className="mb-1">
              <b>Case Studies:</b>
              <p className='py-2'>
                This was one of my favorite projects to work on as it required me to learn new coding ideas and techniques.
                The challenge was making this work with a legacy framework of Angular1.
                There is not much support for Angular1 anymore and the libraries that do support it are not very well maintained.
                So I had to create my own custom directive to make it work with Angular1.
                It utilized the HTML5 File API and FormData to upload files to the server.

                This would then go to an API server that would process the files and send them to a database. The API server was called
                by Java using the Maven framework.
              </p>
              <p className='py-2'>
                Another challenge was to think of security and how to prevent users from uploading malicious files.
                After talking with a security expert, on another team, I was able to come up with a solution to prevent 
                malicious files from being uploaded.
                The solution was to add to the custom directive to check the file type and size before uploading it to the server.
              </p>
              <p className='py-2'>
                The project took awhile, about a month, to complete as I had to think of ideas and chat with other developers across my
                team and several other teams to come up with a solution.
                Ultimately, the goal was to create a responsive upload form that would work on mobile and desktop. Which turned out to be
                very successful.
              </p>
            </li>
            <li className="mb-1">
              <b>Technologies Used:</b>
              <p>
                AngularJS, SASS/CSS, HTML5, FormatData, File API, API, JavaScript, Grunt, CSS Animation, Slick.js, and Maven
              </p>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-white bg-blue-600 hover:bg-blue-200'>
          Project Three
        </Accordion.Title>
        <Accordion.Content>
        <ul className="mb-2 text-gray-500 dark:text-gray-400">
            <li className="mb-1">
              <b>Projects Showcase:</b> Highlight your best and most diverse projects,
              including websites, web applications, and any other relevant work.
            </li>
            <li className="mb-1">
              <b>Case Studies:</b> Detailed breakdowns of your projects, showcasing
              challenges, solutions, and your role in each project.
            </li>
            <li className="mb-1">
              <b>Technologies Used:</b> Specify the technologies, languages,
              frameworks, and tools you used for each project.
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </section>
  )
}