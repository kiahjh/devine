import { Studio } from "../../devine/src";
import Classify from "../../devine/src/plugins/builtins/Classify";
import Card from "./Card";
import Profile from "./Profile";

const devine = new Studio({
  components: [
    {
      id: `InfoCard`,
      component: Card,
    },
    {
      id: `ProfileCard`,
      component: Profile,
    },
  ],
  // plugins: { sidebar: [Classify] },
});

export default devine;
