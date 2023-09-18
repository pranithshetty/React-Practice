import { useState } from "react";

const Section = ({ title, description, setIsVisible, isVisble }) => {
	return (
		<div className="border border-black p-2 m-2">
			<h1 className="text-xl p-2 m-2">{title}</h1>
			{!isVisble ? (
				<button onClick={() => setIsVisible(true)}>Show</button>
			) : (
				<>
					<button onClick={() => setIsVisible(false)}>Hide</button>
					<p>{description}</p>
				</>
			)}
		</div>
	);
};

const InstaMart = () => {
	const [visibleSection, setVisibleSection] = useState(null);
	return (
		<div>
			<h1>INSTAMART</h1>
			<Section
				title="About"
				description="lalala lalamndnndhdkbjjbeqc noqwkjbjkwj nqwjjqnwwdcjbkjqdcjdjbdcbkjbc jbkweejbwejnwejbj"
				isVisble={visibleSection === "about"}
				setIsVisible={() =>
					visibleSection === "about"
						? setVisibleSection(null)
						: setVisibleSection("about")
				}
			/>
			<Section
				title="Career"
				description="lalala lalamndnndhdkbjjbeqc noqwkjbjkwj nqwjjqnwwdcjbkjqdcjdjbdcbkjbc jbkweejbwejnwejbj"
				isVisble={visibleSection === "career"}
				setIsVisible={() =>
					visibleSection === "career"
						? setVisibleSection(null)
						: setVisibleSection("career")
				}
			/>
			<Section
				title="Team"
				description="lalala lalamndnndhdkbjjbeqc noqwkjbjkwj nqwjjqnwwdcjbkjqdcjdjbdcbkjbc jbkweejbwejnwejbj"
				isVisble={visibleSection === "team"}
				setIsVisible={() =>
					visibleSection === "team"
						? setVisibleSection(null)
						: setVisibleSection("team")
				}
			/>
		</div>
	);
};
export default InstaMart;
