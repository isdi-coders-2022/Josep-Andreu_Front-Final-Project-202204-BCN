import { ChangeEvent, FormEvent, useState } from "react";
import RegisterFormContainer from "./RegisterFormStyle";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { registerThunk } from "../../redux/thunks/userThunks/userThunks";
import { NavLink, useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  username: string;
  password: string;
}

const RegisterForm = (): JSX.Element => {
  const blankFields = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormData>(blankFields);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(registerThunk(formData));
    setFormData(blankFields);
    navigate("/login");
  };

  return (
    <RegisterFormContainer>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={formData.username}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit" className="form-button">
          CREATE ACCOUNT
        </button>
        <NavLink to="/login">Login</NavLink>
      </form>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
