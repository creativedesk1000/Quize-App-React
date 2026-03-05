import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, Send, Phone, MapPin, Clock } from 'lucide-react'
import SectionHeading from './SectionHeading'

const testimonials = [
    {
        name: "James Anderson",
        role: "Professional Breeder",
        content: "The breeding pairs I purchased from Rabbit Hub are of exceptional quality. Their genetics are top-notch and the health of the rabbits is evident. Best investment for my farm.",
        stars: 5,
        avatar: "https://i.pravatar.cc/150?u=james"
    },
    {
        name: "Sarah Jenkins",
        role: "Pet Owner",
        content: "I wanted a healthy, well-socialized pet rabbit, and Rabbit Hub delivered. The care guides they provided were incredibly helpful for a first-time owner. Highly recommended!",
        stars: 5,
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "Michael Chen",
        role: "Commercial Farmer",
        content: "Rabbit Hub's New Zealand Whites have significantly improved our farm's productivity. Their professional approach and ethical standards are truly premium.",
        stars: 5,
        avatar: "https://i.pravatar.cc/150?u=michael"
    }
]

const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0)

    return (
        <section className="py-24 bg-sand-50 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-12 inline-block p-4 bg-primary/10 text-primary rounded-full">
                    <Quote size={40} />
                </div>

                <div className="relative h-80 flex items-center justify-center">
                    <AnimatePresence mode='wait'>
                        <Motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <div className="flex mb-6">
                                {[...Array(testimonials[current].stars)].map((_, i) => (
                                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-xl md:text-2xl font-serif italic text-primary-dark mb-8 leading-relaxed">
                                "{testimonials[current].content}"
                            </p>
                            <div className="flex items-center space-x-4">
                                <img src={testimonials[current].avatar} className="w-12 h-12 rounded-full border-2 border-primary" alt={testimonials[current].name} />
                                <div className="text-left">
                                    <h4 className="font-bold text-primary-dark">{testimonials[current].name}</h4>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest">{testimonials[current].role}</p>
                                </div>
                            </div>
                        </Motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center space-x-3 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${current === i ? 'bg-primary w-8' : 'bg-sand-200'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <Motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading
                            title="Order Premium Rabbits Today"
                            subtitle="Get in Touch"
                            centered={false}
                            className="mb-10"
                        />
                        <p className="text-gray-600 mb-12 leading-relaxed">
                            Whether you are starting a new farm or looking for a premium pet, our experts are here to help. Contact us via WhatsApp or fill out the form for a custom inquiry.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-sand-50 rounded-lg text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-dark">WhatsApp & Call</h4>
                                    <p className="text-sm text-gray-500">03170479205</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-sand-50 rounded-lg text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-dark">Our Location</h4>
                                    <p className="text-sm text-gray-500">Wah Cantt, Pakistan</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-sand-50 rounded-lg text-primary">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-dark">Working Hours</h4>
                                    <p className="text-sm text-gray-500">Mon - Sat: 8:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a
                                href="https://wa.me/923170479205"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all inline-flex items-center space-x-3 group"
                            >
                                <Phone size={24} />
                                <span>Contact via WhatsApp</span>
                            </a>
                        </div>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-sand-50 p-10 rounded-3xl border border-sand-100 shadow-xl"
                    >
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary-dark uppercase tracking-widest ml-1">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-white border border-sand-200 rounded-xl focus:outline-none focus:border-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary-dark uppercase tracking-widest ml-1">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-white border border-sand-200 rounded-xl focus:outline-none focus:border-primary transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary-dark uppercase tracking-widest ml-1">Interested Breed</label>
                                <select className="w-full px-5 py-4 bg-white border border-sand-200 rounded-xl focus:outline-none focus:border-primary transition-colors">
                                    <option>Select a breed...</option>
                                    <option>Chinchilla</option>
                                    <option>New Zealand White</option>
                                    <option>Flemish Giant</option>
                                    <option>Californian</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary-dark uppercase tracking-widest ml-1">Message</label>
                                <textarea rows="4" placeholder="How can we help you today?" className="w-full px-5 py-4 bg-white border border-sand-200 rounded-xl focus:outline-none focus:border-primary transition-colors"></textarea>
                            </div>
                            <button type="button" className="w-full btn-primary py-4 flex items-center justify-center space-x-2">
                                <span>Send Inquiry</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </Motion.div>
                </div>
            </div>
        </section>
    )
}

export { TestimonialsSection, ContactSection }
