import React, {PropsWithChildren} from 'react';
import {CivilizationsItem} from '../types/Civilizations.type';

export type ItemProps = PropsWithChildren<{
   readonly civilization: CivilizationsItem
}>;
