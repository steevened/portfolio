import ViewContainer from './ViewContainer';
export default function Info() {
  return (
    <ViewContainer className="px-10 py-8 flex flex-col text-slate-800 dark:text-slate-200">
      <div className="mx-auto mb-3 inline-flex p-3 rounded-full bg-gray-100 dark:bg-slate-900 shadow-lg shadow-black/20 dark:shadow-black/80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      </div>
      <p className="font-medium text-lg text-justify">
        Welcome to my site, I'm Steven Elias. A frontend web developer based in
        Ecuador. I love to create responsive and user-friendly interfaces that
        enhance the user experience. Here are some exciting project that I have
        done.
      </p>
    </ViewContainer>
  );
}
