# 🧱 Components And Styling

## Components Best Practices

#### Colocate things as close as possible to where it's being used

Keep components, functions, styles, and state as close as possible to where they are used. This improves code readability and performance by reducing unnecessary re-renders.

#### Avoid large components with nested rendering functions

Instead of adding multiple rendering functions inside a component, extract UI elements into separate components.

```javascript
Bad Practice:

function Counter() {
  function renderButtons() {
    return (
      <div>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    );
  }
  return <div>{renderButtons()}</div>;
}


Good Practice:

function CounterButtons() {
  return (
    <div>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
}

function Counter() {
  return (
    <div>
      <CounterButtons />
    </div>
  );
}
```

#### Stay consistent

Keep your code style consistent. For example, if you name your components using pascal case, do it everywhere. Most of code consistency is achieved by using linters and code formatters, so make sure you have them set up in your project.

#### Limit the number of props a component is accepting as input

If your component is accepting too many props you might consider splitting it into multiple components or use the composition technique via children or slots.

#### Abstract shared components into a component library

For larger projects, it is a good idea to build abstractions around all the shared components. It makes the application more consistent and easier to maintain. Identify repetitions before creating the components to avoid wrong abstractions.

[Component Library Example Code](../src/components/ui/button/button.tsx)

It is a good idea to wrap 3rd party components as well in order to adapt them to the application's needs. It might be easier to make the underlying changes in the future without affecting the application's functionality.

#### Headless component libraries:

These component libraries come with their components unstyled. If you have a specific design system to implement, it might be easier and better solution to go with headless components that come unstyled than to adapt a fully featured component library such as Material UI to your needs. Some good options are:

- [Radix UI](https://www.radix-ui.com/)
- [Headless UI](https://headlessui.dev/)
- [react-aria](https://react-spectrum.adobe.com/react-aria/)
- [Ark UI](https://ark-ui.com/)
- [Reakit](https://reakit.io/)

## Styling Solutions

There are multiple ways to style a react application. Some good options are:

- [tailwind](https://tailwindcss.com/)
- [vanilla-extract](https://github.com/seek-oss/vanilla-extract)
- [Panda CSS](https://panda-css.com/)
- [CSS modules](https://github.com/css-modules/css-modules)
- [styled-components](https://styled-components.com/)
- [emotion](https://emotion.sh/docs/introduction)

NOTE: Keep React Server Components in mind as they require zero runtime styling solution.

With the rise of headless component libraries, there is another tier of component libraries where predefined components are provided with styling solutions included, but instead of being installed as a package, they are provided as code which can be customized and styled as needed.

- [ShadCN UI](https://ui.shadcn.com/)
- [Park UI](https://park-ui.com/)

