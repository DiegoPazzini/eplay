import { memoryUsage } from 'process'
import * as S from './styles'
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <>
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de RPG"
                to="/categories#rpg"
              >
                RPG
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de ação"
                to="/categories#action"
              >
                Ação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de esportes"
                to="/categories#sports"
              >
                Esportes
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de simulação"
                to="/categories#simulation"
              >
                Simulação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de luta"
                to="/categories#fight"
              >
                Luta
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso rápido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar a seção de promoções"
                to="/#on-sale"
              >
                Promoções
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar a seção de em breve"
                to="/#coming-soon"
              >
                Em breve
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
          <S.Links>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5551995135379&"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  color="#00cc66"
                  size={40}
                  style={{
                    marginTop: '40px',
                    marginBottom: '-60px',
                    marginRight: '20px'
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://web.facebook.com/diego.pazzini.1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  color="#3b5998"
                  size={40}
                  style={{
                    marginTop: '40px',
                    marginBottom: '-60px',
                    marginRight: '20px'
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/pazzinidiego/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  color="#e4405f"
                  size={40}
                  style={{
                    marginTop: '40px',
                    marginBottom: '-60px',
                    marginRight: '20px'
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/diego-pazzini/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  color="#0077b5"
                  size={40}
                  style={{
                    marginTop: '40px',
                    marginBottom: '-60px',
                    marginRight: '20px'
                  }}
                />
              </a>
            </li>
          </S.Links>
        </S.FooterSection>
      </div>
    </S.Container>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ color: 'gray' }}>Desenvolvido por Diego Pazzini</p>
    </div>
  </>
)

export default Footer
