import React from "react";
import GetDate from "./Date";
import Typewriter from "typewriter-effect";

function Header() {
	return (
		<header>
			<img className="background" src="./images/HeaderBackground.png"></img>
			<div className="title">
				<GetDate />
				<h1>Hi, I'm Arik</h1>
				<hr></hr>
				<Typewriter
					options={{ cursor: "_", loop: true }}
					onInit={(typewriter) => {
						typewriter
							.typeString("Front-end Web Developer")
							.callFunction(() => {
								console.log("String typed out!");
							})
							.pauseFor(1500)
							.deleteAll()
							.typeString("Husband and father")
							.pauseFor(2000)
							.deleteAll()
							.typeString("")
							.callFunction(() => {
								console.log("All strings were deleted");
							})
							.start();
					}}
				/>
			</div>
		</header>
	);
}

export default Header;
