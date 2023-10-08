import './App.css';
import React, {useState} from "react"
import Login from "./Pages/Login";
import MyFooter from "./Components/Layout/MyFooter";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./AppRouter";
import {AppContext} from "./Context/AppContext"
import MyHeader from "./Components/Layout/MyHeader";
import {Content} from "antd/es/layout/layout";
import {Row, Col} from "antd";

function getToken() {
    return sessionStorage.getItem('MY_PROJECT_TOKEN');
}

function App() {

    const [loading, setLoading] = useState(false);

    const token = getToken();

    if (!token) {
        return <Login/>
    }

    const appData = {
        loading,
        setLoading
    }

    return (
        <>
            <div className="App">
                <BrowserRouter basename="/" children={AppRouter}>
                    <MyHeader/>
                    <Content style={{height: "90vh"}}>
                        <Row>
                            <Col span={20} offset={2} style={{marginTop: "10px"}}>
                                <AppContext.Provider value={appData}>
                                    {AppRouter}
                                </AppContext.Provider>
                            </Col>
                        </Row>
                    </Content>
                    <MyFooter/>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
