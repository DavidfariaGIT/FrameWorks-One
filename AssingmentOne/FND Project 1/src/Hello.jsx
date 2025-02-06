

function HelloMessage() {
    return (
        <>
            <div className="container">
                <h1 id="Header"><span id="highlight">Hello Dylan,</span> This is my <span id="highlightTwo">React App</span></h1>
                <p>During my semester these are the 3 most important things that i want to learn right now</p>
            </div>
            <div className="imgContainer">
                <img id="reactLogo" src="/assets/REACT-ICON.png"></img>
                <img id="nodeLogo" src="/assets/Node.js_logo.svg.png"></img>
                <img id="reactLogo" src="/assets/Bootstrap_logo.svg.png"></img>
            </div>
            <div className="containerTwo">
                <h3>I want to create a blog about the stuff i learn over the course of this semester, I will use it to showcase the skills i have learned. Then turn it into a portoflio project to display when i graduate. I plan to add to this site and keep growing it into a finished project.</h3>
            </div>
            <div id="profileContainer">
                <img id="profileImg" src="/assets/GTv8b8IW0AAj9G9.jpeg" alt="Katherine Johnson" />
                <p>I code using a Macbook Pro that i bought last year. I have used both Mac and Windows and i just prefer the ui and design of the mac. Also something that is very important to me coming from a design background is the qaulity of things. This to me is something that apple really understands with the qaulity of its products. I used to own Dell products and i had issues with them in the past. I also have built many PC's on my own before and loved them but the lack of mobility to me is something i value as i love to work on the move.</p>
            </div>
            <button onClick={() => alert('Hello')}>David Faria, Junior Front-End Developer / Designer</button>

            <h1 className="props">This is my Props section</h1>
            
        </>
    );

}

export default HelloMessage;