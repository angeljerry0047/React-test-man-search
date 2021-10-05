import styled from 'styled-components';
import theme from '../../theme';
import { isMobile } from '../../theme/util';

export const SidebarContainer = styled.div`
    width: 12.5%;
    float: left;
    ${isMobile(`
        width: 100%;
    `)}
`;

export const SidebarWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    min-width: 125px;
    border-radius: 25px;
    background-color: ${theme.bgPrimary};
`;