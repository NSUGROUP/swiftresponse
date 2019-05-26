import React from 'react';
import { Route} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
const App = () => <div>
<Route path="/" exact compoment={HomePage} />
<Route path="/login" exact compoment={LoginPage} />
</div>;

export default App;
