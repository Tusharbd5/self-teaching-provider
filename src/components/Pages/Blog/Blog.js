import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-primary fw-bolder'>Blogs</h1>
            <div>
                <div className='shadow p-4 rounded-4'>
                    <h4><span className='fw-bold'>Question: </span>What are the differences between Authentication and Authorization?</h4>
                    <p className='fs-5' style={{ textAlign: "justify" }}>
                        The key differences between authentication and authorization is authentication is the system to identify the user is logged in or not and the authorization is the system to access of the logged in user. If i tell more easily then if i am unknown for the website then i have to sign in or logged-in for visiting some secured page for authentication system. After log-in i need to access the server sites information. But it is defined that which files or data or elements should accessible for me by the authorization system.
                    </p>
                </div>
                <div className='shadow p-4 rounded-4 mt-4 mb-4'>
                    <h4><span className='fw-bold'>Question: </span> Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p className='fs-5' style={{ textAlign: "justify" }}>
                        Usually i am using firebase for authenticate my users sign-in or log-in to my website. If any user want to access some secured page of my website then for their validation i need to authenticate them for that reason i am using firebase authentication. <br /> <br />

                        There are some other options of firebase alternative authentication. But all of them firebase is the best option. The alternatives of firebase are given below-
                        <br />
                        *Back4app <br />
                        *Backendless <br />
                        *Okta <br />
                        *Pubnub <br />
                        *Kuzzle <br />
                        *Keycloak
                    </p>
                </div>
                <div className='shadow p-4 rounded-4 mt-4 mb-4'>
                    <h4><span className='fw-bold'>Question: </span> What other services does firebase provide other than authentication?</h4>
                    <p className='fs-5' style={{ textAlign: "justify" }}>
                        Firebase is the system where a lot of services are implemented. <br /> <span className='fw-bold'> Cloud Function </span>
                        Everyone needs notifications in their mobile applications in one way or another, for enhanced engagement with their users. <br />

                        <span className='fw-bold'>Google Analytics </span>
                        Yet another service that helps in growing and managing your business. It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports. <br />
                        <span className='fw-bold'>Hosting </span> Firebase also provides the hosting feature for a website. <br />
                        <span className='fw-bold'>Dynamic Links </span>
                        This service was called google URL shortener in the past, but now it is renamed as Dynamic Links. In addition to their name, a couple of new features have been added to this service by Firebase Team. <br />
                        <span className='fw-bold'>Remote Config </span>
                        The last service that we’ll go through is Remote Config. It helps in remotely changing your application UI and content, without publishing it again.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;