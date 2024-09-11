const FormComponent1 = ({
  name,
  MobileName,
  number,
  email,
  OnChangeHandler,
  onSubmit,
  errorText,
  errorNumber,
  errorEmail,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <dl>
        <label>Mobile Name:</label>
      </dl>
      <dl>
        <input
          type="text"
          name="text"
          value={MobileName}
          onChange={OnChangeHandler}
        />
      </dl>
      <span style={{ color: "red" }}>{errorText}</span>
      <dl>
        <label>Mobile Number:</label>
      </dl>
      <dl>
        <input
          type="number"
          name="number"
          value={number}
          onChange={OnChangeHandler}
        />
      </dl>
      <span style={{ color: "red" }}>{errorNumber}</span>
      <dl>
        <label>Email</label>
      </dl>
      <dl>
        <input
          type="email"
          name="email"
          value={email}
          onChange={OnChangeHandler}
        />
      </dl>
      <span style={{ color: "red" }}>{errorEmail}</span>
      <dl>
        <input type="submit" />
      </dl>
    </form>
  );
};

export default FormComponent1;
