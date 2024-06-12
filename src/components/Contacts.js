import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";

function Contacts() {
  const [listContacts] = useState([
    {
      title: "Phone Number",
      value: "+84 948 162 500",
    },
    {
      title: "Email",
      value: "hathienty2000@gmail.com",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="contacts" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Contacts
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className="item" key={key}>
            <h3>{value.title}</h3>
            <div>{value.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Contacts;
