import React from "react"

/**
 * @todo Add color support / theming
 */
export function AlertBanner({
  text,
  textMobile,
  action,
  onDismiss,
}: {
  text: React.ReactNode
  textMobile: React.ReactNode
  action: React.ReactNode
  onDismiss: () => void
}) {
  const color = "yellow"

  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className={`relative bg-${color}-400 text-black`}>
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-black">
            <span className="lg:hidden">{textMobile ?? text}</span>
            <span className="hidden lg:inline">{text}</span>
            {action && (
              <span className="block sm:ml-2 sm:inline-block">{action}</span>
            )}
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            onClick={onDismiss}
            type="button"
            className={`flex p-2 rounded-md hover:bg-${color}-500 focus:outline-none focus:ring-2 focus:ring-black fill-current`}
          >
            <span className="sr-only">Dismiss</span>
            {/* <!-- Heroicon name: outline/x --> */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}