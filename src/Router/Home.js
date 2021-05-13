import React from 'react';
import  p1  from './p1.png';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message:''
        }
    }

    componentDidMount() {
        const headers = { 'Content-Type': 'application/json','authorization':localStorage.token }
        fetch('https://e-learning-portal-app.herokuapp.com/home', { headers })
            .then(response => response.json())
            .then(data => this.setState({ message: data.message }));
    }
    refreshPage=()=> {
    window.location.reload(false);
}
    render() {
        return (
            <div>
                {this.state.message === 'Please Login To See This Page...!!!' ?
                    (<div><h1>{this.state.message}</h1></div>) :
                    (<div>
                        <h1>{this.state.message}</h1>
                        <div className="container bg-light">
                        <h1> MERN Stack</h1>
                        <h2 className="float-left">1. What is the MERN Stack?</h2><br /> <br /> <br />
<h5 id="home" className="float-left reat">MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
<ul>
<li className="float-left">MongoDB - document database</li><br />
<li className="float-left">Express(.js) - Node.js web framework</li><br />
<li className="float-left">React(.js) - a client-side JavaScript framework</li><br />
<li className="float-left">Node(.js) - the premier JavaScript web server.</li><br />
</ul>
</h5>
<br /> <br /> <br />
<h5 className="float-left reat">MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js frontend framework is replaced with <br />React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any frontend JavaScript framework can work.<br />
Express and Node make up the middle (application) tier. Express.js is a server-side web framework, and Node.js the popular and powerful JavaScript server platform. Regardless of which variant you choose, ME(RVA)N is the ideal approach to working with JavaScript and JSON, all the way through.</h5>
<img src={p1} alt="ReactJS" className="float-center"></img>
<h2 className="float-left">2. How does the MERN stack work?</h2><br /> <br /> <br />

<h5 id="home" className="float-left reat">The MERN architecture allows you to easily construct a 3-tier architecture (frontend, backend, database) entirely using JavaScript and JSON.</h5>      

<h2 className="float-left">3. React.js Front End?</h2><br /> <br /> <br />

<h5 id="home" className="float-left reat">  The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple Components, connect them to data on your backend server, and render them as HTML.
<br /><br />
React’s strong suit is handling stateful, data-driven interfaces with minimal code and minimal pain, and it has all the bells and whistles you’d expect from a modern web framework: great support for forms, error handling, events, lists, and more.   </h5>  
<h2 className="float-left">4.  MongoDB Database Tier</h2>
<h5 id="home" className="float-left reat">If your application stores any data (user profiles, content, comments, uploads, events, etc.), then you’re going to want a database that’s just as easy to work with as React, Express, and Node.<br /><br />

That’s where MongoDB comes in: JSON documents created in your React.js front end can be sent to the Express.js server, where they can be processed and (assuming they’re valid) stored directly in MongoDB for later retrieval. Again, if you’re building in the cloud, you’ll want to look at Atlas. If you’re looking to set up your own MERN stack, read on!  </h5>   
<br /><br />       
 <h2 className="float-left"> 5. Is MERN a full-stack solution?</h2>
<h5 className="float-left reat">Yes, MERN is a full-stack, following the traditional 3-tier architectural pattern, including the front-end display tier (React.js), application tier (Express.js and Node.js), and database tier (MongoDB).</h5>

<br /><br />

<h2 className="float-left">6. Why choose the MERN stack?</h2>
<h5 className="float-left reat">Let’s start with MongoDB, the document database at the root of the MERN stack. MongoDB was designed to store JSON data natively (it technically uses a binary version of JSON called BSON), and everything from its command line interface to its query language (MQL, or MongoDB Query Language) is built on JSON and JavaScript.
<br /><br />
MongoDB works extremely well with Node.js, and makes storing, manipulating, and representing JSON data at every tier of your application incredibly easy. For cloud-native applications, MongoDB Atlas makes it even easier, by giving you an auto-scaling MongoDB cluster on the cloud provider of your choice, as easy as a few button clicks.
<br /><br />
Express.js (running on Node.js) and React.js make the JavaScript/JSON application MERN full stack, well, full. Express.js is a server-side application framework that wraps HTTP requests and responses, and makes it easy to map URLs to server-side functions. React.js is a frontend JavaScript framework for building interactive user interfaces in HTML, and communicating with a remote server.
<br /><br />
The combination means that JSON data flows naturally from front to back, making it fast to build on and reasonably simple to debug. Plus, you only have to know one programming language, and the JSON document structure, to understand the whole system!
<br /><br />
MERN is the stack of choice for today’s web developers looking to move quickly, particularly for those with React.js experience.</h5>

<br />

<h2 className="float-left">7. MERN Use Cases</h2>
<h5 className="float-left reat">Like any web stack, you can build whatever you want in MERN - though it’s ideally suited for cases that are JSON-heavy, cloud-native, and that have dynamic web interfaces.

A few examples might be: - Workflow management - News aggregation - Todo apps and Calendars - Interactive forums / social products</h5>

                   
                       
                       
                        <button className="bg-danger" onClick={() => {
                            localStorage.removeItem('token');
                            this.refreshPage();
                        }}>Logout</button>
                        </div>
                    </div>)
                }
            </div>
        
        )
    }
}

export default Home;
