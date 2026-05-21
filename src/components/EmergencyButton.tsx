import Link from 'next/link'

export default function EmergencyButton({
  text,
  subtitle,
  href,
}: {
  text: string
  subtitle: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="block w-full text-center bg-[#dc2626] hover:bg-red-700 active:bg-red-800 text-white rounded-2xl p-6 transition-colors animate-pulse"
      style={{ animationDuration: '2s' }}
    >
      <div className="text-lg sm:text-xl font-bold">{text}</div>
      <div className="text-sm text-white/70 mt-1 font-normal">{subtitle}</div>
    </Link>
  )
}
