import React from 'react';
import styled from 'styled-components';
import Compose from './Components/buttons/Compose';
import { sidebarButtonItems} from "./data/SidebarButtonItems";

function Sidebar() {
    return (
        <Wrapper>
            <ComposeWrapper>
                <Compose/>
            </ComposeWrapper>


            <SideButtonWrapper>
                {
                    sidebarButtonItems.map(item => (
                        <SidebarButtonItem>
                            {item.icon} {item.text}
                        </SidebarButtonItem>
                    ))
                }

            </SideButtonWrapper>

            
            <MeetWrapper>

            </MeetWrapper>


            <HangoutsWrapper>

            </HangoutsWrapper>


            <BottomIconsWrapper>

            </BottomIconsWrapper>

        </Wrapper>
    )
}

export default Sidebar;

const Wrapper = styled.div`
    border-right: 1px solid lightgray;
    height: 100vh;
`

const ComposeWrapper = styled.div`
    display: grid;
    place-item: start;
    padding: 10px 20px;

`

const SideButtonWrapper = styled.div``

const SidebarButtonItem = styled.div`
    display: grid;
    
    grid-template-columns: 14% 14%;
    color: gray;
    padding: 5px 25px;
    border-radius: 0 100px 100px 0;
    cursor: pointer;
    margin-right: 8px;
    letter-spacing: 0.5px;

    

    :hover{
        background-color: #f5f7f7;
    }
`

const MeetWrapper = styled.div``

const HangoutsWrapper = styled.div``

const BottomIconsWrapper = styled.div``


