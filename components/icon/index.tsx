import { FunctionComponent, memo } from 'react';
import Bath from './bath';
import ChevronUp from './chevronUp';
import ChevronDown from './chevronDown';
import High from './high';
import Low from './low';
import Pool from './pool';
import Rooms from './rooms';
import User from './user';

type Props = {
  name:
    | 'Bath'
    | 'ChevronUp'
    | 'ChevronDown'
    | 'High'
    | 'Low'
    | 'Pool'
    | 'Rooms'
    | 'User';
};

type ListIcons = {
  [name: string]: FunctionComponent;
};

const Icon: FunctionComponent<Props> = ({
  name = 'Bath',
  ...rest
}): JSX.Element => {
  const icons: ListIcons = {
    Bath: Bath,
    ChevronUp: ChevronUp,
    ChevronDown: ChevronDown,
    High: High,
    Low: Low,
    Pool: Pool,
    Rooms: Rooms,
    User: User,
  };

  const CompIcon = icons[name];

  return <CompIcon {...rest} />;
};

export default memo(Icon);
