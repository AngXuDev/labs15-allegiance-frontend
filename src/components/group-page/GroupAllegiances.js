import React from "react";
import { Image, Popup } from "semantic-ui-react";

import styled from "styled-components";

const GroupInfo = props => {
  return (
    <Allegiances>
      <h3>Groups Allegiances</h3>
      <LogoHolder>
        {props.allegiances.map(al => (
          <div key={al.id}>
            {/* <Image src={al.image} size="mini" circular /> */}
            <Popup
              content="Allegiance"
              header={al.name}
              trigger={<Image src={al.image} size="mini" avatar />}
            />
          </div>
        ))}
      </LogoHolder>
    </Allegiances>
  );
};

const Allegiances = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    margin: 0 auto;
  }
`;
const LogoHolder = styled.div`
  display: flex;
  flexdirection: row;
  justify-content: center;
`;

export default GroupInfo;
