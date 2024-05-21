import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  right: 0;
  display: flex;
  background: white;
  justify-content: space-between;
  padding: 12px 40px;
  box-shadow: 0px 2px 4px 0px #60617029;
`;

export const LinkContainer = styled.div`
  border: 1px solid #378760;
  padding: 8px 20px;
  border-radius: 40px;
  display: flex;
  gap: 8px;
  align-items: center;
  color: #378760;
  cursor: pointer;
`;

export const NavItems = styled.div`
  display: flex;
  gap: 20px;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  color: #090f4e;
  cursor: pointer;
`;
