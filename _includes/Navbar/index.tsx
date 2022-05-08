import Link from 'next/link';

import * as S from './styled';

const Navbar = () => {
  return (
    <S.List>
      <S.Item>
        <Link href="/">
          <a>Home</a>
        </Link>
      </S.Item>
      <S.Item>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </S.Item>
      <S.Item>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </S.Item>
    </S.List>
  );
};

export default Navbar;
