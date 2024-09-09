import { users } from "../controllers/user.controller";

export default (id: number) => {
  return users.find((user) => user.id === id);
};
