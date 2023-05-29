import styles from "./Form.module.css";
import React, { useState } from "react";
import validacion from "./validation";

export default function Form(props) {
  const { login } = props;
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleSumit = (e) => {
    e.preventDefault();
    login(userData);
  };

  const handleChange = (event) => {
    setErrors(
      validacion({ ...userData, [event.target.name]: event.target.value })
    );
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  return (
    <div className={styles.login}>
      <img src="./Hero.png" alt="" />
      <div className={styles.center}>
        <form onSubmit={handleSumit}>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={userData.email}
              name="email"
              onChange={handleChange}
            />
            {errors.e1 ? (
              <p>{errors.e1}</p>
            ) : errors.e2 ? (
              <p>{errors.e2}</p>
            ) : (
              <p>{errors.e3}</p>
            )}
          </div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={userData.password}
            name="password"
            onChange={handleChange}
          />
          {errors.p1 ? (
            <p>{errors.p1}</p>
          ) : errors.p2 ? (
            <p> {errors.p2}</p>
          ) : (
            <p>{errors.p3}</p>
          )}
          <div></div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
