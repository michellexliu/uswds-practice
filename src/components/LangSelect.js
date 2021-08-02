import { useLocation, useHistory } from "react-router-dom";
import { useState } from "react";
import { Button, NavDropDownButton, Menu } from "@trussworks/react-uswds";
import "@trussworks/react-uswds/lib/index.css";
import { useTranslation } from "react-i18next";

import "./styles.scss";
import { LANGS } from "../lib/constants";

function LangSelect() {
  const [isOpen, setIsOpen] = useState([false, false]);
  const { t } = useTranslation();

  const history = useHistory();
  const location = useLocation();

  const getNewUrl = (lng) => {
    const curPath = location.pathname;
    const pagePath = curPath.split("/")[2];
    return `/${lng}/${pagePath}`;
  };

  const listItems = LANGS.map((lang) => {
    const handleClick = (event) => {
      history.push(getNewUrl(lang.code));
      event.preventDefault();
    };
    // TODO: Update hrefs after figuring out language routing situation— potentially might need equivalent of onclick instead
    return (
      <Button onClick={handleClick} key={lang.code} tabIndex="0">
        {lang.name}
      </Button>
    );
  });

  return (
    <>
      <NavDropDownButton
        menuId="testDropDownOne"
        onToggle={() => {
          setIsOpen((arr) => {
            return [!arr[0], !arr[1]];
          });
        }}
        isOpen={isOpen[0]}
        label={t("language")}
        isCurrent={true}
      />
      <Menu
        key="one"
        items={listItems}
        isOpen={isOpen[0]}
        id="testDropDownOne"
      />
    </>
  );
}

export default LangSelect;
