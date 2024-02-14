import { Studio } from "../../devine/src";
import Card from "./Card";
import Profile from "./Profile";

const studio = new Studio({
  components: [
    {
      id: `card`,
      component: Card,
    },
    {
      id: `profile`,
      component: Profile,
    },
  ],
});

export default studio;
