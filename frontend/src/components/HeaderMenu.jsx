const HeaderMenu = () => {
  return (
    <div className="flex items-center justify-between mx-20 my-4 tracking-[2px]">
      <div>
        <h1 className="text-4xl uppercase font-display">
          Cine<span className="text-mustard">Mix•</span>
        </h1>
      </div>
      <nav className="font-body text-xs font-medium text-gray-dark">
        <ul className="flex gap-10 uppercase items-center">
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Filmes</a>
          </li>
          <li>
            <a href="">Combos</a>
          </li>
          <li>
            <a href="">Programação</a>
          </li>
          <li>
            <a className="bg-mustard p-2 pr-6 pl-6 rounded-xs" href="">
              Ingressos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
