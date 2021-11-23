import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabs.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #e6e6e6;
    padding: 8px;
    margin: 0 8px;
    user-select: none;
    cursor: pointer;
    z-index: 1;

    &:focus {
        outline: none;
    }
    &.is-selected {
        border-radius: 16px 16px 0 0;
        border-bottom: 0;
    }
`;

WrapperTabs.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    min-height: 55vh;
    padding: 16px;
    margin: -5px 8px;
    border: 1px solid #EFDE80;
    box-shadow: 0 0 1em rgba(225, 225, 100, 0.25);

    &.is-selected {
        display: block;
    }
`;

WrapperTabs.tabsRole = "TabPanel";