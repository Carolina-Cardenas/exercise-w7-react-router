import { Route } from "react-router-dom";
import{Home}  from "../components/Home";
import{MyInfo }  from "../components/MyInfo ";
import {NotfoundPage} from "../components/foundPage"

import SongInfo from "../components/SongInfo";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    {/* Define your dynamic route here below */}
    <Route path="/song/:songTitle" element={<SongInfo />}></Route>
  </>
);

export default routes;
