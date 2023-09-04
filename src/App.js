import { Title } from "./components/Header"; //named imports
import Header from "./components/Header"; //default import
import Body from "./components/Body";
import Footer from "./components/Footer";

//Food App --------------------------------

const AppLayout = () => {
	return (
		<>
			<Header />
			<Body />
			<Footer />
		</>
	);
};

const App = () => {
	return <AppLayout />;
};

export default App;
