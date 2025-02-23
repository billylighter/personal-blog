import React from "react";
import {connect, styled} from "frontity";
import Link from "../utils/link";
import Nav from "./nav";
import ThemeSwitcher from "./theme-switcher";
import {LogoName} from '../utils/icons';
import {inMobile} from '../utils/media-queries';

const Header = ({state}) => {
    const data = state.source.get(state.router.link);

    return (
        <>
            <Container>
                <Row>
                    <Nav/>
                    <Logo className="logo">
                        <Link link="/">
                            <LogoName state={state}/>
                        </Link>
                    </Logo>

                    <ThemeSwitcher/>

                </Row>
            </Container>
            {!data.isHome &&
                <ContainerMobile>
                    <Link link="/">
                        <LogoName state={state}/>
                    </Link>
                </ContainerMobile>
            }
        </>
    )
};

export default connect(Header);
const Row = styled.div`
  width: var(--container-percentage);
  max-width: var(--conatiner-wide);
  margin: 0 auto;
  align-items: center;
  display: flex;
`;
const ContainerMobile = styled.div`
  display: none;
  width: var(--container-percentage);
  max-width: var(--conatiner-wide);
  margin: 0 auto;
  --padding-top: 1;
  --padding-bottom: 0;

  ${inMobile} {
    display: block;
  }
`;
const Container = styled.header`
  background-color: var(--background-brand);
  box-shadow: var(--shadow-sm);
  transition: background-color 500ms;

  ${inMobile} {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;

    .logo {
      display: none;
    }
  }
`;

const Logo = styled.div`
  flex: 0 1 33.33%;
  text-align: center;
`