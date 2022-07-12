import "./App.css";

const catPics: string = "https://cataas.com/cat";
const catGifs = ["https://cataas.com/cat/gif"];
import { CatPic } from "./cat";
import { Catgif } from "./cat";
import { Counter } from "./buttons";
function App() {
	return (
		<>
			<p className="text-[100px] text-center text-green-500 font-mono font-bold">
				------CATastrophe-------
			</p>
			<div
				id="Kediler"
				className="grid  grid-cols-2 justify-items-center py-10
				    h-[80vh] w-full    border-black border bg-f bg-cover bg-center bg no bg-no-repeat text-cyan-300"
			>
				<div id="kedi-resmi" className="h-[300px] w-[300px]">
					{/* @ts-ignore */}
					<CatPic resimLinki="https://cataas.com/cat" />
				</div>
				<div id="kedi-gifi" className="h-[100px] w-[300px] ">
					{/* @ts-ignore */}
					<Catgif gifLinki="https://cataas.com/cat/gif" />
				</div>
				<Counter />
			</div>
		</>
	);
}

export default App;
