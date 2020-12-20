import pfp from '../../public/profile.jpeg'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaRegPaperPlane } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'

export default function Card() {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center max-w-xs my-8 mx-auto bg-white shadow-xl rounded-xl p-5 dark:bg-gray-900">
                <div className="">
                    <img className="w-32 mx-auto shadow-xl rounded-full" src={pfp} alt="Kaguwo's PFP" />
                </div>
                <div className="text-center mt-5">
                    <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-50">
                        Hüseyin "Kaguwo" Yalçın
                    </p>
                    <p className="text-xs sm:text-base text-gray-400 pt-2 pb-4 px-5 w-58 inline-block border-b-2">
                        Front-End Developer
                    </p>
                    <div className="flex align-center justify-center mt-4">
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 dark:text-gray-200 dark:hover:bg-gray-500" href="https://github.com/kaguwomin">
                            <FaGithub />
                            <span className="sr-only">Github</span>
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://twitter.com/kaguwomin">
                            <FaTwitter />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-indigo-500 hover:bg-indigo-500 rounded-full hover:text-white transition-colors duration-300" href="https://kaguwo.com/discord">
                            <FaDiscord />
                            <span className="sr-only">Discord</span>
                        </a>
                        <a className="text-xl mt-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="mailto:business@kaguwo.com">
                            <FaRegPaperPlane />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* Old Card Design - You can use it, I mean if you want to.
    <div className="p-24">
            <div className="shadow-2xl rounded-lg">
                <div>
                    <img src={banner} alt="Kaguwo's Logo Artboard" className="h-64 bg-gray-900 bg-cover bg-center rounded-t-lg flex items-center justify-center" />
                </div>
                <div className="bg-gradient-to-br from-blue-400 via-pink-500 to-indigo-600 rounded-b-lg px-24 dark:bg-gradient-to-bl from-red-400 via-pink-500 to-blue-600 rounded-b-lg px-24">
                    <div className="relative">
                        <img className="shadow-xl left-0 w-64 h-64 rounded-full ml-8 -mt-40 absolute" src={pfp} alt="Kaguwo's PFP" />
                    </div>
                    <div className="pt-28 pb-16">
                        <h1 className="text-2xl font-bold text-black w-auto inline-block border-b-2 dark:text-white">Kaguwo - Front-end Developer</h1>
                        <p className="ml-20 text-sm md:text-base pt-1 text-white hover:text-gray-400 dark:text-black">From <Link href="https://kaguwo.com">Kaguwo's Network.</Link></p>

                        <h1 className="mt-12 pb-1 text-3xl font-bold text-gray-900 w-auto inline-block border-b-4 border-gray-200 dark:text-white border-black"><code>Description:</code></h1>
                        <p className="mt-3 text-white dark:text-black">Hey yo! Kaguwo here. 18 year old front-end developer, beatboxer, googler, criticizer, game director and a good friend.</p>

                        <div className="flex justify-around mt-16 mx-12">
                        </div>
                    </div>
                </div>
            </div>
        </div>
*/
