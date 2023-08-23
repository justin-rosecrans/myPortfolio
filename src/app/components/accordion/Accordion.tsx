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
      <Accordion.Panel>
        <Accordion.Title className='text-white bg-blue-600 hover:bg-blue-200'>
          Project Two
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