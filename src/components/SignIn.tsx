import { User } from 'lucide-react'

export function SignIn() {
  return (
    <a
      href="https://github.com/login/oauth/authorize?client_id=dd78c0b2390a6be9472c"
      className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <User className="h-5 w-5 text-gray-500" />
      </div>
      <p className="max-w-[140px] text-sm leading-snug">
        <span className="underline">Create your account </span> and save your
        memories.
      </p>
    </a>
  )
}
