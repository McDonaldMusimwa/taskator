import React from "react";
import Card from "../Analytics/CardStyles/Card";
import styles from "./Teams.module.scss";
import Top from "../Main/Head/Top";
import Head from "../Main/Calender/Head";

const Teams = () => {
  const teamMembers = [
    { name: "Yolanda", rel: "sister", key: "Yo" },
    { name: "Nokubonga", rel: "wife", key: "No" },
    { name: "Sango", rel: "bro", key: "Sa" },
    { name: "Munashe", rel: "son", key: "Mu" },
  ];
  return (
    <div className={styles.Main}>
      <Head />
      <Top />
      <div className={styles.Container}>
        {teamMembers.map((member) => {
          return (
            <Card key={member.key}>
              {member.name}
              <p>Relationship: {member.rel}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
