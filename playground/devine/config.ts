import { Studio } from "../../react-devine";
import Classify from "../../react-devine/src/plugins/builtins/Classify";
import InfoCard from "../components/Card";
import ProfileCard from "../components/Profile";
import Testing from "./custom-plugins/Testing";

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
    sidebar: [Classify, Testing],
  },
});

export default devine;
