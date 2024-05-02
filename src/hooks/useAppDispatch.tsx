import { useDispatch } from 'react-redux';
import type { RootDispatch } from 'store';

export const useAppDispatch = () => useDispatch<RootDispatch>();
