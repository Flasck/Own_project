import "./index.css";
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@store/store.js"
import { Preloader } from "@components/Preloader/Preloader";


const root = ReactDOM.createRoot(document.getElementById("root"));

const Application = React.lazy(() => import("./App"))

// Enable dark theme
const darkTheme = localStorage.getItem("darkTheme");
if (darkTheme == "true" || darkTheme == null && window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)
    document.body.classList.add("darkTheme");

root.render(
	<Suspense fallback={<Preloader />}>
		<Provider store={store}>
			<Application />
		</Provider>
	</Suspense>
);
