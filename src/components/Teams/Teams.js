import React from "react";
import Card from "../Analytics/CardStyles/Card";
import "./Teams.scss";
import Top from "../Main/Head/Top";
import Head from "../Main/Calender/Head";

const Teams = () => {
  const teamMembers = [
    { name: "Yolanda", rel: "sister", key: "Yo" },
    { name: "Nokubgoga", rel: "wife", key: "No" },
    { name: "Sango", rel: "bro", key: "sA" },
  ];
  return (
    <div>
        <Head />
        <Top />
      {teamMembers.map((member) => {
        return (
          <Card key={member.key}>
            {member.name}
            <p>Relationship: {member.rel}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default Teams;
