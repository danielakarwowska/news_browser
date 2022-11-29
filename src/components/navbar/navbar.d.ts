import { SetCategory } from '../../types';
type Props = {
    totalSum: number;
    setCategory: SetCategory;
};
declare const Navbar: ({ totalSum, setCategory }: Props) => JSX.Element;
export default Navbar;
