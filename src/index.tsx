import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvide from "./theme/ThemeProvider";






render(
    <BrowserRouter>
        <ThemeProvide>
            <App/>
        </ThemeProvide>
    </BrowserRouter>,
    document.getElementById('root')
)