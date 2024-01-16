import type { DocumentHead } from "@builder.io/qwik-city";

import { component$, sync$ } from "@builder.io/qwik";

export const Test = component$(() => {
  return (
    <button onKeyDown$={sync$((e: KeyboardEvent) => e.preventDefault())}>
      Click me!
    </button>
  );
});

export default component$(() => {
  return (
    <div style={{ height: "2000px" }}>
      <Test />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
