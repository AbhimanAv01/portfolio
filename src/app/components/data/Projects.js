import project1 from '../../assets/project-images/e-commerce.png'
import fingerprint from '../../assets/project-images/fingerprint.png'
import project2 from '../../assets/project-images/intership.png'
export const Projects = [
    {
        id: 1,
        name: 'E-commerce(NiTORTECH)',
        description: "The online shopping web application is developed using the MERN stack. React and Bootstrap are utilized on the frontend to create a responsive and interactive user interface. The backend is built with Node.js and Express.js, offering a solid server-side framework to manage requests and APIs. MongoDB is used as the database, providing a scalable and flexible solution for storing and retrieving product and user data. Additionally, the application includes features such as user authentication, product search and filtering, secure payment processing, and automated email notifications sent to users using Nodemailer to enhance the overall shopping experience ",
        tools: ['JavaScript', 'ReactJS', 'Bootstrap','NodeJS', 'ExpressJS', 'MongoDB', 'Node Mailer'],
        role: 'Individual project',
        code: '',
        demo: '',
        image: project1,
    },
    {
        id: 2,
        name: 'Attendance Monitoring System Using Fingerprints ',
        description: "An attendance monitoring system using fingerprints works by scanning individuals' fingerprints, matching them with pre-stored fingerprint data in a database, and recording attendance accurately. When an individual places their finger on the scanner, the system captures the fingerprint's unique patterns and compares them with the stored data. If a match is found, the system marks the individual as present; if not, attendance is not recorded. This method ensures precise tracking, eliminates the possibility of proxy attendance, and simplifies the management and reporting of attendance data. The system maintains a secure, encrypted database to protect biometric information and is commonly used in workplaces and educational institutions for its reliability and efficiency.",
        tools: ['JAVA', 'HTML', 'CSS', 'Mysql', 'arduino'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: fingerprint,
    },
    {
        id: 3,
        name: 'WEBSITE CLONE',
        description: "I recreated the ISL Official website using HTML and CSS, faithfully reproducing its design, color scheme, and layout to achieve an accurate representation of the original site. This project required meticulous attention to detail to ensure both visual fidelity and user experience closely resembled the authentic website.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Individual project',
        code: '',
        demo: '',
        image: project2,
    },
  ]