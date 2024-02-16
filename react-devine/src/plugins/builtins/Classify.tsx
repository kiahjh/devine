import { useState } from "react";
import { CheckIcon, CopyIcon, PlusIcon, WineIcon } from "lucide-react";
import cx from "classnames";
import type { SidebarPluginComponent } from "../Plugin";
import { SidebarPlugin } from "../Plugin";

const SidebarComponent: SidebarPluginComponent = ({ component: c }) => {
  const [classes, setClasses] = useState<
    Array<{ value: string; active: boolean }>
  >(
    [...c.element.classList]
      .filter((cl) => !cl.startsWith(`__devine`))
      .map((cl) => ({ value: cl, active: true })),
  );
  const [newClass, setNewClass] = useState(``);

  return (
    <div className="relative">
      <button
        className="absolute top-0 right-0 w-10 h-10 rounded-lg flex justify-center items-center text-zinc-500 hover:bg-zinc-800 active:bg-zinc-700 active:text-zinc-400 active:scale-90 transition-[background-color,color,transform] duration-200"
        onClick={() =>
          navigator.clipboard.writeText(
            classes
              .filter((cl) => cl.active)
              .map((cl) => cl.value)
              .join(` `),
          )
        }
      >
        <CopyIcon size={20} />
      </button>
      <h3 className="text-lg font-medium">Classes:</h3>
      <div>
        {classes.length === 0 ? (
          <div>no classes</div>
        ) : (
          <div className="flex flex-col gap-1 mt-2">
            {classes.map(({ active, value }) => (
              <div
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => {
                  setClasses(
                    classes.map((cl) =>
                      cl.value === value ? { ...cl, active: !cl.active } : cl,
                    ),
                  );
                  c.element.classList.toggle(value);
                }}
              >
                <div
                  className={cx(
                    `w-4 h-4 rounded flex justify-center items-center transition-[transform,background-color] duration-200 group-hover:scale-110`,
                    active ? `bg-blue-400` : `bg-zinc-700`,
                  )}
                >
                  <CheckIcon
                    size={10}
                    strokeWidth={5}
                    className={cx(active ? `text-white` : `text-transparent`)}
                  />
                </div>
                <span
                  className={cx(
                    `select-none`,
                    active ? `text-zinc-300` : `text-zinc-600 line-through`,
                  )}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <form
        className="flex mt-4 gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          const classesToAdd = newClass.trim().split(` `);
          c.element.classList.add(...classesToAdd);
          setClasses([
            ...classes,
            ...classesToAdd.map((cl) => ({ value: cl, active: true })),
          ]);
          setNewClass(``);
        }}
      >
        <input
          value={newClass}
          onChange={(event) => setNewClass(event.target.value)}
          className="outline-none bg-zinc-800 focus:bg-zinc-700 text-zinc-300 px-2 py-1 rounded-lg flex-grow transition-colors duration-200"
        />
        <button
          disabled={!newClass.trim()}
          type="submit"
          className={cx(
            `p-2 rounded-lg transition-[background-color,transform] duration-200`,
            newClass.trim()
              ? `cursor-pointer bg-blue-500 hover:bg-blue-400 active:bg-blue-300 active:scale-90`
              : `cursor-not-allowed bg-zinc-800`,
          )}
        >
          <PlusIcon size={20} />
        </button>
      </form>
    </div>
  );
};

const Classify = new SidebarPlugin(`Classify`, <WineIcon />, SidebarComponent);

export default Classify;
