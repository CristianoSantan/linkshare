import { useState } from "react";
import styles from "../styles/components/form.module.css";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
  });

  // --------------------------------------- Post form user
  const sendForm = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://api-linkshare.herokuapp.com/api/users", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      }).then((dados) => {
        setFormData({
          name: "",
        });
      });
    } catch (err) {
      alert("Erro: mensagem não cadastrada, tente mais tarde!");
    }
  };

  const onChangeInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form onSubmit={sendForm} className={styles.form}>
      <input
        name="name"
        value={formData.name}
        onChange={onChangeInput}
        type="text"
      />
      <button type="submit">create</button>
    </form>
  );
}
