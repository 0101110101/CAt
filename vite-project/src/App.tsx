import "./App.css";

const catPics: string = "https://cataas.com/cat";
const catGifs = ["https://cataas.com/cat/gif"];
import { NewWindow } from "./wWw";
import { CatPic, CatWgif } from "./cat";
import { Catgif } from "./cat";
import { Counter } from "./buttons";
import { useState } from "react";
/* @ts-ignore */
let a = CatPic.resimLinki;
/* @ts-ignore */
let b = Catgif.gifLinki;

function App() {
	// @ts-ignore

	const [picLink, setPicLink] = useState(
		"https://yesofcorsa.com/wp-content/uploads/2016/12/4K-Fire-Picture.jpg"
	);

	const [wLink, setWlink] = useState(
		"https://cataas.com/cat/says/HaLLooooooooo"
	);
	const [gifLink, setGifLink] = useState(
		"https://c.tenor.com/ABeVmJ3y2WQAAAAS/cat-dancing-meme-dancing.gif"
	);
	return (
		<>
			<div className="flex bg-black flex-col justify-end relative">
				<NewWindow />
				<p className="text-[100px] text-center text-green-500 font-mono font-bold">
					------CATastrophe-------
				</p>
			</div>

			{/* <NewWindow /> */}
			<div
				id="Kediler"
				className="h-[55vh] pt-10 flex flex-wrap flex-row flex-none justify-evenly"
			>
				<div id="kedi-resmi" className="h-[300px] w-[300px]">
					{/* @ts-ignore */}
					<CatPic resimLinki={picLink} />
				</div>
				<div
					id="kediWirting"
					className="h-[300px]  rounded-3xl bg-white w-[300px]  "
				>
					{/* @ts-ignore */}
					<CatWgif wLink={wLink} />
				</div>
				<div id="kedi-gifi" className="h-[100px]  s w-[300px] ">
					{/* @ts-ignore */}
					<Catgif gifLinki={gifLink} />
				</div>
				<div className="absolute -bottom-[10rem] right-[80vh]">
					{/* @ts-ignore */}
					<Counter
						picLinkSetter={setPicLink}
						picGifSetter={setGifLink}
						picWsetter={setWlink}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
