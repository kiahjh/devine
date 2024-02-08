import { Studio } from "../../devine/src";
import Card from "./Card";

const studio = new Studio({
  components: [
    {
      id: `card`,
      component: Card,
    },
  ],
});

export default studio;
