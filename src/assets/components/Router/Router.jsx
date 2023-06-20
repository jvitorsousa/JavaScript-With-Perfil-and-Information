import { BrowserRouter, Route, Routes} from "react-router-dom";
import DetailsPage from "../../../pages/Detailspage/detailspage";
import HomePage from "../../../pages/Homepage/homepage";
import ErrorPage from "../../../pages/ErrorPage/errorpage";

const Router = () => {

    return(

        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<HomePage/>} />
            <Route path="/details/:id" element= {<DetailsPage/>} />
            <Route path="*" element= {<ErrorPage/>} />

          </Routes>
        
        </BrowserRouter>

    )
}

export default Router