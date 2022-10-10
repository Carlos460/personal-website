import Link from 'next/link';

import * as S from './styled';

const Navbar = () => {
  return (
    <S.Container>
      <S.Name>
        <h2>Carlos Flores</h2>
      </S.Name>
      <S.List>
        <S.Item>
          <Link href="/#contact">
            <a>Contact</a>
          </Link>
        </S.Item>
        <S.Item>
          <Link href="/resume">
            <a target={`_blank`}>Resume</a>
          </Link>
        </S.Item>
      </S.List>
    </S.Container>
  );
};

export default Navbar;
