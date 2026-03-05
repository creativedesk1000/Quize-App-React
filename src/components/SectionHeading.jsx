import { motion as Motion } from 'framer-motion'
import { cn } from '../lib/utils'

const SectionHeading = ({ title, subtitle, centered = true, className }) => {
    return (
        <div className={cn("mb-16", centered && "text-center", className)}>
            <Motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-primary font-medium tracking-widest text-xs uppercase mb-3 block"
            >
                {subtitle}
            </Motion.span>
            <Motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-serif text-primary-dark"
            >
                {title}
            </Motion.h2>
            <Motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '60px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={cn("h-1 bg-primary mt-6", centered && "mx-auto")}
            />
        </div>
    )
}

export default SectionHeading
