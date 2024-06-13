/* Declare module syntax for correctly importing CSS modules. */
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
