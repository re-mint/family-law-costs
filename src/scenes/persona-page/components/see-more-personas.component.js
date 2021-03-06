import { NavLink } from "../../../components/site-header/site-header.styles";
import { SeeMoreButton } from "../persona-page.styles";
import React from "react";

export const SeeMorePersonas = () => (
  <NavLink to="/">
    <SeeMoreButton>See More Stories</SeeMoreButton>
  </NavLink>
);
