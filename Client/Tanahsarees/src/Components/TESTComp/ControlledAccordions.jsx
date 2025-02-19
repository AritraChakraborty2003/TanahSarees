/* eslint-disable react/prop-types */

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions({ id, data, expanded, onChange }) {
  const isSmallScreen = window.innerWidth <= 600;
  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-content-${id}`}
        id={`panel-header-${id}`}
      >
        <Typography
          component="span"
          sx={{
            width: "80%",
            flexShrink: 0,
            color: "#883022",
            fontFamily: "Montserrat",
            fontSize: isSmallScreen ? "3vmin" : "1.75vmin",
          }}
        >
          {data.heading}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            color: "#883022",
            fontFamily: "Montserrat",

            fontWeight: "light",
            fontSize: isSmallScreen ? "3vmin" : "1.75vmin",
          }}
        >
          {data.details}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
