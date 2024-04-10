import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import style from "./Faq.module.css";
import Faq from "../../../Assests/faq.png";
const Faqs = () => {
  return (
    <div className={style.faqsCon}>
      <p className={style.faqspara}>Get Your Answer</p>
      <h1 className={style.faqsHead}>Frequently Asked Questions</h1>
      <div className={style.faqsBottomCon}>
        <div className={style.faqsImgCon}>
          <div className={style.faqsImg}>
            <img src={Faq} alt="faq" />
          </div>
        </div>
        <div className={style.faqsAccCon}>
          <Accordion className={style.Accordion}>
            <AccordionSummary
              expandIcon={<AddIcon color="primary" />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={style.AccordionSum}
            >
              Why choose our medical for your family?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.Accordion}>
            <AccordionSummary
              expandIcon={<AddIcon color="primary" />}
              aria-controls="panel2-content"
              id="panel2-header"
              className={style.AccordionSum}
            >
              Why we are different from others?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.Accordion}>
            <AccordionSummary
              expandIcon={<AddIcon color="primary" />}
              aria-controls="panel3-content"
              id="panel3-header"
              className={style.AccordionSum}
            >
              Trusted & experience senior care & love
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.Accordion}>
            <AccordionSummary
              expandIcon={<AddIcon color="primary" />}
              aria-controls="panel3-content"
              id="panel3-header"
              className={style.AccordionSum}
            >
              How to get appointment for emergency cases?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
