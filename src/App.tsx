import { hot } from "react-hot-loader/root";
import "./main.global.css";
import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { MainWindow } from "./components/MainWindow";
import { createStore } from "redux";
import { myReducer } from "./redux/redux";
import { Provider } from "react-redux";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StatisticsPage } from "./components/StatisticsPage";
const store = createStore(myReducer);
function AppComponent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Header />
                  <MainWindow />
                </Layout>
              }
            />
            <Route path="/statistics" element={<StatisticsPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
