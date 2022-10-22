import { hot } from "react-hot-loader/root";
import "./main.global.css";
import React, { useEffect, useState } from "react";
import { Header } from "./shared/Header";
import { MainJoin } from "./shared/MainJoin";
import { createStore } from "redux";
import { myReducer } from "./redux/redux";
import { Provider } from "react-redux";
import { Layout } from "./shared/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Statistics } from "./shared/Statistics";
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
                  <MainJoin />
                </Layout>
              }
            />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
