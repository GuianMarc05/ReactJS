export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}

/*
SHORTER VERSION *Destructuring*

export default function TabButton(children) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
*/
