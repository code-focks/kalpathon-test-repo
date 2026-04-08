export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Create LocalTix Account</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">Already have an account? <a href="/login" className="text-blue-600 font-semibold hover:underline">Sign in</a></p>
        </div>
      </div>
    </div>
  )
}
