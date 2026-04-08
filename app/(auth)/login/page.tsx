export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Sign In to LocalTix</h1>
        <button className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold flex items-center justify-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          </svg>
          Sign in with Google
        </button>
        <div className="mt-6 text-center">
          <p className="text-gray-600">Don't have an account? <a href="/signup" className="text-blue-600 font-semibold hover:underline">Sign up</a></p>
        </div>
      </div>
    </div>
  )
}
