import { atom } from 'recoil';
import { data as initData } from '../FakeData';

export const data = atom({
  key: 'data',
  default: initData,
});
