import styled from '@emotion/styled';
import { desktoptopUp, laptoptopUp, tabletUp } from '../breakpoints/breakpoints';

export const NavPanelMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 24px;
    position: fixed;
    z-index: 999;

    padding: 15px;
    border-bottom-right-radius: 4px;

    background-color: var(--color-white);

    ${tabletUp} {
        display: none;
    }
`

export const BtnNavPanelMenu = styled.button`
    width: 10rem;
    height: 2rem;
    border: 0;
    background-color: transparent;

    ${tabletUp, laptoptopUp, desktoptopUp} {
        display: none;
    }
`