export default function SignUp() {
  return (
   <form className="grid gap-4">
   <div className="grid">
      <label> Register </label>
      <div className="grid gap-4 text-blue-600">
        <input
          className="m-auto p-2"
          type="text"
          placeholder="Enter your firstname"
          required
        />
        <input
          className="m-auto p-2"
          type="text"
          placeholder="Enter your lastname"
          required
        />
        <input
          className="m-auto p-2"
          type="number"
          placeholder="Enter your phone no."
          required
        />
        <input
          className="m-auto p-2"
          type="email"
          placeholder="Enter your email"
          required

        />
        <button>Submit</button>
      </div>
      </div>
    </form>
  );
}
