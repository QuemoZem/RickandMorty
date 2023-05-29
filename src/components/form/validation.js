const validacion = (data) => {
  let errors = {};
  if (!data.email.includes("@")) {
    errors.e1 = " Ingresa un Email Valido.";
  }
  if (!data.email) {
    errors.e2 = "Ingresa un Email";
  }
  if (data.email.length > 35) {
    errors.e3 = "Menos de 35 Caracteres";
  }
  if (!/.*\d+.*/.test(data.password)) {
    errors.p1 = "Ingresa al menos 1 munero";
  }
  if (data.password.length < 6 || data.password.length > 10) {
    errors.p2 = "Debe tener entre 6 y 10 digitos.";
  }
  return errors;
};

export default validacion;
