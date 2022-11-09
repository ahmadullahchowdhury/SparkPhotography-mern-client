import React from 'react';
import useTitle from '../Hooks/hooks';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


const Blog = () => {
    useTitle('Blog')
    return (
        <div className='w-2/3 mx-auto'>
            <h1>This is blog page</h1>
            <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Difference between SQL and NoSQL
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    The main difference between SQL and NoSQL is that SQL is relational  database but NoSQL is no relational. There are other difference also like SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL must have predefined schema but  NoSQL on the other hand have dynamic schema. Example of SQL is Orcale, MySQL and NoSQL : monogodb, cassendra etc
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is JWT, and how does it work?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    JSON Web Token (JWT) is a standard way to securely transmitting information between two parties as JSON object.It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature. These three parts are separated by dots(.).Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret key.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How does NodeJS handle multiple requests at the same time?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    We all know that javascript is single threaded language so how it can handle multiple request? The answer is event loop and asynchronous way of working. Node JS  don’t stay wait others when executing a time consuming task . Rather it will jump to other request and when it finishes the task and  returns the result from the Callback queue.  
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is the difference between javascript and NodeJS?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    The simple difference between JavaScript and Node Js is JavaScript is scripting language which only works in the browser with HTML but Node is runtime environment based for JavaScript to Run JavaScript outside the browser. Javascript is used in frontend development. Nodejs is used in server-side development. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
    );
};

export default Blog;