import { Button, NavList, GridContainer } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/index.css';
import { useTranslation } from "react-i18next";

import { LANGS } from '../lib/constants';

function LangSelect() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const listItems = LANGS.map((lang) => {
    // TODO: Update hrefs after figuring out language routing situation— potentially might need equivalent of onclick instead
    return <Button onClick={() => changeLanguage(lang.code)} key={lang.code}>{lang.name}</Button>
  })

  return (
    <GridContainer containerSize="widescreen">
      <NavList items={listItems} type="primary"/>
    </GridContainer>
  );
}

export default LangSelect;
