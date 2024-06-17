import React from "react";
import profileIcon from "../assets/profile.png"
export default function Message(props) {
  const data = props.created_at;
  return (
    <div>
      <div>
        <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <img src={profileIcon} style={{width:"20px", height:"20px"}}/>
            <p style={{ fontSize: "1.5rem", padding: "0px", margin: "0px", color: props.cor_profile }}>
            {props.usuario}
            </p>
        </div>
        
        <p style={{ fontWeight: "500", fontSize: "0.7rem" }}>{data}</p>
      </div>
      <div
        style={{
          borderRadius: "0.5rem",
          marginBottom: "0.1rem",
          width: "fit-content",
          maxWidth: "50%",
          wordWrap: "break-word",
        }}
      >
        {props.mensagem}
      </div>
    </div>
  );
}
