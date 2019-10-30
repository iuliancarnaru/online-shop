import React from "react";
import { HomePageContiner } from "./homepage.styles";
import Directory from "../../components/directory";

const HomePage = () => (
  <HomePageContiner className="homepage">
    <Directory />
  </HomePageContiner>
);

export default HomePage;
