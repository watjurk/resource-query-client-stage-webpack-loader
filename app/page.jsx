import example from "./example.png";

// You don't need to pass the whole ?20.scaled for this to happen. Using just '?' makes nextjs not run this import through client-phase loaders.
// You can see that this image cannot be found in the .next/static/media folder...
import exampleUserSpecifiedWidth from "./example.png?20";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
	console.log(example);
	console.log(exampleUserSpecifiedWidth);
	return (
		<>
			<img src={example} alt="img without resource query" />
			<img src={exampleUserSpecifiedWidth} alt="img WITH resource query" />
		</>
	);
}
