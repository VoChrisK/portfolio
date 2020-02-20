import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="projects section">
            <h1 className="header" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000">Portfolio</h1>
            <div className="project container right" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000">
                <img className="project-image" src={require("./../../images/twelvefold-1.png")} />
                <div className="info">
                    <div className="title-and-links">
                        <div className="icons-group">
                            <a href="https://vochrisk.github.io/interactive-twelvefold-way/" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                            <a href="https://github.com/VoChrisK/interactive-twelvefold-way" target="_blank"><i className="fab fa-github"></i></a>
                        </div>
                        <h2 className="name">Interactive Twelvefold Way</h2>
                    </div>
                    <p className="description">An interactive visualization that lets users experiment and practice on the Twelvefold Way, a systematic classification of twelve formulas relating to two finite sets in Combinatorics. It leverages the ball-and-bin and stars-and-bars models to visualize how each formula function under the hood. This project was built with object-oriented principles and ease of use in mind.</p>
                    <ul className="technologies">
                        <li className="technology">JavaScript</li>
                        <li className="technology">Canvas</li>
                        <li className="technology">MathJax</li>
                    </ul>
                </div>
            </div>
            <div className="project container" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000">
                <div className="info">
                    <div className="title-and-links">
                        <h2 className="name">SWEETT</h2>
                        <div className="icons-group">
                            <a href="https://github.com/VoChrisK/sweett" target="_blank"><i className="fab fa-github"></i></a>
                            <a href="https://sweett-gs.herokuapp.com/" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <p className="description">A time tracking and goal setting app for software engineering job seekers. Users can record their time for various tasks and save them as entries in one of the three default categories (Leetcode, Cracking the Coding Interview, Languages/Technologies). Each day, the app will alert users which category needs more time invested, if any. Users can also define their own goals and categories to suit their needs.</p>
                    <ul className="technologies left">
                        <li className="technology">MongoDB</li>
                        <li className="technology">Express.js</li>
                        <li className="technology">React</li>
                        <li className="technology">Redux</li>
                        <li className="technology">Node.js</li>
                        <li className="technology">Heroku</li>
                    </ul>
                </div>
                <img className="project-image" src={require("./../../images/sweett-1.png")} />
            </div>
            <div className="project container right" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000">
                <img className="project-image" src={require("./../../images/harmony-1.png")} />
                <div className="info">
                    <div className="title-and-links">
                        <div className="icons-group">
                            <a href="https://harmony-chat.herokuapp.com/#/" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                            <a href="https://github.com/VoChrisK/Harmony" target="_blank"><i className="fab fa-github"></i></a>
                        </div>
                        <h2 className="name">Harmony</h2>
                    </div>
                    <p className="description">A text chat app that allows users to communicate with other users in real time. Based off of Discord, this app allows users to create online communities in the form of servers and invite other users to join them. Users can send messages in channels, or individual chatrooms, or with other users via direct messages.</p>
                    <ul className="technologies">
                        <li className="technology">React</li>
                        <li className="technology">Redux</li>
                        <li className="technology">Ruby on Rails</li>
                        <li className="technology">PostgreSQL</li>
                        <li className="technology">WebSockets</li>
                    </ul>
                </div>
            </div>
            <h1 className="other-projects" data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">Other Projects</h1>
            <ul className="other-projects-list">
                <li className="other-project" data-sal="fade" data-sal-easing="ease" data-sal-duration="1000">
                    <div className="title-and-links">
                        <h2 className="name">3-D Space Lander</h2>
                        <a href="https://github.com/VoChrisK/3D-Space-Lander" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                    <p className="description">A 3-D game where you control a space lander in a moon-like environment. This game incorporates collision detection, physics and particle simulations, and camera functionalities. This game was my final project for my Computer Game Design class.</p>
                    <ul className="technologies">
                        <li className="technology">C++</li>
                        <li className="technology">openFrameworks</li>
                    </ul>
                </li>
                <li className="other-project" data-sal="fade" data-sal-easing="ease" data-sal-duration="1000" data-sal-delay="100">
                    <div className="title-and-links">
                        <h2 className="name">SCKFlight</h2>
                        <a href="https://github.com/khoavo09/SCKFlight" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                    <p className="description">A window-based app, GUI app that allows users to create and manage airlines reservations. The app uses MySQL to define the schema and store airlines information. I was tasked to design the frontend portion of the app.</p>
                    <ul className="technologies">
                        <li className="technology">Java</li>
                        <li className="technology">MySQL</li>
                        <li className="technology">JDBC</li>
                    </ul>
                </li>
                <li className="other-project" data-sal="fade" data-sal-easing="ease" data-sal-duration="1000" data-sal-delay="200">
                    <div className="title-and-links">
                        <h2 className="name">Mancala Game</h2>
                        <a href="https://github.com/VoChrisK/Mancala-Game" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                    
                    <p className="description">A window-based, GUI app replicating the traditional Mancala game. This app follows the Object-oriented principles and two design patterns: MVC and Decorator pattern. I was tasked to design the model portion of the app.</p>
                    <ul className="technologies">
                        <li className="technology">Java</li>
                        <li className="technology">Swing</li>
                        <li className="technology">AWT</li>
                    </ul>
                </li>
                <li className="other-project" data-sal="fade" data-sal-easing="ease" data-sal-duration="1000" data-sal-delay="300">
                    <div className="title-and-links">
                        <h2 className="name">Maze Generator and Solver</h2>
                        <a href="https://github.com/VoChrisK/Maze-Generator-And-Solver" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                    <p className="description">A project that randomly generates any square-sized maze and solves it subsequently. The maze generator framework is modeled using the graph data structure and the maze solver is modeled using respective search algorithms (BFS and DFS).</p>
                    <ul className="technologies">
                        <li className="technology">Java</li>
                        <li className="technology">JUnit</li>
                    </ul>
                </li>
            </ul>
            
        </section>
    );
};

export default Projects;