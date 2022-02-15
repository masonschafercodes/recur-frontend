import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./util/RequireAuth";
import NewSubscription from "./pages/NewSubscription";
import Subscription from "./pages/Subscription";

import { AuthProvider } from "./context/auth";

import { AnimatePresence } from "framer-motion";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import UserSettings from "./pages/UserSettings";

function App() {
  return (
    <AuthProvider>
      <AnimatePresence>
        <Router>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/subscriptions"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/subscriptions/:subscriptionId"
              element={
                <RequireAuth>
                  <Subscription />
                </RequireAuth>
              }
            />
            <Route
              path="/subscriptions/new"
              element={
                <RequireAuth>
                  <NewSubscription />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <UserSettings />
                </RequireAuth>
              }
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;
