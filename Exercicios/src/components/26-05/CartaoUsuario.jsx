function CartaoUsuario () {
    const usuario = 'Amanda';
    const idade = 21;
    const descricao = 'Desenvolvedora Frontend. Formada em Tecnologia em Sistemas para Internet(2025).';
    
    return (
  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
    <img
      className="avatar"
      src="https://i.imgur.com/A3MVls6.jpeg"
      alt="Foto de perfil do usuário"
      width={200}
      height={200}
      style={{ borderRadius: '50%' }}
    />
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        borderRadius: '10px',
        width: '300px',
      }}
    >
      <h3>Nome: {usuario}</h3>
      <h3>Idade: {idade} anos</h3>
      <h3>Descrição: {descricao}</h3>
    </div>
  </div>
);

}

export default CartaoUsuario;