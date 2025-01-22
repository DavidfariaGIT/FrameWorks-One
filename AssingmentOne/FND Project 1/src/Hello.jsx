

function HelloMessage() {
    return (
        <>
            <div className="container">
                <h1 id="Header"><span id="highlight">Hello Dylan,</span> This is my <span id="highlightTwo">React App</span></h1>
                <p>During my semester these are the 3 most important things that i want to learn right now</p>
            </div>
            <div className="imgContainer">
                <img id="reactLogo" src="/public/assets/REACT-ICON.png"></img>
                <img id="nodeLogo" src="/public/assets/Node.js_logo.svg.png"></img>
                <img id="reactLogo" src="/public/assets/Bootstrap_logo.svg.png"></img>
            </div>
            <div className="containerTwo">
                <h3>I want to create a blog about the stuff i learn over the course of this semester, I will use it to showcase the skills i have learned. Then turn it into a portoflio project to display when i graduate. I plan to add to this site and keep growing it into a finish project.</h3>
            </div>
            <img id="plant" src="public/assets/trees.jpg"></img>
            <button><span id="highlight">David Faria</span>, Junior Front-End Developer / Designer</button>
        </>
    );

}

export default HelloMessage;