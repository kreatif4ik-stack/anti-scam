export default function EmergencyButton({
  text,
  subtitle,
}: {
  text: string
  subtitle: string
  href?: string
}) {
  return (
    <div
      className="block w-full text-center bg-[#dc2626] text-white rounded-2xl p-6 animate-pulse"
      style={{ animationDuration: '2s' }}
    >
      <div className="text-lg sm:text-xl font-bold">{text}</div>
      <div className="text-sm text-white/70 mt-1 font-normal">{subtitle}</div>
    </div>
  )
}
