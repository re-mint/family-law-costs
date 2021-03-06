import React from "react";
import PropTypes from "prop-types";

import {
  SectionHeader,
  PersonaTextRegular,
  InstabilityImage
} from "../persona-page.styles";
import { colours } from "src/styles";
import { capitalize } from "src/utils";

export const ImpactOnStability = ({ persona }) => (
  <div id="impact-on-stability">
    <SectionHeader textColour={colours.black}>
      Impact on Stability
    </SectionHeader>
    <PersonaTextRegular
    >{`Legal processes affect people's health, employment, housing, and relationships,
      and can mean increased medical costs, risk of job loss or bankruptcy. Impact on Stability
      recognizes how the non-monetary impacts of the court process vary depending on someone's
      circumstances and finances.`}</PersonaTextRegular>
    <InstabilityImage imageName={capitalize(persona.name)} />
  </div>
);

ImpactOnStability.propTypes = {
  persona: PropTypes.any
};
