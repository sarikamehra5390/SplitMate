export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
        />
        <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Login
        </button>
      </form>
    </div>
  );
}
