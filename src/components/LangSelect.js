import { useLocation, useHistory } from 'react-router-dom';
import { Link, NavList, GridContainer } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/index.css';

import styles from './styles.scss';
import { LANGS } from '../lib/constants';

function LangSelect({ changeLang }) {
  let history = useHistory();
  let location = useLocation();

  const getNewUrl = (lng) => {
    const curPath = location.pathname;
    const pagePath = curPath.split('/')[2];
    console.log(`/${lng}/${pagePath}`);
    return `/${lng}/${pagePath}`;
  }

  const listItems = LANGS.map((lang) => {
    const handleClick = event => {
      changeLang(lang.code);
      history.push(getNewUrl(lang.code));
      event.preventDefault();
    }
    // TODO: Update hrefs after figuring out language routing situation— potentially might need equivalent of onclick instead
    return <Link onClick={handleClick} key={lang.code}>{lang.name}</Link>
  })

  return (
    <GridContainer containerSize="widescreen">
      <NavList items={listItems} type="primary"/>
    </GridContainer>
  );
}

export default LangSelect;
