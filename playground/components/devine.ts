import { Studio } from "../../devine/src";
import Classify from "../../devine/src/plugins/builtins/Classify";
import InfoCard from "./Card";
import ProfileCard from "./Profile";

const devine = new Studio({
  components: [
    {
      id: `InfoCard`,
      component: InfoCard,
    },
    {
      id: `ProfileCard`,
      component: ProfileCard,
    },
  ],
  plugins: {
    sidebar: [Classify],
  },
});

export default devine;
