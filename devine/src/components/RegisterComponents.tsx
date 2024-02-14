import { useEffect } from "react";
import type React from "react";
import { useGlobalState } from "../lib/hooks";

interface Props {
  componentTypes: string[];
}

const RegisterComponents: React.FC<Props> = ({ componentTypes }) => {
  const { dispatch } = useGlobalState();

  const registeredComponentsAcc: Array<{
    element: Element;
    type: string;
  }> = [];

  useEffect(() => {
    componentTypes.forEach((type) => {
      const components = [
        ...document.querySelectorAll(`[devine-id='${type}']`),
      ].map((element) => ({ element, type }));
      registeredComponentsAcc.push(...components);
      dispatch({
        type: `registerComponents`,
        payload: registeredComponentsAcc,
      });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default RegisterComponents;
