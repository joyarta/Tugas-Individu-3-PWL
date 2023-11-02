import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/themeContext";
import { SendButton } from "../components/Button";
import InputComponent from "../components/Input";
import dataDump from "../dump/data.dump";
import { useNavigate } from "react-router-dom";

const Kontak = () => {
  const { theme } = useContext(ThemeContext);
  const [date, setDate] = useState(new Date());

  const [input, setInput] = useState({
    nama: "",
    email: "",
    messages: "",
    sendAt: "",
  });

  useEffect(() => {
    setDate(new Date());
  }, []);

  useEffect(() => {
    setInput({
      nama: "",
      email: "",
      messages: "",
      sendAt: `${date.toLocaleTimeString("en-US", {
        formatMatcher: "best fit",
        hour: "2-digit",
        minute: "2-digit",
      })} | ${date.toLocaleString("id-ID", {
        dateStyle: "full",
      })}`,
    });
  }, [date]);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    try {
      dataDump.push(input);
    } catch (error) {
      console.log(error);
    } finally {
      alert("Your message has been sent");
      setInput({
        nama: "",
        email: "",
        messages: "",
        sendAt: "",
      });
      navigate("/result");
    }
  };

  return (
    <>
      <main className={theme}>
        <div className="container item-center column full-width minimal-gap flex-full">
          <h1>Contact Us</h1>
          <div className="container column half-width minimal-gap">
            <div className="container column minimal-gap full-width">
              <label> Name </label>
              <InputComponent type={"name"} placeholder={"Your Name"} onChange={handleInput} value={input?.nama} />
              <label> Email </label>
              <InputComponent type={"email"} placeholder={"Your Email"} onChange={handleInput} value={input?.email} />
            </div>
            <label> Message </label>
            <InputComponent type={"messages"} placeholder={"Your message"} onChange={handleInput} value={input?.messages} />
          </div>
          <div className="container half-width">
            <SendButton actions={handleSubmit} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Kontak;
