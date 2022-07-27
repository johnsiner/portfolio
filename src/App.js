import './App.css';
import Header from './layout/Header';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   const projects = [
      {
         name: 'Space Tourism Webpage',
         image: 'assets/space-tourism.jpeg',
         link: 'https://jay-space-tourism.netlify.app',
      },
      {
         name: 'Rest Countries api Webpage',
         image: 'assets/rest-countries.jpeg',
         link: 'https://jay-countries-rest-api.netlify.app',
      },
      {
         name: 'Todo App',
         image: 'assets/todo-app.jpeg',
         link: 'https://jay-todo.netlify.app',
      },
      {
         name: 'Sneakers Product Page',
         image: 'assets/sneakers.jpeg',
         link: 'https://jay-sneakers.netlify.app',
      },
      {
         name: 'Amazona Ecommerce Site',
         image: 'assets/amazona.jpeg',
         link: 'https://mern-amazona-jay.herokuapp.com/',
      },
   ];

   const form = useRef();

   const sendEmail = (event) => {
      event.preventDefault();
      console.log(process.env.REACT_APP_SERVICE_ID);
      emailjs
         .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
         )
         .then(
            (result) => {
               toast('Message Sent, will get back shortly');
               event.target.reset();
            },
            (error) => {
               toast(error.text);
            }
         );
   };

   return (
      <div className="App">
         <ToastContainer position="bottom-center" limit={1} />
         <Header />
         <section className="home" id="home">
            <div className="container">
               <h1>
                  <span>Hi, I'm</span> Fabiyi Johnson
               </h1>
               <h3>Frontend Web Developer</h3>
               <div className="socials">
                  <p>Find me on</p>
                  <div>
                     <a
                        href="https://github.com/johnsiner"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <i className="fa-brands fa-github"></i>
                     </a>
                     <a
                        href="https://www.linkedin.com/in/fabiyi-johnson-720648143/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a
                        href="https://web.facebook.com/fabiyij/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <i className="fa-brands fa-facebook-square"></i>
                     </a>
                     <a
                        href="https://twitter.com/Iam_johnsin"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <i className="fa-brands fa-twitter-square"></i>
                     </a>
                  </div>
               </div>
               <div className="stack">
                  <p>Stack</p>
                  <div>
                     <div>
                        <i className="fa-brands fa-js"></i>
                        <p>Javascript</p>
                     </div>
                     <div>
                        <i className="fa-brands fa-react"></i>
                        <p>React Js</p>
                     </div>
                     <div>
                        <i className="fa-brands fa-node"></i>
                        <p>Node Js</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="portfolio" id="portfolio">
            <div className="container">
               <h1>Past Projects</h1>
               <div className="projects">
                  {projects.map((project) => (
                     <div>
                        <img
                           src={require(`./${project.image}`)}
                           alt={project.name}
                        />
                        <p>
                           {project.name}
                           <span>
                              <a
                                 href={project.link}
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 <i className="fa-solid fa-globe"></i>
                              </a>
                           </span>
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>
         <section className="contact" id="contact">
            <div className="container">
               <h1>Contact me</h1>
               <div>
                  <div className="left">
                     <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                           <input
                              className="form-control"
                              type="text"
                              placeholder="Name"
                              name="user_name"
                              required
                           />
                           <input
                              className="form-control"
                              type="email"
                              placeholder="Email"
                              name="user_email"
                              required
                           />
                        </div>
                        <div className="form-group">
                           <input
                              className="form-control"
                              type="text"
                              placeholder="Subject"
                              name="subject"
                              required
                           />
                        </div>
                        <div className="form-group">
                           <textarea
                              className="form-control"
                              rows="11"
                              name="message"
                              required
                           ></textarea>
                        </div>
                        <button>Send message</button>
                     </form>
                  </div>
                  <div className="right"></div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default App;
