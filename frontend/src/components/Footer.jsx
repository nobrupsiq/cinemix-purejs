import React from "react";
import FooterLink from "./FooterLink";
import Socials from "./Socials";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-bg">
      <div className="container mx-auto justify-between flex items-center py-14">
        <div>
          <h1 className="text-4xl uppercase font-display text-white tracking-[2px] mb-2">
            Cine<span className="text-mu">Mix•</span>
          </h1>
          <p className="text-gr text-sm font-body text-[12px] w-60">
            Uma experiência cinematográfica única, onde cada filme é vivido de
            forma intensa e memorável.
          </p>
        </div>

        <div className="flex gap-60">
          <div>
            <span className="text-mu font-body uppercase font-bold tracking-[2px] text-[11px] mb-2 block">
              Navegação
            </span>
            <ul>
              <li>
                <FooterLink nome="Filmes em cartaz" href="" />
              </li>
              <li>
                <FooterLink nome="Em breve" href="" />
              </li>
              <li>
                <FooterLink nome="Programação" href="" />
              </li>
              <li>
                <FooterLink nome="Combos" href="" />
              </li>
            </ul>
          </div>

          <div>
            <span className="text-mu font-body uppercase font-bold tracking-[2px] text-[11px] mb-2 block">
              Clube
            </span>
            <ul>
              <li>
                <FooterLink nome="Cadastrar" href="" />
              </li>
              <li>
                <FooterLink nome="Meus pontos" href="" />
              </li>
              <li>
                <FooterLink nome="Resgatar" href="" />
              </li>
              <li>
                <FooterLink nome="Benefícios" href="" />
              </li>
            </ul>
          </div>

          <div>
            <span className="text-mu font-body uppercase font-bold tracking-[2px] text-[11px] mb-2 block">
              Suporte
            </span>
            <ul>
              <li>
                <FooterLink nome="Central de ajuda" href="" />
              </li>
              <li>
                <FooterLink nome="Termos de uso" href="" />
              </li>
              <li>
                <FooterLink nome="Privacidade" href="" />
              </li>
              <li>
                <FooterLink nome="Contato" href="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-px container mx-auto bg-gr opacity-10" />
      <div className="container mx-auto py-8 text-gr font-body text-[12px] flex items-center justify-between">
        <p>© 2026 Cinemix. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <Socials href="/">
            <FaGithub className="w-4 h-4 fill-current" />
          </Socials>

          <Socials href="/">
            <FaInstagram className="w-4 h-4 fill-current" />
          </Socials>

          <Socials href="/">
            <FaLinkedin className="w-4 h-4 fill-current" />
          </Socials>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
