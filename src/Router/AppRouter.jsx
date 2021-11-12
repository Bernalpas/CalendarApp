
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
} from "react-router-dom";
import CalendarScreen from '../Componentes/Calendario/CalendarScreen';
import LoginScreen from '../Componentes/Auth/LoginSreen';


const AppRouter = () => {
    return (

        <React.Fragment>
        
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/" component={CalendarScreen} /> 
                </Switch>
            </div>
        </Router> 


        {/* Funciona con la versión 6.0....... 
        <Routes>
            <div>
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route exact path="/" element={<CalendarScreen />} />  
            </div>
        </Routes>
        */}





        </React.Fragment>
    )
}

export default AppRouter;
