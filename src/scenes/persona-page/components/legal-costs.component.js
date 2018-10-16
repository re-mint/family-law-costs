import React from "react";
import PropTypes from "prop-types";

import Modal from "@material-ui/core/Modal";
import {
  SectionSubheader,
  PersonaTextRegular,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper,
  ModalContentWrapper,
  OpenModalButton,
  CloseModalButton
} from "../persona-page.styles";
import { capitalize } from "src/utils";
import { InfoButtonModal } from "./info-button-modal.component";

export const LegalCosts = ({ legalFees, persona, setModal, modalIsOpen, infoSection }) => (
  <React.Fragment>
    <CostSectionWrapper>
      <CostTextContentWrapper>
        <SectionSubheader>Legal Costs</SectionSubheader>
        <PersonaTextRegular>
          {`Includes court fees, professional fees (e.g. accountants to help with financial disclosure), and lawyer fees (if ${capitalize(
            persona.name
          )} has a lawyer and is not eligible for legal aid)`}
        </PersonaTextRegular>
        <InfoButtonModal infoSection="value" setModal={setModal} />
      </CostTextContentWrapper>
      <CostDisplay>{legalFees}</CostDisplay>
    </CostSectionWrapper>
  </React.Fragment>
);

LegalCosts.propTypes = {
  persona: PropTypes.any,
  legalFees: PropTypes.string,
  hasLawyer: PropTypes.bool,
  setModal: PropTypes.func,
  modalIsOpen: PropTypes.bool
};
