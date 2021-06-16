import { Link, NavList, GridContainer } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/index.css';

import { LANGS } from '../lib/constants';

const listItems = LANGS.map((lang) => {
  // TODO: Update hrefs after figuring out language routing situation— potentially might need equivalent of onclick instead
  return <Link href="" key={lang.code}>{lang.name}</Link>
})

function LangSelect() {
  return (
    <GridContainer containerSize="widescreen">
      <NavList items={listItems} type="primary"/>
    </GridContainer>
  );
}

export default LangSelect;
