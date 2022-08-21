import React from "react";

const AreaPersonal = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [text, setText] = useState({});

  return (
    <h2 className="text-center">
      <strong>Bienvenid@</strong>
      <br></br>
      <br></br>a Da Room's!
    </h2>
  );
};

export default AreaPersonal;
