import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AddLog } from "../pages/AddLog";
import { AddMed } from "../pages/AddMed";
import { AddPet } from "../pages/AddPet";
import { AddPrescription } from "../pages/AddPrescription";
import { Home } from "../Home";
import { Logs } from "../Logs";
import { Meds } from "../Meds";
import { HeaderStyled } from "./styles/HeaderStyled";
import { LogoStyled } from "./styles/LogoStyled";
import { StyledLink } from "./styles/StyledLink";
import { Wrapper } from "./styles/Wrapper";
import logo from "../logo.png";

const MedsLink = <StyledLink to="/meds">Medications</StyledLink>;
const LogsLink = <StyledLink to="#">Logs</StyledLink>;

export const Navigation = () => {
  const { pathname } = useLocation();
  const isOnLogsLink = pathname.includes("/logs");

  return (
    <>
      <HeaderStyled>
        <Link to="/">
          <LogoStyled src={logo} alt="logo" />
        </Link>

        <div>
          <StyledLink to="/">Pets</StyledLink>

          {pathname === "/" ? MedsLink : null}
          {isOnLogsLink ? LogsLink : null}
        </div>
      </HeaderStyled>

      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs/:id" element={<Logs />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/add-prescription/:id" element={<AddPrescription />} />
          <Route path="/meds" element={<Meds />} />
          <Route path="/add-med" element={<AddMed />} />
          <Route path="/add-log/:id" element={<AddLog />} />
          <Route path="*" element={<h1>Page does not exist</h1>} />
        </Routes>
      </Wrapper>
    </>
  );
};
