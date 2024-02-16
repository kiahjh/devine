import { useEffect } from "react";
import type React from "react";
import type { RegisteredComponent } from "../lib/types";
import { useGlobalState } from "../lib/hooks";
import { getElementsOfType, toComponent } from "../lib/component";

interface Props {
  componentTypes: string[];
}

const RegisterComponents: React.FC<Props> = ({ componentTypes }) => {
  const { dispatch } = useGlobalState();

  const registeredComponentsAcc: RegisteredComponent[] = [];

  useEffect(() => {
    componentTypes.forEach((type) => {
      const elementsOfType = getElementsOfType(type);
      elementsOfType.forEach((e, i) => {
        const id = `__devine_component_${type}-${i}`;
        e.classList.add(id); // a bit confusing, I know
        return registeredComponentsAcc.push(toComponent(e, type, id));
      });
    });
    dispatch({
      type: `registerComponents`,
      payload: registeredComponentsAcc,
    });
  }, [dispatch, componentTypes]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default RegisterComponents;
