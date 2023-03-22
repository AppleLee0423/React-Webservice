import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q.개발자인가?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A.비전공자지만 개발자가 되고싶어 공부를 하고 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q.React를 사용할 줄 아는가?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A.이제 막 배우기 시작해서 실 적용은 못 했지만 재미를 느끼고 있습니다.
            백엔드 개발자로 준비중이지만 React와 Node.js 또한 알아두어야 할 것 같았습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q.이 프로젝트는 순수 본인의 창작물인가?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A.아닙니다. ED-Roh 라는 유튜버의 강의를 보며 따라했습니다.
            React의 환경과 기능구현의 흐름을 알고 싶었습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q.React와 기존 JSP, Thymeleaf, Mustache 등 과의 차이를 느꼈는가?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A.React의 다양한 라이브러리와 기존에 사용해보지 못 했던 차트들을 공부할 수 있어서
            너무 좋았습니다. 활용도가 매우 높은 언어 같습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;