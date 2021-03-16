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
  const focusStyles = "focus:outline-none focus:ring-2 focus:ring-black"

  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className={`relative bg-yellow-400 text-black`}>
      <div className="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-black">
            <span className="lg:hidden">{textMobile ?? text}</span>
            <span className="hidden lg:inline">{text}</span>
            {action && (
              <span
                className={`block sm:ml-2 sm:inline-block rounded-md hover:bg-yellow-500 p-2 ${focusStyles}`}
              >
                {action}
              </span>
            )}
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            onClick={onDismiss}
            type="button"
            className={`flex p-2 rounded-md hover:bg-yellow-500 ${focusStyles} fill-current`}
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
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
