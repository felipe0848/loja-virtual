"use client";

import styled from "styled-components";

export const PageWrapper = styled.main`
    min-height: calc(100vh - 100px);
    padding: 24px 48px;
    background-color: var(--bg-primary);

    @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
        padding: 34px 160px;
    }
`;
