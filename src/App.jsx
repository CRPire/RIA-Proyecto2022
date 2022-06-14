import React from "react";

import NavBar2 from "./components/NavBar2";
import Home2 from "./pages/Home2";

export const UserContext = React.createContext({show : false});


export default function App () {
  const [user, setUser] = useState(null);
    return (
<>
        <NavBar2></NavBar2>
        <Home2></Home2>
        </>
    );
};

