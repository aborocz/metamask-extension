import React from 'react';
import ScrollToBottom from '../components/confirm/scroll-to-bottom';
import { Footer } from '../components/confirm/footer';
import { Header } from '../components/confirm/header';
import { Info } from '../components/confirm/info';
///: BEGIN:ONLY_INCLUDE_IF(build-mmi)
import { MMISignatureMismatchBanner } from '../../../components/app/mmi-signature-mismatch-banner';
///: END:ONLY_INCLUDE_IF
import { Nav } from '../components/confirm/nav';
import { Title } from '../components/confirm/title';
import { Box } from '../../../components/component-library';
import { Content, Page } from '../../../components/multichain/pages/page';
import { BackgroundColor } from '../../../helpers/constants/design-system';
import setCurrentConfirmation from '../hooks/setCurrentConfirmation';
import syncConfirmPath from '../hooks/syncConfirmPath';
///: BEGIN:ONLY_INCLUDE_IF(blockaid)
import { BlockaidAlert } from '../components/confirm/blockaid-alert';
///: END:ONLY_INCLUDE_IF

const Confirm = () => {
  setCurrentConfirmation();
  syncConfirmPath();

  return (
    <Page backgroundColor={BackgroundColor.backgroundAlternative}>
      <Nav />
      <Header />
      {
        ///: BEGIN:ONLY_INCLUDE_IF(build-mmi)
        <MMISignatureMismatchBanner />
        ///: END:ONLY_INCLUDE_IF
      }
      <Content backgroundColor={BackgroundColor.backgroundAlternative}>
        {
          // todo: section below is to be removed once new alerts implementation is there
          ///: BEGIN:ONLY_INCLUDE_IF(blockaid)
          <BlockaidAlert />
          ///: END:ONLY_INCLUDE_IF
        }
        <Title />
        <ScrollToBottom>
          <Box padding={4}>
            <Info />
          </Box>
        </ScrollToBottom>
      </Content>
      <Footer />
    </Page>
  );
};

export default Confirm;
