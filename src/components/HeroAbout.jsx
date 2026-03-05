import { motion as Motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Heart, Award } from 'lucide-react'
import heroImg from '../assets/images/fav.jpeg'
import aboutImg1 from '../assets/images/b1.jpeg'
import aboutImg2 from '../assets/images/n1.jpeg'

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-sand-50">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-sand-100/50 -skew-x-12 transform translate-x-20 z-0 hidden lg:block" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <Motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-xs tracking-widest uppercase rounded-full mb-6"
                        >
                            Excellence in Rabbit Breeding
                        </Motion.span>
                        <h1 className="text-5xl md:text-7xl font-serif text-primary-dark leading-[1.1] mb-8">
                            Premium Breeding <br />
                            <span className="italic text-primary">Rabbits</span> Raised <br />
                            with Care.
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                            Discover the finest pedigree rabbits for breeding and pets. Our ethical farm practices ensure healthy, happy, and high-quality livestock.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#sale" className="btn-primary group flex items-center justify-center">
                                View Rabbits <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </a>
                            <a href="#contact" className="btn-secondary flex items-center justify-center">
                                Contact Farm
                            </a>
                        </div>

                        <div className="mt-12 flex items-center space-x-8 text-primary/60">
                            <div className="flex items-center space-x-2">
                                <ShieldCheck size={20} />
                                <span className="text-xs font-semibold uppercase tracking-wider">Certified Farm</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Award size={20} />
                                <span className="text-xs font-semibold uppercase tracking-wider">Top Breed Quality</span>
                            </div>
                        </div>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={heroImg}
                                alt="Premium Rabbit identity"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full -z-10 blur-2xl opacity-60" />
                        <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-3xl" />

                        <Motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl hidden md:block"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Heart size={24} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Healthy Rabbits</p>
                                    <p className="text-primary-dark font-serif font-bold text-lg leading-tight">100% Pedigree</p>
                                </div>
                            </div>
                        </Motion.div>
                    </Motion.div>
                </div>
            </div>
        </section>
    )
}

const About = () => {
    const stats = [
        { label: 'Rabbits Raised', value: '500+', icon: <Heart size={24} /> },
        { label: 'Premium Breeds', value: '10+', icon: <Award size={24} /> },
        { label: 'Happy Customers', value: '250+', icon: <ShieldCheck size={24} /> },
    ]

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <Motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="pt-12"
                            >
                                <img
                                    src={aboutImg1}
                                    alt="Farm environment"
                                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                                />
                            </Motion.div>
                            <Motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={aboutImg2}
                                    alt="Rabbit care"
                                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                                />
                            </Motion.div>
                        </div>

                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sand-200 rounded-full -z-10 opacity-30 blur-xl" />
                    </div>

                    <div>
                        <span className="text-primary font-medium tracking-widest text-xs uppercase mb-3 block">Our Heritage</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary-dark mb-6 leading-tight">
                            Raising Rabbits with <br />Passion and Ethics.
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            At Rabbit Hub, we believe that premium quality starts with ethical treatment and expert care. With years of experience in breeding, we've developed a sanctuary where rabbits thrive and genetics are preserved for the next generation of farmers.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
                            {stats.map((stat, idx) => (
                                <Motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-center p-6 rounded-xl bg-sand-50 border border-sand-100"
                                >
                                    <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-primary-dark">{stat.value}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">{stat.label}</div>
                                </Motion.div>
                            ))}
                        </div>

                        <button className="btn-secondary">Learn More Our Story</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Hero, About }
