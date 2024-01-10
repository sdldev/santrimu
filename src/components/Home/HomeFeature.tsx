import { motion, AnimatePresence } from 'framer-motion'

const HomeFeature = () => {
    return (
        <AnimatePresence>
            <section id="feature" className="container py-8">
                <div
                    className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Fitur
                    </motion.h2>
                </div>
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                        className="mx-auto grid items-center text-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
                    >
                        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                            <div className="flex h-[180px] flex-col rounded-md p-5 items-center text-center">
                                <svg
                                    viewBox="0 0 63 79"
                                    className="h-14 w-12 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19.4924 65.9282C15.6165 62.432 14.4851 55.0859 16.0999 49.7638C18.8998 53.1193 22.7793 54.1822 26.7977 54.7822C33.0013 55.7081 39.0937 55.3618 44.8565 52.5637C45.5158 52.2434 46.125 51.8174 46.8454 51.386C47.3861 52.9341 47.5268 54.497 47.338 56.0877C46.8787 59.9617 44.9251 62.9542 41.8177 65.2227C40.5752 66.13 39.2604 66.9411 37.9771 67.7967C34.0346 70.4262 32.9679 73.5095 34.4494 77.9946C34.4846 78.1038 34.5161 78.2131 34.5957 78.4797C32.5828 77.5909 31.1124 76.2965 29.9921 74.5946C28.8088 72.7984 28.2458 70.8114 28.2162 68.6615C28.2014 67.6152 28.2014 66.5597 28.0588 65.5282C27.7107 63.0135 26.5144 61.8876 24.2608 61.8227C21.9479 61.7561 20.1183 63.1672 19.6331 65.3893C19.5961 65.5597 19.5424 65.7282 19.4887 65.9263L19.4924 65.9282Z"
                                    ></path>
                                    <path
                                        d="M0 51.3932C0 51.3932 10.5979 46.2433 21.2254 46.2433L29.2382 21.5069C29.5381 20.3106 30.4141 19.4977 31.4029 19.4977C32.3918 19.4977 33.2677 20.3106 33.5677 21.5069L41.5804 46.2433C54.1672 46.2433 62.8058 51.3932 62.8058 51.3932C62.8058 51.3932 44.8044 2.47586 44.7692 2.37772C44.2526 0.931458 43.3804 0 42.2045 0H20.6032C19.4273 0 18.5903 0.931458 18.0384 2.37772C17.9995 2.47401 0 51.3932 0 51.3932Z"
                                    ></path>
                                </svg>

                                <div className="space-y-2">
                                    <h3 className="font-bold">Jaringan</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Aplikasi untuk memantau jaringan lokal dan internet di lingkungan
                                        pondok
                                    </p>
                                    <p className="text-sm text-lime-600">on-progress</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                            <div className="flex h-[180px] flex-col items-center rounded-md p-5">
                                <svg viewBox="0 0 24 24" className="size-12 fill-current">
                                    <path
                                        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                                    ></path>
                                </svg>
                                <div className="space-y-2">
                                    <h3 className="font-bold">Uang Saku</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Manajemen dan informasi uang saku harian untuk santri
                                    </p>
                                    <p className="text-sm text-blue-600">on-going</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                            <div className="flex h-[180px] flex-col items-center rounded-md p-5">
                                <svg viewBox="0 0 24 24" className="size-12 fill-current">
                                    <path
                                        d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z"
                                    ></path>
                                </svg>
                                <div className="space-y-2">
                                    <h3 className="font-bold">Setoran Hapalan</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Informasi setoran hapalan santri
                                    </p>
                                    <p className="text-sm text-red-600">under-development</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                            <div className="flex h-[180px] flex-col items-center rounded-md p-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    className="size-12"
                                ><rect width="256" height="256" fill="none"></rect><line
                                    x1="208"
                                    y1="128"
                                    x2="128"
                                    y2="208"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"></line><line
                                        x1="192"
                                        y1="40"
                                        x2="40"
                                        y2="192"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="16"></line></svg
                                >
                                <div className="space-y-2">
                                    <h3 className="font-bold">Monitor Santri</h3>
                                    <p className="text-sm text-muted-foreground mt-3">
                                        Informasi aktifitas dan capaian santri
                                    </p>
                                    <p className="text-sm text-red-600">under-plan</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                            <div className="flex h-[180px] flex-col items-center rounded-md p-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    className="size-12"
                                ><rect width="256" height="256" fill="none"></rect><line
                                    x1="208"
                                    y1="128"
                                    x2="128"
                                    y2="208"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"></line><line
                                        x1="192"
                                        y1="40"
                                        x2="40"
                                        y2="192"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="16"></line></svg
                                >
                                <div className="space-y-2">
                                    <h3 className="font-bold">Santri Berbagi</h3>
                                    <p className="text-sm text-muted-foreground mt-3">
                                        lorem ipsum lorem ipsum dolor sit amet consectetur adipiscing elit
                                        sed diam
                                    </p>
                                    <p className="text-sm text-red-600">under-plan</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                            <div className="flex h-[180px] flex-col items-center rounded-md p-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    className="size-12"
                                ><rect width="256" height="256" fill="none"></rect><line
                                    x1="208"
                                    y1="128"
                                    x2="128"
                                    y2="208"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"></line><line
                                        x1="192"
                                        y1="40"
                                        x2="40"
                                        y2="192"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="16"></line></svg
                                >
                                <div className="space-y-2">
                                    <h3 className="font-bold">Sillaturahmi</h3>
                                    <p className="text-sm text-muted-foreground mt-3">
                                        lorem ipsum lorem ipsum dolor sit amet consectetur adipiscing elit
                                        sed diam
                                    </p>
                                    <p className="text-sm text-red-600">under-plan</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className="mx-auto text-center md:max-w-[58rem]">
                    <p
                        className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 balance-text"
                    >
                        Beberapa fitur sudah masuk dalam tahap beta testing. Untuk fitur lain akan
                        disesuaikan dengan roadmap <b>Santri-MU</b>
                    </p>
                </div>
            </section>
        </AnimatePresence>
    );
};
export default HomeFeature;
