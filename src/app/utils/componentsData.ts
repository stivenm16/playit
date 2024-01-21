export interface ComponentsProps {
  title: string
  code: string
  description: string
}
const dataComponents: ComponentsProps[] = [
  {
    title: 'Skeleton',
    description:
      'Create a loading skeleton to give users a visual indication that content is being loaded. The Skeleton component is perfect for improving user experience during asynchronous data fetching.',
    code: ` <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
          <div className="flex items-center w-full">
            <div className="h-2.5 bg-indigo-300 rounded-full dark:bg-indigo-700 w-32"></div>
            <div className="h-2.5 ms-2 bg-indigo-400 rounded-full dark:bg-indigo-600 w-24"></div>
            <div className="h-2.5 ms-2 bg-indigo-400 rounded-full dark:bg-indigo-600 w-full"></div>
          </div>
          <div className="flex items-center w-full max-w-[480px]">
            <div className="h-2.5 bg-indigo-300 rounded-full dark:bg-indigo-700 w-full"></div>
            <div className="h-2.5 ms-2 bg-indigo-400 rounded-full dark:bg-indigo-600 w-full"></div>
            <div className="h-2.5 ms-2 bg-indigo-400 rounded-full dark:bg-indigo-600 w-24"></div>
          </div>
        </div>`,
  },
  {
    title: 'Spinner',
    description: `Add a spinning loading indicator to your application with the Spinner component. It's a simple and effective way to communicate background processes to users.`,
    code: ` <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-700"/>
</div>`,
  },
  {
    title: 'Card',
    description: `Design elegant and responsive cards for displaying various types of content. The Card component provides a structured layout with customizable sections for images, text, and actions.`,
    code: ` <div className="w-72 rounded-xl px-6 overflow-hidden shadow-xl bg-indigo-800 mx-auto">
    <div className="flex justify-center px-auto my-5">
      <CustomSVG size="50px" color="white" />
    </div>  
    
      <div className=" py-4">
        <div className="font-bold text-xl mb-2 text-white">Product</div>
        <p className="text-white text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          porro iste quibusdam distinctio laudantium velit earum sint! Nobis,
          quibusdam.
        </p>
      </div>
      <div className=" pt-4 pb-2">
        <span className="inline-block bg-white   rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Category
        </span>
        <span className="inline-block bg-white   rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #Category
        </span>
      </div>
      <div className=" py-4">
        <span className="text-lg text-white">$99.99</span>
        <button className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full inline-flex items-center ml-4 transition duration-300 ease-in-out">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16 4a2 2 0 0 0-2 2h-2a2 2 0 0 0-4 0H6a2 2 0 0 0-2-2 1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM8 14H6v-2h2v2zm0-4H6V7h2v3zm10 4h-2v-2h2v2zm0-4h-2V7h2v3z" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>`,
  },
  {
    title: 'Form',
    description: `Build stylish and accessible forms with the Form component. It includes pre-styled input fields and buttons, making it easy to create visually appealing login or registration forms.`,
    code: `
        <div className="bg-indigo-800 p-8 rounded-xl shadow-xl h-fit w-3/4 md:w-full  relative">
            <form className="space-y-4 z-10">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white font-bold mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded border"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-white font-bold mb-1">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 rounded border"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-900 hover:bg-indigo-600 text-white py-2 rounded focus:outline-none"
                >
                    Login
                </button>
                <p className="text-white text-center pt-auto">
                    <span className="text-indigo-300 cursor-pointer ml-2">
                        Sign up
                    </span>
                </p>
            </form>
        </div>
    `,
  },
  {
    title: 'Button',
    description: `Create eye-catching buttons with the Button component. It's fully customizable and comes with built-in hover effects, making it easy to enhance user interactions.`,
    code: ` <button className={'text-sm font-bold text-white flex items-center bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded transition duration-300 ease-in-out'}>
            Press me
</button>`,
  },
  {
    title: 'Header',
    description: `Design a sleek and responsive header for your website or application. The Header component includes navigation links and a logo, providing a clean and organized layout.`,
    code: `     <div className=" md:block bg-indigo-700 rounded-full text-center py-1 mx-auto my-3 w-3/4 md:w-fit px-5 shadow-xl">
      <div className="container mx-auto py-2">
        <div className="flex md:items-center md:justify-center">
          <a
          // set your href href={'/'}
          >
           <CustomSVG size="20px" color="white" />
          </a>
          <nav className="flex justify-between md:space-x-6 text-gray-300 ml-5 w-full">
            <a
              // set your href href={'/games'}
              className="text-sm font-medium hover:text-white flex items-center"
            >
              Games
            </a>
            <a
              // set your href href={'/guides/sudoku'}
              className="text-sm font-medium hover:text-white flex items-center"
            >
              Guides
            </a>

              <a
              // set your href   href={'/community'}
                className="text-sm font-medium hover:text-white flex items-center"
              >
                Community
              </a>

          </nav>
        </div>
      </div>
    </div>`,
  },
]

export default dataComponents
