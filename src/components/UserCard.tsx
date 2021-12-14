import { VFC } from "react";
import { UserProfile } from "../types/UserProfile";

type Props = {
  userProfile: UserProfile;
};

const style = {
  border: "solid 1px #ccc",
  borderRadius: "8px",
  padding: "0px 16px",
  margin: "8px"
};

export const UserCard: VFC<Props> = (props) => {
  const { userProfile } = props;
  return (
    <div style={style}>
      <dl>
        <dt>NAME</dt>
        <dd>{userProfile.name}</dd>
        <dt>MAIL</dt>
        <dd>{userProfile.mail}</dd>
        <dt>ADDRESS</dt>
        <dd>userProfile.address</dd>
      </dl>
    </div>
  );
};
