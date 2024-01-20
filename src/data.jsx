import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs,FaBootstrap, } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Nextjs',
    icon: <TbBrandNextjs className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in leveraging the power of Next.js to build high-performance and scalable web applications. Experienced in both server-side rendering (SSR) and static site generation (SSG), optimizing page loads and improving SEO. Skilled in automatic code splitting for efficient asset delivery and utilizing hot module replacement (HMR) for a seamless development experience. ',
  },
  {
    id: nanoid(),
    title: 'Typescript',
    icon: <SiTypescript  className='h-16 w-16 text-emerald-500' />,
    text: 'Highly proficient in leveraging TypeScript to enhance the development of robust and maintainable web applications. Adept at using TypeScripts static typing features to catch errors during development, resulting in more reliable and scalable code.',
  },
  {
    id: nanoid(),
    title: 'Tailwindcss',
    icon: <SiTailwindcss  className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in utilizing Tailwind CSS to streamline and expedite the styling process in web development. Proficient in creating visually appealing user interfaces by leveraging the utility-first approach of Tailwind CSS. Experienced in harnessing the extensive set of pre-built styles and responsive design utilities provided by Tailwind to create modern and flexible layouts.',
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
    icon: <FaBootstrap  className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in utilizing Bootstrap to expedite the development of responsive and visually appealing web applications. Adept at leveraging Bootstraps extensive library of pre-built components and styles to create consistent and modern user interfaces.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <DiMongodb   className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in utilizing MongoDB for efficient and scalable database management. Proficient in both the development and administration aspects of MongoDB, ensuring optimal performance and reliability for applications.',
  },
  {
    id: nanoid(),
    title: 'Expressjs',
    icon: <SiExpress   className='h-16 w-16 text-emerald-500' />,
    text: 'using Express.js to build robust and scalable web applications. Adept at leveraging Express.js, a minimalist and flexible Node.js web application framework, to streamline server-side development.',
  },
  {
    id: nanoid(),
    title: 'Nodejs',
    icon: <FaNodeJs   className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in leveraging Node.js to build scalable and efficient server-side applications. Proficient in using JavaScript to create fast, non-blocking, and event-driven server environments.',
  },
  
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
    url: 'https://asadbek-searching-images.netlify.app/',
    github: 'https://github.com/makhmudov14/unsplash-images',
    title: ' Unspalsh images of collection',
    text: 'Explore a rich tapestry of visuals that span a diverse range of themes, moods, and subjects. From breathtaking landscapes to intimate portraits, our collection is a reflection of the worlds beauty, captured by talented photographers from around the globe.',
  },
  {
    id: nanoid(),
    img: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHViJTIwdXNlciUyMCUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    url: 'https://asadbek-github-users.netlify.app',
    github: 'github.com/makhmudov14/my-react-github.',
    title: ' Github-users',
    text: 'Effortlessly find GitHub users based on their usernames, skills, or interests. Our intuitive search functionality lets you discover profiles that align with your project needs or personal interests.',
  },
  {
    id: nanoid(),
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFwcHxlbnwwfHwwfHx8MA%3D%3D',
    url: 'https://origin-ecomerce-react.netlify.app',
    github: 'https://github.com/makhmudov14/origin-ecomerce-react',
    title: 'E-comerce App project',
    text: 'Discover the convenience of shopping at your fingertips! With we love comfy, you can explore a vast array of products from the comfort of your home, office, or anywhere you go. Whether you are a fashion enthusiast, tech guru, or home decor lover, weve got something for everyone.',
  },
];
