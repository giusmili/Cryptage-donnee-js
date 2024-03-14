export const togglePassword = (e) => {
  e.preventDefault();
  const passwordInput = document.getElementById("password");
  const currentType = passwordInput.getAttribute("type");
  if (currentType === "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
};

// User type in object
// Fonction pour envoyer le formulaire via la méthode GET
// Fonction pour crypter le mot de passe
const encryptPassword = (password) => {
  return CryptoJS.SHA256(password).toString(); // return la chaine de caractère crypté
};

export const User = {
  login: document.querySelectorAll("input")[0],
  pwd: document.querySelectorAll("input")[1],
  control_form() {
    if (this.login.value && this.pwd.value) {
      const encryptedPassword = encryptPassword(this.pwd.value);
      localStorage.setItem("login", this.login.value);
      localStorage.setItem("password", encryptedPassword);
      Swal.fire({
        title: "Bravo! " + this.login.value,
        text: "🚀 You clicked the button!",
        icon: "success",
      });
      console.log("connecté");
    } else {
      Swal.fire({
        icon: "error",
        title: "🔥 Erreur : mot de passe erroné",
        text: "Something went wrong!",
        footer: '<a href="index.html">Pourquoi ce problème?</a>',
      });
      console.log("error");
    }
  },
};
