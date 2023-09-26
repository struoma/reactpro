function List() {
  const person = {
    name: "John",
    age: 20,
    occupation: "designer",
  };
  return (
    <>
      <h1>Welcome home {person.occupation}</h1>
    </>
  );
}

export default List;
