import { motion } from 'framer-motion';

import * as S from './style';

const fadeIn = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

function ContactCard(props: any) {
  return (
    <>
      <motion.div
        style={{ width: `100%` }}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        variants={fadeIn}
      >
        <S.ContactCard>
          <S.TitleContainer>
            <S.Title>
              <h1>Carlos Flores</h1>
              <p>
                A Web Developer working with Javascript, React.js, and Node.js!
              </p>
              <br />
              <p>Click Email to copy</p>
            </S.Title>
          </S.TitleContainer>
          <S.ContactList>
            <S.ContactBar>
              <S.LogoContainer>
                <S.Logo src={`/icons/gmail.png`} alt={`gmail logo`}></S.Logo>
              </S.LogoContainer>
              <S.ContactLink
                onClick={() => {
                  navigator.clipboard.writeText('carlosfloresalex@gmail.com');
                }}
              >
                carlosflroesalex@gmail.com
              </S.ContactLink>
            </S.ContactBar>
            <form
              action="https://www.linkedin.com/in/carlos-flores-1795981b6/"
              target="_blank"
            >
              <S.ContactBar type="submit">
                <S.LogoContainer>
                  <S.Logo
                    src={'/icons/linkedin.png'}
                    alt={`linkedin logo`}
                  ></S.Logo>
                </S.LogoContainer>
                <S.ContactLink>carlos-flores-460</S.ContactLink>
              </S.ContactBar>
            </form>
            <form action="https://github.com/Carlos460" target="_blank">
              <S.ContactBar type="submit">
                <S.LogoContainer>
                  <S.Logo
                    style={{ filter: 'invert(1)' }}
                    src={`/icons/github.png`}
                    alt={`github logo`}
                  ></S.Logo>
                </S.LogoContainer>
                <S.ContactLink>Carlos460</S.ContactLink>
              </S.ContactBar>
            </form>
          </S.ContactList>

          {props.children}
        </S.ContactCard>
      </motion.div>
    </>
  );
}

export default ContactCard;
